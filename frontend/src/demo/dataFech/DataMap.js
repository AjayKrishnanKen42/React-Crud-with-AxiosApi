import React, { useEffect } from "react";
import Record from "../demo.json"

function DataMap() {
    useEffect(() => {
        console.log(Record);
    });
    return (
        <div>
            <h1>fetch the data from json file</h1>
            <div>
                {Record.map(e => {
                    return (
                        <p>{e.name} {e.age}</p>
                    )
                })}
                <br/><hr/>
                <select name="cars" id="cars">
                    <option value="volvo">name</option>
                    {
                        Record.map(s =>
                            <option>{s.name}{s.age}</option>
                        )
                    }
                </select>

            </div>

        </div>
    )
}

export default DataMap;