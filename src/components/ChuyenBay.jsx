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
        flight.length ?
        flight.map(item => 
          <div key={item.maChuyenBay}>
            <div className="card d_flex">
              <div className="left">  
                <div className="title">
                  {item.noiDi} → {item.noiDen}
                </div>
                <p className="date">
                  {item.ngayCatCanh} | {item.loaiVe}
                </p>
              </div>
            </div>              
          </div>
        ) :
        null
      } 
      </div>
    </div>
  )
}

export default ChuyenBay;