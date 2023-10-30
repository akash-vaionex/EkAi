'use client'

import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import {
  X,
  AlignJustify,
  UserIcon,
  User2Icon,
  UserX2Icon,
  CalendarDays,
} from 'lucide-react'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'Home', href: '/' },
  { name: "Expert's Voice", href: '/experts_voice' },
  { name: 'Features', href: '/feature' },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const pathname = usePathname()
  console.log(pathname)

  return (
    <header className="bg-white opacity-0.2">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="h-8 w-auto w-[89px] h-[29px]"
              src="/logo.svg"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <AlignJustify
              color="#b0b0b0"
              className="h-6 w-6 "
              alt="bar mark"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 text-gray-400 cursor-pointer hover:text-[#2563EB] border-b-2 hover:border-b-2 border-b-transparent hover:border-b-[#2563EB] ${
                pathname === item.href ? 'border-b-[#2563EB]' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center">
          <Link
            href="/login"
            className="text-sm font-semibold leading-6 mx-4 text-white flex text-[#2563EB] "
          >
            <UserIcon className="mr-2" />
            Log in
          </Link>
          <button
            href="/register"
            className="text-sm font-semibold leading-6 mx3 text-white bg-[#2563EB] px-4 py-3 rounded-md flex"
          >
            <CalendarDays className="mr-2" />
            Book a demo
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X
                color="#b0b0b0"
                className="h-6 w-6"
                alt="close mark"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
