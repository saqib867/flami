import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useRouter } from 'next/router'


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
  const router = useRouter();
  const [token,setToken] = useState('')
 

 useEffect(()=>{

  if (typeof window !== 'undefined'){

    setToken(localStorage.getItem('token'))
} 
     
 },[token,router])

 const handleLogout =()=>{

     localStorage.removeItem('token')
     window.location.replace('/')

 }

  const navigation = [
    { name: 'Home', current: router.pathname === '/' ? true : false, path: "/" },
    // { name: 'Gallery', current: router.pathname === '/Gallery' ? true : false, path: "/Gallery" },
    { name: 'About', current: router.pathname === '/about-us' ? true : false, path: '/about-us' },
    { name: 'Reviews', current: router.pathname === '/customer-reviews' ? true : false, path: "/customer-reviews" },
    { name: 'Products', current: router.pathname === '/products' ? true : false, path: '/products' },
    { name: 'Contact', current: router.pathname === '/contact-us' ? true : false, path: '/contact-us' },
    { name: 'Design Your Sign or Box', current: router.pathname === '/create-custome' ? true : false, path: '/create-custome' },
    { name: 'Customer', current: router.pathname === '/page_for_admin' ? true : false, path: '/page_for_admin' },

  ]
  const navItem = token ? navigation : navigation.filter(item=>item.path !== '/page_for_admin')
  return (
    <Disclosure as="nav" className="bg-[#003933]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 gap-x-2 items-center md:items-stretch justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="/logo.png"
                    alt="Your Company"
                  />
                  
                </div>
                <div className='flex flex-col'>
                  <small className='text-white'>0404032722 </small>
                  <small className='text-white'> 100% Australian made</small>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                <div className="hidden lg:block">
                  <div className="flex space-x-4">
                    {navItem.map((item) => (
                      <a
                        onClick={() => { router.push(item.path) }}
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? ' text-white' : 'text-gray-300 hover:text-white',
                          'rounded-md px-3 py-2 text-base font-medium hover:cursor-pointer'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                     {token && <button
                        onClick={handleLogout}
                        className='border-slate-300 border-[1px] rounded px-2 text-white'
                      >
                        Logout
                      </button>}
                  </div>
                
                </div>

              </div>
            </div>
          </div>

          <Disclosure.Panel className=" flex lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navItem.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  onClick={() => { router.push(item.path) }}
                  className={classNames(
                    item.current ? ' text-white' : 'text-gray-300 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
