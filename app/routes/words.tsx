import { Header } from "./_index";

import { Socials } from "../components/socials"


export default function Words() {
    return (
        <div>
        <Header selected="words"/>
        <div className = "p-5">

            <h2> Words </h2>
            <p>
                This is my writing.
            </p>
        </div>
        <Socials />
        </div>
    );
  }
  