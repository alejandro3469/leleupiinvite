import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSubdomainData } from '@/lib/subdomains';
import SubdomainClientPage from '@/components/templates/template1/SubdomainClientPage';
import { protocol, rootDomain } from '@/lib/utils';

export async function generateMetadata({
                                           params
                                       }: {
    params: Promise<{ subdomain: string }>;
}): Promise<Metadata> {
    const { subdomain } = await params;
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

export default async function SubdomainPage({
                                                params
                                            }: {
    params: Promise<{ subdomain: string }>;
}) {
    const { subdomain } = await params;
    const subdomainData = await getSubdomainData(subdomain);

    if (!subdomainData) {
        notFound();
    }

    return (
        <SubdomainClientPage
            subdomainData={subdomainData}
        />
    );
}