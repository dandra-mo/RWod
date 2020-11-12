import { useState, useEffect } from "react";

export const useTimer = () => {
    const [ time, setTime ] = useState(0)
    const [ play, setPlay ] = useState(false)
     
    useEffect(() => {
        let id
        if (play) {
            id = setInterval(() => {
                console.log(time)
                setTime(state => {
                    
                    return state + 1000
                }) 
            }, 1000) 

            return () => {
                clearInterval(id)
            }
        } else {
            clearInterval(id)
        }
    }, [play])
    return {
        time,
        setTime,
        setPlay,
        play,
    }
}