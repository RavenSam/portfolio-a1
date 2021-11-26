import Head from "next/head";
import { useState, useEffect } from "react";
import { projects as projectsData } from "../data";
import { Category } from "../types";

import { ProjectsFilter, ProjectCard } from "@components/index";

export default function Projects() {
   const [projects, setProjects] = useState(projectsData);
   const [active, setActive] = useState<Category | "all">("all");

   useEffect(() => {
      if (active === "all") {
         setProjects(projectsData);
      } else {
         const filteredProjects = projectsData.filter((project) =>
            project.category.includes(active)
         );

         setProjects(filteredProjects);
      }
   }, [active]);

   return (
      <>
         <Head>
            <title>My Projects | Portfolio - SAM M.</title>
            <meta
               name="description"
               content="some web developement projects with: javascript, react, nextjs, html, css, tailwindcss"
            />
         </Head>

         <div className="mb-3 px-4 md:px-8 ">
            <h2 className="py-2 text-2xl font-bold capitalize">Projects</h2>

            <ProjectsFilter active={active} setActive={setActive} />

            <div className="overflow-y-scroll -mr-4 md:-mr-8 pr-2" style={{ height: "63vh" }}>
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {projects.map((project) => (
                     <ProjectCard key={project.name} project={project} />
                  ))}
               </div>
            </div>
         </div>
      </>
   );
}
