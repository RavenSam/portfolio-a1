import Link from "next/link"

const links = [
   { name: "about", slug: "/" },
   { name: "resume", slug: "/resume" },
   { name: "projects", slug: "/projects" },
]

interface NavProp {
  pathname: string;
}

export default function Navbar({pathname}:NavProp) {

   return (
      <div className="w-full  mb-4 pt-4 px-4 border-b dark:border-gray-600">
         <nav className="w-full flex items-center justify-end ">
            {links.map((link, index) => (
               <Link key={index} href={link.slug}>
                  <a
                     className={`py-1 px-4 mb-3 rounded-full md:text-lg capitalize  ${
                        pathname === link.slug ? "text-white bg-indigo-500" : "hover:text-indigo-400"
                     }`}
                  >
                     {link.name}
                  </a>
               </Link>
            ))}
         </nav>
      </div>
   )
}
