import React from "react";
import goodPhoto from "../images/good-photo.png"

const MyDescription = () => {
    return (
    <div className="MyDescription-container">
        <h1 className="Front-end">Front-end React Developer</h1>
        <p className="Who-am-I">Hi! I'm Surnov Simon! A passionate developer from Russia, based in Thiland, Phucket</p>
        <img src={goodPhoto} alt="My portrey" />
    </div>
    )
}
export default MyDescription;