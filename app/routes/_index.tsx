import type { MetaFunction } from "@remix-run/node";

import {motion} from "framer-motion"

import { Socials } from "../components/socials"

export const meta: MetaFunction = () => {
  return [
    { title: "lui's homepage" },
    { name: "description", content: "Welcome to my homepage!" },
  ];
};

function HeaderButton({ target, title, selected = "" }: any ){
  const conditionalStyles = (target === selected) ?
   "bg-emerald-200 text-emerald-900" : 
   "bg-emerald-500 text-white"
  
  const buttonClass = `${conditionalStyles} 
    border-emerald-600
    hover:bg-yellow-200 
    hover:text-yellow-950
    py-1
    md:py-2
    px-2
    md:px-4

    text-xs
    sm:text-base

    rounded`
  return(
    <a href={"/" + target}>
      <motion.button 
      className={buttonClass}
      whileHover = {{ scale: 1.05 }}
      whileTap = {{ scale: 0.90 }}
    
      >
        {title}
      </motion.button>
    </a>
  )
}

export function Header({ selected = "" }:{selected: string}) {
  return(
    <>
      <div className="flex flex-row p-1 justify-center flex-wrap items-center space-x-1 sm:space-x-2">
      <HeaderButton target="./" title="🏠" selected={selected} />
      <HeaderButton target="about" title="about" selected={selected}/>
      <HeaderButton target="projects" title="projects" selected={selected}/>
      <HeaderButton target="games" title="games" selected={selected}/>
      <HeaderButton target="words" title="words" selected={selected}/>
      <HeaderButton target="devnotes" title="dev" selected={selected}/>
      </div>
    </>
  )
  
}




export default function Index() {
  return (
    <>
      <Header selected="./"/>
      <div className = "p-5">

        <p>
          Welcome to my website.
        </p>
      </div>
      <Socials />
    </>
  );
}
