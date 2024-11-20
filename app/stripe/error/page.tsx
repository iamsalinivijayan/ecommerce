import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

export default function ErrorStripe() {
    return (
        <div className="h-screen">
        <div className="mt-32 md:max-w-[50vw] mx-auto">
          <X className="text-red-500 w-16 h-16 mx-auto my-6" />
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
              Somethong went wrong!!
            </h3>
            <Button asChild className="mt-5">
              <Link href="/">GO back</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
  