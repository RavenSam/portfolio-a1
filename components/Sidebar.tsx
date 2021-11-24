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
import {socialIcons,profile} from "../data"


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

         <h3 className="my-6 text-2xl md:text-4xl font-kaushan">
            <span className="text-indigo-500">{profile.firstname}</span> {profile.lastname}
         </h3>

         <div className="px-2 w-full text-gray-700   text-center ">
            <h3 className="rounded-full mb-2  bg-gray-200 p-2  flex items-center justify-center ">
               <BsCodeSlash className="mr-2 text-xl" />
               <span>{profile.job}</span>
            </h3>
         </div>

         <div className="flex items-center justify-around text-indigo-500 w-full p-4 my-2 ">

            {socialIcons.map((social)=>(
               <a key={social.name} href={social.url} rel="noreferrer" target="_blank">
               <social.icon className="text-2xl" />
            </a>
             ))}
            
         </div>

         <div className="bg-gray-200 w-full text-gray-700 py-3">
            <div className="rounded-full w-full   p-2   flex items-center ">
               <BsGeoAltFill className="mr-3  text-lg text-gray-600" />
               <span className="text-sm">{profile.address}</span>
            </div>

            {profile.email && (
            <div className="rounded-full w-full p-2 flex items-center ">
               <BsEnvelopeFill className="mr-3  text-lg text-gray-600" />
               <span className="text-sm">{profile.email}</span>
            </div>
            )}

            {profile.phone && (
            <div className="rounded-full w-full p-2 flex items-center ">
               <BsPhoneFill className="mr-3  text-lg text-gray-600" />
               <span className="text-sm">{profile.phone}</span>
            </div>
            )}

         </div>

         <div className="my-4">
            <a
               href="#"
               download="#"
               className="block rounded-full w-full text-center py-2 px-5  mb-2 text-white bg-gradient-to-r from-indigo-700 to-indigo-400 opacity-90 hover:opacity-100  transition duration-300 ease"
            >
               Download CV
            </a>

          

            <button className="rounded-full w-full text-center py-2 px-5  text-white bg-gradient-to-r from-indigo-700 to-indigo-400 opacity-90 hover:opacity-100 transition duration-300 ease ">
               Dark Theme
            </button>
         </div>
      </div>
   )
}
