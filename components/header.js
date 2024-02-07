import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header>
      <nav className="mx-auto max-w-7xl px-8 flex h-16 items-center">

        <Link href="/">
          <img src="/logo.svg" alt="Woodruff Woodstore Logo" className="h-8 w-auto"/>
        </Link>

        <div className="flex h-full ml-8 space-x-8">
          <Link href="/products" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Products</Link>
          <Link href="/about" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">About</Link>
        </div>

        <div className="ml-auto flex items-center">
          <div className="flex flex-1 items-center justify-end space-x-6">
            <Link href="/api/auth/signin" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</Link>
            <span className="h-6 w-px bg-gray-200"></span>
            <Link href="/create-account" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</Link>
          </div>

          <div className="ml-6">
            <Link href="/cart" className="group -m-2 flex items-center p-2">
              <svg className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z">
                </path>
              </svg>
              <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
            </Link>
          </div>
        </div>

      </nav>
    </header>
  );
}