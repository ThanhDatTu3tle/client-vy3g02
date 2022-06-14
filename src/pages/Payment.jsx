import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { useState } from "react";
import CheckInfo from "../components/CheckInfo";
// import PaymentCard from "../components/PaymentCard";
// import ATMCard from "../components/ATMCard";
import IndexPayment from "../components/indexPayment";
import { useParams } from "react-router-dom";
import axiosMethod from "../utils/api-client.js";
import { userGlobalCheck } from "../utils/user.me.ts";
import globalStateAndAction from "../container/global.state.action.js";
import ChiTietGiaVe from "../components/ChiTietGiaVe";

// interface TabPanelProps {
// 	children?: React.ReactNode;
// 	index: number;
// 	value: number;
// }

function TabPanel(props) {
	const { children, value, index, ...other } = props;

  const userMe = userGlobalCheck();
  const [inputs, setInputs] = useState({
		ten: userMe.user.name,
		sdt: userMe.user.phone,
		email: userMe.user.email,
	});

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`vertical-tabpanel-${index}`}
			aria-labelledby={`vertical-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					<Typography>{children}</Typography>
				</Box>
			)}
		</div>
	);
}

function a11yProps(index) {
	return {
		id: `vertical-tab-${index}`,
		"aria-controls": `vertical-tabpanel-${index}`,
	};
}

const Payments = () => {
	const [value, setValue] = React.useState(0);
	const { id } = useParams();

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

  const [flight, setFlight] = useState([]);

	useEffect(() => {
    let mounted = true;
    const apiUrl = sessionStorage.getItem('url');

    fetch(`${apiUrl}`)
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
                        <Container className="mt-5" style={{width: "150%"}}>
                          <Row>
                            <Col
                              className="form"
                              id="formpay"
                              sm={{
                                offset: 1,
                                size: 9,
                              }}
                            >
                              <Card className="shadow">
                                <CardBody>
                                  <Box
                                    sx={{
                                      flexGrow: 1,
                                      bgcolor: "background.paper",
                                      display: "flex",
                                      height: 224,
                                    }}
                                    className="row"
                                  >
                                    <div className="col-md-3 p-0">
                                      <Tabs
                                        orientation="vertical"
                                        variant="scrollable"
                                        value={value}
                                        onChange={handleChange}
                                        aria-label="Vertical tabs example"
                                        sx={{
                                          borderRight: 1,
                                          borderColor:
                                            "divider",
                                        }}
                                        style={{width: "180px"}}
                                      >
                                        <Tab
                                          className="fw-bold"
                                          label="Thẻ thanh toán"
                                          {...a11yProps(0)}
                                        />
                                        <Tab
                                          className="fw-bold"
                                          label="Chuyển khoản ngân hàng"
                                          {...a11yProps(1)}
                                        />
                                        <Tab
                                          className="fw-bold"
                                          label="Thẻ ATM nội địa"
                                          {...a11yProps(2)}
                                        />
                                      </Tabs>
                                    </div>
                                    <div className="col-md-9 p-0">
                                      <TabPanel
                                        value={value}
                                        index={0}
                                      >
                                        <IndexPayment />
                                        {/* <PaymentCard /> */}
                                        <ChiTietGiaVe />
                                        <button
                                          className="btn btn-dark mt-5"
                                          id="submit"
                                        >
                                          <span id="button-text">
                                              Pay now
                                          </span>
                                        </button>
                                      </TabPanel>
                                      <TabPanel
                                        value={value}
                                        index={1}
                                      >
                                        Hệ thống đang bảo trì...!
                                      </TabPanel>
                                      <TabPanel
                                        value={value}
                                        index={2}
                                      >
                                        Hệ thống đang bảo trì...!
                                      </TabPanel>
                                    </div>
                                  </Box>
                                </CardBody>
                              </Card>
                            </Col>
                            <Col
                              sm={{
                                size: 2,
                              }}
                            >
                              <CheckInfo />
                              
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

export default globalStateAndAction(Payments);
