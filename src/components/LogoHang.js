import React, { Component } from 'react';
import axios from 'axios';
class LogoHang extends Component {
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
            <div className="css-1dbjc4n r-uia4a0 r-1awozwy r-18u37iz r-1w6e6rj r-1h0z5md">
              <div className="css-1dbjc4n r-1kb76zh">
                <img
                  src={flight.imageHang}
                  decoding="async"
                  width={28}
                  style={{
                    height: 28,
                    objectFit: "contain",
                    objectPosition: "50% 50%",
                  }}
                />
              </div>
            </div>
          </div>
        } 
        </div>
      </div>
    )
  }
}

export default LogoHang;