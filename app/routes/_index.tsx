import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "lui's homepage" },
    { name: "description", content: "Welcome to my homepage!" },
  ];
};

function HeaderButton({ target, title, selected = "" }: any ){
  const conditionalStyles = (target === selected) ? "bg-emerald-200 text-emerald-900" : "bg-emerald-500 text-white"
  
  const buttonClass = `${conditionalStyles} 
    hover:bg-yellow-500 
    py-2 
    px-4 
    m-1 
    rounded`
  return(
    <a href={"/" + target}>
      <button className={buttonClass}>
        {title}
      </button>
    </a>
  )
}

export function Header({ selected = "" }:{selected: string}) {
  return(
    <>
      <div className="flex flex-row p-1 justify-center">
      <HeaderButton target="./" title="🏠" selected={selected} />
      <HeaderButton target="about" title="about" selected={selected}/>
      <HeaderButton target="projects" title="projects" selected={selected}/>
      <HeaderButton target="games" title="games" selected={selected}/>
      <HeaderButton target="words" title="words" selected={selected}/>
      <HeaderButton target="devnotes" title="dev notes" selected={selected}/>
      </div>
    </>
  )
  
}


export function Socials() {
  return(
    <div className="m-5">
      <br />
      <h1> Socials: </h1>
      <li>
        <a href="https://github.com/yablochko8/">
          Github
        </a>
      </li>
      <li>
      <a href="https://www.linkedin.com/in/luismyth/">
        LinkedIn
      </a>
      </li>
      <li>
      <a href="https://x.com/yablochko/">
        Twitter / x dot com
      </a>
      </li>
  </div>
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
