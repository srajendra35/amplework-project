import React from "react";
import { Button, Card } from "react-bootstrap";
import { BsArrowUpRight } from "react-icons/bs";
import "../ApplicationMaintenance.css";
const Dedicated=()=>{
    return(
        <>
        <div className="container">
            <div className="row">
            <Card className="fullcard mb-5">
                <Card.Body>
                  <div className="d-flex flex-wrap justify-content-around">
                    <div>
                      <h4 className="dedicated text-white mb-3">
                        Dedicated Full-stack developer?
                      </h4>
                      <p className="text-white fs-5">
                        Let's Discuss Your Project how we will transform your
                        idea into an amazing digital product?
                      </p>
                    </div>
                    <div className="align-self-center">
                      <Button
                        className="rounded-pill p-2 px-2 fs-5"
                        variant="primary"
                      >
                        Get 2 Week Free Trial
                        <BsArrowUpRight className="text-white mx-3" />
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
        </div>


        </>
    )
}
export default Dedicated;