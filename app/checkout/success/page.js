import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export default function CheckoutSuccess() {
    return (
        <>
          <Header />
          <main className="pb-48 pt-40">
            <div className="mx-auto max-w-7xl px-8">
    
              <p className="text-base font-semibold leading-8 text-indigo-600">200</p>
              <h1 className="mt-4 font-bold tracking-tight text-gray-900 text-5xl">
                Checkout successful
              </h1>
              <p className="mt-6 text-base leading-7 text-gray-600 text-balance">
                Congratulations on your purchase! Your order has been successfully placed. Your items will be carefully prepared and shipped to you soon, according to the delivery method you&apos;ve chosen. Thank you for shopping with us!
              </p>
              <div className="mt-10">
                <Link href="/products" className="text-sm font-semibold leading-7 text-indigo-600">Continue Shopping &rarr;</Link>
              </div>
              
            </div>
          </main>
          <Footer />
        </>
      );
}