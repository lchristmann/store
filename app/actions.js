'use server';

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function checkout(items, data) {
    console.log(items);
    console.log(data);
    console.log("Checkout successful.");

    cookies().delete('cart');
    cookies().delete('checkout')

    redirect('/');

    // verify that the total price is right - if not redirect to a failure page
    // call API of payment provider
}