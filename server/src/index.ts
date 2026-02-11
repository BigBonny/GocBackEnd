import express from 'express';
import cors from 'cors';
import { config } from './config.js';
import checkoutRouter from './routes/checkout.js';
import webhookRouter from './routes/webhook.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();


app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});


app.use(
  cors({
    origin: config.clientUrl,
    credentials: true,
  })
);

// IMPORTANT: webhook route needs raw body
app.use('/webhook', express.raw({ type: 'application/json' }));
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.use('/api', checkoutRouter);
app.use(webhookRouter);

app.use(errorHandler);

app.listen(config.port, () => {
  console.log(`🚀 Server running on port ${config.port}`);
  console.log(`📝 Environment: ${config.nodeEnv}`);
  console.log(`🌐 Client URL: ${config.clientUrl}`);
});