import MoRong from "../components/MoRong";
import { useState } from "react";
import PostFlight from "../components/PostFlight";
import ChuyenBay from "../components/ChuyenBay";
import ThoiGianBay from "../components/ThoiGianBay";

const DetailAir = () => {
  const [show, setShow] = useState(false);

  const showPage = () => {
    setShow(!show);
  };

  return (
    <div>
      <div className="css-1dbjc4n" data-testid="StandarizedOTPFlow" />
      <div
        className="css-1dbjc4n r-14lw9ot r-bnwqim r-13qz1uu r-1e2svnr"
        style={{ marginTop: "100px", backgroundColor: "rgb(242 243 243)" }}
      >
        <div className="css-1dbjc4n r-184en5c">
          <div className="css-1dbjc4n r-1ifxtd0">
            <div className="css-1dbjc4n">
              <div className="css-1dbjc4n r-6koalj r-18u37iz r-1777fci r-1wzrnnt r-u8s1d r-13qz1uu r-184en5c">
                <div className="css-1dbjc4n r-jg6ec0 r-9bullz" />
              </div>

              <div className="css-1dbjc4n r-obd0qt r-6koalj r-18u37iz r-1mvsivf r-1777fci r-u8s1d r-13qz1uu r-184en5c">
                <div className="css-1dbjc4n">
                  <div className="css-1dbjc4n" style={{ top: "-16px" }} />
                  <div className="css-1dbjc4n r-1jgb5lz r-l0gqae">
                    <div>
                      <div className="css-1dbjc4n"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="css-1dbjc4n r-6koalj r-18u37iz r-1777fci r-u8s1d r-gaxom6 r-13qz1uu">
                <div className="css-1dbjc4n r-6koalj r-18u37iz r-1777fci r-13qz1uu">
                  <div className="css-1dbjc4n r-jg6ec0 r-9bullz" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ex */}
        <div className="css-1dbjc4n r-6koalj r-18u37iz r-1777fci r-13qz1uu">
          <div className="css-1dbjc4n r-jg6ec0 r-9bullz">
            <div className="css-1dbjc4n" id="merchandising">
              <div className="css-1dbjc4n" data-testid="merch-section">
                {/* experience */}
                <div>
                  <div id="desktopContent">
                    <div className="oneColumnWithFlightSearch ">
                      <header
                        id="desktop-topbar"
                        className="hide-for-print-version undefined"
                      >
                        <header className="_2VZXA">
                          <div className="_3yWYi">
                            <div className="_1MlOC eKQS4 _30RUX">
                              <div className="_15cOD _1nKD- _2I_KG OryTC">
                                <span className="_2MqGJ tvat-navbar-hamburger-menu">
                                  <a href="https://www.traveloka.com/air-france">
                                    Air France
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>
                        </header>
                      </header>
                      {/* vggvgv */}

                      <div className="body">
                        <ChuyenBay />
                        {/* loc */}
                        <div className="css-1dbjc4n">
                          <div
                            tabIndex={0}
                            className="css-1dbjc4n r-9nbb9w r-otx420 r-1i1ao36"
                          >
                            <div
                              className="css-1dbjc4n r-14lw9ot r-kdyh1x r-rs99b7 r-16k0tzm"
                              style={{
                                borderColor: "rgb(247, 249, 250)",
                                margin: "20px 0",
                                padding: "20px",
                              }}
                            >
                              <div
                                className="css-1dbjc4n r-kdyh1x r-da5iq2 r-184en5c"
                                style={{ minHeight: 100 }}
                              >
                                <div className="css-1dbjc4n r-1tuna9m r-1oszu61 r-18u37iz r-1w6e6rj r-1h0z5md r-1guathk r-1ygmrgt">
                                  <div className="css-1dbjc4n r-13awgt0">
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
                                            <PostFlight />
                                          </div>                                          
                                        </div>
                                        {/* <ThoiGianBay /> */}
                                      </div>
                                      
                                    </div>

                                    
                                  </div>

                                  {/* BUTTON CHON VA DON GIA */}
                                  <div className="css-1dbjc4n r-1h0z5md r-1ow6zhx r-x1dlf0 r-1ui2xcl">
                                    <div className="css-1dbjc4n r-1awozwy r-18u37iz r-1w6e6rj r-17s6mgv r-6gpygo">
                                      <div
                                        dir="auto"
                                        className="css-901oao r-1sixt3s r-adyw6z r-b88u0q r-rjixqe r-fdjqy7"
                                        style={{ color: "rgb(255, 94, 31)" }}
                                      >
                                        665.720 VND
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
                              </div>
                              <div className="css-1dbjc4n r-kdyh1x r-da5iq2 r-19i43ro r-1udh08x r-1guathk r-417010">
                                <div className="css-1dbjc4n r-1ielgck r-1ivxbpt r-1i1ao36" />
                              </div>
                            </div>
                          </div>

                          {/* CHI TIET CHUYEN BAY */}
                          <div
                            className="css-1dbjc4n r-kdyh1x r-da5iq2 r-19i43ro r-1udh08x r-k8qxaj r-1guathk r-417010"
                            style={{
                              backgroundColor: "white",
                              border: "1px solid white",
                              margin: "0 0 20px 0",
                            }}
                          >
                            {/* mổnng */}
                            {show && <MoRong />}
                          </div>
                        </div>
                      </div>

                      {/* vggvgv */}
                    </div>
                  </div>

                  <div
                    className="mcp-placeholder hiddenContent"
                    data-name="hiddenContent"
                  >
                    <div
                      className="component-overflow v3Helpers"
                      data-component="true"
                      data-name="Flight_SEO_Air_France1_V3Helpers"
                      data-id={1503051392278}
                    />
                    <div
                      className="component-overflow styles"
                      data-component="true"
                      data-name="Flight_SEO_Air_France1_LandingPage_Flight_Desktop_Styling"
                      data-id={1503051392354}
                    />
                    <div
                      className="component-overflow scripts"
                      data-component="true"
                      data-name="LandingPage_Flight_Desktop_Scripting"
                      data-id={1491367346025}
                    />
                    <div
                      className="component-overflow scripts"
                      data-component="true"
                      data-name="LandingPage_Airline_Script"
                      data-id={1558946096318}
                    />
                    <div
                      className="component-overflow scripts"
                      data-component="true"
                      data-name="LandingPage_Flight_Airline_Masonry"
                      data-id={1560753761587}
                    />
                  </div>
                </div>
                {/* experience */}
              </div>
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailAir;
