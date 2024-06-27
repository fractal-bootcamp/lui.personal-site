import { Header } from "./_index";

import { Socials } from "../components/socials"


export default function Words() {
    return (
        <div>
            <Header selected="words" />
            <div className="p-5">

                <h2> Words </h2>
                <p>
                    This is where words can go.
                </p>
                <p>
                    I currently have no writing here but you can always look at <a href="https://magicnumbers.io/">this old blog of mine</a>.
                </p>
            </div>
            <Socials />
        </div>
    );
}
