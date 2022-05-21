import MoRong from "../components/MoRong";
import { useState } from "react";

const ChiTietChuyenBay = () => {
  const [show, setShow] = useState(false);

  const showPage = () => {
    setShow(!show);
  };

  return (
    <div
      className="css-1dbjc4n r-2o02ov"
      style={{ marginTop: "20px" }}
    >
      <div className="css-1dbjc4n r-uia4a0 r-1awozwy r-18u37iz r-1h0z5md r-p1pxzi">
        <div className="css-1dbjc4n r-uia4a0 r-1awozwy r-18u37iz r-xd6kpl">
          <div
            aria-live="polite"
            role="button"
            tabIndex={0}
            className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-5njf8e r-1otgn73 r-lrvibr"
          >
            <div
              className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci"
              style={{
                opacity: 1,

                marginRight: "20px",
              }}
            >
              <div
                dir="auto"
                style={{ color: "#179df3" }}
                className="css-901oao r-1i6uqv8 r-1sixt3s r-1o4mh9l r-b88u0q r-f0eezp r-q4m81j"
                onClick={showPage}
              >
                Chi tiết chuyến bay
              </div>
            </div>
          </div>
        </div>
        <div className="css-1dbjc4n r-uia4a0 r-1awozwy r-18u37iz r-15m1z73 r-xd6kpl">
          <div
            aria-live="polite"
            role="button"
            tabIndex={0}
            className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-5njf8e r-1otgn73 r-lrvibr"
          >
            <div
              className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci"
              style={{
                opacity: 1,

                marginRight: "20px",
              }}
            >
              {/* <div
                dir="auto"
                className="css-901oao r-1i6uqv8 r-1sixt3s r-1o4mh9l r-b88u0q r-f0eezp r-q4m81j"
              >
                Chi tiết vé
              </div> */}
            </div>
          </div>
        </div>
        <div className="css-1dbjc4n r-uia4a0 r-1awozwy r-18u37iz r-15m1z73 r-xd6kpl">
          <div
            aria-live="polite"
            role="button"
            tabIndex={0}
            className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-5njf8e r-1otgn73 r-lrvibr"
          >
            <div
              className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci"
              style={{
                opacity: 1,
                marginRight: "20px",
              }}
            >
              {/* <div
                dir="auto"
                className="css-901oao r-1i6uqv8 r-1sixt3s r-1o4mh9l r-b88u0q r-f0eezp r-q4m81j"
              >
                Hoàn tiền
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="css-1dbjc4n">
        <div
          className="css-1dbjc4n r-92ng3h"
          style={{
            backgroundColor: "rgb(1, 148, 243)",
            height: 2,
            marginLeft: 0,
            transform: "scaleX(0)",
            transformOrigin: "left top",
          }}
        />
      </div>

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
  )
}

export default ChiTietChuyenBay;