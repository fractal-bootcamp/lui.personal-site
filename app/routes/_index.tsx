import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "lui's homepage" },
    { name: "description", content: "Welcome to my homepage!" },
  ];
};

function HeaderButton({ target, title, importance = "secondary" }: any ){
  let buttonClass = ""
  if(importance === "primary") {
    buttonClass = "bg-red-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
  }
  else if(importance === "secondary") {
    buttonClass = "bg-blue-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
  }
  return(
    <a href={"/" + target}>
      <button className={buttonClass}>
        {title}
      </button>
    </a>
  )
}

export function Header() {
  return(
    <>
  <br />
  <div className="flex space-x-4 px-5">
  <HeaderButton target="./" title="homepage" importance="primary" />
  <HeaderButton target="about" title="about" />
  <HeaderButton target="projects" title="projects" />
  <HeaderButton target="games" title="games" />
  <HeaderButton target="words" title="words" />
  <HeaderButton target="devnotes" title="dev notes" />
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
      <Header />
      <div className = "p-5">

        <p>
          Welcome to my website.
        </p>
      </div>
      <Socials />
    </>
  );
}
