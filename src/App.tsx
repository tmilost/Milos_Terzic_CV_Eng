import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import pixelPc from "./assets/PixelPc.png";
import pixelCup from "./assets/PixelCup.png";
import plant from "./assets/Plant.gif";
import outSide from "./assets/paris_evening.gif";
import cvlogo from "./assets/CVlogo.png";
import LinkedIn from "./assets/LinkedIn.png";
import gitHubLogo from "./assets/gitHubLogo.png";
import instagramLogo from "./assets/instagramLogo.png";
import cvPage1 from "./assets/Milos_Terzic_CV_Eng-1.jpg";
import cvPage2 from "./assets/Milos_Terzic_CV_Eng-2.jpg";
import cvPage3 from "./assets/Milos_Terzic_CV_Eng-3.jpg";

import "./App.css";

class App extends React.Component<{}, any> {
  instagramImageClick = () => {
    window.open("https://www.instagram.com/tmilost/", "_blank");
  };

  gitHubImageClick = () => {
    window.open("https://github.com/tmilost", "_blank");
  };

  linkedinLink = () => {
    window.open(
      "https://www.linkedin.com/in/milos-terzic-a60709183/",
      "_blank"
    );
  };
  render() {
    return (
      <div className="App">
        <div className="mainDiv">
          <img src={outSide} className="outSide" alt="outSide" />
          <div className="table">
            <img src={plant} className="plant" alt="plant" />
            <img src={pixelPc} className="pixelPc" alt="pixelPc" />
            <div className="PcScreen">
              <img
                src={LinkedIn}
                className="linkedIn"
                alt="LinkedIn"
                onClick={this.linkedinLink}
              />

              <img
                src={gitHubLogo}
                className="gitHubLogo"
                alt="gitHubLogo"
                onClick={this.gitHubImageClick}
              />

              <img
                src={cvlogo}
                className="cvlogo"
                alt="cvlogo"
                onClick={this.linkedinLink}
              />

              <img
                src={instagramLogo}
                className="instagramLogo"
                alt="instagramLogo"
                onClick={this.instagramImageClick}
              />
            </div>
            <img src={pixelCup} className="pixelCup" alt="plant" />
          </div>
        </div>
        <div className="cvDiv">
          <div className="slideShow">
            <Carousel dynamicHeight={false}>
              <div>
                <img src={cvPage1} alt="CV Page 0" />
                <p className="legend">Page 0</p>
              </div>
              <div>
                <img src={cvPage2} alt="CV Page 1" />
                <p className="legend">Page 1</p>
              </div>
              <div>
                <img src={cvPage3} alt="CV Page 2" />
                <p className="legend">Page 2</p>
              </div>
            </Carousel>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
