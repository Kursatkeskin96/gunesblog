'use client'
import { useEffect, useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Link from "next/link";
import Gunes from '@/assets/gunes.jpg'
import Image from "next/image";
import Footer from "@/components/Footer";

export default function page() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <div>
        {session?.user ? ( 
          <div>sa</div>
         ) : (  <>
            {providers &&
              Object.values(providers).map((provider) => (
                <div key={provider.name} className="mb-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center justify-center max-w-6xl mx-auto">
                    <div className="max-w-[90%] p-4">
                      <Image
                      src={Gunes}
                      className="ml-auto rounded-md"
                      height={250}
                      alt="Picture of the author"
                      />
                    </div>
                    <div className= "p-4">
                    <h1 className="h1gradient mb-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl">Gunesin dunyasina hos geldiniz</h1>
                    <p className="text-lg text-gray-500 lg:text-lg  dark:text-gray-400">Bu internet sitesi Gunesin internetteki ani defteri olarak tasarlanmistir.</p>
                    <p className="my-5 text-lg text-gray-500 lg:text-lg  dark:text-gray-400">Bu site uzerinden Gunes'e ileride okuyabilecegi notlar yazabilir, ilk kemilerini ve ne anlama geldigini gosteren sozluge goz atabilir, Gunesin dogumundan beri her ay guncellenen foto galeride gezinebilirsiniz.</p>
                    <p className="text-lg text-gray-500 lg:text-lg  dark:text-gray-400">Iceriklere erisim aile uyeleri ile sinirlandirilmistir. Devam etmek icin lutfen giris yapin</p>
                    <Link href='/auth/signin'>
                    <div className="bg-gradient-to-br from-[#fdb44b] to-yellow-300  hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 mt-10 flex justify-center mx-auto max-w-[50%] text-cetner items-center p-3 rounded-md text-white">Giris Yap
                    </div>
                   </Link>
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
        <Footer />
      </div> 
  )
}
