import { useState } from "react";

const VeMayBay = () => {
  const [air, setAir] = useState({
    from: null,
    to: null,
    hangghe: null,
    date: null,
    khuhoi: false,
  });
  const [showPopper, setShowPopper] = useState(false);
  const [quantity, setQuantity] = useState({
    nguoilon: 0,
    treem: 0,
    embe: 0,
  });

  const handleChangeAir = (e, type) => {
    setAir({
      ...air,
      [type]: e.target.value,
    });
  };

  const handleSwapper = () => {
    setAir({
      ...air,
      from: air.to,
      to: air.from,
    });
  };

  const handleShowPopper = () => {
    setShowPopper(!showPopper);
  };

  const handleDeCrement = (type) => {
    setQuantity({
      ...quantity,
      [type]: quantity[type] > 1 ? quantity[type] - 1 : 0,
    });
  };

  const handleInCrement = (type) => {
    setQuantity({
      ...quantity,
      [type]: quantity[type] + 1,
    });
  };

  const handleKhuHoi = () => {
    setAir({
      ...air,
      khuhoi: true,
    });
  };

  return (
    <div className="mMmI2 _2vjgs" data-elevation={2} style={{ width: 960 }}>
      <div />
      <div className="_1uz2h">
        <div className="_5yqXX">
          <div>
            <div style={{ position: "relative" }}>
              <div
                className="_2XrTn"
                style={{
                  padding: "16px 16px 8px",
                  borderRadius: 4,
                  justifyContent: "space-between",
                }}
              >
                <div className="_2sGWJ" style={{ position: "relative" }}>
                  <div>
                    <label
                      className="_2nbs2 _1Ogwk ZXmze tvat-checked"
                      data-id="ow-rt-radio"
                    >
                      <input
                        type="radio"
                        name="formType"
                        defaultValue="NORMAL"
                        defaultChecked
                      />
                      <div className="_1sBVI" />
                      <div className="_35qnS">
                        <span className="_1KrnW _1EnnQ _2i_vU _1dKIX">
                          Một chiều / Khứ hồi
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="_1MgP3">
                  <span className="_1KrnW _1EnnQ _2i_vU _1dKIX">
                    Tìm kiếm chuyến bay đến bất cứ đâu!
                  </span>
                  <button className="_1zk_U _3_ByF gLbQ- _2ARch" type="button">
                    <svg
                      fill="#0194F3"
                      stroke="none"
                      viewBox="0.093443203 0 11.2125 12"
                      width={24}
                      height={24}
                      className="_3O5-e"
                      strokeLinecap="round"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <g transform="translate(1.308119, 0.5)">
                        <path d="M1.51262719,7.70621739 L4.35698656,10.8804348 L7.19464281,7.7133913 L7.19339008,7.71338972 L7.19473219,7.7133913 C7.92626656,6.93382609 8.37895094,5.85486957 8.37895094,4.66304348 C8.37895094,2.2856087 6.57804469,0.358695652 4.35707594,0.358695652 C2.13566031,0.358695652 0.335200937,2.2856087 0.335200937,4.66304348 C0.335200937,5.85127862 0.785019976,6.92716844 1.51271674,7.7062175 Z" />
                        <ellipse
                          fill="#fff"
                          cx="4.35885934"
                          cy="4.665061"
                          rx="1.78932809"
                          ry="1.91499996"
                        />
                      </g>
                    </svg>
                    Mở bản đồ
                  </button>
                </div>
              </div>
              <div className="_3wLs8">
                <div className="_2XrTn">
                  <div
                    className="_2tXgG"
                    style={{
                      position: "relative",

                    }}
                  >
                    <div>
                      <div className="pzRKx _3jVRS">
                        <div
                          className="_1CIYj _15NbX LKTRB"
                          aria-live="polite"
                          style={{
                            minWidth: 280,
                          }}
                        />
                      </div>
                      <div
                        className="p6vKa"
                        style={{
                          position: "relative",
                          
                        }}
                      >
                        <label className="_3kQG9">Điểm khởi hành</label>
                        <label htmlFor="4f8f433c271" className="_3AxLJ">
                          <img
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/90850a422444ef949eca39e92bd9368e.svg"
                            width={24}
                            height={24}
                          />
                          <div className="_3KXUX">
                            <select
                              style={{
                                width: "100%",
                                border: "none",
                                fontSize: "16px",
                                fontWeight: "lighter",
                              }}
                              value={air.from}
                              onChange={(e) => handleChangeAir(e, "from")}
                            >
                              <option value="dn">Đà Nẵng (DAD)</option>
                              <option value="hcm">TP HCM (SGN)</option>
                              <option value="hn">Hà Nội (HAN)</option>
                            </select>
                          </div>
                        </label>
                        <div />
                        
                      </div>
                    </div>
                  </div>
                  <div
                    className="_2tXgG"
                    style={{
                      position: "relative",
                    }}
                  >
                    <div>
                      <div
                        className="pzRKx _3jVRS"
                        data-id="destinationAirportTooltip"
                      >
                        <div
                          className="_1CIYj _15NbX LKTRB"
                          aria-live="polite"
                          style={{
                            minWidth: 280,
                          }}
                        />
                      </div>
                      <div className="p6vKa">
                        <label className="_3kQG9">Điểm đến</label>
                        <label htmlFor="ca476a301a83" className="_3AxLJ">
                          <img
                            src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/90850a422444ef949eca39e92bd9368e.svg"
                            width={24}
                            height={24}
                          />
                          <div className="_3KXUX">
                            <select
                              style={{
                                width: "100%",
                                border: "none",
                                fontSize: "16px",
                                fontWeight: "lighter",
                              }}
                              value={air.to}
                              onChange={(e) => handleChangeAir(e, "to")}
                            >
                              <option value="dn">Đà Nẵng (DAD)</option>
                              <option value="hcm">TP HCM (SGN)</option>
                              <option value="hn">Hà Nội (HAN)</option>
                            </select>
                          </div>
                        </label>
                        <div />
                      </div>
                    </div>
                  </div>
                  <div
                    className="_2sGWJ"
                    style={{
                      position: "relative",
                    }}
                  >
                    <div>
                      <div className="pzRKx _3jVRS">
                        <div
                          className="_1CIYj _15NbX LKTRB"
                          aria-live="polite"
                          style={{
                            minWidth: 280,
                          }}
                        />
                      </div>
                      <div className="p6vKa">
                        <label className="_3kQG9">Số hành khách</label>
                        <label
                          htmlFor="9cd75a323864"
                          className="_3AxLJ"
                          onClick={handleShowPopper}
                        >
                          <i className="_1NPyI">
                            <svg
                              fill="#8F8F8F"
                              stroke="#8F8F8F"
                              height={24}
                              width={24}
                              viewBox=" 0 0 24 24"
                              strokeLinecap="round"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g fill="#8F8F8F">
                                    <g>
                                      <path d="M14,4.99810135 C14,4.44286817 14.4428363,4 15.0059191,4 L17.9940809,4 C18.5538512,4 19,4.44320035 19,4.99810135 L19,7.4910835 C19,8.87575446 17.8777408,10 16.5,10 C15.1161507,10 14,8.88310368 14,7.4910835 L14,4.99810135 Z M3.02844946,20 L11.9718018,20 C11.7202627,17.7448674 9.81658568,16 7.5,16 C5.19052711,16 3.28144126,17.750882 3.02844946,20 Z M13.7073787,21.7071068 C13.5266297,21.8880712 13.2770041,22 13.0014977,22 L1.99850233,22 C1.72277352,22 1.47314794,21.8890338 1.29245456,21.7085507 C1.11172655,21.5256904 1,21.2758928 1,21 L1,20.5089948 C1,16.9165048 3.91400308,14 7.5,14 C11.0929816,14 14,16.9085892 14,20.5089948 L14,21 C14,21.2758928 13.8882734,21.5256904 13.7075973,21.7066159 Z M20.9718018,18 L15.9970301,18 C15.4530363,18 15,18.4477153 15,19 C15,19.5561352 15.4463856,20 15.9970301,20 L22.0029699,20 C22.2749668,20 22.5242243,19.8880712 22.7054826,19.7071068 C22.8884721,19.5252461 23,19.2756474 23,19 L23,18.5089948 C23,14.9085892 20.0929816,12 16.5,12 C15.3771642,12 14.293821,12.2859721 13.3339831,12.8226805 C12.9250508,13.0513415 12.5420305,13.3236827 12.1915896,13.6344725 C11.7783896,14.0009206 11.7404897,14.6329503 12.1069378,15.0461503 C12.4733859,15.4593503 13.1054156,15.4972502 13.5186156,15.1308021 C13.7615978,14.9153123 14.0269972,14.7266038 14.310081,14.5683131 C14.9735045,14.1973493 15.7211198,14 16.5,14 C18.8165857,14 20.7202627,15.7448674 20.9718018,18 Z M12,4.99810135 L12,7.4910835 C12,9.9873743 14.0112821,12 16.5,12 C18.9831028,12 21,9.979533 21,7.4910835 L21,4.99810135 C21,3.33565134 19.6554629,2 17.9940809,2 L15.0059191,2 C13.3382347,2 12,3.33833084 12,4.99810135 Z M3,6.99810135 L3,9.4910835 C3,11.9873743 5.01128209,14 7.5,14 C9.9831028,14 12,11.979533 12,9.4910835 L12,6.99810135 C12,5.33565134 10.6554629,4 8.99408095,4 L6.00591905,4 C4.33823465,4 3,5.33833084 3,6.99810135 Z M5,6.99810135 C5,6.44286817 5.44283633,6 6.00591905,6 L8.99408095,6 C9.55385115,6 10,6.44320035 10,6.99810135 L10,9.4910835 C10,10.8757545 8.8777408,12 7.5,12 C6.11615069,12 5,10.8831037 5,9.4910835 L5,6.99810135 Z" />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </i>
                          <div className="_3KXUX">
                            <input
                              readOnly
                              aria-label="Số hành khách"
                              aria-expanded="false"
                              id="9cd75a323864"
                              className="K07a_"
                              value={`${quantity.nguoilon} Người lớn, ${quantity.treem} Trẻ em, ${quantity.embe} Em bé`}
                            />
                          </div>
                        </label>
                        <div />
                      </div>
                      <div
                        className={
                          showPopper
                            ? "css-1dbjc4n r-14lw9ot r-1l31rp8 r-z2wwpe r-rs99b7 r-1d2f490 r-nsbfu8 r-xd6kpl r-u8s1d r-zchlnj r-1r2pcjo  display_visible"
                            : "css-1dbjc4n r-14lw9ot r-1l31rp8 r-z2wwpe r-rs99b7 r-1d2f490 r-nsbfu8 r-xd6kpl r-u8s1d r-zchlnj r-1r2pcjo display_none"
                        }
                        style={{
                          zIndex: 999999,
                        }}
                      >
                        {/* nguoilon */}
                        <div className="css-1dbjc4n r-18u37iz r-knv0ih">
                          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/2/2c0dc7e0e7347fb5200a1aa692786496.svg" />
                          <div className="css-1dbjc4n r-lgvlli r-1jkjb">
                            <div
                              dir="auto"
                              className="css-901oao r-cwxd7f r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7 "
                              style={{
                                width: "100px",
                              }}
                            >
                              Người Lớn
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1enofrn r-majxgm r-56xrmm r-fdjqy7"
                              style={{ color: "rgb(104, 113, 118)" }}
                            >
                              (từ 12 tuổi)
                            </div>
                          </div>
                          <div className="css-1dbjc4n r-obd0qt r-dta0w2">
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-13qz1uu">
                              <div
                                aria-live="polite"
                                role="button"
                                className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-1e081e0 r-5njf8e r-1otgn73 r-lrvibr"
                                data-testid="passengers-stepper-minus-infant"
                              >
                                <div
                                  className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci"
                                  style={{ opacity: 1 }}
                                  onClick={() => handleDeCrement("nguoilon")}
                                >
                                  <div
                                    dir="auto"
                                    aria-hidden="true"
                                    className="css-901oao r-1awozwy r-6koalj r-1d4mawv"
                                    style={{ color: "rgb(1, 148, 243)" }}
                                  >
                                    <img
                                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/7b5777f7d9e392f8b0f1eff71b85d500.svg"
                                      width={16}
                                      height={16}
                                    />
                                  </div>
                                  <div
                                    dir="auto"
                                    className="css-901oao r-1sixt3s r-cygvgh r-b88u0q r-1iukymi r-q4m81j"
                                    style={{ color: "rgb(1, 148, 243)" }}
                                  />
                                </div>
                              </div>
                              <div className="css-1dbjc4n r-1awozwy r-5j04e9 r-13awgt0 r-1777fci r-4wgw6l r-s1qlax r-5njf8e">
                                <div
                                  dir="auto"
                                  className="css-901oao r-cwxd7f r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                                  data-testid="passengers-stepper-value-infant"
                                >
                                  {quantity.nguoilon}
                                </div>
                              </div>
                              <div
                                aria-live="polite"
                                role="button"
                                className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-1e081e0 r-5njf8e r-1otgn73 r-lrvibr"
                                data-testid="passengers-stepper-plus-infant"
                              >
                                <div
                                  className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci"
                                  style={{ opacity: 1 }}
                                  onClick={() => handleInCrement("nguoilon")}
                                >
                                  <div
                                    dir="auto"
                                    aria-hidden="true"
                                    className="css-901oao r-1awozwy r-6koalj r-1d4mawv"
                                    style={{ color: "rgb(1, 148, 243)" }}
                                  >
                                    <img
                                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/ec9410e2bcd087be269fe00a96ebc155.svg"
                                      width={16}
                                      height={16}
                                    />
                                  </div>
                                  <div
                                    dir="auto"
                                    className="css-901oao r-1sixt3s r-cygvgh r-b88u0q r-1iukymi r-q4m81j"
                                    style={{ color: "rgb(1, 148, 243)" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="css-1dbjc4n r-18u37iz r-knv0ih">
                          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/596fe65c9b360b34afef792214b8c387.svg" />
                          <div className="css-1dbjc4n r-lgvlli r-1jkjb">
                            <div
                              dir="auto"
                              className="css-901oao r-cwxd7f r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                              style={{
                                width: "100px",
                              }}
                            >
                              Trẻ em
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1enofrn r-majxgm r-56xrmm r-fdjqy7"
                              style={{ color: "rgb(104, 113, 118)" }}
                            >
                              (từ 2-11 tuổi)
                            </div>
                          </div>
                          <div className="css-1dbjc4n r-obd0qt r-dta0w2">
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-13qz1uu">
                              <div
                                aria-live="polite"
                                role="button"
                                className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-1e081e0 r-5njf8e r-1otgn73 r-lrvibr"
                                data-testid="passengers-stepper-minus-infant"
                              >
                                <div
                                  className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci"
                                  style={{ opacity: 1 }}
                                  onClick={() => handleDeCrement("treem")}
                                >
                                  <div
                                    dir="auto"
                                    aria-hidden="true"
                                    className="css-901oao r-1awozwy r-6koalj r-1d4mawv"
                                    style={{ color: "rgb(1, 148, 243)" }}
                                  >
                                    <img
                                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/7b5777f7d9e392f8b0f1eff71b85d500.svg"
                                      width={16}
                                      height={16}
                                    />
                                  </div>
                                  <div
                                    dir="auto"
                                    className="css-901oao r-1sixt3s r-cygvgh r-b88u0q r-1iukymi r-q4m81j"
                                    style={{ color: "rgb(1, 148, 243)" }}
                                  />
                                </div>
                              </div>
                              <div className="css-1dbjc4n r-1awozwy r-5j04e9 r-13awgt0 r-1777fci r-4wgw6l r-s1qlax r-5njf8e">
                                <div
                                  dir="auto"
                                  className="css-901oao r-cwxd7f r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                                  data-testid="passengers-stepper-value-infant"
                                >
                                  {quantity.treem}
                                </div>
                              </div>
                              <div
                                aria-live="polite"
                                role="button"
                                className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-1e081e0 r-5njf8e r-1otgn73 r-lrvibr"
                                data-testid="passengers-stepper-plus-infant"
                              >
                                <div
                                  className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci"
                                  style={{ opacity: 1 }}
                                  onClick={() => handleInCrement("treem")}
                                >
                                  <div
                                    dir="auto"
                                    aria-hidden="true"
                                    className="css-901oao r-1awozwy r-6koalj r-1d4mawv"
                                    style={{ color: "rgb(1, 148, 243)" }}
                                  >
                                    <img
                                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/ec9410e2bcd087be269fe00a96ebc155.svg"
                                      width={16}
                                      height={16}
                                    />
                                  </div>
                                  <div
                                    dir="auto"
                                    className="css-901oao r-1sixt3s r-cygvgh r-b88u0q r-1iukymi r-q4m81j"
                                    style={{ color: "rgb(1, 148, 243)" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="css-1dbjc4n r-18u37iz r-knv0ih">
                          <img src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/972714e5c8656d1b98aa564dfed79cee.svg" />
                          <div className="css-1dbjc4n r-lgvlli r-1jkjb">
                            <div
                              dir="auto"
                              className="css-901oao r-cwxd7f r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                              style={{
                                width: "100px",
                              }}
                            >
                              Em bé
                            </div>
                            <div
                              dir="auto"
                              className="css-901oao r-1sixt3s r-1enofrn r-majxgm r-56xrmm r-fdjqy7"
                              style={{ color: "rgb(104, 113, 118)" }}
                            >
                              (dưới 2 tuổi)
                            </div>
                          </div>
                          <div className="css-1dbjc4n r-obd0qt r-dta0w2">
                            <div className="css-1dbjc4n r-1awozwy r-18u37iz r-13qz1uu">
                              <div
                                aria-live="polite"
                                role="button"
                                className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-1e081e0 r-5njf8e r-1otgn73 r-lrvibr"
                                data-testid="passengers-stepper-minus-infant"
                              >
                                <div
                                  className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci"
                                  style={{ opacity: 1 }}
                                  onClick={() => handleDeCrement("embe")}
                                >
                                  <div
                                    dir="auto"
                                    aria-hidden="true"
                                    className="css-901oao r-1awozwy r-6koalj r-1d4mawv"
                                    style={{ color: "rgb(1, 148, 243)" }}
                                  >
                                    <img
                                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/7/7b5777f7d9e392f8b0f1eff71b85d500.svg"
                                      width={16}
                                      height={16}
                                    />
                                  </div>
                                  <div
                                    dir="auto"
                                    className="css-901oao r-1sixt3s r-cygvgh r-b88u0q r-1iukymi r-q4m81j"
                                    style={{ color: "rgb(1, 148, 243)" }}
                                  />
                                </div>
                              </div>
                              <div className="css-1dbjc4n r-1awozwy r-5j04e9 r-13awgt0 r-1777fci r-4wgw6l r-s1qlax r-5njf8e">
                                <div
                                  dir="auto"
                                  className="css-901oao r-cwxd7f r-1sixt3s r-ubezar r-majxgm r-135wba7 r-fdjqy7"
                                  data-testid="passengers-stepper-value-infant"
                                >
                                  {quantity.embe}
                                </div>
                              </div>
                              <div
                                aria-live="polite"
                                role="button"
                                className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-1e081e0 r-5njf8e r-1otgn73 r-lrvibr"
                                data-testid="passengers-stepper-plus-infant"
                              >
                                <div
                                  className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci"
                                  style={{ opacity: 1 }}
                                  onClick={() => handleInCrement("embe")}
                                >
                                  <div
                                    dir="auto"
                                    aria-hidden="true"
                                    className="css-901oao r-1awozwy r-6koalj r-1d4mawv"
                                    style={{ color: "rgb(1, 148, 243)" }}
                                  >
                                    <img
                                      src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/ec9410e2bcd087be269fe00a96ebc155.svg"
                                      width={16}
                                      height={16}
                                    />
                                  </div>
                                  <div
                                    dir="auto"
                                    className="css-901oao r-1sixt3s r-cygvgh r-b88u0q r-1iukymi r-q4m81j"
                                    style={{ color: "rgb(1, 148, 243)" }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="css-1dbjc4n r-18u37iz r-17s6mgv r-knv0ih">
                          <div
                            aria-live="polite"
                            role="button"
                            tabIndex={0}
                            className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-10paoce r-5njf8e r-1otgn73 r-lrvibr"
                          >
                            <div
                              className="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci"
                              style={{ opacity: 1 }}
                            >
                              <div
                                dir="auto"
                                className="css-901oao r-1sixt3s r-1o4mh9l r-b88u0q r-f0eezp r-q4m81j"
                                style={{ color: "rgb(1, 148, 243)" }}
                                onClick={handleShowPopper}
                              >
                                Xong
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="_2XrTn">
                  <div
                    className="_2tXgG"
                    style={{
                      position: "relative",
                    }}
                  >
                    <div className="p6vKa">
                      <label className="_3kQG9">Ngày đi</label>
                      <span>
                        <label htmlFor="7dbb6a5653e7" className="_3AxLJ">
                          <i className="_1NPyI">
                            <svg
                              strokeWidth={0}
                              fill="#8F8F8F"
                              stroke="#8F8F8F"
                              height={24}
                              width={24}
                              viewBox=" 0 0 24 24"
                              strokeLinecap="round"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <path d="M16,6 L8,6 C8,6.55237094 7.55613518,7 7,7 C6.44771525,7 6,6.55628335 6,6.00019251 L5.13606889,6 C4.50950574,6 4,6.47929792 4,7.06818297 L4,18.931817 C4,19.5205004 4.50913005,20 5.13606889,20 L18.8639311,20 C19.4904943,20 20,19.5207021 20,18.931817 L20,9.99999963 C19.9997095,9.99999988 19.9994189,10 19.9991283,10 L6.00087166,10 C5.4481055,10 5,9.55613518 5,9 C5,8.44771525 5.44463086,8 6.00087166,8 L19.9991283,8 C19.9994189,8 19.9997095,8.00000012 20,8.00000037 L20,7.06818297 C20,6.47949957 19.49087,6 18.8639311,6 L18,6 C18,6.55237094 17.5561352,7 17,7 C16.4477153,7 16,6.55628335 16,6.00019251 Z M18,4 L18.6732664,4 C20.5098226,4 22,5.41928898 22,7.16787737 L22,18.8321226 C22,20.581459 20.5088819,22 18.6732664,22 L5.32673364,22 C3.49017741,22 2,20.580711 2,18.8321226 L2,7.16787737 C2,5.41854095 3.49111814,4 5.32673364,4 L6,4 L6,2.99980749 C6,2.44762906 6.44386482,2 7,2 C7.55228475,2 8,2.44371665 8,2.99980749 L8,4 L16,4 L16,2.99980749 C16,2.44762906 16.4438648,2 17,2 C17.5522847,2 18,2.44371665 18,2.99980749 L18,4 Z M7,14 C6.44771525,14 6,13.5522847 6,13 C6,12.4477153 6.44771525,12 7,12 C7.55228475,12 8,12.4477153 8,13 C8,13.5522847 7.55228475,14 7,14 Z M12,14 C11.4477153,14 11,13.5522847 11,13 C11,12.4477153 11.4477153,12 12,12 C12.5522847,12 13,12.4477153 13,13 C13,13.5522847 12.5522847,14 12,14 Z M17,15 C15.8954305,15 15,14.1045695 15,13 C15,11.8954305 15.8954305,11 17,11 C18.1045695,11 19,11.8954305 19,13 C19,14.1045695 18.1045695,15 17,15 Z M7,19 C6.44771525,19 6,18.5522847 6,18 C6,17.4477153 6.44771525,17 7,17 C7.55228475,17 8,17.4477153 8,18 C8,18.5522847 7.55228475,19 7,19 Z M12,19 C11.4477153,19 11,18.5522847 11,18 C11,17.4477153 11.4477153,17 12,17 C12.5522847,17 13,17.4477153 13,18 C13,18.5522847 12.5522847,19 12,19 Z M17,19 C16.4477153,19 16,18.5522847 16,18 C16,17.4477153 16.4477153,17 17,17 C17.5522847,17 18,17.4477153 18,18 C18,18.5522847 17.5522847,19 17,19 Z" />
                            </svg>
                          </i>
                          <div className="">
                            <input
                              className="K07a_"
                              value={air.date}
                              onChange={(e) => handleChangeAir(e, "date")}
                            />
                          </div>
                        </label>
                        <div />
                      </span>
                    </div>
                  </div>
                  <div
                    className="_2tXgG"
                    style={{
                      position: "relative",
                    }}
                  >
                    <div className="p6vKa">
                      <label className="_3kQG9">Ngày về</label>
                      <span>
                        <label htmlFor="7dbb6a5653e7" className="_3AxLJ">
                          <i className="_1NPyI">
                            <svg
                              strokeWidth={0}
                              fill="#8F8F8F"
                              stroke="#8F8F8F"
                              height={24}
                              width={24}
                              viewBox=" 0 0 24 24"
                              strokeLinecap="round"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <path d="M16,6 L8,6 C8,6.55237094 7.55613518,7 7,7 C6.44771525,7 6,6.55628335 6,6.00019251 L5.13606889,6 C4.50950574,6 4,6.47929792 4,7.06818297 L4,18.931817 C4,19.5205004 4.50913005,20 5.13606889,20 L18.8639311,20 C19.4904943,20 20,19.5207021 20,18.931817 L20,9.99999963 C19.9997095,9.99999988 19.9994189,10 19.9991283,10 L6.00087166,10 C5.4481055,10 5,9.55613518 5,9 C5,8.44771525 5.44463086,8 6.00087166,8 L19.9991283,8 C19.9994189,8 19.9997095,8.00000012 20,8.00000037 L20,7.06818297 C20,6.47949957 19.49087,6 18.8639311,6 L18,6 C18,6.55237094 17.5561352,7 17,7 C16.4477153,7 16,6.55628335 16,6.00019251 Z M18,4 L18.6732664,4 C20.5098226,4 22,5.41928898 22,7.16787737 L22,18.8321226 C22,20.581459 20.5088819,22 18.6732664,22 L5.32673364,22 C3.49017741,22 2,20.580711 2,18.8321226 L2,7.16787737 C2,5.41854095 3.49111814,4 5.32673364,4 L6,4 L6,2.99980749 C6,2.44762906 6.44386482,2 7,2 C7.55228475,2 8,2.44371665 8,2.99980749 L8,4 L16,4 L16,2.99980749 C16,2.44762906 16.4438648,2 17,2 C17.5522847,2 18,2.44371665 18,2.99980749 L18,4 Z M7,14 C6.44771525,14 6,13.5522847 6,13 C6,12.4477153 6.44771525,12 7,12 C7.55228475,12 8,12.4477153 8,13 C8,13.5522847 7.55228475,14 7,14 Z M12,14 C11.4477153,14 11,13.5522847 11,13 C11,12.4477153 11.4477153,12 12,12 C12.5522847,12 13,12.4477153 13,13 C13,13.5522847 12.5522847,14 12,14 Z M17,15 C15.8954305,15 15,14.1045695 15,13 C15,11.8954305 15.8954305,11 17,11 C18.1045695,11 19,11.8954305 19,13 C19,14.1045695 18.1045695,15 17,15 Z M7,19 C6.44771525,19 6,18.5522847 6,18 C6,17.4477153 6.44771525,17 7,17 C7.55228475,17 8,17.4477153 8,18 C8,18.5522847 7.55228475,19 7,19 Z M12,19 C11.4477153,19 11,18.5522847 11,18 C11,17.4477153 11.4477153,17 12,17 C12.5522847,17 13,17.4477153 13,18 C13,18.5522847 12.5522847,19 12,19 Z M17,19 C16.4477153,19 16,18.5522847 16,18 C16,17.4477153 16.4477153,17 17,17 C17.5522847,17 18,17.4477153 18,18 C18,18.5522847 17.5522847,19 17,19 Z" />
                            </svg>
                          </i>
                          <div className="">
                            <input
                              className="K07a_"
                              value={air.date}
                              onChange={(e) => handleChangeAir(e, "date")}
                            />
                          </div>
                        </label>
                        <div />
                      </span>
                    </div>
                  </div>
                  <div
                    className="_2sGWJ"
                    style={{
                      position: "relative",
                    }}
                  >
                    <div className="p6vKa">
                      <label className="_3kQG9">Hạng ghế</label>
                      <div className="_1QAwC">
                        <label htmlFor="8eb4c7cb858d" className="_3AxLJ">
                          <i className="_1NPyI">
                            <svg
                              fill="#8F8F8F"
                              stroke="#8F8F8F"
                              height={24}
                              width={24}
                              viewBox=" 0 0 24 24"
                              strokeLinecap="round"
                              xmlns="http://www.w3.org/2000/svg"
                              xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                              <g>
                                <g
                                  stroke="none"
                                  strokeWidth={1}
                                  fill="none"
                                  fillRule="evenodd"
                                >
                                  <g fill="#8F8F8F">
                                    <g>
                                      <path d="M8.94519765,4.61667101 C8.62806913,3.68955098 7.65298676,3 6.67081455,3 L4.85289307,3 C3.67003087,3 2.83090687,3.99471451 3.02901287,5.15303385 C3.04938258,5.26366685 3.04938258,5.26366685 3.13057716,5.70388653 C3.20952829,6.13228385 3.29750669,6.61071694 3.39225437,7.1272847 C3.66295152,8.60313521 3.93364366,10.0887842 4.18625429,11.48895 C4.2086197,11.6129428 4.2086197,11.6129428 4.23097451,11.7369844 C4.55575141,13.5394962 4.82308549,15.0491222 5.01454523,16.168581 C5.10764997,16.7129614 5.62443373,17.0787925 6.16881406,16.9856878 C6.7131944,16.8925831 7.07902556,16.3757993 6.98592083,15.831419 C6.79326179,14.7049479 6.52501719,13.1901802 6.1992793,11.3823349 C6.17688352,11.258066 6.17688352,11.258066 6.15447844,11.1338532 C5.90148533,9.73156742 5.63045917,8.24408523 5.35943803,6.76646833 C5.26458431,6.24932249 5.17650427,5.77033664 5.09745422,5.34140257 C5.066522,5.17369465 5.04735554,5.06977819 5.03448279,4.99999993 L6.67081455,5 C6.80194324,5 7.01379656,5.14981674 7.0528421,5.26396574 L9.60448342,12.7236474 C9.74285877,13.1281855 10.1231114,13.4 10.5506612,13.4 L17.1298024,13.4 C17.3261224,13.4 17.667392,13.596079 17.7656921,13.7652149 L19.6457155,17 C19.2433952,17 18.7642146,17 15.6956093,17 L7.99901987,17 C7.44673512,17 6.99901987,17.4477153 6.99901987,18 C6.99901987,18.5522847 7.44673512,19 7.99901987,19 L20.3766941,19 C21.6990875,19 22.4132729,17.7816855 21.7467063,16.6347851 L19.494861,12.7602399 C19.038297,11.9746718 18.0380977,11.4 17.1298024,11.4 L11.2654874,11.4 L8.94519765,4.61667101 Z M12,9 C12,8.44771525 12.4437166,8 12.9998075,8 L16.0001925,8 C16.5523709,8 17,8.44386482 17,9 C17,9.55228475 16.5562834,10 16.0001925,10 L12.9998075,10 C12.4476291,10 12,9.55613518 12,9 Z M7,20 L20,20 L20,21 C20,21.5522847 19.5525106,22 19.0014977,22 L7.99850233,22 C7.44704472,22 7,21.5561352 7,21 L7,20 Z" />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </svg>
                          </i>
                          <div className="_3KXUX">
                            <select
                              style={{
                                width: "100%",
                                border: "none",
                                fontSize: "16px",
                                fontWeight: "lighter",
                              }}
                              value={air.hangghe}
                              onChange={(e) => handleChangeAir(e, "hangghe")}
                            >
                              <option value="phothong">Phổ thông</option>
                              <option value="thuonggia">Thương gia</option>
                            </select>
                          </div>
                        </label>
                        <div className="_2ZfHe" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="IwltO">
                <button className="_3-JID _22K0g gLbQ- _90_75" type="button">
                  <div className="afC62 _3pjEu">
                    <svg
                      strokeWidth={0}
                      width={16}
                      height={16}
                      fill="#FFFFFF"
                      stroke="currentColor"
                      strokeLinecap="round"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <path d="M15.0621204,16.4934476 L15.0621204,16.4934476 C13.6597496,17.5834526 11.9256074,18.1936194 10.0968097,18.1936194 C5.62489,18.1936194 2,14.5684355 2,10.0968097 C2,5.62462119 5.62462119,2 10.0968097,2 C14.5684355,2 18.1936194,5.62489 18.1936194,10.0968097 C18.1936194,11.9254725 17.5835426,13.6594938 16.4934131,15.0620858 L21.7035624,20.2722352 C22.0988125,20.6674853 22.0988125,21.3083123 21.7035624,21.7035624 C21.3083123,22.0988125 20.6674853,22.0988125 20.2722352,21.7035624 L15.0621204,16.4934476 Z M14.3909337,14.391398 C15.5229022,13.258695 16.1694169,11.730041 16.1694169,10.0968097 C16.1694169,6.74286286 13.4505361,4.02420242 10.0968097,4.02420242 C6.74255731,4.02420242 4.02420242,6.74255731 4.02420242,10.0968097 C4.02420242,13.4505361 6.74286286,16.1694169 10.0968097,16.1694169 C11.730041,16.1694169 13.258695,15.5229022 14.3909337,14.391398 Z" />
                    </svg>
                  </div>
                  Tìm chuyến bay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
};

export default VeMayBay;
