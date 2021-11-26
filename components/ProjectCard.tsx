import Image from "next/image"


import { IProject } from "../types"


// export interface IProject {
//   name: string;
//   description: string;
//   image_path: string;
//   deployed_url: string;
//   github_url: string;
//   category: Category[];
//   key_techs: string[];
// }


export default function ProjectCard({project}:{project:IProject}) {
	return (
		<div  className="transition duration-500 ease-in-out shadow-md rounded-lg border-2 border-transparent hover:border-indigo-500 cursor-pointer overflow-hidden dark:bg-gray-800">
            <Image
            	width="560"
            	height="330"
               src={project.image_path}
               alt={project.name}
               className="object-top w-full object-cover"
            />

            <div className="w-full p-3">
            	<h3 className="text-sm font-semibold">{project.name}</h3>
            </div>
		</div>
	)
}