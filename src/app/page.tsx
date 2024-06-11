import Link from "next/link"

import { CNA } from "@/components/CNA"
import { Coracao } from "@/components/Coracao"
import { Formulario } from "@/components/Formulario"
import { amazingSlabBold, codecProExtraBold } from "@/config/fonts"

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden relative min-h-screen max-w-md mx-auto">
        <section className="max-w-[420px] mx-auto flex flex-col justify-center align-middle items-center mt-12 z-10">
          <Link href="https://www.cna.com.br/catalao/">
            <CNA className="text-color-p w-28" />
          </Link>
          <div
            className={`${amazingSlabBold.className} mt-8 text-center relative`}
          >
            <span className="uppercase text-base tracking-[0.4em] text-color-s">
              Dia dos
            </span>
            <Coracao size={60} positionX="-12px" positionY="-18px" />
            <div className="flex flex-col tracking-[-0.3em] text-color-p -mt-3">
              <span className="text-8xl leading-[0.72]">namo</span>
              <span className="text-8xl leading-[0.72]">rados</span>
            </div>
            <Coracao
              size={90}
              positionX="250px"
              positionY="-110px"
              blur={1.5}
            />
            <Coracao size={44} positionX="255px" positionY="140px" />
            <Coracao size={50} positionX="-20px" positionY="270px" />
            <Coracao size={110} positionX="-90px" positionY="200px" blur={2} />
          </div>
          <div className="text-color-t max-w-[220px]">
            <p
              className={`${codecProExtraBold.className} mt-8 mb-3 text-xl tracking-[-0.05em] leading-[1em]`}
            >
              Seu amor merece um presente especial!
            </p>
            <p className="leading-[1.3em]">
              Na semana dos namorados, dê o primeiro passo para aprender inglês
              junto ao mozão com{" "}
              <span className={`w-[76px] inline-block relative`}>
                <span
                  className={`${codecProExtraBold.className} align-middle inline-block absolute top-2 left-1 leading-[0] text-5xl text-color-p`}
                >
                  50%
                </span>
              </span>{" "}
              desconto de
            </p>
          </div>
        </section>

        <section className="flex flex-col px-20 mt-12 gap-4">
          <Formulario />
        </section>
      </main>
    </>
  )
}
