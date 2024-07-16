import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import ToDoList from "./ToDoList";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<br/>
			<ToDoList/>
			<br/><br/><br/><br/>
			<Footer/>
		</div>
	);
};

export default Home;
