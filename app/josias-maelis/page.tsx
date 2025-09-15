import type { Metadata } from 'next';
import { getStaticWeddingData } from '@/lib/static-data';
import StaticWeddingPage from '@/components/static/josias-maelis/StaticWeddingPage';

export const metadata: Metadata = {
  title: 'Josias & Maelis - Invitación de Boda',
  description: 'Invitación de boda de Josias y Maelis - 15 de Diciembre, 2024',
  openGraph: {
    title: 'Josias & Maelis - Invitación de Boda',
    description: 'Invitación de boda de Josias y Maelis - 15 de Diciembre, 2024',
    type: 'website',
  },
};

export default function JosiasMaelisPage() {
  const weddingData = getStaticWeddingData();

  return (
    <StaticWeddingPage weddingData={weddingData} />
  );
}
