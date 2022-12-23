import React, { useState } from "react";

function Operter() {

    const [user, setUser] = useState({
        nam: "",  //    --->    var name:" ";    
        age: ""   //    --->    var age :" "
    });
    const nam = (e) => {
        setUser({ ...user, nam: e.target.value });      // (...)---->It's called (spread attributes) and its aim is to make the (passing of props easier).
    };                                                   //  nam & age ---> props
    const age = (event) => {
        setUser({ ...user, age: event.target.value });
    };

    const submit = () => {
        // alert(user.nam)
        if (user.age >= 18) {
            document.getElementById("res").innerHTML = ("hey " + `${user.nam}` + " your elagiable to vote");
        }
        else {
            alert("Hey " + `${user.nam}` + " sorry your not elagiable to vote")
        }
    }
    //--------------------[loop]----------------------------------------------------------------------------------------------------
    const loo = () => {
        let i;
        for (i = 1; i < 10; i++) {
            document.write(i)
        }
    }
    // loo();

    let name = () => {
        let i;
        let na = "ajay";
        let len = na.length;
        for (i = 0; i < len; i++) {
            document.write(na.charAt(i) + "<br>")
        }
    }
    //----------------------------------------------------------
    const [input1, setInput1] = useState();
    const [input2, setInput2] = useState();

    const [result, setResult] = useState();

    const fun = () => {
        setResult(parseInt(input1) + parseInt(input2));
    };
    //----------------------------------------------------------

    //  Array 

    //  1
    let ajay = ["ajay ", "krishnan"];

    //  2
    let aj = {
        firsnam: "ajay",
        lastnam: "ammlu"
    }

    //  3
    const numbers = [1, 2, 3, 4, 5];

    //  4
    const number = [9, 3, 6, 7, 5, 1, 7, 9, 4, 8];
    const num = number.map((e) => (e));
    //  5
    let ajayy = [
        {
            fnam: "abi",
            lnam: "naya",
            age: 28,
            addre: {
                fline: "palayam",
                sline: "dindigul"
            }
        },
        {
            fnam: "anu",
            lnam: "siya",
            age: 26,
            addre: {
                fline: "palayam",
                sline: "dindigul"
            }
        },
        {
            fnam: "ajay",
            lnam: "krish",
            age: 22,
            addre: {
                fline: "palayam",
                sline: "dindigul"
            }
        }
    ]
    //  5
    const [stud1, setStud1] = useState();
    const [stud2, setStud2] = useState();
    const [stud3, setStud3] = useState();

    let ajai = [
        {
            fnam: "abi",
            lnam: "naya",
            age: 28,
            addre: {
                fline: "palayam",
                sline: "dindigul"
            }
        },
        {
            fnam: "anu",
            lnam: "siya",
            age: 26
        },
        {
            fnam: "ajay",
            lnam: "krish",
            age: 22
        }
    ]

    return (
        <div>
            Name:<input type="text" onChange={nam}></input>
            Age:<input type="text" onChange={age}></input>
            <button onClick={submit}>submit</button>
            <p id="res"> </p><br /><hr />
            <hr></hr><br />

            {/* ---------------------------------------- */}
            <button onClick={loo}> for loop</button>

            <br /><hr />
            <hr></hr><br />

            <button onClick={name}> for loop</button>

            <br /><hr />
            <hr></hr><br />
            {/* ---------------------------------------- */}

            add<br />
            <input type="number"
                onChange={s => setInput1(s.target.value)}
            />
            <input
                type="number"
                onChange={e => setInput2(e.target.value)}
            />
            <button onClick={fun}>submit</button>
            <p>{result}</p>
            <br /><hr />
            <hr></hr><br />
            {/* ---------------------------------------- */}

            <h1>map method</h1>

            <p>Method 1 : {ajay}</p>
            <hr></hr>

            <p>Method 2 : {aj.firsnam} {aj.lastnam}</p>
            <hr></hr>

            <p>Method 3 : {numbers.map((e) => e)}</p>
            <hr></hr>

            <p>Method 4 : {num}</p>
            <hr></hr>

            <p>Method 5 : {ajai.map((e) => e.fnam)}</p>
            <hr></hr>
            
            <p>Method 6 :

            {/* 
                
                syntex
                
                {ajai.map((data,key) => { 
                    return( 
                            {data.fnam}
                          ) 
                        }
                 )} 
             */}

                {ajayy.map((data) => {
                    console.log(data);
                    return (
                        <div>
                            {data.fnam}{data.lnam}<br></br>
                            {data.age}<br/>
                            {data.addre.fline}<br/>
                            {data.addre.sline}<br/>
                        </div>
                    );
                })}
            </p>
            <hr></hr>
            <p>Method 7 :

                {ajai.map((data) => {
                    console.log(data);
                    return (
                        <div>
                            {data.fnam}{data.lnam}<br></br>
                            {data.age}<br/>
                            {data?.addre?.fline}<br/>
                            {data?.addre?.sline}<br/>
                        </div>
                    );
                })}
            </p>

            <p>Method 8 :
            <p>Array index [0] = {ajai[0].fnam},{ajai[0].addre.fline},{ajai[0].addre.sline}</p>
            <p>Array index [1] = {ajai[1].fnam}</p>
            <p>Array index [2] = {ajai[2].fnam}</p>
            </p>
            

        </div>
    )
}

export default Operter;