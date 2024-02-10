"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react"
import cookie from "js-cookie";

export default function CheckoutButton({ items }) {
    const router = useRouter();
    
    const { data: session } = useSession();
    
    function handleClick() {
        // require the user to be logged in
        if (!session) router.push("/api/auth/signin?callbackUrl=/cart");
        
        // save his cart items + personal data in session cookie
        cookie.remove('checkout');
        cookie.set('checkout', JSON.stringify({ items, user: session.user }));

        router.push("/checkout");
    }

    return (
        <button className="mt-10 w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
            onClick={handleClick}>Checkout
        </button>
    );
}
