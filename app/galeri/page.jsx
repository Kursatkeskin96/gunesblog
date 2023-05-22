import React from 'react'
import gunes1hafta from '@/assets/gunes1hafta.jpg'
import gunes1ay from '@/assets/gunes1ay.jpg'
import gunes2ay from '@/assets/gunes2ay.jpg'
import gunes3ay from '@/assets/3aygunes.jpg'
import gunes4ay from '@/assets/gunes4ay.jpg'
import gunes5ay from '@/assets/gunes5ay.jpg'
import gunes6ay from '@/assets/gunes6ay.jpg'
import gunes7ay from '@/assets/gunes7ay.jpg'
import gunes8ay from '@/assets/gunes8ay.jpg'
import gunes9ay from '@/assets/gunes9ay.jpg'
import gunes10ay from '@/assets/gunes10ay.jpg'
import Image from 'next/image'

export default function Galeri() {
  return (
    <div className="flex items-center max-w-[80%] mx-auto justify-center flex-wrap">
  <div className="group h-44 w-40 [perspective:1000px]">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={gunes1hafta} alt="gunes" />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 classNameName="text-3xl font-bold">1. Hafta</h1>
        </div>
      </div>
    </div>
  </div>

  <div className="group h-44 w-40 [perspective:1000px] mx-5 my-10">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={gunes1ay} alt="gunes" />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 classNameName="text-3xl font-bold">1. Ay</h1>
        </div>
      </div>
    </div>
  </div>

  <div className="group h-44 w-40 [perspective:1000px]">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={gunes2ay} alt="gunes" />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 classNameName="text-3xl font-bold">2. Ay</h1>
        </div>
      </div>
    </div>
  </div>

  <div className="group h-44 w-40 [perspective:1000px] mx-5">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={gunes3ay} alt="gunes" />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 classNameName="text-3xl font-bold">3. Ay</h1>
        </div>
      </div>
    </div>
  </div>

  <div className="group h-44 w-40 [perspective:1000px]">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={gunes4ay} alt="gunes" />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 classNameName="text-3xl font-bold">4. Ay</h1>
        </div>
      </div>
    </div>
  </div>

  <div className="group h-44 w-40 [perspective:1000px] mx-5 my-10">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={gunes5ay} alt="gunes" />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 classNameName="text-3xl font-bold">5. Ay</h1>
        </div>
      </div>
    </div>
  </div>

  <div className="group h-44 w-40 [perspective:1000px]">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={gunes6ay} alt="gunes" />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 classNameName="text-3xl font-bold">6. Ay</h1>
        </div>
      </div>
    </div>
  </div>

  <div className="group h-44 w-40 [perspective:1000px] mx-5">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={gunes7ay} alt="gunes" />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 classNameName="text-3xl font-bold">7. Ay</h1>
        </div>
      </div>
    </div>
  </div>

  <div className="group h-44 w-40 [perspective:1000px]">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={gunes8ay} alt="gunes" />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 classNameName="text-3xl font-bold">8. Ay</h1>
        </div>
      </div>
    </div>
  </div>
  <div className="group h-44 w-40 [perspective:1000px] mx-5">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={gunes9ay} alt="gunes" />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 classNameName="text-3xl font-bold">9. Ay</h1>
        </div>
      </div>
    </div>
  </div>
  <div className="group h-44 w-40 [perspective:1000px]">
    <div className="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      <div className="absolute inset-0">
        <Image className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={gunes10ay} alt="gunes" />
      </div>
      <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
        <div className="flex min-h-full flex-col items-center justify-center">
          <h1 classNameName="text-3xl font-bold">10. Ay</h1>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}
