'use client'
import Link from 'next/link'
import { navigation } from './config'
import { useState } from 'react'
import { useToast } from '@/components/UI/use-toast'
import { MailIcon, UserIcon } from 'lucide-react'

export function Footer() {
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleSubmitEmail = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      console.log(response)
      if (response.ok) {
        console.log('succesfull')
        toast({
          title: 'Success',
          description: 'Subscription successful!',
        })
        setEmail('')
      } else {
        console.log('failure')
        toast({
          title: 'Error',
          description: 'Subscription failed. Please try again.',
        })
      }
    } catch (error) {
      console.log(error)
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again.',
      })
    }
  }
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="flex xl:flex-row flex-col justify-between">
          <div className="space-y-8 xl:w-[50%] mr-28">
            <img
              className="w-[119px] h-[108px]"
              src="/icons/footer_logo.svg"
              alt="Company name"
            />
            <p className="text-sm leading-6 text-gray-300">
              Tap into AI's potential to navigate complex regulations, ensure
              strong compliance, and safeguard your business from costly
              penalties.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-500 hover:text-gray-400"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-16 xl:mt-0 xl:w-[40%]">
            <div>
              <div>
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MailIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="block w-full rounded-md border-0 py-2 pl-10  text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-transparent"
                    placeholder="Enter your work email"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="relative mt-2 rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <UserIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <input
                    type="name"
                    name="name"
                    id="name"
                    className="block w-full rounded-md border-0 py-2 pl-10  text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-transparent"
                    placeholder="Full name"
                  />
                </div>
              </div>
              <div className="mt-4">
                <div className="">
                  <textarea
                    rows={4}
                    name="comment"
                    id="comment"
                    className="block w-full rounded-md border-0 py-2 px-3 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6 bg-transparent"
                    defaultValue={''}
                    placeholder="Write your message..."
                  />
                </div>
              </div>
            </div>
            <img className="my-4" src="/icons/captcha.svg" alt="Company name" />
            <button
              type="button"
              className="mt-2 rounded-md bg-[#2563EB] px-3.5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Send Message
            </button>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-8 md:flex md:items-center md:justify-center">
          <p className="mt-8 text-xs leading-5 text-gray-400 md:order-1 md:mt-0">
            &copy; 2023 EKAI, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
