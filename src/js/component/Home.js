import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Digits from "./Digits";
import { faLessThanEqual } from "@fortawesome/free-solid-svg-icons/faLessThanEqual";


//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			{/* First part of the exercice Digits */}
			<Digits description="Time Since You Are Here:" inputTimer={false} startOnLoad={true} maxDigits={7} />
			<hr/>
			<Digits description="Set Alarm At:" inputTimer={true} startOnLoad={false} maxDigits={5} />
			<Footer/>
		</div>
	);
};

export default Home;
