'use client'
import React, { useState } from 'react'
import { useToast } from '@/components/UI/use-toast'
import { Switch } from '@headlessui/react'
import { Button } from '../UI/button'

const formConfig = [
  {
    label: 'First name',
    name: 'firstName',
    type: 'text',
    placeholder: '',
    isTextarea: false,
  },
  {
    label: 'Last name',
    name: 'lastName',
    type: 'text',
    placeholder: '',
    isTextarea: false,
  },
  {
    label: 'Email',
    name: 'email',
    type: 'email',
    placeholder: '',
    isTextarea: false,
  },
  {
    label: 'Phone number',
    name: 'phoneNumber',
    type: 'tel',
    placeholder: '',
    isTextarea: false,
  },
  {
    label: 'Message',
    name: 'message',
    type: 'text',
    placeholder: '',
    isTextarea: true,
  },
]
export default function ContactComponent() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    message: '',
  })
  const [enabled, setEnabled] = useState(false)
  const { toast } = useToast()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({ ...prevData, [name]: value }))
  }
  const handleSubmitContact = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/contactInfo', {
        method: 'POST',
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          message: formData.message,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })

      if (response.ok) {
        setTimeout(() => {
          toast({
            title: 'Success!',
            description: 'Message Sent Successfully!',
          })
        }, 3000)

        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phoneNumber: '',
          message: '',
        })
      } else {
        toast({
          title: 'Error!',
          description: 'Message could not be sent. Please try again.',
        })
      }
    } catch (error) {
      console.log(error)
      toast({
        title: 'Error!',
        description: 'An error occurred. Please try again.',
      })
    }
  }
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  return (
    <div className="relative isolate bg-white">
      <div className="mx-auto md:py-24 py-12 sm:pt-24 bg-[url('/icons/background.svg')] bg-opacity-0">
        <div className="max-w-[576px] mx-auto my-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#2563EB] sm:text-4xl">
              Contact EKAI
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 font-normal">
              If you're interested in experiencing our offerings firsthand,
              please <br />
              reach out to us to book a captivating demo!
            </p>
          </div>
          <form className="px-6 pt-12" onSubmit={handleSubmitContact}>
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fullName"
                  className="block w-full rounded-md border-0 py-1.5 bg-sky-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 mb-4 px-2"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="workEmail"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Work Email
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="workEmail"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 bg-sky-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 mb-4 px-2"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="company"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Company
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="company"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 bg-sky-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 mb-4 px-2"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="industry"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Industry
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="industry"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 bg-sky-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 mb-4 px-2"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phone"
                  id="email"
                  className="block w-full rounded-md border-0 py-1.5 bg-sky-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 mb-4 px-2"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2 mb-4">
                <textarea
                  rows={4}
                  name="comment"
                  id="comment"
                  className="block w-full rounded-md border-0 py-1.5 bg-sky-50 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                />
              </div>
            </div>
            <Switch.Group as="div" className="flex items-center w-full">
              <Switch
                // checked={enabled}
                // onChange={setEnabled}
                className={classNames(
                  enabled ? 'bg-blue-600' : 'bg-gray-200',
                  'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2',
                )}
              >
                <span
                  aria-hidden="true"
                  className={classNames(
                    enabled ? 'translate-x-5' : 'translate-x-0',
                    'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
                  )}
                />
              </Switch>
              <Switch.Label as="span" className="ml-3 text-sm">
                <span className="font-medium text-slate-600 text-sm">
                  By selecting this, you agree to the{' '}
                  <a href="#" className="underline text-gray-900">
                    Privacy Policy
                  </a>
                  &nbsp;and{' '}
                  <a href="#" className="underline text-gray-900">
                    Cookie Policy
                  </a>
                </span>
              </Switch.Label>
            </Switch.Group>
            <button className="w-full rounded-full mt-4 bg-blue-600 px-4 py-2 text-white text-base">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
