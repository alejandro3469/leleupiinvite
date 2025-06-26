"use client";

import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Banner.module.css';
import { useEffect } from 'react';
import Link from 'next/link';
import { protocol, rootDomain } from '@/lib/utils';
import { SubdomainData } from '@/lib/subdomains';

import localFont from 'next/font/local';


interface SubdomainClientPageProps {
    subdomain: string;
    subdomainData: SubdomainData;
}

export default function SubdomainClientPage({
                                                subdomain,
                                                subdomainData
                                            }: SubdomainClientPageProps) {

    useEffect(() => {
        const handleScroll = () => {
            const bannerImage = document.querySelector(`.${styles.bannerImage}`) as HTMLElement;
            const scrollPosition = window.scrollY;
            bannerImage.style.transform = `translateY(${scrollPosition * 0.3}px) scale(${1 + scrollPosition * 0.0005})`;
            bannerImage.style.filter = `blur(${scrollPosition * 0.01}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const sendWhatsAppMessage = (phoneNumber: string) => () : void => {
        const message = `Hola ${subdomainData.groomName} y ${subdomainData.brideName},\n\nQuiero confirmar mi asistencia a tu boda el 03 de mayo de 2025. Estoy muy emocionado/a de compartir este momento tan especial con ustedes. 💍💖\n\n¡Nos vemos pronto! 🎉\n\nSaludos cordiales, 😊`;
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Keep the root domain link */}
            <div className="absolute top-4 right-4 z-50">
                <Link
                    href={`${protocol}://${rootDomain}`}
                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                    {rootDomain}
                </Link>
            </div>

            {/* Banner section */}
            <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src="/invitations-files/Cristian&Vanessa/IMG_0498.jpeg"
                            alt="Banner Image"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Initials section */}
            <section className={`${styles.initialsSectionContainer}`}>
                <section className={`${styles.initialsContainer}`}>
                    <div className={`${styles.initialsLetters}`}>
                        <div className={styles.initials}>
                            <span className={styles.letter}>{subdomainData.groomName.charAt(0)}</span>
                            <span className={styles.ampersand}>&</span>
                            <span className={styles.letter}>{subdomainData.brideName.charAt(0)}</span>
                        </div>
                    </div>
                </section>
                <div className={`${styles.quoteText}`}>
                    <p className={styles.accent}>
                        {
                            "\"En un mundo lleno de momentos fugaces, " +
                            "hemos encontrado un amor que perdura\""
                        }
                    </p>
                    <p className={styles.secondary}>
                        {
                            "Queremos compartir con ustedes este momento tan especial " +
                            "y celebrar juntos la unión de nuestras vidas"
                        }
                    </p>
                </div>
            </section>

            {/* You can add more sections here that use the subdomainData */}
            <div className="text-center py-8">
                <h2 className="text-2xl font-bold">
                    {subdomainData.groomName} & {subdomainData.brideName}
                </h2>
                <p className="mt-2">Welcome to {subdomain}.{rootDomain}</p>
            </div>
        </div>
    );
}