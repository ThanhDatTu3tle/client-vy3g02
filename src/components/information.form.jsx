import React, { useEffect, useState } from "react";
import {
	Card,
	Form,
	CardTitle,
	Input,
	CardText,
	Row,
	Col,
	FormGroup,
	Label,
	Container,
	CardSubtitle,
	Button,
	FormFeedback,
} from "reactstrap";
import globalStateAndAction from "../container/global.state.action.js";
import { useNavigate } from "react-router-dom";
import { userGlobalCheck } from "../utils/user.me.ts";
import FormInformationPassenger from "./FormInformationPassenger.jsx";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const InformationForm = () => {
	const navigate = useNavigate();
	const userMe = userGlobalCheck();
	//Info handling
	const [inputs, setInputs] = useState({
		ten: userMe.user.name,
		sdt: userMe.user.phone,
		email: userMe.user.email,
	});
	const [errors, setErrors] = useState({
		ten: false,
		sdt: false,
		email: false,
		requirement: false,
	});

  const [nguoiLon, setNguoiLon] = useState(() => {
		var array = [];
		var x = sessionStorage.getItem('nguoiLon');

		for(var i = 1; i <= x; i++) {
			array.push(x);
		}

		return array;
	});

	//Xử lý inputs
	const handleChange = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setInputs((values) => ({ ...values, [name]: value }));
	};

	//form Submit
	const MySwal = withReactContent(Swal);

	//Handle Submit
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!inputs.ten || !inputs.email || !inputs.sdt) {
			setErrors({
				...errors,
				ten: true,
				email: true,
				sdt: true,
				requirement: true,
			});
			return MySwal.fire({
				icon: "error",
				title: "Oops...",
				text: "Vui lòng kiểm tra lại thông tin !",
			});
		}
		const data = {
			...inputs,
			maKhachHang: userMe.user.userId,
		};
		// await MySwal.fire({
		// 	title: <p>Đang xử lý</p>,
		// 	didOpen: () => {
		// 		MySwal.showLoading();
		// 		localStorage.setItem(
		// 			"user_info_payment",
		// 			JSON.stringify(data)
		// 		);
		// 		if (vouchers.orderId && detailApartment.maPartner) {
		// 			localStorage.setItem(
		// 				"order_id",
		// 				JSON.stringify({
		// 					orderId: vouchers.orderId,
		// 					maPartner: detailApartment.maPartner,
		// 				})
		// 			);
		// 		}
		// 		if (!vouchers.orderId) {
		// 			localStorage.setItem(
		// 				"order_id",
		// 				JSON.stringify({
		// 					maPartner: detailApartment.maPartner,
		// 				})
		// 			);
		// 		}
		// 	},
		// 	timer: 1000,
		// });
		await MySwal.fire({
			title: "Thành công",
			icon: "success",
			didOpen: () => {
				MySwal.showLoading();
			},
			timer: 1000,
		});
		await MySwal.fire({
			title: "Chuyển đến trang thanh toán",
			didOpen: () => {
				MySwal.showLoading();
			},
			timer: 1000,
		});

		navigate(`payment`);
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="your_info mb-4">
				<div className="mb-3 fw-bold" style={{fontSize: "20px"}}>Thông tin liên hệ</div>
        <br />
				<Card className="shadow">
					<Form className="card-body pb-0 px-0">
						<div className="mb-3 px-3">
							<CardTitle>
								Họ và tên:
							</CardTitle>
							<Input
								name="ten"
								className={inputs.ten && "is-valid"}
								invalid={errors.ten}
								value={inputs.ten}
								onChange={handleChange}
                style={{width: "100%"}}
							/>
							<CardText>
								<small className="text-muted">
									*Nhập tên như trên CMND
									(không dấu)
								</small>
							</CardText>
						</div>
            <br />
            <Label
              for="Select"
              className="fw-bold"
            >
              Số di động
            </Label>
            <Row className="d-flex">
              <Col xs="7">
                <Input
                  invalid={errors.sdt}
                  name="sdt"
                  className={
                    inputs.sdt &&
                    "is-valid"
                  }
                  value={inputs.sdt}
                  onChange={
                    handleChange
                  }
                  placeholder=""
                  type="text"
                  style={{width: "100%"}}
                />
              </Col>
            </Row>
            <br />
            <Label
              for="exampleEmail"
              className="fw-bold"
            >
              Email
            </Label>
            <Input
              name="email"
              onChange={handleChange}
              value={inputs.email}
              invalid={errors.email}
              className={
                inputs.email &&
                "is-valid"
              }
              placeholder="VD: email@example.com"
              type="email"
              style={{width: "100%"}}
            />
					</Form>
				</Card>
			</div>
			
      <div>
        {nguoiLon.length ? nguoiLon.map(item => <FormInformationPassenger />) : null}
      </div>

			<div className="text-end mb-5">
				<Button
					type="submit"
					value="Submit"
					className="fw-bold btn_price px-4 py-2"
				>
					Xác nhận
				</Button>
			</div>
      <br />
		</form>
	);
};
export default globalStateAndAction(InformationForm);
