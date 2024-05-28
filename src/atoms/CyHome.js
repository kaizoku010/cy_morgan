import React from "react";
import "./cyHome.css";
import IF from "../media/ig.png";
import CY from "../media/cy_bw_smaller.jpg";
import Cy_footer from "./Cy_footer";
import CY_Logo from "../media/cy_logo.png"

function CyHome() {

  const url = 'https://www.instagram.com/cy_model/'; // Replace with your desired URL

  return (
    <div className="cy_page">
      <div className="cy_holder">
      
      <div className="upperLayer">
        <div className="inner-dx-1">
          <div className="mobile_logo">
          <div className="logo_sec_mobile">
              <div></div>
              <div className="logo_area">
            
                <img className="cy_logo" src={CY_Logo}/>
              </div>
            </div>

          </div>
          <div className="upper_section">
            <div className="social-media cy_box">
              <h1 className="about-me-title">About Me</h1>
              <p className="about-text">
                Modeling z ma ting$BLACK MELANIN 🖤👄✡💃Vixening contact
                +256757124619 Dream chasing and beauty contest winner🏆🎗
                Actress/entertainer.
              </p>
              <div className="social_media_element">
                <img className="ig_ic" src={IF} />
                <a  href={url} target="blank_">
                <p>@cy_model</p>
                </a>

              </div>
            </div>
            <div className="cy_info cy_box">
              <p className="info-1">HEIGHT 178 - 5' 10"</p>
              <p className="info">BUST, 82 - 32"</p>
              <p className="info">WAIST, 60 - 23'6"</p>
              <p className="info">HIPS, 89 - 35"</p>
              <p className="info">SHOE SIZE, 39 - 6</p>
              <p className="info">HAIR COLOR</p>
              <p className="info">DARK BLOND</p>
            </div>
          </div>
          <div className="lower_section">
            <div className="logo_sec">
              <div></div>
              <div className="logo_area">
              <img className="cy_logo" src={CY_Logo}/>

              </div>
            </div>

            <div className="cy_img_1">
              {/* <img className="img-box" src={CY}/> */}
            </div>
          </div>
        </div>
        <div className="inner-dx-2">
          <div className="longer_img">
            <div className="space"></div>
          </div>
        </div>
      </div>

    </div>
    <Cy_footer/>

    </div>
    
  );
}

export default CyHome;


//https://www.instagram.com/cy_model/