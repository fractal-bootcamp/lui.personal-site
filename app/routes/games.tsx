import { Header, Socials } from "./_index";



interface GameBadgeProps{
    title: string;
    targetUrl: string;
    avatarUrl: string
}

const GameBadge = ({ title, targetUrl, avatarUrl }: GameBadgeProps) => {
    return(
        <div className="flex justify-center items-center bg-blue-100 m-5 p-5 rounded-lg w-[180px] text-center">
            <a href={targetUrl}>
                <div className="mb-5 text-center">{title}</div>
                <img src = {avatarUrl} className = "w-[120px] rounded-lg text-center"/>
            </a>
        </div>
    )
}



export default function Games() {
    return (
        <div>
        <Header selected="games"/>
        <div className="mx-5 mt-10">
            Games I made:
        </div>
        <div className="flex flex-row">
            <GameBadge
                title = "Tic Tac Toe"
                targetUrl = "/xo"
                avatarUrl = "./images/owl-0.png"
            />
            <GameBadge
                title = "Game 2"
                targetUrl = "https://en.wikipedia.org/wiki/Main_Page"
                avatarUrl = "./images/owl-1.png"
            />
        </div>
        <Socials />

        </div>
    );
  }
  