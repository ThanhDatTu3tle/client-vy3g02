import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import "../assets/css/info.scss";
import "../assets/css/card.scss";
import TitleInfo from "./TitleInfo";
import Preferential from "./Preferential";
import InformationForm from "./information.form";
import ChuyenBay from "./ChuyenBay";
import ChiTietChuyenBay from "./ChiTietChuyenBay";
import ChiTietGiaVe from "./ChiTietGiaVe";

const PreBooking = () => {
  const [flight, setFlight] = useState([]);

  useEffect(() => {
    let mounted = true;
    const apiBookingUrl = sessionStorage.getItem('bookingUrl');

    fetch(`${apiBookingUrl}`)
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
                        <br />
                        <Container className="mt-5">
                          <Row>
                            <TitleInfo />
                          </Row>
                          <br />
                          <Row style={{display: "flex", flexDirection: "row"}}>
                            <Col
                              className="form"
                              id="formpay"
                              sm={{
                                offset: 1,
                                size: 7,
                              }}
                              style={{width: "100%"}}
                            >
                              <Preferential />
                              <ChiTietGiaVe />
                              <InformationForm />
                            </Col>
                            <Col
                              sm={{
                                size: 3,
                              }}
                            >
                              <ChuyenBay />
                              <ChiTietChuyenBay />
                            </Col>
                          </Row>
                        </Container>
                        {/* loc */}
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
export default PreBooking;
