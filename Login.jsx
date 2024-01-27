import { Button, Container, Stack } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input_Component } from "../components/Input_Component";



const Login = () => {
  const [user_data, setUserData] = useState({});

  const navigate = useNavigate();

  const onChangeHandle = (e) => {
    const value = e.target.value;
    const id = e.target.id;
    // if(id === 'email'){
    //     setUserData({ ...user_data, email: value });
        
    // }
    // else{
    //     setUserData({ ...user_data, password: value });
        
    // }
    setUserData({ ...user_data, [id]: value });
        
    // console.log("val", e.target.id);
  };

  const submit_handle = (e) => {
    e.prevantDefault()

    console.log("data", user_data);
    navigate("/");
  };
  return (
    <Container  className="Container1">
      <Stack>

        <h1 className="text-red-950">Welcome to Login </h1>
        {/* <Demo_Component title={"Login Page"}> */}
        <form 
        // onSubmit={submit_handle}
        >
          <Input_Component
            placeholder={"Email address"}
            type={"email"}
            id={"email"}
            required={true}
            onChange={onChangeHandle}
          /> <br /><br />
          <Input_Component
            required={true}
            placeholder={"Password"}
            type={"password"}
            id={"password"}
            onChange={onChangeHandle}
          />
          <br /><br />
          <Link to="/">
          <Button style={{color: "red",backgroundColor: "lightblue"}}
          type="submit"
          >Submit Details
          </Button></Link><br /><br />
        <button className='log-reg'><Link to = 'register'>Go To Sign Up</Link></button><br /><br />
        <button className='log-reg'><Link to = 'dashboard'>Go To Dashboard</Link></button>
        </form>
      </Stack>
    </Container>
  );
};

// named export
export { Login };