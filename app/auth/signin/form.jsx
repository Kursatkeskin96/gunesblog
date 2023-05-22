"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";
import gunes3 from '@/assets/guneslogin.jpg'

export const LoginForm = () => {
  const router = useRouter();
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (password === '' || username === '') {
        console.log("Fill all fields!")
        return
    }

    if (password.length < 6) {
        console.log("Password must be at least 6 characters long")
        return
    }

    try {
        const res = await signIn('credentials', { username, password, redirect: false })

        if (res?.error == null) {
            router.push("/")
        } else {
            console.log("Error occured while logging")
        }
    } catch (error) {
        console.log(error)
    }
}


  return (  
    <div className="grid lg:grid-cols-2 sm:grid-cols-1 max-w-6xl">
    <div className="flex justify-center items-center">
      <Image
        src={gunes3}
        width={300}
        height={300}
        className="mx-auto rounded-md "
        alt="Picture of the author"
        priority={true}
      />
    </div>
    <div className="">
      <form onSubmit={handleSubmit} className="h-[400px] lg:w-[400px] shadow-lg p-10">
        <div className="mb-6">
          <label htmlFor="username">Kullanıcı Adı</label>
          <input
            required
            type="text"
            name="username"
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Kullanıcı adı"
            className= "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
       
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password">Şifre</label>
          <input
            required
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)} 
            placeholder="********"
            className= "form-control block w-full px-4 py-5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
    
          />
        </div>
        <button
          type="submit"
          className="bg-[#fdb44b] inline-block px-7 mt-5 py-4 text-white font-medium text-sm leading-snug uppercase rounded shadow-md active:shadow-lg transition duration-150 ease-in-out w-full"
        >
        </button>
      </form>
    </div>
  </div>
);
}