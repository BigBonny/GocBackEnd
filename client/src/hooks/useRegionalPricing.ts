import { useState, useEffect } from 'react';
import { useUser } from '@clerk/clerk-react';
import type { UserRole } from '@/types/index';

interface RegionalPricing {
  region: 'tier1' | 'tier3';
  regionName: string;
  adhesionPaid: boolean;
  prices: {
    adhesion: number;
    cotisation: number;
    initial: number;
    renewal: number;
  };
  formation: {
    apprenti_trimestre: number;
    auditeur_cours: number;
  };
}

interface UseRegionalPricingReturn {
  pricing: RegionalPricing | null;
  loading: boolean;
  error: string | null;
}

// Fallback prices if API fails
const DEFAULT_PRICING: RegionalPricing = {
  region: 'tier1',
  regionName: 'Europe – USA – Canada – Asie – Moyen-Orient',
  adhesionPaid: false,
  prices: {
    adhesion: 50,
    cotisation: 100,
    initial: 150,
    renewal: 100,
  },
  formation: {
    apprenti_trimestre: 100,
    auditeur_cours: 20,
  },
};

export function useRegionalPricing(): UseRegionalPricingReturn {
  const { user } = useUser();
  const [pricing, setPricing] = useState<RegionalPricing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRegion() {
      try {
        const url = `${import.meta.env.VITE_API_URL}/api/region${user ? `?userId=${user.id}` : ''}`;
        console.log('🌍 Fetching regional pricing from:', url);

        const response = await fetch(url);
        console.log('✅ Response status:', response.status);

        if (!response.ok) {
          throw new Error('Failed to fetch region');
        }

        const data: RegionalPricing = await response.json();
        console.log('📦 Regional data:', data);
        setPricing(data);
      } catch (err) {
        console.error('Region detection failed, using default pricing:', err);
        setError('Could not detect region');
        setPricing(DEFAULT_PRICING);
      } finally {
        setLoading(false);
      }
    }

    fetchRegion();
  }, [user]);

  return { pricing, loading, error };
}