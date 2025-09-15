"use client";
import Image from 'next/image';
import styles from '@/styles/StaticWedding.module.css';
import { useEffect } from 'react';
import Link from 'next/link';
import { protocol, rootDomain } from '@/lib/utils';
import { StaticWeddingData } from '@/types/static-wedding';
import StaticCarousel from './StaticCarousel';
import { RecepcionIcon, DressCodeIcon, CalendarIcon, GiftIcon } from './StaticIcons';

interface StaticWeddingPageProps {
    weddingData: StaticWeddingData;
}

export default function StaticWeddingPage({ weddingData }: StaticWeddingPageProps) {
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
        const message = `Hola ${weddingData.groomName} y ${weddingData.brideName},\n\nQuiero confirmar mi asistencia a tu boda el ${weddingData.WeddingDate}. Estoy muy emocionado/a de compartir este momento tan especial con ustedes. 💍💖\n\n¡Nos vemos pronto! 🎉\n\nSaludos cordiales, 😊`;
        const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };


    return (
        <div className={`flex flex-col min-h-screen ${styles.templateContainer}`}>

            {/* Banner section */}
            <div className={styles.bannerContainer}>
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src={weddingData.BannerImage}
                            alt="Banner Image"
                            fill
                            priority
                            className="object-cover"
                            style={{ objectPosition: 'center top' }}
                        />
                    </div>
                </div>
            </div>

            {/* Initials section */}
            <section className={`${styles.initialsSectionContainer}`} style={{"backgroundColor" : weddingData.MainColor}}>
                <section className={`${styles.initialsContainer}`}>
                    <div className={`${styles.initialsLetters}`}>
                        <div className={styles.initials} style={{"color": weddingData.AccentColor}}>
                            <span className={styles.letter}>{weddingData.groomName}</span>
                            <span className={styles.ampersand}>&</span>
                            <span className={styles.letter}>{weddingData.brideName}</span>
                        </div>
                    </div>
                </section>
                <div className={`${styles.quoteText}`} style={{"color" : weddingData.QuoteTextColor}}>
                    <p className={`${styles.accent} ${styles.cita}`}>
                        "{weddingData.BannerQuote || ""}"
                    </p>
                    <p className={styles.secondary}>
                        {weddingData.BannerComlement || ""}
                    </p>
                </div>
            </section>

            <div className={styles.bannerContainer2}>
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src={weddingData.SecondImage}
                            alt="Second Image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
            <section className={`${styles.initialsSectionContainer}`} style={{"backgroundColor" : weddingData.MainColor}}>
                <div className={`${styles.quoteText}`} style={{"color" : weddingData.QuoteTextColor}}>
                    <div>
                        <CalendarIcon />
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
                                weddingData.WeddingDate
                            }
                        </p>
                    </div>
                </div>
            </section>
            <div className={styles.bannerContainer2}>
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src={weddingData.ThirdImage}
                            alt="Third Image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
            <section className={`${styles.initialsSectionContainer}`}  style={{"backgroundColor" : weddingData.MainColor}}>
                <div className={`${styles.quoteText}`} style={{"color" : weddingData.QuoteTextColor}}>
                    <div className={styles.subcontainer}>
                        <RecepcionIcon />
                        <p className={`${styles.normal} ${styles.title}`}>
                            {
                                "RECEPCIÓN"
                            }
                        </p>
                    </div>
                    <div>
                        <p className={styles.accent}>
                            {
                                weddingData.Location
                            }
                        </p>
                        <p className={`${styles.normal}`}>
                            {
                                weddingData.Address
                            }
                        </p>
                        <b className={styles.normal}>
                            {
                                weddingData.PartySchedule
                            }
                        </b>
                    </div>
                    <a href={weddingData.PartyUrl} className={`${styles.normal} ${styles.button}`}>
                        {
                            "Ubicación"
                        }
                    </a>

                </div>
            </section>

            <div className={styles.bannerContainer2}>
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src={weddingData.FourthImage}
                            alt="Fourth Image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
            <section className={`${styles.initialsSectionContainer}`}  style={{"backgroundColor" : weddingData.MainColor}}>
                <div className={`${styles.quoteText}`} style={{"color" : weddingData.QuoteTextColor}}>
                    <div className={styles.subcontainer}>
                        <DressCodeIcon />
                        <p className={`${styles.normal} ${styles.title}`}>
                            {
                                "Código de vestimenta"
                            }
                        </p>
                    </div>
                    <p className={`${styles.normal}`}>
                        {(weddingData.groomName == "Enrique") &&
                            <div>
                                <div>Colores similares a</div>
                                <div className={styles.container}>
                                    <div className={styles.container}>
                                        <div
                                            className={`${styles.child}`}
                                            style={{ backgroundColor: "#6E85B7" }}
                                        />
                                        <div
                                            className={`${styles.child}`}
                                            style={{ backgroundColor: "#B2C8DF" }}
                                        />
                                        <div
                                            className={`${styles.child}`}
                                            style={{ backgroundColor: "#99FEFF" }}
                                        />
                                        <div
                                            className={`${styles.child}`}
                                            style={{ backgroundColor: "#87AAAA" }}
                                        />
                                        <div
                                            className={`${styles.child}`}
                                            style={{ backgroundColor: "#748DA6" }}
                                        />
                                        <div
                                            className={`${styles.child}`}
                                            style={{ backgroundColor: "#96C7C1" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        }
                    </p>
                    <div className={styles.subcontainer}>
                        <p className={styles.accent}>
                            {
                                weddingData.DressCodeDescription
                            }
                        </p>
                        <div>
                            <p className={styles.normal}>
                                {
                                    "Hagamos que todo luzca como siempre lo soñamos. Por favor evita el siguiente color"
                                }
                            </p>
                            <div className={styles.container}>
                                <div className={styles.container}>
                                    {weddingData.DressCodeAvoidColors?.split(';')
                                        .filter(color => color)
                                        .map((color, index) => (
                                            <div
                                                key={index}
                                                className={`${styles.child}`}
                                                style={{ backgroundColor: color }}
                                            />
                                        ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className={styles.bannerContainer2}>
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src={weddingData.FifthImage}
                            alt="Fifth Image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            <section className={`${styles.initialsSectionContainer}`}  style={{"backgroundColor" : weddingData.MainColor}}>

                <div className={`${styles.quoteText}`} style={{"color" : weddingData.QuoteTextColor}}>
                    <div>
                        <GiftIcon />
                        <p className={`${styles.normal} ${styles.title}`}>
                            {
                                "Regalos"
                            }
                        </p>
                    </div>
                    <div>
                        <p className={styles.accent}>
                            {
                                "Su presencia es nuestro mayor regalo"
                            }
                        </p>
                        <p className={styles.normal}>
                            {
                                "Si desean honrarnos con un detalle, agradeceremos con cariño una contribución monetaria para nuestro nuevo hogar."
                            }
                        </p>
                    </div>

                </div>
            </section>

            <div className={styles.bannerContainer3}>
                <div className={styles.banner}>
                    <div className={styles.bannerImage}>
                        <Image
                            src={weddingData.SixthImage}
                            alt="Sixth Image"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>

            <section className={`${styles.initialsSectionContainer}`}  style={{"backgroundColor" : weddingData.MainColor}}>
                <div className={`${styles.quoteText}`} style={{"color" : weddingData.QuoteTextColor}}>
                    <p className={`${styles.normal} ${styles.title}`}>
                        {
                            "¿Contamos contigo?"
                        }
                    </p>
                    <b className={styles.normal}>
                        {
                            weddingData.InfoMessage
                        }
                    </b>
                    <p className={styles.normal}>
                        {
                            "Por favor confirma tu asistencia por WhatsApp"
                        }
                    </p>
                    <div className={styles.subcontainer}>
                        <div onClick={sendWhatsAppMessage(weddingData.GroomPhone)} className={`${styles.normal} ${styles.button}`}>
                            {
                                `Confirmar a ${weddingData.groomName}`
                            }
                        </div>
                    </div>

                </div>
            </section>

            <section className={`${styles.initialsSectionContainer}`}  style={{"backgroundColor" : weddingData.MainColor}}>
                <div className={`${styles.quoteText}`} style={{"color" : weddingData.QuoteTextColor}}>
                    <p className={styles.accent}>
                        {
                            "¡Te esperamos!"
                        }
                    </p>
                </div>
            </section>
        </div>
    );
}
