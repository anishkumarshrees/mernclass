import { useEffect, useState } from "react"

function LearningUseEffect(){
    //type 1 useEffect : it is only fetch when page in loaded for first time
    useEffect(function(){
        console.log("useEffect is called");

    },[])
    let [number, setNumber]=useState(0)
    function increaNumber(){
        setNumber(number +1)
    }

    //type 2 useEffect: it fetch when page is loaded + fetch every time when state is change
    // useEffect(function(){
    //     console.log("useEffect is called");
    // },[number])

    //type 3 useEffect: every time it fetch wheter it is in loaded page or change in any state
    useEffect(function(){
        console.log("useEffect is called");
    })


    return (
       <>
       <h2>learning useEffect</h2>
       <h2>{number}</h2>
       <button onClick={increaNumber}>+</button>
       </>
    )
}

export default LearningUseEffect