import React from 'react'
import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'

const NewsHero = () => {
  return (
    <section className="max-w-7xl mx-auto mt-40 flex flex-col justify-center py-24">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <ChevronLeft size={24} />
          <p className="font-semibold text-xl tracking-[-3%] text-primary-foreground">
            Back to A² News page
          </p>
        </div>
        <p className="font-bold text-[76px] tracking-[-4px] text-white-to-black mt-4">
          Adapting and Thriving in a<br /> Changing World
        </p>
        <div className="flex gap-2 mt-12.5">
          <Link href={'/facebook'} className="border p-2.5">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3887_318)">
                <path
                  d="M18 9.45605C18 4.48549 13.9706 0.456055 9 0.456055C4.02943 0.456055 0 4.48549 0 9.45605C0 13.9481 3.29115 17.6715 7.59375 18.3467V12.0576H5.30859V9.45605H7.59375V7.47324C7.59375 5.21762 8.93742 3.97168 10.9932 3.97168C11.9776 3.97168 13.0078 4.14746 13.0078 4.14746V6.3623H11.873C10.755 6.3623 10.4062 7.05611 10.4062 7.76855V9.45605H12.9023L12.5033 12.0576H10.4062V18.3467C14.7088 17.6715 18 13.9481 18 9.45605Z"
                  fill="url(#paint0_linear_3887_318)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3887_318"
                  x1="9"
                  y1="0.456055"
                  x2="9"
                  y2="18.3467"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#CCCCCC" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
                <clipPath id="clip0_3887_318">
                  <rect width="18" height="18" fill="white" transform="translate(0 0.456055)" />
                </clipPath>
              </defs>
            </svg>
          </Link>
          <Link href={'/x'} className="border p-2.5">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7447 1.88379H16.2748L10.7473 8.20141L17.25 16.7983H12.1584L8.17053 11.5843L3.60746 16.7983H1.07582L6.98808 10.0409L0.75 1.88379H5.97083L9.57555 6.64954L13.7447 1.88379ZM12.8567 15.2839H14.2587L5.20905 3.31864H3.7046L12.8567 15.2839Z"
                fill="url(#paint0_linear_3887_321)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3887_321"
                  x1="9"
                  y1="1.88379"
                  x2="9"
                  y2="16.7983"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#CCCCCC" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
          <Link href={'/linkedin'} className="border p-2.5">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3887_324)">
                <path
                  d="M16.6676 0.456055H1.32891C0.594141 0.456055 0 1.03613 0 1.75332V17.1553C0 17.8725 0.594141 18.4561 1.32891 18.4561H16.6676C17.4023 18.4561 18 17.8725 18 17.1588V1.75332C18 1.03613 17.4023 0.456055 16.6676 0.456055ZM5.34023 15.7947H2.66836V7.20254H5.34023V15.7947ZM4.0043 6.03184C3.14648 6.03184 2.45391 5.33926 2.45391 4.48496C2.45391 3.63066 3.14648 2.93809 4.0043 2.93809C4.85859 2.93809 5.55117 3.63066 5.55117 4.48496C5.55117 5.33574 4.85859 6.03184 4.0043 6.03184ZM15.3387 15.7947H12.6703V11.6182C12.6703 10.6232 12.6527 9.34004 11.2816 9.34004C9.89297 9.34004 9.68203 10.4264 9.68203 11.5479V15.7947H7.01719V7.20254H9.57656V8.37676H9.61172C9.9668 7.70176 10.8387 6.98809 12.1359 6.98809C14.8395 6.98809 15.3387 8.76699 15.3387 11.0803V15.7947Z"
                  fill="url(#paint0_linear_3887_324)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_3887_324"
                  x1="9"
                  y1="0.456055"
                  x2="9"
                  y2="18.4561"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#CCCCCC" />
                  <stop offset="1" stopColor="white" />
                </linearGradient>
                <clipPath id="clip0_3887_324">
                  <rect width="18" height="18" fill="white" transform="translate(0 0.456055)" />
                </clipPath>
              </defs>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NewsHero
