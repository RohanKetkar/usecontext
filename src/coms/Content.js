import React from 'react'
import { appcontext } from "../context/AppContextProvider"
import { useContext } from 'react'
import Spinner from './Spinner'
const Content = () => {
    let { post, changenum, page, loading } = useContext(appcontext)
    // let datanew = data.posts
    return (
        loading ? <Spinner></Spinner> :
            <div className="w-[50vw] bg-[#705fd0] mt-8 m-auto p-8 text-[#cac5c5] rounded-xl shadow-lg shadow-[#5B36B7] hover:bg-[#5B36B7] hover:text-[white] selection:text-orange-700" key={page}>
                {
                    post.map((data) => {
                        return <>
                            <div className="font-bold">
                                <h1 className=" mt-8 text-white bg-black pl-5 h-[30px] pt-1 rounded mb-1"> {data.title}</h1>
                                <h4>By {data.author} on : <span className="text-black font-extrabold ">{data.category}</span></h4>
                                <h3>posted on : <span className="text-black">{data.date}</span></h3>
                                <h5>{data.content}</h5>
                                <h6 className="inline">tag : </h6>
                                {data.tags.map((tag) => {
                                    return <h6 className="inline text-black ml-3 text-extrabold">{tag}</h6>
                                })}
                            </div>
                        </>
                    })
                }
                <div> {page >= 1 && page < 7 && <button className="bg-blue-700 w-[70px] p-3 mt-7 pointer" onClick={() => changenum(page + 1)}> Next </button>}
                    {/* <button className="bg-blue-700 w-[70px] p-3 mt-7 pointer" onClick={() => changenum()} >Next</button> */}
                    {page > 1 && <button className="bg-blue-600 w-[60px] p-3 ml-6 mt-6 pointer" onClick={() => changenum(page - 1)}>Rev</button>}
                </div>
                {/* {console.log(page)} */}
            </div >
    )
}

export default Content