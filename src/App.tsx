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
import projectsIcon from "./assets/projectsIcon.png";
import cvPage1 from "./assets/cvImages/Milos_Terzic_CV_Eng-1.jpg";
import cvPage2 from "./assets/cvImages/Milos_Terzic_CV_Eng-2.jpg";
import cvPage3 from "./assets/cvImages/Milos_Terzic_CV_Eng-3.jpg";
import project1 from "./assets/projectsImages/Business Monitoring Reporter 0.png";
import project2 from "./assets/projectsImages/Business Monitoring Reporter 1.png";
import project3 from "./assets/projectsImages/Pixel.png";
import project4 from "./assets/projectsImages/Profilus 0.png";
import project5 from "./assets/projectsImages/Profilus 1.png";
import project6 from "./assets/projectsImages/Profilus 2.png";
import project7 from "./assets/projectsImages/Profilus 3.png";
import project8 from "./assets/projectsImages/Student's Home Svilajnac 0.png";
import project9 from "./assets/projectsImages/Student's home Svilajnac 1.png";
import project10 from "./assets/projectsImages/Online School Portal 0.jpg";
import project11 from "./assets/projectsImages/Online School Portal 1.jpg";
import bonsaiPlant from "./assets/bonsai plant.gif";

import "./App.css";
const cvArrays = [cvPage1, cvPage2, cvPage3];
const listCvItems = cvArrays.map((cvArray) => (
  <div>
    <img src={cvArray} alt="CV" />
  </div>
));
const projects = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
  project9,
  project10,
  project11,
];
const listProjectItems = projects.map((project) => (
  <div>
    <img src={project} alt="Project" />
  </div>
));

class App extends React.Component<{}, any> {
  scrollCv = () => {
    window.scrollTo(0, 1000);
  };

  scrollProjects = () => {
    window.scrollTo(0, 5000);
  };

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
          <span className="table">
            <img src={plant} className="plant" alt="plant" />
            <img src={pixelPc} className="pixelPc" alt="pixelPc" />
            <div className="PcScreen">
              <img
                src={cvlogo}
                className="cvlogo"
                alt="cvlogo"
                onClick={this.scrollCv}
              />
              <img
                src={projectsIcon}
                className="projectsIcon"
                alt="projectsIcon"
                onClick={this.scrollProjects}
              />

              <img
                src={gitHubLogo}
                className="gitHubLogo"
                alt="gitHubLogo"
                onClick={this.gitHubImageClick}
              />

              <img
                src={LinkedIn}
                className="linkedIn"
                alt="linkedIn"
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
          </span>
        </div>
        <div className="cvDiv">
          <div className="slideShowCv">
            <Carousel dynamicHeight={false}>{listCvItems}</Carousel>
          </div>
        </div>
        <div className="projects">
          <div className="slideShowProjects">
            <img src={bonsaiPlant} className="bonsaiPlant" alt="Bonsai Plant" />
            <Carousel dynamicHeight={false}>{listProjectItems}</Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
