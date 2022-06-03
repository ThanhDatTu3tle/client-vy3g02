import React, { Component } from 'react';
import axios from 'axios';

class ChuyenBay extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      flight: ''
    }
  }

  componentDidMount() {
    axios.get('http://139.59.225.244:3001/flight')
    .then(response => {
      console.log(response);
      this.setState({ flight: response.data })
    })
    .catch(err => {
      console.log(err);
    })
  }

  render() {
    const { flight } = this.state;
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
                  T6, 06 Thg 05 2022 | {flight.loaiVe}
                </p>
              </div>
            </div>              
          </div>
        } 
        </div>
      </div>
    )
  }
}

export default ChuyenBay;