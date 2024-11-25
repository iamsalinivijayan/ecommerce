"use client";

import { Button } from "../../components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { ClerkLoaded, SignInButton, UserButton, useUser } from "@clerk/nextjs";

const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "/Women" },
  { name: "Teens", href: "/Teens" },
];

export default function Navbar() {
  const { user } = useUser();
  const pathname = usePathname();
  const { handleCartClick, cartCount } = useShoppingCart();

  // Ensure cartCount is always a number
  const itemCount = cartCount ?? 0;

  const handleCart = () => {
    if (user) {
      handleCartClick();
    } else {
      alert("Please sign in to view your cart.");
    }
  };

  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Next<span className="text-primary">Commerce</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <ClerkLoaded>
          <div className="flex items-center space-x-4">
            <Button
              variant="outline"
              onClick={handleCart}
              className="relative flex h-12 w-12 items-center justify-center rounded-full border"
            >
              {user && itemCount > 0 && (
                <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-white sm:h-6 sm:w-6">
                  {cartCount}
                </span>
              )}
              <ShoppingBag className="h-6 w-6" />
            </Button>
            {user ? (
              <UserButton />
            ) : (
              <SignInButton mode="modal" />
            )}
          </div>
        </ClerkLoaded>
      </div>
    </header>
  );
}
