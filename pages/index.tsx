import Head from "next/head"
import { BsCodeSlash } from "react-icons/bs"

const skills = [
   { name: "skill name", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", icon: BsCodeSlash },
   { name: "skill name", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", icon: BsCodeSlash },
   { name: "skill name", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", icon: BsCodeSlash },
   { name: "skill name", description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit", icon: BsCodeSlash },
]

export default function About() {
   return (
      <div className="">
         <Head>
            <title>About Me | Portfolio - SAM M.</title>
            <meta name="description" content="About Me, Who is Sam Makhlouf?" />
         </Head>

         <main className="w-full">
            <div className="mb-2 px-4 md:px-8">
               <h2 className="py-3 text-2xl font-bold">Who am I ?</h2>
               <p className="text-gray-600 dark:text-gray-400">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti quaerat aliquid porro ut quae error
                  eveniet? Nulla in, dolorum labore rerum nobis magnam quaerat dolorem quod. Animi sit obcaecati
                  voluptatibus!
               </p>
            </div>

            <div className=" w-full py-4 px-4 md:px-8">
               <h2 className="py-2 text-2xl font-bold capitalize">Some of My Skills</h2>

               <div className="grid grid-cols-12 gap-4 mt-2">
                  {skills.map((skill, index) => (
                     <div
                        key={index}
                        className="group lg:col-span-6 col-span-12 flex items-start rounded-lg p-3  shadow-lg  border dark:border-gray-500 hover:border-indigo-400 dark:hover:border-indigo-500 "
                     >
                        <skill.icon className="text-3xl mr-3 text-indigo-500" />

                        <div className="">
                           <h3 className="text-xl capitalize font-semibold group-hover:text-indigo-500">
                              {skill.name}
                           </h3>

                           <p className="text-gray-600  dark:text-gray-400 py-2">{skill.description}</p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </main>
      </div>
   )
}
