import React, { Component } from 'react';
import { useState, useEffect } from "react";

const ChuyenBay = () => {

  const [flight, setFlight] = useState([]);

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
                  {item.ngayCatCanh} | {sessionStorage.getItem('nguoiLon')} Người Lớn, {sessionStorage.getItem('treEm')} Trẻ Em, {sessionStorage.getItem('emBe')} Em Bé  | {item.loaiVe}
                </p>
              </div>
            </div>              
          </div>
        )[0] :
        null
      } 
      </div>
    </div>
  )
}

export default ChuyenBay;