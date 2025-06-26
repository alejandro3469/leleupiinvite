// app/[subdomain]/page.tsx
import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSubdomainData } from '@/lib/subdomains';
import { protocol, rootDomain } from '@/lib/utils';
import SubdomainClientPage from '@/components/templates/template1/SubdomainClientPage';

interface PageProps {
    params: { subdomain: string };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { subdomain } = params;
    const subdomainData = await getSubdomainData(subdomain);

    if (!subdomainData) {
        return {
            title: rootDomain
        };
    }

    return {
        title: `${subdomain}.${rootDomain}`,
        description: `Subdomain page for ${subdomain}.${rootDomain}`
    };
}

export default async function SubdomainPage({ params }: PageProps) {
    const { subdomain } = params;
    const subdomainData = await getSubdomainData(subdomain);

    if (!subdomainData) {
        notFound();
    }

    return (
        <SubdomainClientPage
            subdomain={subdomain} // Fixed: was passing hardcoded 'subdomain' string
            subdomainData={subdomainData}
        />
    );
}