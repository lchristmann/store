import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pb-48 pt-40">
        <div className="mx-auto max-w-7xl px-8">

          <p className="text-base font-semibold leading-8 text-indigo-600">404</p>
          <h1 className="mt-4 font-bold tracking-tight text-gray-900 text-5xl">
            Checkout not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, it looks like you haven&apos;t pressed the checkout button on the Cart page yet.
          </p>
          <div className="mt-10">
            <Link href="/cart" className="text-sm font-semibold leading-7 text-indigo-600">&larr; Back to cart</Link>
          </div>
          
        </div>
      </main>
      <Footer />
    </>
  );
}
