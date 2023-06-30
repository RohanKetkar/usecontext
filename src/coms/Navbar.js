import React from 'react'
import { useContext } from 'react'
import { appcontext } from '../context/AppContextProvider'
const Navbar = () => {
    // let fetchdata = prop.fetchdata
    const { fetchcontent } = useContext(appcontext)
    return (
        <div onClick={() => fetchcontent()} className="bg-[#0D0B45] text-[#dfdddd] h-[56px] w-[90vw] items-center justify-center flex m-auto rounded-xl mt-5 shadow-xl shadow-[#4545A5] "><h1 className="animate-bounce text-[25px] ">Rohan Blog</h1></div>
    )
}

export default Navbar