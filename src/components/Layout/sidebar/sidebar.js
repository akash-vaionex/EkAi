'use client'

import { Dialog, Transition } from '@headlessui/react'
import {
  X,
  AlignJustify,
  DeleteIcon,
  Trash,
  LockIcon,
  Plus,
} from 'lucide-react'
import { Fragment, useState } from 'react'

import { navigation } from './config'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function Sidebar({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <div>
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-800">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <X className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                    <div className="flex flex-shrink-0 items-center px-4 ">
                      <div className="w-full bg-[#2563EB] px-3 py-2 flex items-center rounded-lg flex-wrap text-white text-sm">
                        <div className="p-4 w-6 h-6 flex justify-center items-center bg-white text-[#2563EB] rounded-full mr-3">
                          Q
                        </div>{' '}
                        Qasim Muhammad
                      </div>
                    </div>
                    <nav className="mt-5 space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'group flex items-center rounded-md px-2 py-2 text-base font-medium',
                          )}
                        >
                          <item.icon
                            className={classNames(
                              item.current
                                ? 'text-gray-300'
                                : 'text-gray-400 group-hover:text-gray-300',
                              'mr-4 h-6 w-6 flex-shrink-0',
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                  <div className="px-2">
                    <div className="flex flex-col flex-shrink-0 border-t-2 border-t-gray-700 p-4">
                      <a
                        href="#"
                        className="group block w-full flex-shrink-0 py-1"
                      >
                        <div className="flex items-center">
                          <div>
                            <Trash className="text-white" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-white">
                              Clear all conversations
                            </p>
                          </div>
                        </div>
                      </a>
                      <a
                        href="#"
                        className="group block w-full flex-shrink-0 mt-4 py-1"
                      >
                        <div className="flex items-center">
                          <div>
                            <LockIcon className="text-white" />
                          </div>
                          <div className="ml-3">
                            <p className="text-sm font-medium text-white">
                              Logout
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex min-h-0 flex-1 flex-col bg-gray-800">
            <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex flex-shrink-0 items-center px-4 ">
                <div className="w-full bg-[#2563EB] px-3 py-2 flex items-center rounded-lg flex-wrap text-white text-sm">
                  <div className="p-4 w-6 h-6 flex justify-center items-center bg-white text-[#2563EB] rounded-full mr-3">
                    Q
                  </div>{' '}
                  Qasim Muhammad
                </div>
              </div>
              <nav className="mt-5 flex-1 space-y-1 px-3">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'group flex items-center rounded-md px-3 py-3 text-sm font-medium',
                    )}
                  >
                    <item.icon
                      className={classNames(
                        item.current
                          ? 'text-gray-300'
                          : 'text-gray-400 group-hover:text-gray-300',
                        'mr-3 h-6 w-6 flex-shrink-0',
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
                <a
                  href={'#'}
                  className={classNames(
                    'bg-white text-[#2563EB] group flex items-center rounded-md px-3 py-3 text-sm font-medium',
                  )}
                >
                  <Plus
                    className={classNames(
                      'text-[#2563EB] mr-3 h-6 w-6 flex-shrink-0',
                    )}
                    aria-hidden="true"
                  />
                  Start a chat
                </a>
              </nav>
            </div>
            <div className="px-2">
              <div className="flex flex-col flex-shrink-0 border-t-2 border-t-gray-700 p-4">
                <a href="#" className="group block w-full flex-shrink-0 py-1">
                  <div className="flex items-center">
                    <div>
                      <Trash className="text-white" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">
                        Clear all conversations
                      </p>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  className="group block w-full flex-shrink-0 mt-4 py-1"
                >
                  <div className="flex items-center">
                    <div>
                      <LockIcon className="text-white" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-white">Logout</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col lg:pl-64">
          <div className="sticky top-0 z-10 bg-gray-100 pl-1 pt-1 sm:pl-3 sm:pt-3 lg:hidden">
            <button
              type="button"
              className="-ml-0.5 -mt-0.5 inline-flex h-12 w-12 items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <AlignJustify className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <main className="flex-1 bg-[url('/icons/background.svg')] bg-repeat">
            <div className="py-6">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                {children}
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
