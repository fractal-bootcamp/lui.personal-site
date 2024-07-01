import { Header } from "./_index";

import { Socials } from "../components/socials"


import { Badge } from "../components/badge";
import { DisplayMarkdown } from "~/components/MarkdownSelector";



export default function DevNotes() {
    return (
        <div>
            <Header selected="devnotes" />
            <div className="mx-5 mt-10">
                Some quick reference notes:
            </div>
            <DisplayMarkdown />

            <div className="mx-5 mt-10">
                Longer notes, all in Google Docs for now:
            </div>
            <div className="flex flex-row">
                <Badge
                    title="Pre-Course Notes"
                    targetUrl="https://docs.google.com/document/d/1r4CFgNYHy2UIXLnQAgVubdNs8fzIdMPh97UzZ71pWsw/edit"
                    avatarUrl="./images/owl-0.png"
                />
                <Badge
                    title="Week 1 Notes"
                    targetUrl="https://docs.google.com/document/d/14KXfLPssz5a5ZVJEJXZi3KtS2NTW1cSYpujTEPavEI8/edit"
                    avatarUrl="./images/owl-0-5.png"
                />
                <Badge
                    title="Week 2-3 Notes"
                    targetUrl="https://docs.google.com/document/d/1V5uNxS8XeNY875ZzNb7YZdZYy2t53amV4o7HyDLRh7Q/edit"
                    avatarUrl="./images/owl-1.png"
                />
            </div>
            <div className="mx-5 mt-10">
                Things I didn't make but I find extremely useful:
            </div>
            <div className="flex flex-row">
                <Badge
                    title="Tailwind Colors"
                    targetUrl="https://tailwindcss.com/docs/customizing-colors"
                    avatarUrl="./images/palette-2.png"
                />
                <Badge
                    title="Tailwind Tags"
                    targetUrl="https://nerdcave.com/tailwind-cheat-sheet"
                    avatarUrl="./images/tailwind-cheatsheet.png"
                />
            </div>


            <Socials />
        </div>
    );
}
