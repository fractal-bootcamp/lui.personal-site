import { Header } from "./_index";

import { Socials } from "../components/socials"
import { Badge } from "~/components/badge";


const badgeRowClass = "flex flex-row flex-wrap justify-center"
const textRowClass = "flex flex-row flex-wrap justify-center text-lg my-10 py-5"
export default function About() {
    return (
        <div>
            <Header selected="about" />
            <div className="p-5">

                <div className="flex flex-row">
                    <div className="flex flex-col align-top p-5">
                        <img src="./images/avatar.png" width="1000" className="rounded-lg" />
                    </div>
                    <div className="flex flex-col align-top p-5">

                        Hi! My name is Lúí - an Irish spelling of Louie with the same pronunciation - I'm happy for it to be written simply as Lui.

                        I live in Dún Laoghaire, a smallish port town just south of Dublin, Ireland. I previously lived in London for years, plus briefly in Brussels and Moscow.

                        I'm in NYC for June, July, August for Fractal Bootcamp.

                        I've worked in product management in the AI art space.

                        I love books, art, trees, games, languages, history.

                        Using the skills from the bootcamp I'm going to start/cofound/join a startup in one of these areas.

                    </div>
                </div>

                <br />
                <div className={textRowClass}>
                    These are my current obsessions:
                </div>

                <div className={badgeRowClass}>
                    <Badge
                        title="History"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-0.png"
                    />
                    <Badge
                        title="Art"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-0.png"
                    />
                    <Badge
                        title="Geopolitics"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-0-5.png"
                    />
                    <Badge
                        title="Economics"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-1.png"
                    />
                    <Badge
                        title="Coding"
                        targetUrl="/devnotes"
                        avatarUrl="./images/owl-1.png"
                        sameWindow={true}
                    />
                    <Badge
                        title="Languages"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-1.png"
                    />
                    <Badge
                        title="Crosswords"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-1.png"
                    />
                    <Badge
                        title="Urbanism"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-1.png"
                    />
                    <Badge
                        title="Trees"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-1.png"
                    />
                    <Badge
                        title="Classics"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-0.png"
                    />
                </div>
                <div className={textRowClass}>
                    These are former obsessions of mine. Saying goodby to old obsessions is difficult but healthy. Some of them may resurface anew but even if they don't, they've been part of the journey.
                </div>
                <div className={badgeRowClass}>
                    <Badge
                        title="AI Image Generation"
                        targetUrl="https://www.shutterstock.com/ai-image-generator"
                        avatarUrl="./images/owl-1.png"
                    />
                    <Badge
                        title="Prediction Markets"
                        targetUrl="https://manifold.markets/Lui"
                        avatarUrl="./images/owl-1.png"
                    />
                    <Badge
                        title="Digital Anthropology"
                        targetUrl="https://www.ucl.ac.uk/prospective-students/graduate/taught-degrees/digital-anthropology-msc"
                        avatarUrl="./images/owl-1.png"
                    />
                    <Badge
                        title="The radical Left wing of 2011-2014 Crypto"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-0.png"
                    />
                    <Badge
                        title="Conway's Game of Life"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-1.png"
                    />
                    <Badge
                        title="Universal Basic Income"
                        targetUrl="https://www.basicincome.ie"
                        avatarUrl="./images/owl-1.png"
                    />
                    <Badge
                        title="Russian"
                        targetUrl="https://www.basicincome.ie"
                        avatarUrl="./images/owl-1.png"
                    />
                    <Badge
                        title="James Joyce"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-1.png"
                    />
                    <Badge
                        title="European Studies"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-1.png"
                    />

                </div>
                <div className={textRowClass}>
                    These are my favourite aesthetics.
                </div>

                <div className={badgeRowClass}>
                    <Badge
                        title="Catholica / Italian Baroque"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-1.png"
                    />

                    <Badge
                        title="Ligurian Laze"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-1.png"
                    />
                    <Badge
                        title="Caucasus Christian"
                        targetUrl="https://en.wikipedia.org/wiki/Main_Page"
                        avatarUrl="./images/owl-1.png"
                    />
                </div>
                <div className={textRowClass}>
                    But also...
                </div>

                <div className={badgeRowClass}>
                    <Badge
                        title="Airport Glass-And-Steel Minimalism"
                        targetUrl="https://www.basicincome.ie"
                        avatarUrl="./images/owl-1.png"
                    />
                    <Badge
                        title="Uniqlo"
                        targetUrl="https://www.basicincome.ie"
                        avatarUrl="./images/owl-1.png"
                    />
                </div>



                <img src="./images/elm.jpg" width="200" className="rounded-lg" />
            </div>
            <Socials />
        </div>
    );
}
