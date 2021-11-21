import Image from "next/image"
import { BsDownload, BsEnvelopeFill, BsFacebook, BsGeoAltFill, BsGithub, BsLinkedin, BsPhoneFill } from "react-icons/bs"

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

         <h3 className="my-4 ">
            <span className="text-green-400">Makhlouf</span> Sam
         </h3>

         <div className="px-2 w-full text-gray-700   text-center ">
            <p className="rounded-full bg-gray-200 p-2  mb-3 ">Web Developer</p>

            <a href="#" download="#" className="rounded-full  bg-gray-200 p-2  flex items-center justify-center ">
               <BsDownload />
               <span className="mx-2">Download Resume</span>
            </a>
         </div>

         <div className="flex items-center justify-between text-green-400 w-full p-4 my-2  text-2xl">
            <a href="#">
               <BsFacebook />
            </a>

            <a href="#">
               <BsLinkedin />
            </a>

            <a href="#">
               <BsGithub />
            </a>
         </div>

         <div className="bg-gray-200 w-full text-gray-700">
            <div className="rounded-full w-full bg-gray-200 text-center  p-2  mb-3 flex items-center ">
               <span className="mr-2 text-green-400">
                  <BsGeoAltFill />
               </span>
               <span className="">Tizi Ouzou, Algeria</span>
            </div>

            <div className="rounded-full w-full bg-gray-200 text-center  p-2   mb-3 flex items-center ">
               <span className="mr-2 text-green-400">
                  <BsEnvelopeFill />
               </span>
               <span className="">makhloufsam26@gmail.com</span>
            </div>

            <div className="rounded-full w-full bg-gray-200 text-center  p-2  mb-3 flex items-center ">
               <span className="mr-2 text-green-400">
                  <BsPhoneFill />
               </span>
               <span className="">+213967588432</span>
            </div>
         </div>

         <div className="my-4">
            <button className="rounded-full w-full text-center py-2 px-5  mb-3 text-white bg-gradient-to-r from-green-700 to-green-400">
               Email Me
            </button>

            <button className="rounded-full w-full text-center py-2 px-5  text-white bg-gradient-to-r from-green-700 to-green-400">
               Dark Theme
            </button>
         </div>
      </div>
   )
}
