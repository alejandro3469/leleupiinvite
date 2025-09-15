"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import styles from '@/styles/StaticWedding.module.css';

const StaticCarousel = () => {
    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
    );

    return (
        <Carousel
            plugins={[plugin.current]}
            className="w-full max-w-xs"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
        >
            <CarouselContent>
                <CarouselItem>
                    <div className="p-1">
                        <Card className="bg-transparent shadow-none">
                            <CardContent className="flex flex-col aspect-[4/3] p-4 justify-center items-center">
                                <div className="space-y-3 text-center" style={{"color": "#1b437c"}}>
                                    <h3 className={`text-lg font-medium ${styles.normal}`}>Josias & Maelis</h3>
                                    <p className={`text-lg ${styles.normal}`}>Banco Azteca</p>
                                    <p className={`text- ${styles.normal}`}>4027665875627391</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>

                <CarouselItem>
                    <div className="p-1">
                        <Card className="bg-transparent shadow-none">
                            <CardContent className="flex aspect-[4/3] items-center justify-center p-4">
                                <span className={`text-lg text-center font-medium ${styles.normal}`} style={{"color": "#1b437c"}}>
                                    Regalo físico el dia de la boda
                                </span>
                            </CardContent>
                        </Card>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
};

export default StaticCarousel;
