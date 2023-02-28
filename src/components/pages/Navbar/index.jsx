import { Disclosure } from "@headlessui/react";
import Logo from "../../images/5b861ef8df45a2c468a89b572f09791f.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
 
            <div className="relative flex h-16 justify-between">
            <div className="flex flex-shrink-0 items-center sm:justify-end">
              <img
                className="block h-8 w-auto lg:hidden"
                src={Logo}
                alt="Your Company"
              />
              <img
                className="hidden h-8 w-auto lg:block"
                src={Logo}
                alt="Your Company"
              />
            </div>
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden justify-end">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-between sm:items-stretch sm:justify-end">
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  <Link
                    to="#"
                    className="inline-flex items-center focus:text-[#F7941E] px-1 pt-1 text-sm font-medium text-gray-900"
                  >
                    Home
                  </Link>
                  <Link
                    to="#"
                    className="inline-flex items-center focus:text-[#F7941E]  px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    About us
                  </Link>
                  <Link
                    to="#"
                    className="inline-flex items-center focus:text-[#F7941E] px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    Our Services
                  </Link>
                  <Link
                    to="#"
                    className="inline-flex items-center focus:text-[#F7941E]  px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  >
                    <button
                    className="bg-[#F7941E] text-white h-6 w-24"
                    >
                      Contact us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pt-2 pb-4">
              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
              <Disclosure.Button
                as="Link"
                to="#"
                className="block border-l-4 border-indigo-500 bg-indigo-50 py-2 pl-3 pr-4 text-base font-medium text-indigo-700"
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="Link"
                to="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                About us
              </Disclosure.Button>
              <Disclosure.Button
                as="Link"
                to="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Our services
              </Disclosure.Button>
              <Disclosure.Button
                as="Link"
                to="#"
                className="block border-l-4 border-transparent py-2 pl-3 pr-4 text-base font-medium text-gray-500 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-700"
              >
                Contact us
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
