import React, { Component } from 'react';
import axios from 'axios';
import MoRong from "../components/MoRong";
import { useState } from "react";
import ChuyenBay from './ChuyenBay';
import LogoHang from './LogoHang';
import ThoiGianBay from './ThoiGianBay';
import ChiTietChuyenBay from './ChiTietChuyenBay';

class PostFlight extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       flights: []
    }
  }

  componentDidMount() {
    axios.get('http://139.59.225.244:3001/flight')
    .then(response => {
      console.log(response);
      this.setState({ flights: response.data })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const { flights } = this.state;
    return (
      <div>
        <div>
        {
          flights.length ?
          flights.map(flight =>
            <div key={flight.maChuyenBay}>
              <div className="body">
                <LogoHang />
                {flight.tenHang}
                <ThoiGianBay />
                <ChiTietChuyenBay />
              </div>
            </div>
          ) :
          null
        } 
        </div>
      </div>
    )
  }
}

export default PostFlight;