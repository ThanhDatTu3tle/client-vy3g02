import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Me from './components/Me';
import PreBooking from "./components/PreBooking";
import Air from "./pages/Air";
import DetailAir from "./pages/DetailAir";
import Payment from "./pages/Payment";

function App() {
	return (
		<div>
			<Header />
			<Routes>
				<Route path="/" exact element={<Air />} />
				<Route path="me" element={<Me />} />
				<Route path={`${sessionStorage.shortBookingUrl}`} element={<PreBooking />} />
				<Route path={`${sessionStorage.shortBookingUrl}/payment`} element={<Payment />} />
				<Route path={`${sessionStorage.shortUrl}`}  element={<DetailAir />} />
			</Routes>	
			<Footer />
		</div>
	)
}

export default App;
