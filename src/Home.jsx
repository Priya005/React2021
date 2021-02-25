import React from "react";
import web from "../src/images/img2.svg";
import { NavLink } from "react-router-dom"
import Common from "./Common.jsx";

const Home = () =>{
	return(
		<>
			<Common
				name="welcome to home page"
				imgsrc={web}
				visit="/Services"
				btname="Get Started"
			/>
		</>
	);
};

export default Home;