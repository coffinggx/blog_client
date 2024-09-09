import { NavLink } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { useState } from "react"
const  NavLinks = () => {
    return(
        <div className=" flex text-xl font-semibold flex-col md:flex-row text-black gap-4 px-3 ">
        <NavLink to ="/" > Home</NavLink>
        <NavLink to="/login" >Admin?</NavLink>
        </div>
    )
}

export default function Nav(){
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => setIsOpen(!isOpen)
    return(
        <> <div className="md:w-1/5 w-1/7">
            <div className="hidden md:block"><NavLinks/></div>
        
        <div className="block md:hidden">
            <button  onClick={toggleMenu}>
                {isOpen ? <X/> : <Menu/>}
                
            </button>
        </div>
    </div>
    {isOpen && (
        <div className="flex flex-col basis-full items-center ">
            <NavLinks/>
        </div>
    )}
        </>
   
)}
