import React, { useState } from "react";
import { getStudentInfo } from "./ApiSer";


function ViewData() {

    const [data, setData] = useState([]);

    useState( () =>{
        getStudentInfo()
        .then(rs => {
            console.log(rs);
            setData(rs);
        })
    },[])
    

    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     viewd();
    // }, [])
    // let viewd = () => {
    //     axios.get("http://localhost:3500/app/data")
    //         .then((response) => {
    //             console.log(response.data);
    //             setData(response.data);
    //         });
    // }


  return (
        <div>
            <center>
                <button><a href="/signup">signup</a></button>
                <button><a href="/qurdatas">view query data</a></button>
                <button><a href="/viewdata">viewdata</a></button>
                <button><a href="/edit">edit</a></button>
                <button><a href="/login">login</a></button>
                <button><a href="/sucesss">sucesss</a></button>
            </center>
            <div>
                {data.map((e)=>{
                    return(
                        <>
                        {e.firstname}{e.lastname}<br></br>
                        {e.email}
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default ViewData;


    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     viewd();
    // }, [])
    // let viewd = () => {
    //     axios.get("http://localhost:3500/app/data")
    //         .then((response) => {
    //             console.log(response.data);
    //             setData(response.data);
    //         });
    // }
