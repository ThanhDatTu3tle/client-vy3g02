import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Me from './components/Me';
import Air from "./pages/Air";
import DetailAir from "./pages/DetailAir";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" exact element={<Air />} />
				<Route path="me" element={<Me />} />
				<Route path={`${sessionStorage.shortUrl}`}  element={<DetailAir />} />
			</Routes>	
			<Footer />
		</div>
	)
}

export default App;
