import Image from "next/image"
import {
   BsCodeSlash,
   BsEnvelopeFill,
   BsFacebook,
   BsGeoAltFill,
   BsGithub,
   BsLinkedin,
   BsPhoneFill,
} from "react-icons/bs"

export default function Sidebar() {
   return (
      <div className="flex flex-col items-center justify-center">
         <Image
            src="/profile.jpg"
            alt="User"
            className=" mx-auto border rounded-full "
            height="128px"
            width="128px"
            layout="intrinsic"
            quality="100"
         />

         <h3 className="my-4 text-xl md:text-3xl font-kaushan">
            <span className="text-indigo-500">Makhlouf</span> Sam
         </h3>

         <div className="px-2 w-full text-gray-700   text-center ">
            <h3 className="rounded-full mb-2  bg-gray-200 p-2  flex items-center justify-center ">
               <BsCodeSlash className="mr-2 text-xl" />
               <span>Web Developer</span>
            </h3>
         </div>

         <div className="flex items-center justify-around text-indigo-500 w-full p-4 my-2 ">
            <a href="#" rel="noreferrer" target="_blank">
               <BsFacebook className="text-2xl" />
            </a>

            <a href="#" rel="noreferrer" target="_blank">
               <BsLinkedin className="text-2xl" />
            </a>

            <a href="https://github.com/RavenSam" rel="noreferrer" target="_blank">
               <BsGithub className="text-2xl" />
            </a>
         </div>

         <div className="bg-gray-200 w-full text-gray-700 py-3">
            <div className="rounded-full w-full   p-2   flex items-center ">
               <BsGeoAltFill className="mr-3  text-lg text-gray-600" />
               <span className="text-sm">Tizi Ouzou, Algeria</span>
            </div>

            <div className="rounded-full w-full    p-2    flex items-center ">
               <BsEnvelopeFill className="mr-3  text-lg text-gray-600" />
               <span className="text-sm">makhloufsam26@gmail.com</span>
            </div>

            <div className="rounded-full w-full   p-2   flex items-center ">
               <BsPhoneFill className="mr-3  text-lg text-gray-600" />
               <span className="text-sm">+213967588432 (false) </span>
            </div>
         </div>

         <div className="my-4">
            <a
               href="#"
               download="#"
               className="block rounded-full w-full text-center py-2 px-5  mb-2 text-white bg-gradient-to-r from-indigo-700 to-indigo-400 opacity-90 hover:opacity-100  transition duration-300 ease"
            >
               Download CV
            </a>

            <button className="rounded-full w-full text-center py-2 px-5  mb-2 text-white bg-gradient-to-r from-indigo-700 to-indigo-400 opacity-90 hover:opacity-100  transition duration-300 ease">
               Email Me
            </button>

            <button className="rounded-full w-full text-center py-2 px-5  text-white bg-gradient-to-r from-indigo-700 to-indigo-400 opacity-90 hover:opacity-100 transition duration-300 ease ">
               Dark Theme
            </button>
         </div>
      </div>
   )
}
