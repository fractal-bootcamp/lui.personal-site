import { motion } from "framer-motion";


export interface BadgeProps{
    title: string;
    targetUrl: string;
    avatarUrl: string;
    newWindow?: boolean;
}


export const Badge = ({ title, targetUrl, avatarUrl, newWindow }: BadgeProps) => {
    const targetWindow = newWindow ? "_blank" : "_self"
    return (
        <motion.div
            className="flex justify-center items-center bg-blue-100 m-5 p-5 rounded-lg w-[180px] text-center    
        hover:bg-yellow-200 
        hover:text-yellow-950"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <a href={targetUrl} target={targetWindow}>
                <div className="mb-5 text-center">{title}</div>
                <img src={avatarUrl} className="w-[120px] rounded-lg text-center" />
            </a>
        </motion.div>
    );
};
