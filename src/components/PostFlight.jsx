import React, { Component } from 'react';
import { useState, useEffect } from "react";
import VeMayBay from './VeMayBay';

const PostFlight = () => {

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
    {
      flight.length ?
      flight.map(item =>
        <div className="d_flex1">
          <div style={{ padding: "14px", backgroundColor: "white", border: "1px solid white", margin: "0 0 20px 0", }}>
            {/* Logo va Ten Hang */}
            <div className="d_flex">
              {/* Logo */}
              <div className="css-1dbjc4n r-uia4a0 r-1awozwy r-18u37iz r-1w6e6rj r-1h0z5md">
                <div className="css-1dbjc4n r-1kb76zh">
                  <img
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2015/12/17/1450350670702-a9dba44d3e9fe096f83ffe00d56a99ec.png?tr=q-75,w-28"
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
              {item.tenHang}
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
              {/* ThoiGianBay */}
              <div className="css-1dbjc4n r-e8mqni r-1habvwh r-13awgt0 r-18u37iz r-1w6e6rj r-1h0z5md">
                <div
                  className="css-1dbjc4n r-1habvwh r-18u37iz r-1w6e6rj r-1b1obt9"
                  style={{ marginRight: "20px" }}
                >                                       
                  <div className="css-1dbjc4n r-e8mqni r-1habvwh r-13awgt0 r-eqz5dr r-1w6e6rj r-1777fci r-13hce6t r-174vidy">
                    <div
                      dir="auto"
                      className="css-901oao r-1sixt3s r-ubezar r-majxgm r-135wba7 r-aq742g r-fdjqy7"
                      style={{ color: "rgb(3, 18, 26)" }}                                            
                    >
                    </div>
                  </div>
                </div>
                <div className="css-1dbjc4n r-e8mqni r-1habvwh r-13awgt0 r-18u37iz r-1w6e6rj r-1h0z5md r-1ul06mb">
                  <div
                    className="css-1dbjc4n r-6koalj r-18u37iz r-mbgqwd"
                    style={{
                      width: "300px",
                      justifyContent: "space-around",
                    }}
                  >
                    <div className="css-1dbjc4n r-obd0qt r-1b7u577">
                      <div
                        dir="auto"
                        className="css-901oao r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                        style={{
                          color: "rgb(3, 18, 26)",
                          fontSize: "30px"
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
                    <div className="css-1dbjc4n r-1habvwh r-19u6a5r">
                      <div
                        dir="auto"
                        className="css-901oao r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                        style={{
                          color: "rgb(3, 18, 26)",
                          fontSize: "30px"
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
                                    
                  <div className="css-1dbjc4n">
                    <div className="css-1dbjc4n r-uia4a0 r-1awozwy r-18u37iz r-1w6e6rj r-1h0z5md r-f9dfq4">
                      <div className="css-1dbjc4n r-1kb76zh">
                        <img
                          src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/darkBlue/ic_facilities_baggage_add_24px-df10676ee7bdb15615420319bf865811.svg"
                          width={20}
                          height={20}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              {/* Select */}
              <div className="css-1dbjc4n r-1h0z5md r-1ow6zhx r-x1dlf0 r-1ui2xcl">
                <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1w6e6rj r-17s6mgv r-6gpygo">
                  <div
                    dir="auto"
                    className="css-901oao r-1sixt3s r-adyw6z r-b88u0q r-rjixqe r-fdjqy7"
                    style={{ color: "rgb(255, 94, 31)" }}
                  >
                    {item.donGia} VND
                  </div>
                  <div
                    dir="auto"
                    className="css-901oao r-1sixt3s r-1b43r93 r-b88u0q r-rjixqe r-fdjqy7"
                    style={{ color: "rgb(104, 113, 118)" }}
                  >
                    /khách
                  </div>
                </div>
                <div
                  aria-live="polite"
                  role="button"
                  tabIndex={0}
                  className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-1e081e0 r-5njf8e r-1otgn73 r-lrvibr"
                  style={{
                    backgroundColor: "rgb(255, 94, 31)",
                  }}
                >
                  <div
                    dir="auto"
                    className="css-901oao r-1yadl64 r-1vonz36 r-109y4c4 r-1cis278 r-1udh08x r-t60dpp r-u8s1d r-3s2u2q r-92ng3h"
                  >
                    Chọn
                  </div>
                  <div
                    className="css-1dbjc4n r-1awozwy r-13awgt0 r-18u37iz r-1777fci"
                    style={{ opacity: 1 }}
                  >
                    <div
                      dir="auto"
                      aria-hidden="true"
                      className="css-901oao css-bfa6kz r-1sixt3s r-1o4mh9l r-b88u0q r-f0eezp r-q4m81j"
                      style={{
                        color: "rgb(255, 255, 255)",
                      }}
                    >
                      Chọn
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* CHI TIET CHUYEN BAY*/}
            <div
              className="css-1dbjc4n r-2o02ov"
              style={{ marginTop: "20px" }}
            >
              <div
                className="css-1dbjc4n r-kdyh1x r-da5iq2 r-19i43ro r-1udh08x r-k8qxaj r-1guathk r-417010"
                style={{
                  backgroundColor: "white",
                  border: "1px solid white",
                  margin: "0 0 20px 0",
                }}
              >
                <div
                  dir="auto"
                  style={{ color: "#179df3" }}
                >
                  Chi tiết chuyến bay
                </div>
                {/* mổnng */}
                <div className="css-1dbjc4n r-1ielgck r-1ivxbpt r-1i1ao36" style={{ padding: "20px" }}>
                  <div className="css-1dbjc4n r-1ielgck r-otx420 r-1i1ao36">
                    <div className="css-1dbjc4n r-e8mqni r-1habvwh r-18u37iz r-1h0z5md r-11c0sde">
                      <div className="css-1dbjc4n r-e8mqni r-1habvwh r-13awgt0 r-18u37iz r-1h0z5md r-88pszg">
                        <div className="css-1dbjc4n r-13awgt0 r-13qz1uu">
                          <div className="css-1dbjc4n r-1tuna9m r-1oszu61 r-18u37iz r-1h0z5md">
                            <div className="width_100 css-1dbjc4n r-e8mqni r-1awozwy r-1h0z5md r-1glkqn6">
                              <div
                                dir="auto"
                                className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                                style={{ color: "rgb(3, 18, 26)" }}
                              >
                                {item.gioCatCanh}
                              </div>
                              <div
                                dir="auto"
                                className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                                style={{
                                  color: "rgb(104, 113, 118)",
                                }}
                              >
                                {item.ngayCatCanh}
                              </div>
                            </div>
                            <div className="css-1dbjc4n r-uia4a0 r-1awozwy r-1h0z5md r-13hce6t r-1mf7evn r-1jg9483">
                              <div
                                className="css-1dbjc4n r-14lw9ot r-sdzlij r-rs99b7 r-3da1kt r-1s2bzr4 r-1jg9483"
                                style={{
                                  borderColor: "rgb(1, 148, 243)",
                                }}
                              />
                              <div
                                className="css-1dbjc4n r-13awgt0 r-92ng3h"
                                style={{
                                  backgroundColor: "rgb(1, 148, 243)",
                                }}
                              />
                            </div>
                            <div
                              className="width_200 css-1dbjc4n r-e8mqni r-1habvwh r-13awgt0 r-1h0z5md"
                              style={{ marginLeft: "20px" }}
                            >
                              <div
                                dir="auto"
                                className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                                style={{ color: "rgb(3, 18, 26)" }}
                              >
                                {item.noiDi}
                              </div>
                              <div
                                dir="auto"
                                className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                                style={{
                                  color: "rgb(104, 113, 118)",
                                }}
                              >
                                Sân bay {item.noiDi}
                              </div>
                            </div>
                          </div>
                          <div
                            className="css-1dbjc4n r-1tuna9m r-1oszu61 r-18u37iz r-1h0z5md"
                            style={{ marginTop: "20px" }}
                          >
                            <div
                              className="css-1dbjc4n r-uia4a0 r-1awozwy r-18u37iz r-1h0z5md r-1ifxtd0 r-1s2bzr4 r-1glkqn6"
                              style={{ marginRight: "20px" }}
                            >
                              <img
                                src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_flight_duration_24px-9b8e572ab1d83e74baded17d419ff5ca.svg"
                                width={50}
                                height={24}
                              />
                              <div
                                dir="auto"
                                className="css-901oao r-13awgt0 r-1sixt3s r-1enofrn r-majxgm r-1cwl3u0 r-1jkjb r-fdjqy7"
                                style={{ color: "rgb(3, 18, 26)" }}
                              >
                                {item.thoiGianBay}
                              </div>
                            </div>
                            <div className="css-1dbjc4n r-uia4a0 r-1awozwy r-1h0z5md r-13hce6t r-1mf7evn r-1jg9483">
                              <div
                                className="css-1dbjc4n r-13awgt0 r-92ng3h"
                                style={{
                                  backgroundColor: "rgb(1, 148, 243)",
                                  width: "2px",
                                }}
                              />
                            </div>
                            <div
                              className="css-1dbjc4n r-1l31rp8 r-kdyh1x r-rs99b7 r-18u37iz r-1ifxtd0 r-1s2bzr4 r-xd6kpl r-ymttw5 r-95jzfe r-xaq1zp"
                              style={{
                                marginLeft: "20px",
                                alignItems: "center",
                              }}
                            >
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
                                      width={28}
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
                                      {item.maChuyenBay} • Khuyến mãi
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="css-1dbjc4n" style={{ flex: "7 1 0%", marginTop: "20px" }}>
                                <div className="css-1dbjc4n r-18u37iz r-1w6e6rj">
                                  <div className="css-1dbjc4n r-3691iy r-1rem5b8">
                                    <div className="css-1dbjc4n r-18u37iz r-1w6e6rj r-1h0z5md r-6gpygo">
                                      <img
                                        src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/darkBlue/ic_facilities_baggage_add_24px-df10676ee7bdb15615420319bf865811.svg"
                                        width={50}
                                        height={20}
                                      />
                                      <div className="css-1dbjc4n r-13awgt0">
                                        <div className="css-1dbjc4n r-1mnahxq">
                                          <div
                                            dir="auto"
                                            className="css-901oao r-13awgt0 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-19u6a5r r-fdjqy7"
                                            style={{
                                              color: "rgb(104, 113, 118)",
                                            }}
                                          >
                                            Hành lý 0kg (mua khi đặt chỗ)
                                          </div>
                                        </div>
                                        <div className="css-1dbjc4n r-14gqq1x">
                                          <div
                                            dir="auto"
                                            className="css-901oao r-13awgt0 r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-19u6a5r r-fdjqy7"
                                            style={{
                                              color: "rgb(104, 113, 118)",
                                            }}
                                          >
                                            Hành lý xách tay 7 kg
                                          </div>
                                        </div>
                                        <div
                                          tabIndex={0}
                                          className="css-1dbjc4n r-1loqt21 r-1otgn73 r-1i6wzkk r-lrvibr"
                                          style={{
                                            transitionDuration: "0s",
                                          }}
                                        >
                                          <div className="css-1dbjc4n r-1habvwh r-13awgt0 r-18u37iz r-1h0z5md r-19u6a5r r-knv0ih">
                                            <img
                                              src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/darkBlue/ic_system_status_info_16px-15b03ab753b68849eec2854e67ba2ff1.svg"
                                              alt="Giá hành lý"
                                              width={12}
                                              height={12}
                                              style={{
                                                marginTop: 2,
                                                marginRight: "10px",
                                              }}
                                            />
                                            <div
                                              dir="auto"
                                              className="css-901oao r-1i6uqv8 r-13awgt0 r-1sixt3s r-1enofrn r-b88u0q r-1cwl3u0 r-13hce6t r-fdjqy7"
                                            >
                                              Xem giá hành lý mua thêm
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="css-1dbjc4n r-13awgt0">
                                    <div className="css-1dbjc4n r-18u37iz r-1w6e6rj r-1h0z5md r-6gpygo">
                                      <img
                                        src="https://d1785e74lyxkqq.cloudfront.net/godwit/lib/_/_/node_modules/@traveloka/icon-kit-web/svg/blue/ic_system_status_info_24px-850c67c691656564cdfed50c1825f461.svg"
                                        width={50}
                                        height={20}
                                      />
                                      <div className="css-1dbjc4n r-13awgt0">
                                        <div
                                          dir="auto"
                                          className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-5oul0u r-19u6a5r r-fdjqy7"
                                          style={{
                                            color: "rgb(104, 113, 118)",
                                          }}
                                        >
                                          <span
                                            className="css-901oao css-16my406 r-1sixt3s r-1b43r93 r-b88u0q r-rjixqe r-1d4mawv r-fdjqy7"
                                            style={{
                                              color: "rgb(104, 113, 118)",
                                              marginRight: "5px"
                                            }}
                                          >
                                            Máy bay
                                          </span>
                                          Airbus {item.maChuyenBay}
                                        </div>
                                        <div
                                          dir="auto"
                                          className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-5oul0u r-19u6a5r r-fdjqy7"
                                          style={{
                                            color: "rgb(104, 113, 118)",
                                            marginRight: "5px"
                                          }}
                                        >
                                          <span
                                            className="css-901oao css-16my406 r-1sixt3s r-1b43r93 r-b88u0q r-rjixqe r-1d4mawv r-fdjqy7"
                                            style={{
                                              color: "rgb(104, 113, 118)",
                                              marginRight: "5px"
                                            }}
                                          >
                                            Sơ đồ ghế ngồi
                                          </span>
                                          3-3
                                        </div>
                                        <div
                                          dir="auto"
                                          className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-5oul0u r-19u6a5r r-fdjqy7"
                                          style={{
                                            color: "rgb(104, 113, 118)",
                                          }}
                                        >
                                          <span
                                            className="css-901oao css-16my406 r-1sixt3s r-1b43r93 r-b88u0q r-rjixqe r-1d4mawv r-fdjqy7"
                                            style={{
                                              color: "rgb(104, 113, 118)",
                                              marginRight: "5px"
                                            }}
                                          >
                                            Khoảng cách ghế
                                          </span>
                                          28 inches (tiêu chuẩn)
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="css-1dbjc4n r-1tuna9m r-1oszu61 r-18u37iz r-1h0z5md">
                            <div className="width_100 css-1dbjc4n r-e8mqni r-1awozwy r-1h0z5md r-1glkqn6">
                              <div
                                dir="auto"
                                className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                                style={{ color: "rgb(3, 18, 26)" }}
                              >
                                {item.gioHaCanh}
                              </div>
                              <div
                                dir="auto"
                                className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                                style={{
                                  color: "rgb(104, 113, 118)",
                                }}
                              >
                                {item.ngayHaCanh}
                              </div>
                            </div>
                            <div className="css-1dbjc4n r-uia4a0 r-1awozwy r-1h0z5md r-13hce6t r-1mf7evn r-1jg9483">
                              <div
                                className="css-1dbjc4n r-14lw9ot r-sdzlij r-rs99b7 r-3da1kt r-1s2bzr4 r-1jg9483"
                                style={{
                                  borderColor: "rgb(1, 148, 243)",
                                }}
                              />
                              <div
                                className="css-1dbjc4n r-13awgt0 r-92ng3h"
                                style={{
                                  backgroundColor: "rgb(1, 148, 243)",
                                }}
                              />
                            </div>
                            <div
                              className="width_200 css-1dbjc4n r-e8mqni r-1habvwh r-13awgt0 r-1h0z5md"
                              style={{ marginLeft: "20px" }}
                            >
                              <div
                                dir="auto"
                                className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                                style={{ color: "rgb(3, 18, 26)" }}
                              >
                                {item.noiDen}
                              </div>
                              <div
                                dir="auto"
                                className="css-901oao r-1sixt3s r-1b43r93 r-majxgm r-rjixqe r-fdjqy7"
                                style={{
                                  color: "rgb(104, 113, 118)",
                                }}
                              >
                                Sân bay {item.noiDen}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) :
      null
    } 
    </div>
  )
}

export default PostFlight;