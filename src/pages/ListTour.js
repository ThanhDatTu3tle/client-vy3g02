import List from "../components/List";

const ListTour = () => {
  return (
    <div>
      <div className="css-1dbjc4n" data-testid="StandarizedOTPFlow" />
      <div
        className="css-1dbjc4n r-14lw9ot r-bnwqim r-13qz1uu r-1e2svnr"
        style={{ marginTop: "100px" }}
      >
        <div className="css-1dbjc4n r-184en5c">
          <div className="css-1dbjc4n r-1ifxtd0">
            <div className="css-1dbjc4n">
              <div className="css-1dbjc4n r-6koalj r-18u37iz r-1777fci r-1wzrnnt r-u8s1d r-13qz1uu r-184en5c">
                <div className="css-1dbjc4n r-jg6ec0 r-9bullz" />
              </div>
              <div className="css-1dbjc4n">
                <div className="css-1dbjc4n r-kul7p6 r-1udh08x">
                  <img
                    importance="low"
                    loading="lazy"
                    src="https://ik.imagekit.io/tvlk/image/imageResource/2019/12/04/1575430518767-1fc642d45c0ab4008c1eba72a17a2780.jpeg?tr=h-242,q-75"
                    decoding="async"
                    height={400}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center center",
                    }}
                  />
                  <div className="css-1dbjc4n r-1awozwy r-1pi2tsx r-1777fci r-1rb1i5q r-u8s1d r-uwe93p r-136ojw6" />
                </div>
              </div>
              <div className="css-1dbjc4n r-obd0qt r-6koalj r-18u37iz r-1mvsivf r-1777fci r-u8s1d r-13qz1uu r-184en5c">
                <div className="css-1dbjc4n">
                  <div className="css-1dbjc4n" style={{ top: "-16px" }} />
                  <div className="css-1dbjc4n r-1jgb5lz r-l0gqae">
                    <div>
                      <div className="css-1dbjc4n">
                        <div className="css-1dbjc4n r-14lw9ot r-kdyh1x r-rkbeli r-18u37iz r-ymttw5 r-tvv088">
                          <div className="css-1dbjc4n r-1awozwy r-18u37iz r-16y2uox r-1777fci r-edyy15">
                            <div
                              className="css-1dbjc4n r-14lw9ot r-1l31rp8 r-kdyh1x r-rs99b7 r-1p0dtai r-1d2f490 r-u8s1d r-zchlnj r-ipm5af r-1wyyakw"
                              style={{ height: "calc(100% - 2)" }}
                            />
                            <div className="css-1dbjc4n r-1kb76zh">
                              <img
                                src="https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/9/9ce2df7066af89022702b2b17058582c.svg"
                                width={24}
                                height={24}
                              />
                            </div>
                            <input
                              type="text"
                              placeholder="Tìm hoạt động hoặc điểm đến"
                              autoCorrect="off"
                              defaultValue
                              autoComplete="xperience-autocomplete"
                              aria-invalid="false"
                              autoCapitalize="sentences"
                              dir="auto"
                              spellCheck="false"
                              className="css-11aywtz r-cwxd7f r-13awgt0 r-1sixt3s r-ubezar r-135wba7 r-bcqeeo r-1ny4l3l r-10paoce r-13n6l4s"
                            />
                          </div>
                          <div
                            aria-live="polite"
                            role="button"
                            tabIndex={0}
                            className="css-18t94o4 css-1dbjc4n r-kdyh1x r-1loqt21 r-1ow6zhx r-qtfnoi r-10paoce r-1guathk r-5njf8e r-1otgn73 r-lrvibr"
                            style={{ backgroundColor: "rgba(1, 148, 243, 1)" }}
                          >
                            <div
                              dir="auto"
                              className="css-901oao r-1yadl64 r-1vonz36 r-109y4c4 r-1cis278 r-1udh08x r-t60dpp r-u8s1d r-3s2u2q r-92ng3h"
                            >
                              Search
                            </div>
                            <div
                              className="css-1dbjc4n r-1awozwy r-13awgt0 r-18u37iz r-1777fci"
                              style={{ opacity: 1 }}
                            >
                              <div
                                dir="auto"
                                aria-hidden="true"
                                className="css-901oao css-bfa6kz r-jwli3a r-1sixt3s r-cygvgh r-b88u0q r-1iukymi r-q4m81j"
                              >
                                Search
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
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
                <List />
              </div>
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListTour;
