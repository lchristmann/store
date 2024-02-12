import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export default function CheckoutFailure() {
  return (
    <>
      <Header />
      <main className="pb-48 pt-40">
        <div className="mx-auto max-w-7xl px-8">

          <p className="text-base font-semibold leading-8 text-indigo-600">422</p>
          <h1 className="mt-4 font-bold tracking-tight text-gray-900 text-5xl">
            Invalid checkout
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            It looks like you tried to manipulate the total price of your products. If this is not true, please contact our Customer Support.
          </p>
          <div className="mt-10">
            <Link href="/checkout" className="text-sm font-semibold leading-7 text-indigo-600">&larr; Back to checkout</Link>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}