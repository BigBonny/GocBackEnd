# Role-Based Authentication System

A Vite + React application with role-based access control using Clerk, Stripe, and Supabase.

## Features

- 🔐 Authentication with Clerk
- 💳 Payment processing with Stripe
- 🗄️ Database with Supabase
- 🎭 Role-based access control (Auditeur, Apprenti, Frère-Sœur)
- ⚡ Built with Vite + React + TypeScript

## Local Development

1. Install dependencies:
```bash
   pnpm install
```

2. Set up environment variables (see .env.example)

3. Run development servers:
```bash
   # Terminal 1 - Client
   cd client && pnpm dev
   
   # Terminal 2 - Server
   cd server && pnpm dev
   
   # Terminal 3 - Stripe webhooks
   stripe listen --forward-to localhost:3000/webhook
```

## Deployment

See DEPLOYMENT.md for production deployment instructions.