import React, { useState } from "react";
import UserIdContext from "./UserIdContext";

const UserIdState = (props) =>{
    
    const s1 = "mayuri0012"

    const [state, setState] = useState(s1)
    return(
        <UserIdContext.Provider value={state}>
            {props.children}
        </UserIdContext.Provider>
    )
}

export default UserIdState