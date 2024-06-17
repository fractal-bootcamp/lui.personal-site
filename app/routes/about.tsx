import { Header } from "./_index";

import { Socials } from "../components/socials"


export default function About() {
    return (
        <div>
        <Header selected="about"/>
        <div className = "p-5">

            <h2> About </h2>
            
            <img src="./images/avatar.png" width="200" className="rounded-lg" />

            <p>
                Hi! My name is Lúí - an Irish spelling of Louie with the same pronunciation - I'm happy for it to be written simply as Lui.

                I live in a smallish port town called Dún Laoghaire just south of Dublin, Ireland, previously lived in London for years, plus briefly in Brussels and Moscow.

                I'm in NYC for June, July, August for Fractal Bootcamp.

                I've worked in product management in the AI art space.

                I love books, art, trees, games, languages, history.

                Using the skills from the bootcamp I'm going to start/cofound/join a startup in one of these areas.

            </p>
            <br />
            <p>
                I like trees, such as this elm:
            </p>

            <img src="./images/elm.jpg" width="200" className="rounded-lg" />
        </div>
        <Socials />
        </div>
    );
  }
  