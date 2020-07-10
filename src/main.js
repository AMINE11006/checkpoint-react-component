import React from "react";
import Address from "./profile/Address";
import Name from "./profile/FullName";
import PhotoProfile from "./profile/ProfilPhoto";

const FinalResult = () =>{
    return(
        <div>
        <PhotoProfile/>
        <Name/>
        <Address/>   
        </div>
    );
}

export default FinalResult;