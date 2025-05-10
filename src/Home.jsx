import { useState } from "react"



function Home(){
    // let something = useState(100) //[100,f] array called vako xa first maa 100 and second maa function aako xa
    // let myValue = something[0] //useState ko first ko value call gareko
    // let myFunction = something[1] //useState ko second index call gareko
    let[number,setNumber]= useState(0) //mathi ko code eti maa lekhna milyo
    function increaseMyValue(){
        // myValue = myValue + 1 yo garna milena react maa
        // myFunction(myValue + 1)
        setNumber(number +1)
        console.log(number)
    }
    function decreaseMyValue(){
        // myValue = myValue + 1 yo garna milena react maa
        // myFunction(myValue + 1)
        setNumber(number -1)
        console.log(number)
    }



    return(

<>

<div>
    <h1>{number}</h1>
    <button onClick={increaseMyValue} style={{width: "100px", height:"50px"}}>+</button>
    <button onClick={decreaseMyValue}>-</button>
</div>
</>
    )
}

export default Home