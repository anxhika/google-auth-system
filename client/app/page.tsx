"use client";

import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { useState } from "react";

export default function Home() {

  const [user,setUser] = useState<any>(null);

  const handleSuccess = async (credentialResponse:any) => {

    try{

      const res = await axios.post(
        "http://localhost:5000/auth/google",
        {
          token:credentialResponse.credential
        }
      );

      localStorage.setItem("token",res.data.token);

      setUser(res.data.user);

    }

    catch(err){

      console.log(err);

    }

  };

  const logout = () => {

    localStorage.removeItem("token");

    setUser(null);

  };

  const getInitial = (name:string) => {

    return name ? name.charAt(0).toUpperCase() : "?";

  };

  return (

    <div
      style={{
        height:"100vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        background:"linear-gradient(135deg,#020617,#020617,#0f172a)",
        fontFamily:"Segoe UI"
      }}
    >

      <div
        style={{
          background:"rgba(17,24,39,0.95)",
          padding:"45px",
          borderRadius:"18px",
          width:"360px",
          textAlign:"center",
          boxShadow:"0 20px 60px rgba(0,0,0,0.6)"
        }}
      >

        <h1 style={{color:"white"}}>
          Secure Login 🔐
        </h1>

        <p
          style={{
            color:"#9ca3af",
            fontSize:"14px",
            marginBottom:"20px"
          }}
        >
          Sign in safely using Google
        </p>

        {

          !user ?

          <GoogleLogin
            onSuccess={handleSuccess}
            onError={()=>console.log("Login Failed")}
          />

          :

          <div>

            {/* avatar */}

            <div
              style={{
                width:"110px",
                height:"110px",
                borderRadius:"50%",
                margin:"20px auto",
                display:"flex",
                alignItems:"center",
                justifyContent:"center",
                fontSize:"42px",
                fontWeight:"bold",
                color:"white",
                background:"linear-gradient(135deg,#3b82f6,#06b6d4)",
                boxShadow:"0 10px 30px rgba(0,0,0,0.5)"
              }}
            >

              {getInitial(user.name)}

            </div>

            <h2
              style={{
                color:"white",
                marginBottom:"5px"
              }}
            >
              {user.name}
            </h2>

            <p
              style={{
                color:"#9ca3af",
                fontSize:"14px"
              }}
            >
              {user.email}
            </p>

            <p
              style={{
                color:"#22c55e",
                fontSize:"13px",
                marginTop:"8px"
              }}
            >
              ✔ Login successful
            </p>

            <button
              onClick={logout}
              style={{
                marginTop:"20px",
                padding:"10px 22px",
                borderRadius:"8px",
                border:"none",
                background:"#ef4444",
                color:"white",
                cursor:"pointer",
                fontWeight:"bold"
              }}
            >
              Logout
            </button>

          </div>

        }

      </div>

    </div>

  );

}