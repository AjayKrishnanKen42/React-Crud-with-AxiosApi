import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { getStudentInfo } from "./ApiSer";

function Sucesss() {
  const location = useLocation();
  const [localEmail, setlocalEmail] = useState(location.state?.email)
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  console.log(data);
  const getData = () => {
    axios.get("http://localhost:3500/app/data")
      .then((response) => {
        console.log(response.data);
        setData(response.data?.filter((x) => {
          return x?.email === localEmail ? x : null;
        }));
      });
  };


  return (
    <div>
      <center>
        <button><a href="/signup">signup</a></button>
        <button><a href="/viewdata">viewdata</a></button>
        <button><a href="/edit">edit</a></button>
        <button><a href="/login">login</a></button>
        <button><a href="/sucesss">sucesss</a></button>
      </center>
      <div>
        <div>
          {/* {localEmail === LoginEmail ? <h4>hi{console.log(data)}</h4> : "null"} */}
          {data.map((e)=>{return(<h1>Hai {e.firstname}{e.lastname},You are suceesfully logged in</h1>)})}
          {data.map((e) => {
            return (
              <>
                {e.email}<br/>
              </>
            )
          })}
          <a href="/edit">Edit profile</a>
        </div>
      </div>
    </div>
  )
}

export default Sucesss;