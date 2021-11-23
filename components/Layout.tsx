import Head from "next/head"
import { useRouter } from "next/router"
import NextNprogress from "nextjs-progressbar"

import { Sidebar, Navbar } from "."

// my-14 lg:px-28 px-5
export default function Layout({ children }) {
   const router = useRouter()

   return (
      <>
         <Head>
            <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico" />
            <link rel="icon" type="image/png" href="/logo.png" />
         </Head>

         <NextNprogress options={{ showSpinner: false }} color="#4F46E5" startPosition={0.3} />

         <div className="w-full lg:h-screen flex items-center justify-center p-2 font-Poppins">
            <div className="grid grid-cols-12 gap-4  w-full sm:max-w-lg lg:max-w-6xl">
               <div className="lg:col-span-3 col-span-12 rounded-xl bg-white py-4 ">
                  <Sidebar />
               </div>

               <div className="lg:col-span-9 col-span-12 rounded-xl bg-white ">
                  <Navbar pathname={router.pathname} />

                  {children}
               </div>
            </div>
         </div>
      </>
   )
}
