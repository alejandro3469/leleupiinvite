"use client";
import React from 'react';
import Image from 'next/image';
import styles from '@/styles/Banner.module.css';
import { useEffect } from 'react';
import Link from 'next/link';
import { protocol, rootDomain } from '@/lib/utils';
import { SubdomainData } from '@/lib/subdomains';

export default function SubdomainClientPage({
                                                subdomainData
                                            }: {
    subdomainData: SubdomainData;
}) {
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

    const base64Image = subdomainData.BannerImage;
    const secondImage = subdomainData.SecondImage;
    const thirdImage = subdomainData.ThirdImage;

    return (
        <div className={`flex flex-col min-h-screen ${styles.templateContainer}`}>

            {/* Banner section */}
            <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src={`data:image/jpeg;base64,${base64Image}`}
                            alt="Banner Image"
                            fill
                            priority
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Initials section */}
            <section className={`${styles.initialsSectionContainer}`}>
                <section className={`${styles.initialsContainer}`}>
                    <div className={`${styles.initialsLetters}`}>
                        <div className={styles.initials}>
                            <span className={styles.letter}>{subdomainData.groomName}</span>
                            <span className={styles.ampersand}>&</span>
                            <span className={styles.letter}>{subdomainData.brideName}</span>
                        </div>
                    </div>
                </section>
                <div className={`${styles.quoteText}`}>
                    <p className={styles.accent}>
                        "{subdomainData.BannerQuote || "En un mundo lleno de momentos fugaces, hemos encontrado un amor que perdura"}"
                    </p>
                    <p className={styles.secondary}>
                        {subdomainData.BannerComlement || "Queremos compartir con ustedes este momento tan especial y celebrar juntos la unión de nuestras vidas"}
                    </p>
                </div>
            </section>

            <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src={`data:image/jpeg;base64,${secondImage}`}
                            alt="Banner Image"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>
            <section className={`${styles.initialsSectionContainer}`}>
                <div className={`${styles.quoteText}`}>
                    <div>
                        <svg className={styles.icon} data-slot="icon" fill="none" stroke-width="1.5" stroke="#63666A" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"></path>
                        </svg>
                        <p className={`${styles.normal} ${styles.title}`}>
                            {
                                "Fecha"
                            }
                        </p>
                    </div>
                    <div>
                        <p className={styles.normal}>
                            {
                                "Los esperamos el día:"
                            }
                        </p>
                        <p className={styles.accent}>
                            {
                                subdomainData.WeddingDate
                            }
                        </p>
                    </div>
                </div>
            </section>
            <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src={`data:image/jpeg;base64,${thirdImage}`}
                            alt="Banner Image"
                            layout="fill"
                            objectFit="cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}


const link = <div className="absolute top-4 right-4 z-50">
    <Link
        href={`${protocol}://${rootDomain}`}
        className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
    >
        {rootDomain}
    </Link>
</div>