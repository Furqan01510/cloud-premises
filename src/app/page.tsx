import Image from "next/image";
import Logo from '@/../public/assets/images/cloud.png'
import Development from '@/../public/assets/images/development.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">

        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:size-auto lg:bg-none">

        </div>
      </div>

      <div className="relative z-[-1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">
        <div className="z-[100] flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-0">
            <Image src={Logo} alt='Cloud-Premises-logo' height='50' />
            <span className="font-bold capitalize text-blue-700 cloud_premises text-lg">cloud premises</span>
          </div>
          <div className="flex flex-col items-center gap-5">
            <span>
              <Image src={Development} alt="Development-Image" height='150' />
            </span>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-lg">Opps! This Site is Under Maintenance.</h1>
              <p className="font-light text-lg">by Furqan Mohammed</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left">

      </div>

    </main>
  );
}
