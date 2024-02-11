"use client";

import Footer from "@/components/footer";
import Header from "@/components/headerClient";

import dynamic from 'next/dynamic'

const Checkout = dynamic(() => import('@/components/checkout'), { ssr: false })

export default function CheckoutPage() {
    return (
        <>
            <Header />
            <main className="mx-auto max-w-2xl pt-4">
                <Checkout />
            </main>
            <Footer />
        </>
    );
}