import React from "react";
import { Col } from "reactstrap";

const TitleInfo = () => {
    return (<div>
        <Col
            sm={{
                offset: 1,
                size: 7
            }}
        >
            <div className="title_info mb-4">
                <br />
                <h4 className="mb-3 fw-bold" style={{fontSize: "25px"}}>Đặt vé máy bay</h4>
                <br />
                <h6 className="text-muted">
                    Điền thông tin người đặt và thông tin hành khách
                </h6>
            </div>
        </Col>
    </div>)
}
export default TitleInfo; 