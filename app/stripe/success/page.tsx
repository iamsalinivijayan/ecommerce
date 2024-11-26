"use client";

import { Button } from "../../../components/ui/button";
import { CheckCheck } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";
import { useShoppingCart } from "use-shopping-cart";

export default function StripeSuccess() {
  const { clearCart } = useShoppingCart();

  // Clear the cart only once when this page is loaded
  useEffect(() => {
    clearCart(); // Directly invoke clearCart
    localStorage.removeItem("cart");
  }, []); // Ensure it runs only once with an empty dependency array

  return (
    <div className="h-screen">
      <div className="mt-32 md:max-w-[50vw] mx-auto">
        <CheckCheck className="text-green-600 w-16 h-16 mx-auto my-6" />
        <div className="text-center">
          <h3 className="md:text-2xl text-base text-gray-900 font-semibold">
            Payment Done!
          </h3>
          <p className="text-gray-600 my-2">
            Thank you for your purchase. We hope you enjoy it!
          </p>
          <p>Have a great day!</p>

          <Button asChild className="mt-5">
            <Link href="/">GO back</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
