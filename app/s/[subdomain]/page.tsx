// app/[subdomain]/page.tsx
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getSubdomainData } from '@/lib/subdomains';
import { rootDomain } from '@/lib/utils';
import SubdomainClientPage from '@/components/templates/template1/SubdomainClientPage';

type Props = {
    params: { subdomain: string };
    searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { subdomain } = params;
    const subdomainData = await getSubdomainData(subdomain);

    return {
        title: subdomainData ? `${subdomain}.${rootDomain}` : rootDomain,
        description: subdomainData
            ? `Wedding page for ${subdomainData.groomName} & ${subdomainData.brideName}`
            : 'Wedding invitation page',
    };
}

export default async function Page({ params }: Props) {
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