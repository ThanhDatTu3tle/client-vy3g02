import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Air from "./pages/Air";
import DetailAir from "./pages/DetailAir";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" exact element={<Air />} />
				{/* <Route path="/detail"  component={Detail} /> */}
				{/* <Route path="/list-tour"  component={ListTour} /> */}
				{/* <Route path="/air"  component={Air} /> */}
				<Route path={`${sessionStorage.shortUrl}`}  element={<DetailAir />} />
			</Routes>	
			<Footer />
		</div>
	)
}

export default App;
