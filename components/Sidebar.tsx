import Image from "next/image"
import {
   BsCodeSlash,
   BsDownload,
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

         <h3 className="my-4 text-2xl">
            <span className="text-green-400">Makhlouf</span> Sam
         </h3>

         <div className="px-2 w-full text-gray-700   text-center ">
            <h3 className="rounded-full mb-2  bg-gray-200 p-2  flex items-center justify-center ">
               <BsCodeSlash className="mr-2" />
               <span>Web Developer</span>
            </h3>

            <a href="#" download="#" className="rounded-full  bg-gray-200 p-2  flex items-center justify-center ">
               <BsDownload className="mr-2" />
               <span className=" ">Download Resume</span>
            </a>
         </div>

         <div className="flex items-center justify-around text-green-400 w-full p-4 my-2  text-2xl">
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

         <div className="bg-gray-200 w-full text-gray-700 py-3">
            <div className="rounded-full w-full bg-gray-200 text-center  p-2   flex items-center ">
               <BsGeoAltFill className="mr-3 text-green-400 text-lg" />
               <span className="text-sm">Tizi Ouzou, Algeria</span>
            </div>

            <div className="rounded-full w-full bg-gray-200 text-center  p-2    flex items-center ">
               <BsEnvelopeFill className="mr-3 text-green-400 text-lg" />
               <span className="text-sm">makhloufsam26@gmail.com</span>
            </div>

            <div className="rounded-full w-full bg-gray-200 text-center  p-2   flex items-center ">
               <BsPhoneFill className="mr-3 text-green-400 text-lg" />
               <span className="text-sm">+213967588432</span>
            </div>
         </div>

         <div className="my-4">
            <button className="rounded-full w-full text-center py-2 px-5  mb-2 text-white bg-gradient-to-r from-green-700 to-green-400">
               Email Me
            </button>

            <button className="rounded-full w-full text-center py-2 px-5  text-white bg-gradient-to-r from-green-700 to-green-400">
               Dark Theme
            </button>
         </div>
      </div>
   )
}
