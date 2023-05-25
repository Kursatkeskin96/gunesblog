'use client'
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Kelime () {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") {
      redirect("/");
    }
  }, [status]);
  return (
    <div className=' bg-slate-100 h-auto'>
<div className='flex items-center justify-center max-w-[80%] mx-auto pt-10 flex-wrap'>
  <div className='rounded-xl shadow-xl h-52 w-52'>
    <h1 className='ml-4 mt-16 text-2xl'>Gangan.</h1>
    <hr className='mt-2'></hr>
    <p className='ml-4 mt-3 italic text-slate-500'>Kedi</p>
  </div>
  <div className='rounded-xl shadow-xl h-52 w-52 mx-8'>
    <h1 className='ml-4 mt-16 text-2xl'>Alma.</h1>
    <hr className='mt-2'></hr>
    <p className='ml-4 mt-3 italic text-slate-500'>Hayir, alma, yapma</p>
  </div>
  <div className='rounded-xl shadow-xl h-52 w-52'>
    <h1 className='ml-4 mt-16 text-2xl'>Nene.</h1>
    <hr className='mt-2'></hr>
    <p className='ml-4 mt-3 italic text-slate-500'>Anneanne</p>
  </div>
  <div className='rounded-xl shadow-xl h-52 w-52 mx-8 my-4'>
    <h1 className='ml-4 mt-16 text-2xl'>Dagi.</h1>
    <hr className='mt-2'></hr>
    <p className='ml-4 mt-3 italic text-slate-500'>Dayi</p>
  </div>
  <div className='rounded-xl shadow-xl h-52 w-52'>
    <h1 className='ml-4 mt-16 text-2xl'>Mam Mam.</h1>
    <hr className='mt-2'></hr>
    <p className='ml-4 mt-3 italic text-slate-500'>Mama</p>
  </div>
  <div className='rounded-xl shadow-xl h-52 w-52 mx-8'>
    <h1 className='ml-4 mt-16 text-2xl'>Va.</h1>
    <hr className='mt-2'></hr>
    <p className='ml-4 mt-3 italic text-slate-500'>Var</p>
  </div>
  <div className='rounded-xl shadow-xl h-52 w-52'>
    <h1 className='ml-4 mt-16 text-2xl'>Eva.</h1>
    <hr className='mt-2'></hr>
    <p className='ml-4 mt-3 italic text-slate-500'>Evet</p>
  </div>
  <div className='rounded-xl shadow-xl h-52 w-52'>
    <h1 className='ml-4 mt-16 text-2xl'>Ge ge.</h1>
    <hr className='mt-2'></hr>
    <p className='ml-4 mt-3 italic text-slate-500'>Gel gel</p>
  </div>
  <div className='rounded-xl shadow-xl h-52 w-52'>
    <h1 className='ml-4 mt-16 text-2xl'>Vag vag.</h1>
    <hr className='mt-2'></hr>
    <p className='ml-4 mt-3 italic text-slate-500'>Kurbağ</p>
  </div>
  <div className='rounded-xl shadow-xl h-52 w-52'>
    <h1 className='ml-4 mt-16 text-2xl'>Avaba.</h1>
    <hr className='mt-2'></hr>
    <p className='ml-4 mt-3 italic text-slate-500'>Araba</p>
  </div>
  <div className='rounded-xl shadow-xl h-52 w-52'>
    <h1 className='ml-4 mt-16 text-2xl'>Dege.</h1>
    <hr className='mt-2'></hr>
    <p className='ml-4 mt-3 italic text-slate-500'>Deterjan</p>
  </div>
  <div className='rounded-xl shadow-xl h-52 w-52'>
    <h1 className='ml-4 mt-16 text-2xl'>Hav hav.</h1>
    <hr className='mt-2'></hr>
    <p className='ml-4 mt-3 italic text-slate-500'>Köpek</p>
  </div>
  <div className='rounded-xl shadow-xl h-52 w-52'>
    <h1 className='ml-4 mt-16 text-2xl'>Inne.</h1>
    <hr className='mt-2'></hr>
    <p className='ml-4 mt-3 italic text-slate-500'>Anne</p>
  </div>
  <div className='rounded-xl shadow-xl h-52 w-52'>
    <h1 className='ml-4 mt-16 text-2xl'>Bağ bağ.</h1>
    <hr className='mt-2'></hr>
    <p className='ml-4 mt-3 italic text-slate-500'>Baba</p>
  </div>
  <div className='rounded-xl shadow-xl h-52 w-52'>
    <h1 className='ml-4 mt-16 text-2xl'>Baaaam.</h1>
    <hr className='mt-2'></hr>
    <p className='ml-4 mt-3 italic text-slate-500'>Düşmek, zıplamak</p>
  </div>
</div>
</div>
  )
}
