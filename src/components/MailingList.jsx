import React from "react";
import { Container } from "react-bootstrap";
function MailingList() {
  return (
    <div>
      <Container>
        <div className="parent-mail pb-5">
          <div className="row">
            <div className="col-12">
              <div className="form my-1">
                <form>
                  <div className="inputs">
                    <label name="trap_tokens" htmlFor="trap_tokens">
                      Join our mailing list for the latest news
                      <input
                        type="text"
                        id="trap_tokens"
                        placeholder="Your email addres"
                      />
                    </label>
                    <button className="primary-btn">Sign me up!</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12">
              <div className="form my-1">
                <form>
                  <div className="inputs">
                    <label name="trap_tokens" htmlFor="trap_tokens">
                      Join our mailing list for the latest news
                      <input
                        type="text"
                        id="trap_tokens"
                        placeholder="Your email addres"
                      />
                    </label>
                    <button className="primary-btn">Sign me up!</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12">
              <div className="form my-1">
                <div className="inputs px-5 py-1 text-center">
                  <p>
                    {" "}
                    Thank you for signing up to the mailing list. You will
                    receive latest news and and announcements via email.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default MailingList;
