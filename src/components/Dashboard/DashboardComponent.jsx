'use client'
import React, { useState } from 'react'
import UserPrompt from '../Chat/UserPrompt'
import SystemPrompt from '../Chat/SystemPrompt'
import { RefreshCcwIcon, RefreshCwIcon, RefreshCwOffIcon } from 'lucide-react'

const people = [
  {
    name: 'How do AI tools streamline compliance processes to avoid penalties?',
  },
  {
    name: 'How can AI assist in continuous compliance monitoring?',
  },
  {
    name: 'Can AI help in automating compliance documentation to prevent oversights?',
  },
  {
    name: 'How effective is AI in reducing the risk of regulatory fines?',
  },
  // More people...
]

function DashboardComponent() {
  const [isChat, setIsChat] = useState(true)
  const [promptChat, setPromptChat] = useState('')

  return (
    <div className="">
      {!isChat ? (
        <div className="flex justify-between flex-col lg:max-w-2xl mx-auto ">
          <div className="mx-auto py-24 sm:pt-24">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 md:4xl lg:text-5xl">
                Welcome to EKAI Chatbot
              </h1>
              <p className="mt-6 text-md md:text-md leading-8 text-gray-600 font-light">
                The power of AI at your service – Dive deep, grasp concepts
                effortlessly!
              </p>
            </div>
          </div>
          <div className="">
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="chat_text"
                className="block w-full rounded-md border-0 py-3 pl-2 pr-12 text-gray-900 ring-1 ring-inset ring-[#2563EB] placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 z-0"
                placeholder="Example : “How can AI help me avoid regulatory penalties?”"
                onChange={(e) => setPromptChat(e.target.value)}
              />
              <div
                className=" absolute inset-y-0 top-1.5 right-1 flex items-center z-100"
                onClick={() => setIsChat(true)}
              >
                <img src="/icons/enter.svg" className="w-10 h-10" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-32">
            {people.map((person) => (
              <div
                key={person.email}
                className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-[#F2F7FD] px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400 cursor-pointer"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900">
                    {person.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="relative pt-1p  mx-auto max-w-3xl h-screen">
          <UserPrompt />
          <SystemPrompt />
          <span className="absolute bottom-40 rounded-full py-3 px-4 text-sm leading-6 ring-1 ring-[#155EEF]/10 hover:ring-[#155EEF]/20 text-gray-700 bg-white w-auto flex left-1/2 -translate-x-1/2 ">
            <img src="/icons/reload.svg" className="text-gray-700 mr-2" />
            Regenerate response
          </span>
          <div className="absolute w-full bottom-16">
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="chat_text"
                className="block w-full rounded-md border-0 py-3 pl-2 pr-12 text-gray-900 ring-1 ring-inset ring-[#2563EB] placeholder:text-gray-700 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 z-0"
                placeholder="Send a message"
                onChange={(e) => setPromptChat(e.target.value)}
              />
              <div
                className=" absolute inset-y-0 top-1.5 right-1 flex items-center z-100"
                onClick={() => setIsChat(true)}
              >
                <img src="/icons/enter.svg" className="w-10 h-10" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default DashboardComponent
