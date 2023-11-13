import React from "react"

import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'


// components
import PostButton from "./PostButton"

const Sidebar = () => {

    const subCategories = [
        { name: 'Totes', href: '#' },
        { name: 'Backpacks', href: '#' },
        { name: 'Travel Bags', href: '#' },
        { name: 'Hip Bags', href: '#' },
        { name: 'Laptop Sleeves', href: '#' },
      ]

    const filters = [
        {
          id: 'color',
          name: 'Color',
          options: [
            { value: 'white', label: 'White', checked: false },
            { value: 'beige', label: 'Beige', checked: false },
            { value: 'blue', label: 'Blue', checked: true },
            { value: 'brown', label: 'Brown', checked: false },
            { value: 'green', label: 'Green', checked: false },
            { value: 'purple', label: 'Purple', checked: false },
          ],
        },
        {
          id: 'location',
          name: 'Location',
          options: [
            { value: 'indoor', label: 'Indoor', checked: false },
            { value: 'outdoor', label: 'Outdoor', checked: false },
            { value: 'on-campus', label: 'On Campus', checked: false },
            { value: 'off-campus', label: 'Off Campus', checked: false },
          ],
        },
        {
          id: 'time',
          name: 'Time',
          options: [
            { value: 'within-the-week', label: 'Within the Week', checked: false },
            { value: 'within-the-month', label: 'Within the Month', checked: false },
            { value: 'day', label: 'Day', checked: false },
            { value: 'night', label: 'Night', checked: false },
          ],
        },
      ]

    return (
        <div className="fixed left-0 h-screen w-60 bg-pal-dark">
            <div>
                <div className="">
                    <form className="border-t border-pal-text">
                        <h3 className="sr-only">Categories</h3>
                        <ul role="list" className="px-2 py-3 font-medium text-pal-text">
                            {subCategories.map((category) => (
                            <li key={category.name}>
                                <a href={category.href} className="block px-2 py-3">
                                {category.name}
                                </a>
                            </li>
                            ))}
                        </ul>

                        {filters.map((section) => (
                                <Disclosure as="div" key={section.id} className="border-t border-pal-text px-4 py-6">
                                    {({ open }) => (
                                    <>
                                        <h3 className="-mx-2 -my-3 flow-root">
                                        <Disclosure.Button className="flex w-full items-center justify-between bg-pal-dark px-2 py-3 text-pal-text">
                                            <span className="font-medium text-pal-text">{section.name}</span>
                                            <span className="ml-6 flex items-center">
                                            {open ? (
                                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                            ) : (
                                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                            )}
                                            </span>
                                        </Disclosure.Button>
                                        </h3>
                                        <Disclosure.Panel className="pt-6">
                                        <div className="space-y-6">
                                            {section.options.map((option, optionIdx) => (
                                            <div key={option.value} className="flex items-center">
                                                <input
                                                id={`filter-mobile-${section.id}-${optionIdx}`}
                                                name={`${section.id}[]`}
                                                defaultValue={option.value}
                                                type="checkbox"
                                                defaultChecked={option.checked}
                                                className="h-4 w-4 rounded border-gray-300 text-pal-text focus:ring-indigo-500"
                                                />
                                                <label
                                                htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                className="ml-3 min-w-0 flex-1 text-pal-text"
                                                >
                                                {option.label}
                                                </label>
                                            </div>
                                            ))}
                                        </div>
                                        </Disclosure.Panel>
                                    </>
                                    )}
                                </Disclosure>
                            ))}
                    </form>
                    {/* <PostButton></PostButton> */}
                </div>
            </div>
        </div>
    )
}

export default Sidebar