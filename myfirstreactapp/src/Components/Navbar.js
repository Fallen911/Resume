import React, {useState} from "react";

import icon_male from '../images/icon-male.png'
import { BsCart2 } from "react-icons/bs"
import {HiOutLineBars3} from "react-icons/hi2"
import { Box, 
    Drower, 
    ListItem,
ListItemButton,
ListItemIcon,
ListItemText } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)
    const menuOptions = [
        {
            text: "Surnov.dev",
            icon: <icon_male/>,
        },
        {
            text: "Home",
            icon: <HomeIcon/>,
        },
        {
            text: "About",
            icon: <InfoIcon/>,
        },
        {
            text: "Projects",
            icon: <CommentRoundedIcon/>,
        },
        {
            text: "Contacts",
            icon: <PhoneRoundedIcon/>,
        }
    ]
    return <nav>
        <div className="Nav-name">
            <p>Surnov.dev</p>
            <img src={icon_male} alt="pupil" />
        </div>
        <div className="navbar-links-container">
<a href="">Home</a>
<a href="">About</a>
<a href="">Project</a>
<a href="">Contacts</a>
        </div>
    </nav>;
};
export default Navbar;