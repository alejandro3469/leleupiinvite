import { StaticWeddingData } from '@/types/static-wedding';
import weddingData from '@/data/josias-maelis.json';

export async function loadStaticWeddingData(): Promise<StaticWeddingData> {
  try {
    const response = await fetch('/data/josias-maelis.json');
    if (!response.ok) {
      throw new Error('Failed to load static wedding data');
    }
    const data = await response.json();
    return validateStaticData(data);
  } catch (error) {
    console.error('Error loading static wedding data:', error);
    throw error;
  }
}

export function validateStaticData(data: any): StaticWeddingData {
  const requiredFields = [
    'groomName', 'brideName', 'BannerQuote', 'BannerComlement',
    'BannerImage', 'SecondImage', 'ThirdImage', 'FourthImage',
    'WeddingDate', 'Location', 'Address', 'PartySchedule', 'PartyUrl',
    'MainColor', 'QuoteTextColor', 'AccentColor', 'DressCodeDescription',
    'DressCodeAvoidColors', 'GroomPhone', 'BridePhone', 'InfoMessage', 'emoji'
  ];

  for (const field of requiredFields) {
    if (!data[field]) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  return data as StaticWeddingData;
}

export function getStaticWeddingData(): StaticWeddingData {
  // Importa directamente desde el archivo JSON para evitar duplicación
  return validateStaticData(weddingData);
}
