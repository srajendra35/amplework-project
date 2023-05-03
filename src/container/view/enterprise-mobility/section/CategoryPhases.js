import React from "react";
import "../EnterpriseMobility.css";
 

const CategoryPhases = (props) => {
  return (
    <>
      <div className="container">
        <div className="row mb-5">
          <h2 className="categoryheading">
             {props.title}
          </h2>
          <p className="categorypara">
           {props.para}
          </p>
        </div>
        <div className="row" style={{flexDirection: `${props.reverse}`}} >
          <div className="col-lg-6" style={{ flexDirection: `${props.reverse}`,backgroundImage:`url(${props.bgimages})`,backgroundPosition:`${props.backgroundposition}`,backgroundRepeat:"no-repeat"}}>
            <div className="objectimg">
              <img src={props.image} width={'50%'}   alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="d-flex">
              <div className=" col-lg-2">
                <h6 className="onenumber mt-4">{props.one}</h6>
              </div>
              <div className="col-lg-10">
                <h4 className="oneheading mt-5 mb-4">{props.heading}</h4>
                <p className="categoryonepara">
                {props.headpara}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CategoryPhases;
