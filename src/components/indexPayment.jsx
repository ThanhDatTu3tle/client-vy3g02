import { useState, useEffect } from "react";
import {
	Appearance,
	loadStripe,
	StripeElementsOptions,
} from "@stripe/stripe-js";
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
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "./PaymentForm";
import axiosMethod from "../utils/api-client.js";
import { useNavigate, useParams } from "react-router-dom";

const stripePromise = loadStripe(
	"pk_test_51KwO8iLbEwIz3CNxIsaozMfqDUhK14xf7Ll2TPNmcZ6pBouaTximDnXFumk6QkWrAcvTGfCJyMnOkrQ9XxIaAR2I00WiTHf5C1"
);

export default function OnlinePayment() {
	const [clientSecret, setClientSecret] = useState("");
	const customer = JSON.parse(
		localStorage.getItem("user_info_payment") || "{}"
	);
	const params = useParams();
	const { id } = params;
	const navigate = useNavigate();

	// useEffect(() => {
	// 	// Create PaymentIntent as soon as the page loads
	// 	async function getClientSecret() {
	// 		if (!customer.tongTien) {
	// 			return navigate(`/${id}/booking`);
	// 		}
	// 		const data = await axiosMethod(`bill/charge`, "post", {
	// 			amount: customer.tongTien,
	// 		});
	// 		setClientSecret(data);
	// 	}
	// 	getClientSecret();
	// }, [customer.tongTien, id, navigate]);

	const appearance = {
		theme: "stripe",
	};
	const options = {
		clientSecret,
		appearance,
	};

	return (
		<div className="App">
      <div className="your_info mb-4" style={{width: "80%"}}>
        <div className="mb-3 fw-bold" style={{fontSize: "20px"}}>Thông tin thẻ</div>
        <Card className="shadow">
          <Form className="card-body pb-0 px-0">
            <div className="mb-3 px-3">
              <CardTitle>
                Số thẻ:
              </CardTitle>
              <Input
                name="ten"
                // className={inputs.ten && "is-valid"}
                // invalid={errors.ten}
                // value={inputs.ten}
                // onChange={handleChange}
                placeholder="1234 1234 1234 1234"
                style={{width: "80%"}}
              />
            </div>
            <br />
            <div style={{display: "flex", flexDirection: "row"}}>
              <div style={{display: "flex", flexDirection: "column"}}>
                <Label
                  for="Select"
                  className="fw-bold"
                >
                  Ngày hết hạn
                </Label>
                <Row className="d-flex">
                  <Col xs="7">
                    <Input
                      // invalid={errors.sdt}
                      // name="sdt"
                      // className={
                      //   inputs.sdt &&
                      //   "is-valid"
                      // }
                      // value={inputs.sdt}
                      // onChange={
                      //   handleChange
                      // }
                      placeholder="MM / YY"
                      type="text"
                      style={{width: "170%"}}
                    />
                  </Col>
                </Row>
              </div>
              <div style={{display: "flex", flexDirection: "column"}}>
                <Label
                  for="Select"
                  className="fw-bold"
                >
                  CVC
                </Label>
                <Row className="d-flex">
                  <Col xs="7">
                    <Input
                      // invalid={errors.sdt}
                      // name="sdt"
                      // className={
                      //   inputs.sdt &&
                      //   "is-valid"
                      // }
                      // value={inputs.sdt}
                      // onChange={
                      //   handleChange
                      // }
                      placeholder="CVC"
                      type="text"
                      style={{width: "110%"}}
                    />
                  </Col>
                </Row>
              </div>
            </div>
            <br />
            <Label
              for="exampleEmail"
              className="fw-bold"
            >
              Quốc gia
            </Label>
            <Input
              name="email"
              // onChange={handleChange}
              // value={inputs.email}
              // invalid={errors.email}
              // className={
              //   inputs.email &&
              //   "is-valid"
              // }
              placeholder="Việt Nam"
              type="email"
              style={{width: "80%"}}
            />
          </Form>
          
        </Card>
      </div>
		</div>
	);
}
