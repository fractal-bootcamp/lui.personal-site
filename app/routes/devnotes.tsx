import { Header } from "./_index";

import { Socials } from "../components/socials"


import {motion} from "framer-motion"


interface DevNotesBadgeProps{
    title: string;
    targetUrl: string;
    avatarUrl: string
}

const DevNotesBadge = ({ title, targetUrl, avatarUrl }: DevNotesBadgeProps) => {
    return(
        <motion.div 
        className="flex justify-center items-center bg-blue-100 m-5 p-5 rounded-lg w-[180px] text-center    
        hover:bg-yellow-200 
        hover:text-yellow-950"
        whileHover = {{ scale: 1.1 }}
        whileTap = {{ scale: 0.90 }}
        >
            <a href={targetUrl} target="_blank" >
                <div className="mb-5 text-center">{title}</div>
                <img src = {avatarUrl} className = "w-[120px] rounded-lg text-center"/>
            </a>
        </motion.div>
    )
}

export default function DevNotes() {
    return (
        <div>
        <Header selected="devnotes"/>
        <div className="mx-5 mt-10">
            Rough notes, all in Google Docs for now:
        </div>
        <div className="flex flex-row">
            <DevNotesBadge
                title = "Pre-Course Notes"
                targetUrl = "https://docs.google.com/document/d/1r4CFgNYHy2UIXLnQAgVubdNs8fzIdMPh97UzZ71pWsw/edit"
                avatarUrl = "./images/owl-0.png"
            />
            <DevNotesBadge
                title = "Week 1 Notes"
                targetUrl = "https://docs.google.com/document/d/14KXfLPssz5a5ZVJEJXZi3KtS2NTW1cSYpujTEPavEI8/edit"
                avatarUrl = "./images/owl-0-5.png"
            />
            <DevNotesBadge
                title = "Week 2-3 Notes"
                targetUrl = "https://docs.google.com/document/d/1V5uNxS8XeNY875ZzNb7YZdZYy2t53amV4o7HyDLRh7Q/edit"
                avatarUrl = "./images/owl-1.png"
            />
        </div>
        <Socials />
        </div>
    );
  }
  