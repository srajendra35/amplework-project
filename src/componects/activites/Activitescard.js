import React from "react";
const ActivitiesCard = (props) => {
  return (
    <>
      <div className="row">
        <div className="col-sm-6">
          <div className="bugs text-white rounded text-center " style={{ backgroundColor: `${props.bgcolor}`}}>
            <p>{props.icon}</p>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="textpara">
            <p>{props.title}</p>
          </div>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-between"></div>
    </>
  );
};
export default ActivitiesCard;
