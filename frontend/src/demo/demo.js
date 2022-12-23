import React, { useState } from "react";

function Demo() {
    
    //------------------------function alert --------------------
    let alt = () => {
        alert("hai this is function alert method")
    }
    
    //---------counter with arrow fun method---------------------
    
    let [count, setCount] = useState(0);
    
    //------------counter with fun method------------------------
    
    const [total,setTotal]=useState(0);

    const add=()=>{
        setTotal(total+1)
    }
    const sub=()=>{
        setTotal(total-1)
    }

    //-----------------------------------------------------------
    let fun=()=>{
        window.location.href = "https://www.google.com/";
    }

    return (
        <div>
            <center>
                <div><button onClick={alt}>onClick with function method</button></div>
                <br></br>
                <div><button onClick={()=>{alert("this is arrow function alert method")}}>onClick with Arrow function method</button></div>
            </center>
            <hr></hr>


            <center>
                counter with arrow function method
                <button onClick={() => { setCount(count + 1) }}>+</button>
                <p>the value is :{count}</p>
                <button onClick={() => { setCount(count - 1) }}>-</button>
            </center><br></br>
            <hr></hr>


            <center>
                counter with function method
                <button onClick={add}>+</button>
                <p>the value is :{total}</p>
                <button onClick={sub}>-</button>
            </center><br></br>
            <hr></hr>

            <button id="myButton" onClick={fun}>home</button>
        </div>
    )
}

export default Demo;