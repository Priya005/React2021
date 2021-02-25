import React from "react";
import web from "../src/images/hero-img.png";
import { NavLink } from "react-router-dom";
import Common from "./Common.jsx";


const About = () =>{
	return (
	<>
	<Common
	name="welcome to about page"
	imgsrc={web}
	visit="/Contact"
	btname="Contact Now"
	/>
	</>
	);  
	
};

export default About;