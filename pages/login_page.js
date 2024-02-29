import { axiosInstance } from '@/axios/axios';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

function LoginPage() {
  const router = useRouter();
  const [inputs, setInput] = useState({
    identifier: '',
    password: '',
  });

  const handleInputs = (e, type) => {
    setInput((pre) => {
      return {
        ...pre,
        [type]: e.target.value,
      };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axiosInstance.post(`/auth/local`,{identifier: inputs.identifier, password: inputs.password});
      console.log('auth response ', response.data);
      router.push('/');
      localStorage.setItem('token', response.data?.jwt);
    } catch (error) {
      console.log('login error ', error);
      if (error?.response?.data?.error?.message) {
        toast.error('Invalid credentials.', {
          style: { color: 'white', backgroundColor: 'red' },
        });
      } else {
        toast.error('Something went wrong. Please try again', {
          style: { color: 'white', backgroundColor: 'red' },
        });
      }
    }
  };

  return (
    <section class='bg-gray-50 dark:bg-gray-900'>
      <div class='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <div class='w-full bg-white rounded-lg shadow dark:border md:-mt-10 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 -mt-[-96px]'>
          <div class='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 class='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Sign in to your account
            </h1>
            <form class='space-y-4 md:space-y-6' onSubmit={handleLogin}>
              <div>
                <label
                  for='email'
                  class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Your email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='name@company.com'
                  onChange={(e) => handleInputs(e, 'identifier')}
                  required
                />
              </div>
              <div>
                <label
                  for='password'
                  class='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='••••••••'
                  onChange={(e) => handleInputs(e, 'password')}
                  class='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  required
                />
              </div>

              <button
                type='submit'
                class='w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
