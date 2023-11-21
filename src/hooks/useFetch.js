import { useEffect, useState } from "react"



const useFetch = (url)=>{
    //logic
    const [data , setData] =useState(null)
    useEffect(()=>{
fetch(url).then(res=>{
    res.json().then(results=>{
        setData(results)
    })
})
    },[])
    return data
}
export default useFetch;