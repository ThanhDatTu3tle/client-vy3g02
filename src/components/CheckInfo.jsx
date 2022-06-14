import moment from "moment";
import React from "react";
import { Card, CardBody, CardTitle, CardText, CardSubtitle, Col } from "reactstrap";
import { v4 as uuid } from "uuid";
import "../assets/css/payments.scss";
import { useState, useEffect } from "react";
import { userGlobalCheck } from "../utils/user.me.ts";
import globalStateAndAction from "../container/global.state.action.js";
import Preferential from "./Preferential";
import InformationForm from "./information.form";
import ChiTietGiaVe from "./ChiTietGiaVe";
import ChuyenBay from "./ChuyenBay";
import ChiTietChuyenBay from "./ChiTietChuyenBay";

const CheckInfo = () => {
  const userMe = userGlobalCheck();
  const [inputs, setInputs] = useState({
		ten: userMe.user.name,
		sdt: userMe.user.phone,
		email: userMe.user.email,
	});

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
		<>
			{flight.length ? flight.map (item =>
				<Card className="room_info shadow" style={{width: "60%"}}>
					<CardBody className="p-0">

            <CardTitle className="text-muted px-3 fw-bold">
              <small>
                KIỂM TRA THÔNG TIN VÉ MÁY BAY
              </small>
            </CardTitle>
            <Col
              sm={{
                size: 3,
              }}
            >
              <ChuyenBay />
              <ChiTietChuyenBay />
            </Col>

            <CardTitle className="text-muted px-3 fw-bold">
              <small>HÀNH KHÁCH:</small>
            </CardTitle>
            <CardText className="px-3 pb-3">
              {inputs.ten}
            </CardText>

					</CardBody>
				</Card>
			)[`${sessionStorage.sttChuyenBay}`] : null}
		</>
	);
};
export default globalStateAndAction(CheckInfo);
