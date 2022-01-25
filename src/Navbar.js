import React from 'react';
import  './Body.css'
import { FaBars} from 'react-icons/fa';

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

const Navbar = () => {
    return (
        <div>
            <div className="topnav" id="myTopnav">
                <a href="#" className="icon" onClick={ () => myFunction()} >
                    <FaBars/>
                </a>
                <a href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>

            </div>
        </div>
    );
};

export default Navbar;
