import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function AuthServices({ children }) {
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
    if (loading) return <p>loafding</p>;


    if ( !userToken||isAuthenticated===false) {
        return <Navigate to={"/Signup"} />;
      }


 



  // console.log(isAuthenticated)

 


 
  
  
  return <>{children}</>;
}

export default AuthServices;
