import { useState } from 'react';
import { useUser } from '@clerk/clerk-react';

export type DonationType = 'sympathie' | 'soutien' | 'charite';
export type DonationFrequency = 'monthly' | 'quarterly' | 'annual';

interface DonationOptions {
  amount: number;
  name?: string;
  message?: string;
  isRecurring?: boolean;
  frequency?: DonationFrequency;
  anonymous?: boolean;
  allowMention?: boolean;
}

interface DonationRequest {
  donationType: DonationType;
  amount: number;
  userId?: string;
  email: string;
  name?: string;
  message?: string;
  isRecurring?: boolean;
  frequency?: DonationFrequency;
  anonymous?: boolean;
  allowMention?: boolean;
}

export function useDonation() {
  const { user } = useUser();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createDonation = async (
    donationType: DonationType,
    options: DonationOptions
  ) => {
    if (!user?.primaryEmailAddress?.emailAddress) {
      setError('Email address required');
      return null;
    }

    setLoading(true);
    setError(null);

    try {
      const requestBody: DonationRequest = {
        donationType,
        amount: Math.round(options.amount * 100), // Convert to cents
        userId: user.id,
        email: user.primaryEmailAddress.emailAddress,
        name: options.name,
        message: options.message,
        isRecurring: options.isRecurring || false,
        frequency: options.frequency,
        anonymous: options.anonymous || false,
        allowMention: options.allowMention || false,
      };

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/create-donation-checkout`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(requestBody),
        }
      );

      if (!response.ok) {
        const text = await response.text();
        let errorMessage = `Failed (${response.status})`;
        try {
          const parsed = JSON.parse(text);
          errorMessage = parsed.error || errorMessage;
        } catch {
          errorMessage = text || errorMessage;
        }
        throw new Error(errorMessage);
      }

      const data = await response.json();
      return data.url;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Une erreur est survenue';
      setError(errorMessage);
      console.error('Donation error:', err);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { createDonation, loading, error };
}