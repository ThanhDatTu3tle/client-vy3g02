import React, { Component } from 'react';
import { useState, useEffect } from "react";

const ChiTietGiaVe = () => {

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

  const [sttGiaVe, setSttGiaVe] = useState(() => {
    for(var i = 1; i <= flight.length; i++) {
      var id = sessionStorage.getItem('shortBookingUrl');
      if (`maChuyenBay=${flight[i].maChuyenBay}` == id) {
        return i;
      }
      return i;
    };

    return i;
  });

  return (
    <div>
      <div>
      {
        flight.length ?
        flight.map(item =>
          <div
            className="css-1dbjc4n r-1l31rp8 r-kdyh1x r-rs99b7 r-18u37iz r-1ifxtd0 r-1s2bzr4 r-xd6kpl r-ymttw5 r-95jzfe r-xaq1zp"
            style={{
              alignItems: "center",
              backgroundColor: "white",
              width: "80%"
            }}
          >
            <div className="css-1dbjc4n" style={{ flex: "7 1 0%" }}>
              <div className="css-1dbjc4n r-18u37iz r-1w6e6rj" style={{marginRight: "60px"}}>
                <div className="css-1dbjc4n r-3691iy r-1rem5b8">
                  <div className="css-1dbjc4n r-18u37iz r-1w6e6rj r-1h0z5md r-6gpygo">
                    <div className="css-1dbjc4n r-13awgt0" style={{marginRight: "50px"}}>
                      <p style={{color: "rgb(255, 94, 31)", fontSize: "22px", fontStyle: "bold"}}>Chi tiết giá</p>
                      <br />
                      <div className="css-1dbjc4n r-1mnahxq">
                        <div
                          dir="auto"
                          className="css-901oao r-13awgt0 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-19u6a5r r-fdjqy7"
                          style={{
                            color: "rgb(104, 113, 118)",
                          }}
                        >
                          Vé người lớn cơ bản (x{sessionStorage.nguoiLon})                             
                        </div>
                      </div>
                      <div className="css-1dbjc4n r-1mnahxq">
                        <div
                          dir="auto"
                          className="css-901oao r-13awgt0 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-19u6a5r r-fdjqy7"
                          style={{
                            color: "rgb(104, 113, 118)",
                          }}
                        >
                          Vé trẻ em cơ bản (x{sessionStorage.treEm})                                    
                        </div>
                      </div>
                      <div className="css-1dbjc4n r-1mnahxq">
                        <div
                          dir="auto"
                          className="css-901oao r-13awgt0 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-19u6a5r r-fdjqy7"
                          style={{
                            color: "rgb(104, 113, 118)",
                          }}
                        >
                          Vé em bé cơ bản (x{sessionStorage.emBe})                                      
                        </div>
                      </div>
                      <hr  width="100%" align="center" />                        
                      <div className="css-1dbjc4n r-1mnahxq">
                        <div
                          dir="auto"
                          className="css-901oao r-13awgt0 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-19u6a5r r-fdjqy7"
                          style={{
                            color: "rgb(104, 113, 118)",
                          }}
                        >
                          Tổng tiền bạn trả                                         
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="css-1dbjc4n" style={{ flex: "7 1 0%", marginTop: "20px" }}>
              <div className="css-1dbjc4n r-18u37iz r-1w6e6rj">
                <div className="css-1dbjc4n r-3691iy r-1rem5b8">
                  <div className="css-1dbjc4n r-18u37iz r-1w6e6rj r-1h0z5md r-6gpygo">
                    <div className="css-1dbjc4n r-13awgt0">
                      <p style={{color: "white", fontSize: "20px"}}>Chi tiết giá</p>
                      <br />
                      <div className="css-1dbjc4n r-1mnahxq">
                        <div
                          dir="auto"
                          className="css-901oao r-13awgt0 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-19u6a5r r-fdjqy7"
                          style={{
                            color: "rgb(104, 113, 118)",
                          }}
                        >
                          {[(item.donGia)*(sessionStorage.nguoiLon)].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND
                        </div>
                      </div>
                      <div className="css-1dbjc4n r-1mnahxq">
                        <div
                          dir="auto"
                          className="css-901oao r-13awgt0 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-19u6a5r r-fdjqy7"
                          style={{
                            color: "rgb(104, 113, 118)",
                          }}
                        >
                          {[(item.donGia)*(sessionStorage.treEm)].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND
                        </div>
                      </div>
                      <div className="css-1dbjc4n r-1mnahxq">
                        <div
                          dir="auto"
                          className="css-901oao r-13awgt0 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-19u6a5r r-fdjqy7"
                          style={{
                            color: "rgb(104, 113, 118)",
                          }}
                        >
                          {[(sessionStorage.emBe)*110.000]} VND
                        </div>
                      </div>
                      <hr  width="100%" align="center" />                        
                      <div className="css-1dbjc4n r-1mnahxq">
                        <div
                          dir="auto"
                          className="css-901oao r-13awgt0 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-19u6a5r r-fdjqy7"
                          style={{
                            color: "rgb(104, 113, 118)",
                          }}
                        >
                          {[(item.donGia)*(sessionStorage.nguoiLon) + (item.donGia)*(sessionStorage.treEm) + (sessionStorage.emBe)*110.000].toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")} VND
                        </div>
                        <br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )[`${sessionStorage.sttChuyenBay}`] :
        null
      } 
      </div>
    </div>
  )
}

export default ChiTietGiaVe;