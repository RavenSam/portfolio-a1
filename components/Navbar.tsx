import Link from "next/link"

const links = [
   { name: "about", slug: "/" },
   { name: "resume", slug: "/resume" },
   { name: "projects", slug: "/projects" },
]

export default function Navbar({ pathname }) {
   return (
      <div className="w-full border-b mb-4">
         <nav className="w-full flex items-center justify-end ">
            {links.map((link, index) => (
               <Link key={index} href={link.slug}>
                  <a
                     className={`py-1 px-4 mb-3 rounded-full md:text-lg capitalize  ${
                        pathname === link.slug ? "text-white bg-green-400" : "hover:text-green-400"
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
