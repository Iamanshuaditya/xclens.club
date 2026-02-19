import React from 'react';
import VendingHero from '@/components/sections/vending-hero';
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-instrument-serif",
});

export default function VendingPage() {
    return (
        <main className={`min-h-screen bg-[#E8E6E1] ${instrumentSerif.variable}`}>
            <VendingHero />
        </main>
    );
}
