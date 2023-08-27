import React from "react";
import './ForbiddenPage.css'
import { useNavigate } from "react-router-dom";

export const ForbiddenPage  = () =>{
    const navigate = useNavigate()
    return(
        <div className="page1">
            <center>
                    <div className="page">
                    <p className="err">404</p>
                    <h2>OOPS! PAGE NOT FOUND</h2>
                    <p>Sorry, the page you're looking for doesn't exist.</p>
                    <button onClick={()=>navigate('/')}>RETURN HOME</button>
                </div>
            </center>
        </div>
    )
}