import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import { NavbarMenu } from "../../mockData/data";

interface ResponsiveMenuProps {
    open: boolean;
}

const ResponsiveMenu: FC<ResponsiveMenuProps> = ({open}) => {
    return (
        <AnimatePresence>
            {
                open && (
                    <motion.div
                        initial={{opacity: 0, y:-100}}
                        animate={{opacity:1, y:0}}
                        exit={{opacity:0, y:-100}}
                        transition={{duration:0.3}}
                        className="absolute top-14 left-0 w-full h-screen z-20">
                            <div className="text-xl font-semibold uppercase bg-primary-100 text-white p-10 m-2 rounded-md">
                                <ul className="flex flex-col justify-center items-center gap-10">
                                    {
                                        NavbarMenu.map((item) => {
                                            return (
                                                <li key={item.id}>
                                                    <a href={item.url}>{item.title}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}

export default ResponsiveMenu;