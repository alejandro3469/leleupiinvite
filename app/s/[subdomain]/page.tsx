// app/[subdomain]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSubdomainData } from '@/lib/subdomains';
import { rootDomain } from '@/lib/utils';
import SubdomainClientPage from '@/components/templates/template1/SubdomainClientPage';

export async function generateMetadata({
                                           params,
                                       }: {
    params: { subdomain: string };
}): Promise<Metadata> {
    const { subdomain } = params;
    const subdomainData = await getSubdomainData(subdomain);

    if (!subdomainData) {
        return {
            title: rootDomain,
        };
    }

    return {
        title: `${subdomain}.${rootDomain}`,
        description: `Subdomain page for ${subdomain}.${rootDomain}`,
    };
}

export default async function Page({
                                       params,
                                   }: {
    params: { subdomain: string };
}) {
    const { subdomain } = params;
    const subdomainData = await getSubdomainData(subdomain);

    if (!subdomainData) {
        notFound();
    }

    return (
        <SubdomainClientPage
            subdomain={subdomain}
            subdomainData={subdomainData}
        />
    );
}