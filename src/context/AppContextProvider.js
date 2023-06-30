import { createContext } from 'react'
import { baseUrl } from '../baseUrl'
import { useState } from 'react'
import { useEffect } from 'react'
export const appcontext = createContext()


function AppContextProvider({ children }) {

    const [post, setpost] = useState([])
    const [page, setpage] = useState(1)
    const [loading, setloading] = useState(true)
    const [count, setcount] = useState(null)
    async function fetchcontent(page) {
        setloading(true)
        let url = baseUrl

        try {
            let dta = await fetch(`${url}?page=${page}`)
            let res = await dta.json()
            setpost(res.posts)
            setpage(res.page)
            // console.log(res.page)
            // setpage(page + 1)
            // console.log(page)
            setcount(res.totalpages)
            // console.log(count)
            // console.log(res)
        } catch (e) {
            console.log(e)
        }
        setloading(false)
    }

    const value = {
        fetchcontent,
        post,
        setpost,
        page,
        setpage,
        loading,
        setloading,
        count,
        setcount,
        changenum,


    }
    useEffect(() => {
        fetchcontent()

    }, [])
    function changenum(page) {
        setpage(page)
        fetchcontent(page)

    }

    return (
        <appcontext.Provider value={value}>
            <div>

                {children}

            </div>
        </appcontext.Provider>
    )
}
export default AppContextProvider;