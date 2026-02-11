import { createClient } from '@supabase/supabase-js';
import { config } from '../config.js';
import type { Database } from '../database.types.js';

export const supabase = createClient<Database>(
  config.supabase.url,
  config.supabase.serviceRoleKey
);