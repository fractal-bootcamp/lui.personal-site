import { Header } from "./_index";

import { Socials } from "../components/socials"

import { Badge } from "../components/badge";


export default function Games() {
    return (
        <div>
        <Header selected="games"/>
        <div className="mx-5 mt-10">
            Games I made:
        </div>
        <div className="flex flex-row">
            <Badge
                title = "Tic Tac Toe"
                targetUrl = "/xo"
                avatarUrl = "./images/owl-0.png"
                newWindow = {false}
            />
            <Badge
                title = "Game 2"
                targetUrl = "https://en.wikipedia.org/wiki/Main_Page"
                avatarUrl = "./images/owl-1.png"
            />
        </div>
        <Socials />

        </div>
    );
  }
  