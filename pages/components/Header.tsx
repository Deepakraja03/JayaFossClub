import { useState, Fragment } from "react";
import { Disclosure, Transition, Menu, Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, BellIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import jeclogo from "../../Assets/image 6.png";
import fosslogo from "../../Assets/image 5.png";
import Link from "next/link";

interface NavigationItem {
  name: string;
  href: string;
  current?: boolean; // Assuming this is a boolean, change if necessary
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  { name: "Gallery", href: "/Gallery" },
  { name: "Activities", href: "#" },
  { name: "Contact Us", href: "/Contact" },
];

function classNames(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

const Header: React.FC = () => {
  return (
    <Disclosure as="nav" className="bg-[#2a2b6b]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-8xl p-2 lg:px-20">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center  sm:items-stretch justify-start">
                <div className="flex flex-shrink-0 space-x-4 items-center">
                  <Image
                    className="lg:h-14 h-10 w-auto"
                    src={jeclogo}
                    alt="Your Company"
                  />
                  <Image
                    className="lg:h-14 h-10 w-auto"
                    src={fosslogo}
                    alt="Your Company"
                  />
                  <p className="text-white lg:text-3xl text-xl font-semibold font-serif">
                    Jaya Foss Club
                  </p>
                </div>
              </div>
              <div className="hidden lg:flex space-x-8 sm:ml-6 sm:block">
                <div className="flex space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-white hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-lg font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <button className="text-lg  leading-6 text-[#0B081C] px-8 py-2 rounded-3xl bg-[#ECECEC]">
                  Login
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative  items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
