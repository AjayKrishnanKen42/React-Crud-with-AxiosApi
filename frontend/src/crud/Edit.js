import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MdPreview, MdEdit } from "react-icons/md";

function Edit() {

    const [data, setData] = useState([]);
    useEffect(() => {
        getData();
    }, []);
    
    const getData = () => {
        axios.get("http://localhost:3500/app/data")
            .then((response) => {
                console.log(response.data);
                setData(response.data);
            });
    };
    //  delete item
    const deleteItem = (id) => {
        console.log(id);
        axios.delete(`http://localhost:3500/app/${id}`)
            .then(() => getData())
            .catch((err) => console.log(err));
    };

    let editPop=()=>{
        alert("hai")
    }

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
                <table class="table table-bordered table-responsive">
                    <tr>
                        <th scope="row">S.no</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                        <th>Operations</th>
                    </tr>
                    {data.map((d, i) => (
                        <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{d.firstname + d.lastname}</td>
                            <td>{d.email}</td>
                            <td>
                                {`${new Date(d.date).getDate()}/${new Date(d.date).getMonth() + 1}/${new Date(d.date).getFullYear()}`}
                            </td>
                            <td>
                                <button onClick={() => deleteItem(d._id)}>
                                    delete
                                </button>
                                <Link to={`/`}>
                                    <MdPreview style={{ margin: "0 5px" }} />
                                </Link>
                                {/* <!-- Button trigger modal --> */}
                                <button style={{color:"blue"}} type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={editPop}>
                                    Edit
                                </button>
                            </td>
                        </tr>
                    ))}


                </table>


                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Edit User</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                FirstName:<input type="text" /><br/>
                                Last Nmae:<input type="text" /><br/>
                                Email:<input type="text" />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Edit;