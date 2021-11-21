import Sidebar from "./Sidebar"

// my-14 lg:px-28 px-5
export default function Layout({ children }) {
   return (
      <div className="w-full h-screen flex items-center justify-center p-2">
         <div className="grid grid-cols-12 gap-4  w-full sm:max-w-lg lg:max-w-6xl">
            <div className="lg:col-span-3 col-span-12 rounded-xl bg-white py-4 ">
               <Sidebar />
            </div>

            <div className="lg:col-span-9 col-span-12 rounded-xl bg-white p-4">{children}</div>
         </div>
      </div>
   )
}
