import React from "react";

export const SessionExpired = () =>{
    return(
        <div>
            <nav class="navbar navbar-expand-sm bg-primary navbar-dark">
                <a class="navbar-brand">
                <img src="https://o.remove.bg/downloads/6049c90f-798a-42b4-a380-86d6f331d02a/pngtree-vector-internet-banking-icon-png-image_755759-removebg-preview.png" width="30" height="30" class="d-inline-block align-top" alt="">
                </img> Online Banking System</a>
            </nav>
            <div style={{justifyContent:'center'}}>
                <h3>You have been logged out</h3>
                
                <h6>Session Expired.</h6>
                <p>Last logged in - </p>
                <h6>Suggestions - </h6>
                <p>For security reasons we have disabled back button</p>
                <a href="/login">Click here to go login page</a>
            </div>
            
        </div>

    )
}