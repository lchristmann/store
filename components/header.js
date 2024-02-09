import Link from "next/link";
import { getServerSession } from "next-auth";
import { options } from "@/app/api/auth/[...nextauth]/options";

export default async function Header() {
  const session = await getServerSession(options);

  return (
    <header>
      <nav className="mx-auto max-w-7xl px-8 flex h-16 items-center">

        <Link href="/">
          <svg viewBox="0 0 47 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-auto">
            <path fill="#4f46e5" d="M23.5 6.5c-6 0-9.75 3-11.25 9 2.25-3 4.875-4.125 7.875-3.375 1.712.428 2.935 1.67 4.29 3.044C26.62 17.41 29.172 20 34.75 20c6 0 9.75-3 11.25-9-2.25 3-4.875 4.125-7.875 3.375-1.712-.428-2.935-1.67-4.29-3.044C31.63 9.09 29.078 6.5 23.5 6.5zM12.25 20c-6 0-9.75 3-11.25 9 2.25-3 4.875-4.125 7.875-3.375 1.712.428 2.935 1.67 4.29 3.044C15.37 30.91 17.922 33.5 23.5 33.5c6 0 9.75-3 11.25-9-2.25 3-4.875 4.125-7.875 3.375-1.712-.428-2.935-1.67-4.29-3.044C20.38 22.59 17.828 20 12.25 20z"/>
          </svg>
        </Link>

        <div className="flex h-full ml-8 space-x-8">
          <Link href="/products" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">Products</Link>
          <Link href="/about" className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">About</Link>
        </div>

        <div className="ml-auto flex items-center">
          {session ? (<Link href="/api/auth/signout?callbackUrl=/" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign out</Link>) :
           (<Link href="/api/auth/signin" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</Link>)}

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