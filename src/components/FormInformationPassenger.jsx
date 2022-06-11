import React, { Component } from 'react';
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

const FormInformationPassenger = () => {
  return (
    <div className="your_info mb-4">
      <div className="mb-3 fw-bold" style={{fontSize: "20px"}}>Thông tin hành khách</div>
      <br />
      <Card className="shadow">
        <Form className="card-body pb-0 px-0">
          <div className="mb-3 px-3">
            <CardTitle>
              Họ và tên:
            </CardTitle>
            <Input
              name="ten"
              // className={inputs.ten && "is-valid"}
              // invalid={errors.ten}
              // value={inputs.ten}
              // onChange={handleChange}
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
          <div style={{display: "flex", flexDirection: "row"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
              <Label
                for="Select"
                className="fw-bold"
              >
                Số di động
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
                    placeholder=""
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
                Ngày sinh
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
                    placeholder=""
                    type="text"
                    style={{width: "170%"}}
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
            Email
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
            placeholder="VD: email@example.com"
            type="email"
            style={{width: "100%"}}
          />
        </Form>
      </Card>
    </div>
  )
}

export default FormInformationPassenger;