"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import {RxHamburgerMenu} from 'react-icons/rx'

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className='bg-[#00204a] h-14 text-white flex-between w-full pt-3'>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {session?.user ? (
          <div className='flex ml-auto mr-5 gap-3 md:gap-5'>
            <div className="p-1 hover:border-b-2 border-[#fdb44b] ">
              <Link href='/'>Ana Sayfa</Link>
            </div>
            <div className="p-1 hover:border-b-2 border-[#fdb44b] ">
              <Link href='/blog'>Blog</Link>
            </div>
            <div className="p-1 hover:border-b-2 border-[#fdb44b] ">
              <Link href='/kelime'>Kelime</Link>
            </div>
            <div className="p-1 hover:border-b-2 border-[#fdb44b] ">
              <Link href='/galeri'>Galeri</Link>
            </div>
            <div className="bg-[#f59f26] p-1 rounded-md">
            <button type='button' onClick={signOut} className='outline_btn'>
            Çıkış Yap
            </button>
            </div>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <div key={provider.name} className="flex ml-auto">
                <div className="mx-5 justify-center items-center hover:border-b-2 border-[#fdb44b]">
                  <Link href="/">
                    Ana Sayfa
                  </Link>
                </div>
                    <div className='mr-8 hover:border-b-2 border-[#fdb44b]'>
                      <Link href='/auth/signin'>
                    <button type='button'>
                      Giriş Yap
                    </button>
                    </Link>
                  </div>
                </div>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {session?.user ? (
          <div className='flex'>
            <RxHamburgerMenu className="ml-5" onClick={() => setToggleDropdown(!toggleDropdown)} />
            {toggleDropdown && (
              <div className='dropdown ease-in duration-500'>
                <div>
                <Link
                  href='/'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}>
                 Home
                </Link>
                </div>

                <div>
                <Link
                  href='/blog'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}>
                  Blog
                </Link>
                </div>

                <div>
                <Link
                  href='/kelime'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}>
                  Kelime
                </Link>
                </div>
                
                <div>
                <Link
                  href='/galeri'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}>
                  Galeri
                </Link>
                </div>
                
                <div>
                <button
                  type='button'
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className='dropdown_link'
                >
                  Çıkış Yap
                </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <div key={provider.name} className="flex justify-center items-center mx-auto">
                <div className="mx-3 hover:border-b-2 border-[#fdb44b]">
                <Link
                  href='/'
                  onClick={() => setToggleDropdown(false)}>
                 Ana Sayfa
                </Link>
                </div>
                
                <div className="mx-3 hover:border-b-2 border-[#fdb44b]">
                <button
                  type='button'
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                >
                  Giriş Yap
                </button>
                </div>
                </div>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;