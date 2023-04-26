import React from "react";
import '../../pagecontent1/PageContent.css'
import FascinatCard from "../../../../componects/Fascinatcard";
import Img1 from "../../../../assets/facinating1.png";
import Img2 from "../../../../assets/facinating2.png";
import Img3 from '../../../../assets/facinating3.png'
import Img4 from '../../../../assets/facinating4.png'
import Img5 from '../../../../assets/facinating5.png'
import Img6 from '../../../../assets/facinating6.png'
const Fascinat = () => {
  return (
    <>
      <div className="fascinat">
        <div className="container">
          <div className="row">
            <h4 className="fasci text-center">
              Fascinating Benefits of Application Maintenance and Support
              Services
            </h4>
            <p className="timepara">
              Time to empower your mind with the fascinating benefits of
              application maintenance and support services.
              <br />
              So, get ready to empower your mobile application growth with these
              foremost benefits.
            </p>
          </div>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center justify-content-between">
              <div className="col-sm-5">
                <FascinatCard
                  img={Img1}
                  title="Longer Life span"
                  para="Rectifying errors quickly helps in enhancing the lifespan of mobile applications in a well-defined manner."
                />
              </div>
              <div className="col-sm-5">
                <FascinatCard
                  img={Img2}
                  title="Bugs Removal"
                  para="Bug removal is an essential part of software maintenance, as it helps to ensure that applications are functioning in a well-defined manner."
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="d-flex flex-wrap justify-content-center justify-content-between">
              <div className="col-sm-5">
                <FascinatCard
                  img={Img3}
                  title="Upwards App Performance"
                  para="When your application gets frequent maintenance at a consistent interval then it eventually follows upwards growth."
                />
              </div>
              <div className="col-sm-5">
                <FascinatCard
                  img={Img4}
                  title="Security Management"
                  para="Data security measures keep evolving to eliminate counterfeit measures - so make your apps profound with security management."
                />
              </div>
            </div>
          </div>
          <div className=" row">
            <div className="d-flex flex-wrap justify-content-center justify-content-between">
              <div className="col-sm-5">
                <FascinatCard
                  img={Img5}
                  title="Data Management"
                  para="User’s data is the most precious asset for your business and consistent maintenance empowers data management functions."
                />
              </div>
              <div className="col-sm-5">
                <FascinatCard
                  img={Img6}
                  title="Reduced Tech Debts"
                  para="By addressing issues and making updates in a timely manner, you can avoid accumulating technical issues."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Fascinat;
