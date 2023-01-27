import React from "react";
import { useContext } from "react";
import { FcCheckmark, FcCancel } from "react-icons/fc";
import { Context } from "./NavBar";
import "../Styles/Pricing.css";
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function Pricing() {
  const { toggle } = useContext(Context);
  const [toggleBasic, setToggleBasic] = useState(true);
  const [toggleStandard, setToggleStandard] = useState(true);
  const [togglePremium, setTogglePremium] = useState(true);

  const [basicCost, setBasicCost] = useState("7.99");
  const [standardCost, setStandardCost] = useState("12.99");
  const [premiumCost, setPremiumCost] = useState("18.99");

  return (
    <div className={toggle ? "bg-blackk" : "bg-whitee"}>
      <Container fluid>
        <div className="box">
          <Row className="pricing-container">
            <Col>
              <div className={toggle ? "dark-option1" : "light-option1"}>
                <h2>Basic</h2>
                <div className="price">
                  <h3>{basicCost}$</h3>
                  <h4 className="fs-3">
                    {toggleBasic ? "/Monthly" : "/Yearly"}
                  </h4>
                </div>
                <span>
                  <FcCheckmark fontSize={25} className="me-2" />
                  Unlimited films and Tv Shows
                </span>
                <span>
                  <FcCheckmark fontSize={25} className="me-2" />
                  Watch on mobile phones and tablets
                </span>
                <span>
                  <FcCheckmark fontSize={25} className="me-2" />
                  Cancel at anytime
                </span>
                <span>
                  <FcCheckmark fontSize={25} className="me-2" />
                  First Month completely free
                </span>
                <span>
                  <FcCancel fontSize={25} className="me-2 mt-1" />
                  No HD or UltraHD 
                </span>
                <div className="mt-5">
                  <button className="button">Buy Now!</button>
                  <Form>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      size={50}
                      onClick={() => {
                        setToggleBasic(!toggleBasic);
                        if (toggleBasic) {
                          setBasicCost("50.99");
                        } else {
                          setBasicCost("7.99");
                        }
                      }}
                    />
                  </Form>
                </div>
              </div>
            </Col>
            <Col>
              <div className={toggle ? "dark-option2" : "light-option2"}>
                <h2>Standard</h2>
                <div className="price">
                  <h3>{standardCost}$</h3>
                  <h4 className="fs-3">
                    {toggleStandard ? "/Monthly" : "/Yearly"}
                  </h4>
                </div>
                <span>
                  <FcCheckmark fontSize={25} className="me-2" />
                  Unlimited films and Tv Shows
                </span>
                <span>
                  <FcCheckmark fontSize={25} className="me-2" />
                  Watch on mobile phones and tablets
                </span>
                <span>
                  <FcCheckmark fontSize={25} className="me-2" />
                  Cancel at anytime
                </span>
                <span>
                  <FcCheckmark fontSize={25} className="me-2" />
                  First Month completely free
                </span>
                <span>
                  <FcCheckmark fontSize={25} className="me-2" />
                  HD available
                </span>
                <div className="mt-5">
                  <button className="button">Buy Now!</button>
                  <Form>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      onClick={() => {
                        setToggleStandard(!toggleStandard);
                        if (toggleStandard) {
                          setStandardCost("120");
                        } else {
                          setStandardCost("12.99");
                        }
                      }}
                    />
                  </Form>
                </div>
              </div>
            </Col>
            <Col>
              <div className={toggle ? "dark-option3" : "light-option3"}>
                <h2>Premium</h2>
                <div className="price">
                  <h3>{premiumCost}$</h3>
                  <h4 className="fs-3">
                    {togglePremium ? "/Monthly" : "/Yearly"}
                  </h4>
                </div>
                <span>
                  <FcCheckmark fontSize={25} className="me-2" />
                  Unlimited films and Tv Shows
                </span>
                <span>
                  <FcCheckmark fontSize={25} className="me-2" />
                  Watch on mobile phones and tablets
                </span>
                <span>
                  <FcCheckmark fontSize={25} className="me-2" />
                  Cancel at anytime
                </span>
                <span>
                  <FcCheckmark fontSize={25} className="me-2" />
                  First Month completely free
                </span>
                <span>
                  <FcCheckmark fontSize={25} className="me-2" />
                  Ultra HD available
                </span>
                <div className="mt-5">
                  <button className="button">Buy Now!</button>
                  <Form>
                    <Form.Check
                      type="switch"
                      id="custom-switch"
                      onClick={() => {
                        setTogglePremium(!togglePremium);
                        if (togglePremium) {
                          setPremiumCost("180");
                        } else {
                          setPremiumCost("18.99");
                        }
                      }}
                    />
                  </Form>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default Pricing;
