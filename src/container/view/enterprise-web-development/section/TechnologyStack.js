import React from "react";
import "../EnterpriseWebDevelopment.css";
import { Card, CardGroup } from "react-bootstrap";
const TechnologyStack = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h2 className="tech text-center mb-4">Technology Stacks</h2>
          <p className="techpara text-center">
            If your websites involve the activities of financial transactions
            then utilize the payment gateway to facilitate secure online
            payments. It enables customers to complete transactions using
            credit/debit cards,
          </p>
        </div>
        <div className="row">
          <CardGroup>
            <Card className="technology">
              <h4 className="front mb-4">Front-end frameworks and libraries</h4>
              <div className="d-flex flex-wrap">
                <p className="textreact mx-1">React</p>
                <p className="textreact1 mx-1">Angular</p>
                <p className="textreact1 mx-1">Vue.js</p> 
                <p className="textreact1 mx-1">jQuery</p> 
              </div>
            </Card>
            <Card className="technology">
              <h4 className="front mb-4">Development tools and libraries</h4>
              <div className="d-flex flex-wrap">
                <p className="git mx-1">Git</p>
                <p className="git  mx-1">Docker</p>
                <p className="git mx-1">Jenkins</p>
                <p className="git  mx-1">Apache Maven </p>
                <p className="git mx-1 ">Gulp</p>
                <p className="git mx-1">Grunt</p>
                <p className="git mx-1"> NPM</p>
              </div>
            </Card>
          </CardGroup>
        </div>
        <div className="row">
          <CardGroup className=" d-flex flex-wrap">
            <Card className="col-sm-12  col-lg-6  technology w-100">
              <h4 className="front mb-4">Back-end frameworks</h4>
              <div className="d-flex flex-wrap ">
                <p className="git  mx-1">Spring</p>
                <p className="git mx-1">Express</p>
              </div>
              <div className="d-flex flex-wrap ">
                <p className="git mx-1">Laravel</p>
                <p className="git mx-1"> Ruby on Rails </p>
              </div>
            </Card>
            <Card className="col-sm-12  col-lg-6   technology w-100">
              <h4 className="front  mb-4">MEAN stack</h4>
              <div className="d-flex flex-wrap ">
                <p className="git mx-1">MongoDB </p>
                <p className="git mx-1">Express</p>
              </div>
              <div className="d-flex flex-wrap  ">
                <p className="git mx-1">AngularJS </p>
                <p className="git mx-1">Node.js </p>
              </div>
            </Card>
            <Card className="col-sm-12  col-lg-6   w-100 technology">
              <h4 className="front  mb-4">LAMP stack</h4>
              <div className="d-flex flex-wrap  ">
                <p className="git mx-1">Linux </p>
                <p className="git mx-1"> Apache</p>
              </div>
              <div className="d-flex flex-wrap ">
                <p className="git mx-1">MySQL </p>
                <p className="git mx-1">PHP </p>
              </div>
            </Card>
            <Card className="col-sm-12  col-lg-6   w-100 technology">
              <h4 className="front  mb-4">Ruby on Rails</h4>
              <div className="d-flex flex-wrap  ">
                <p className="git mx-1">Ruby </p>
                <p className="git mx-1">Rails</p>
                <p className="git mx-1">PostgreSQL </p>
              </div>
            </Card>
          </CardGroup>
        </div>
        <div className="row">
          <CardGroup>
            <Card className="technology">
              <h4 className="front mb-4">Front-end frameworks and libraries</h4>
              <div className=" d-flex flex-wrap ">
                <p className="textreact1 mx-1">React</p>
                <p className="textreact1 mx-1">Angular</p>
                <p className="textreact1 mx-1">Vue.js</p>
                <p className="textreact1 mx-1">jQuery</p>
              </div>
            </Card>
            <Card className="technology">
              <h4 className="front mb-4">Django stack</h4>
              <div className="  d-flex flex-wrap  ">
                <p className="git mx-1">Python </p>
                <p className="git mx-1">Django</p>
                <p className="git mx-1">PostgreSQL</p>
              </div>
            </Card>
          </CardGroup>
        </div>
      </div>
    </>
  );
};
export default TechnologyStack;
