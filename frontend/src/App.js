import React from "react";

import Persons from "./Persons";
import View from "./View";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditUser from "./EditUser";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import Sucess from "./Sucess";
import Desin from "./demo/desin";

//-------------------------------------------------
import Demo from "./demo/demo";
import Operter from "./demo/Operators";
//-------------------------------------------------
import DataMap from "./demo/dataFech/DataMap";
//-------------------------------------------------
// .  crud   
import Signup from "./crud/Signup";
import ViewData from "./crud/ViewData";
import Edit from "./crud/Edit";
import Login from "./crud/Login";
import Sucesss from "./crud/Sucesss";


import QurData from "./crud/QurData";
//-------
import { QueryClientProvider, QueryClient } from 'react-query';
const queryClient = new QueryClient();
// import ReactQueryDevtool from 're'
//-----------x-x-x----------


const App = () => {
  // const [response, setResponse] = useState({});
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<SignupForm />}></Route>
            <Route path="/LoginForm" element={<LoginForm />}></Route>
            <Route path="/Sucess" element={<Sucess />}></Route>
            <Route path="/Persons" element={<Persons />}></Route>
            <Route path="/View/:id" element={<View />} component={View}></Route>
            <Route path="/EditUser/:id" element={<EditUser />}></Route>

            {/*------------demo--------- */}
            <Route path="/demo" element={<Demo />}></Route>
            <Route path="/oper" element={<Operter />}></Route>

            {/*------------matrial ui--------- */}
            <Route path="/desin" element={<Desin />}></Route>


            {/*------------data fech--------- */}
            <Route path="/datamap" element={<DataMap />}></Route>

            {/*------------crud--------- */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/viewdata" element={<ViewData />} />
            <Route path="/edit" element={<Edit />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sucesss" element={<Sucesss />} />

            <Route path="/qurdatas" element={<QurData />} />
          </Routes>
        </Router>
      </div>
    </QueryClientProvider>
  );
};

export default App;
