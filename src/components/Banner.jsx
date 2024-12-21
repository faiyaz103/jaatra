import React from 'react'
import banner from '../assets/images/banner.jpg'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src={banner}
        alt=""
        className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center filter brightness-50"
      />
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        ></div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">Travel with us</h2>
          <p className="mt-8 text-lg font-medium text-gray-300 sm:text-xl/8">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            <Link to='/destination' className='hover:text-blue-900 hover:scale-110 hover:font-bold transition-transform duration-300'>Select Destination <span aria-hidden="true">&rarr;</span></Link>
            <Link to='/packages' className='hover:text-blue-900 hover:scale-110 hover:font-bold transition-transform duration-300'>Pick a Package <span aria-hidden="true">&rarr;</span></Link>
            <Link to='/about-us' className='hover:text-blue-900 hover:scale-110 hover:font-bold transition-transform duration-300'>Contact Us <span aria-hidden="true">&rarr;</span></Link>
            <Link to='/blog' className='hover:text-blue-900 hover:scale-110 hover:font-bold transition-transform duration-300'>Enjoy Your Journey <span aria-hidden="true">&rarr;</span></Link>
          </div>
          {/* <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base text-gray-300">Offices worldwide</dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">12</dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base text-gray-300">Full-time colleagues</dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">300+</dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base text-gray-300">Hours per week</dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">40</dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-base text-gray-300">Paid time off</dt>
              <dd className="text-4xl font-semibold tracking-tight text-white">Unlimited</dd>
            </div>
          </dl> */}
        </div>
      </div>
    </div>
  )
}

export default Banner