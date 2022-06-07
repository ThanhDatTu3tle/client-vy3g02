import React, { Component } from 'react';
import axios from 'axios';
import { useState, useEffect } from "react";
import VeMayBay from './VeMayBay';

const ChuyenBay = () => {
  const [flight, setFlight] = useState([]);
  const veMayBay = VeMayBay;
  // const initialDate = veMayBay.initialDate;
  // const departureInput = veMayBay.departureInput;
  // const destinationInput = veMayBay.destinationInput;
  // const apiSearch = veMayBay.sendQuery();

  useEffect(() => {
    let mounted = true;
    const apiUrl = sessionStorage.getItem('url');
    fetch(`${apiUrl}`)
      .then(response => response.json())
      .then(items => {
        if(mounted) {
          setFlight(items)
        }
      })
      return () => mounted = false;
  }, []);

  return (
    <div>
      <div>
      {
        <div key={flight.maChuyenBay}>
          <div className="card d_flex">
            <div className="left">  
              <div className="title">
                {flight.noiDi} → {flight.noiDen}
              </div>
              <p className="date">
                {flight.ngayCatCanh} | {flight.loaiVe}
              </p>
            </div>
          </div>              
        </div>
      } 
      </div>
    </div>
  )
}

export default ChuyenBay;