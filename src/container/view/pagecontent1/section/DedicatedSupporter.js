import React from "react";
import '../PageContent.css'
import imgs from '../../../../assets/imgs.svg'


const OctagonShape = () => {
  return (
    <>
      <div className="container">
        <div className="pantagle row">
          <div className="col-sm-12 col-lg-6">
            <div>
              <img src={imgs} width={'100%'} alt="" />
            </div>
          </div>
          <div className="col-sm-12 col-lg-6">
            <h6 className="ample fw-bolder">
              AMPLEWORK SOFTWARE
            </h6>
            <h5 className="fw-bolder">
              Your Dedicated Supporter for App Maintenance Services
            </h5>
            <p className="para mt-3 fw-bolder">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum
              voluptatibus aut accusamus quo consectetur magni est
              exercitationem, saepe dicta fugiat, consequatur, modi commodi
              reiciendis animi recusandae impedit quos illo? Id.
            </p>
            <p className="para mt-3 fw-bolder">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              fuga rerum nobis cupiditate hic aliquid corrupti, similique
              aspernatur enim ex illo labore? Iusto sed veniam impedit ullam et
              consequatur ipsa!
            </p>
            <p className="para mt-3 fw-bolder">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis
              fuga rerum nobis cupiditate hic aliquid corrupti, similique
              aspernatur enim ex illo labore? Iusto sed veniam impedit ullam et
              consequatur ipsa!
            </p>
          </div>
          </div>
        </div>
    
    </>
  );
};
export default OctagonShape;
