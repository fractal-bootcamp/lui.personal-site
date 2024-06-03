import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "lui's homepage" },
    { name: "description", content: "Welcome to my homepage!" },
  ];
};

function HeaderButton({ target, title }: any ){
  return(
    <a href={"/" + target}>
      <button className="bg-blue-500 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded">
        {title}
      </button>
    </a>
  )
}

export function Header() {
  return(
    <>
  <a href="./">
    <h1 className="text-3xl font-bold">
      lui's website
    </h1>
  </a>
  <HeaderButton target="about" title="about me" />
  <HeaderButton target="projects" title="projects" />
  <HeaderButton target="games" title="games" />
  <HeaderButton target="words" title="words" />
  </>
  )
  
}


export function Socials() {
  return(
    <>
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
  </>
  )
  
}

export default function Index() {
  return (
    <>
      <Header />
      <p>
        Welcome to my website.
      </p>

      <Socials />
    </>
  );
}
