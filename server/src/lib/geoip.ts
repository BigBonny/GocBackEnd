import { COUNTRY_TO_REGION, PricingRegion } from '../constants.js';

interface GeoIPResponse {
  country: string;
  countryCode: string;
  status: string;
}

export async function getRegionFromIP(ip: string): Promise<PricingRegion> {
  try {
    // Handle localhost/development
    if (
      ip === '127.0.0.1' ||
      ip === '::1' ||
      ip === '::ffff:127.0.0.1' ||
      ip.startsWith('192.168.') ||
      ip.startsWith('10.')
    ) {
      console.log('Local IP detected, defaulting to tier1');
      return 'tier1';
    }

    // Use ip-api.com (free, no API key needed, 45 req/min limit)
    const response = await fetch(`http://ip-api.com/json/${ip}?fields=status,country,countryCode`);
    
    if (!response.ok) {
      console.warn(`GeoIP API returned ${response.status}, defaulting to tier1`);
      return 'tier1';
    }

    const data = await response.json() as GeoIPResponse; // ← Fixed type assertion

    if (data.status !== 'success') {
      console.warn(`GeoIP lookup failed for IP ${ip}, defaulting to tier1`);
      return 'tier1';
    }

    const region = COUNTRY_TO_REGION[data.countryCode];

    if (!region) {
      console.warn(`Unknown country ${data.countryCode}, defaulting to tier2`);
      return 'tier2'; // Default to middle tier for unknown countries
    }

    console.log(`IP ${ip} → ${data.country} (${data.countryCode}) → ${region}`);
    return region;

  } catch (error) {
    console.error('GeoIP lookup error:', error);
    return 'tier1'; // Default to highest price on error
  }
}

export function getIPFromRequest(req: import('express').Request): string {
  // Check for proxy headers (Vercel, nginx, Cloudflare, etc.)
  const forwardedFor = req.headers['x-forwarded-for'];
  
  if (forwardedFor) {
    // x-forwarded-for can be comma-separated, take the first one
    const ips = Array.isArray(forwardedFor)
      ? forwardedFor[0]
      : forwardedFor.split(',')[0];
    return ips.trim();
  }

  // Fallback to direct connection IP
  return req.socket.remoteAddress || '127.0.0.1';
}