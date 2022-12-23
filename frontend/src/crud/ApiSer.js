import axios from 'axios';

export const getStudentInfo = async data=> {
    const res = await axios.get("http://localhost:3500/app/data");
    return res && res.data ? res.data : null;
  };

export const addNewData =async data=>{
    const ress= await axios.post("http://localhost:3500/app/signUp", {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => console.log(response.data))
            .catch((err) => console.log(err));

            return ress;
    };