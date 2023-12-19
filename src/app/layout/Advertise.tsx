"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ticket from "../../../public/image/Homepage/ticket-percent.png";
import close from "../../../public/image/Homepage/close.png";

export default function Advertise() {
  const pathname = usePathname();

  const isHomePage = pathname === "/homepage";

  if (!isHomePage) {
    return null;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 shadow">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Image className="" src={ticket} alt={""} />
            <p className="text-sm leading-6 text-gray-900 lg:-ml-2 ">
              <strong className="font-semibold">
                30% off storewide — Limited time!{" "}
              </strong>
            </p>
            <a
              href=""
              className="font-semibold text-blue-500 border-b border-blue-500 lg:flex hidden"
            >
              
              Shop Now <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
          <div className="flex flex-1 justify-end " onClick={handleDismiss}>
            <div
              className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
              
            >
              <Image src={close} alt={""} />
              
            </div>
          </div>
        </div>
      )}
    </>
  );
}
