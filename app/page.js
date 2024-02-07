import Footer from "@/components/footer";
import Header from "@/components/header";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pb-48 pt-40">
        <div className="mx-auto max-w-7xl px-8">
          
          <div className="max-w-lg">
            <h1 className="font-bold tracking-tight text-gray-900 text-6xl">Woodruff Woodstore</h1>
            <p className="mt-4 text-xl text-gray-500 text-balance">
              Explore our collection of handcrafted furniture, artisanal wood
              utilities, and enchanting decorations, each piece a testament to
              the beauty of wood.
            </p>
            <Link href="/products" className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700 mt-10">View Products</Link>
          </div>

          <div className="pointer-events-none absolute transform left-1/2 top-1/2 -translate-y-1/2 translate-x-8">
            <div className="flex items-center space-x-8">
              <div className="overflow-hidden rounded-lg">
                <Image src="/images/hero-image-1.jpg" alt="Image of a woman wearing a jacket" width={176} height={256} priority/>
              </div>
              <div className="grid flex-shrink-0 grid-cols-1 gap-y-8">
                <div className="overflow-hidden rounded-lg">
                  <Image src="/images/hero-image-2.jpg" alt="Image of a woman wearing a jacket" width={176} height={256} priority/>
                </div>
                <div className="overflow-hidden rounded-lg">
                  <Image src="/images/hero-image-3.jpg" alt="Image of a woman wearing a jacket" width={176} height={256} priority/>
                </div>
              </div>
              <div className="overflow-hidden rounded-lg">
                <Image src="/images/hero-image-4.jpg" alt="Image of a woman wearing a jacket" width={176} height={256} priority/>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
