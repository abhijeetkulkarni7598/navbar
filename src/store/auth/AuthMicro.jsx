import { message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AuthMicro({ children }) {
  const { user, userToken, loading, checkAuthLoading ,isAuthenticated} = useSelector(
    (state) => state.user
  );
  // console.log(checkAuthLoading)
  // console.log(loading)
  // console.log(userToken)
  // console.log(user)

  if (checkAuthLoading)
    return (
      <h1 style={{ margin: "2rem", textAlign: "center" }}>
        Loading1
      </h1>
    );
    if (loading) return <p>loading</p>;


    if ( !userToken||isAuthenticated===false) {
        return <Navigate to={"/Signup"} />;
      }
    if ( !user.micro_bussiness) {
        message.error("You Don't Have Access Of This Module")

        return <Navigate to={"/"} />;
      }


 



  // console.log(isAuthenticated)

 


 
  
  
  return <>{children}</>;
}

export default AuthMicro;
