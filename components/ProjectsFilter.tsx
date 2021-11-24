

const cats= ["all","react" , "node" , "express" , "django" , "mongo"]

interface FilterProp {
  active: string;
  setActive:Function
}

export default function ProjectsFilter({active,setActive}:FilterProp) {

	const handleClick=(e)=> setActive(e.target.textContent)
	

	return (

		<ul className="flex items-center my-4">

			{cats.map(cat=> (

				<li key={cat} className={`mr-2 font-semibold cursor-pointer capitalize ${active === cat ? "text-indigo-500" : "hover:text-indigo-400"}`} onClick={handleClick} >
					{cat}
				</li>

			))}

		</ul>
	)
}


