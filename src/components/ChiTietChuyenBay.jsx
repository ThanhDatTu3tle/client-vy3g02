import { isLastDayOfMonth } from 'date-fns';
import React, { Component } from 'react';
import { useState, useEffect } from "react";

const ChiTietChuyenBay = () => {

  const [flight, setFlight] = useState([]);

  useEffect(() => {
    let mounted = true;
    const apiUrlDetail = sessionStorage.getItem('url');

    fetch(`${apiUrlDetail}`)
      .then(response => response.json())
      .then(items => {
        if(mounted) {
          setFlight(items);
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
                  Chuyến bay đi • {item.ngayCatCanh}
                  <br /><hr></hr>
                  <div
                    className="css-1dbjc4n r-18u37iz r-1wtj0ep r-1ifxtd0 r-1mf7evn"
                    style={{
                      flex: "3 1 0%",
                    }}
                  >
                    <div className="css-1dbjc4n r-13awgt0 r-18u37iz">
                      <div
                        className="css-1dbjc4n r-1b7u577 r-1bymd8e"
                        style={{ width: "50px" }}
                      >
                        <img
                          alt="VietJet Air"
                          importance="low"
                          loading="lazy"
                          src="https://ik.imagekit.io/tvlk/image/imageResource/2015/12/17/1450350670702-a9dba44d3e9fe096f83ffe00d56a99ec.png?tr=q-75,w-28"
                          srcSet="https://ik.imagekit.io/tvlk/image/imageResource/2015/12/17/1450350670702-a9dba44d3e9fe096f83ffe00d56a99ec.png?tr=q-75,w-28 1x, https://ik.imagekit.io/tvlk/image/imageResource/2015/12/17/1450350670702-a9dba44d3e9fe096f83ffe00d56a99ec.png?tr=dpr-2,q-75,w-28 2x, https://ik.imagekit.io/tvlk/image/imageResource/2015/12/17/1450350670702-a9dba44d3e9fe096f83ffe00d56a99ec.png?tr=dpr-3,q-75,w-28 3x"
                          decoding="async"
                          width={44}
                          style={{
                            objectFit: "contain",
                            objectPosition: "50% 50%",
                          }}
                        />
                      </div>
                      <div className="css-1dbjc4n" style={{ width: "80%" }}>
                        <h4
                          aria-level={4}
                          dir="auto"
                          role="heading"
                          className="css-4rbku5 css-901oao r-1sixt3s r-1b43r93 r-b88u0q r-1cwl3u0 r-fdjqy7"
                          style={{
                            color: "rgb(3, 18, 26)",
                          }}
                        >
                        </h4>
                        <div
                          dir="auto"
                          className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-14gqq1x r-fdjqy7"
                          style={{
                            color: "rgb(3, 18, 26)",
                          }}
                        >
                          <label>
                            {item.maChuyenBay} • Khuyến mãi
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{display: "flex", flexDirection: "row", justifyContent: "space-between"}}>
                    <div>
                      <div className="css-1dbjc4n r-obd0qt r-1b7u577">
                        <div
                          dir="auto"
                          className="css-901oao r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                          style={{
                            color: "rgb(3, 18, 26)",
                            fontSize: "20px"
                          }}
                        >
                          {item.gioCatCanh}
                        </div>
                        <div
                          dir="auto"
                          className="css-901oao r-1awozwy r-391gc0 r-1dzdj1l r-6koalj r-1sixt3s r-1b43r93 r-majxgm r-z80fyv r-1777fci r-rjixqe r-knv0ih r-1pn2ns4 r-fdjqy7 r-7xmw5f"
                          style={{
                            color: "rgb(104, 113, 118)",
                          }}
                        >
                          {item.noiDi}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="css-1dbjc4n r-uia4a0 r-1awozwy r-1777fci r-15m1z73 r-w0va4e r-7bouqp">
                        <div
                          dir="auto"
                          className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                          style={{
                            color: "rgb(104, 113, 118)",
                          }}
                        >
                          {item.thoiGianBay}
                        </div>
                        
                        <div
                          dir="auto"
                          className="css-901oao r-13awgt0 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                          style={{
                            color: "rgb(104, 113, 118)",
                          }}
                        >
                          Bay thẳng
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="css-1dbjc4n r-1habvwh r-19u6a5r">
                        <div
                          dir="auto"
                          className="css-901oao r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                          style={{
                            color: "rgb(3, 18, 26)",
                            fontSize: "20px"
                          }}
                        >
                          {item.gioHaCanh}
                        </div>
                        <div
                          dir="auto"
                          className="css-901oao r-1awozwy r-391gc0 r-1dzdj1l r-6koalj r-1sixt3s r-1b43r93 r-majxgm r-z80fyv r-1777fci r-rjixqe r-knv0ih r-1pn2ns4 r-fdjqy7 r-7xmw5f"
                          style={{
                            color: "rgb(104, 113, 118)",
                          }}
                        >
                          {item.noiDen}
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                  Không hoàn tiền
                  <br />
                  <p style={{color: "green"}}>
                    Có áp dụng đổi lịch bay
                  </p>
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

export default ChiTietChuyenBay;