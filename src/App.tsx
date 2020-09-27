import React from "react";
import logo1 from "./assets/walkingVector/0.jpg";
import logo2 from "./assets/walkingVector/1.jpg";
import logo3 from "./assets/walkingVector/2.jpg";
import logo4 from "./assets/walkingVector/3.jpg";
import logo5 from "./assets/walkingVector/4.jpg";
import logo6 from "./assets/walkingVector/5.jpg";
import logo7 from "./assets/walkingVector/6.jpg";
import logo8 from "./assets/walkingVector/7.jpg";
import logo9 from "./assets/walkingVector/8.jpg";
import pixelPc from "./assets/PixelPc.png";
import pixelCup from "./assets/PixelCup.png";
import plant from "./assets/Plant.gif";
import outSide from "./assets/paris_evening.gif";
import cvlogo from "./assets/CVlogo.png";
import LinkedIn from "./assets/LinkedIn.png";
import gitHubLogo from "./assets/gitHubLogo.png";
import instagramLogo from "./assets/instagramLogo.png";

import "./App.css";

var countAvatar = 1;
var avatarSrcAll = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo7,
  logo8,
  logo9,
];
var avatarSrc = logo1;
// function List() {
//   if (!countAvatar) {
//     return null;
//   }

//   if (countAvatar === 1) {
//     return <img src={logo1} className="App-logo" alt="logo" />;
//   }
//   if (countAvatar === 2) {
//     return <img src={logo2} className="App-logo" alt="logo" />;
//   }
//   if (countAvatar === 3) {
//     return <img src={logo3} className="App-logo" alt="logo" />;
//   }
//   if (countAvatar === 4) {
//     return <img src={logo4} className="App-logo" alt="logo" />;
//   }
//   if (countAvatar === 5) {
//     return <img src={logo5} className="App-logo" alt="logo" />;
//   }
//   if (countAvatar === 6) {
//     return <img src={logo6} className="App-logo" alt="logo" />;
//   }
//   if (countAvatar === 7) {
//     return <img src={logo7} className="App-logo" alt="logo" />;
//   }
//   if (countAvatar === 8) {
//     return <img src={logo8} className="App-logo" alt="logo" />;
//   }
//   if (countAvatar === 9) {
//     return <img src={logo9} className="App-logo" alt="logo" />;
//   }
// }

class App extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      avatarState: true,
    };
  }
  tick() {
    console.log(avatarSrc);
    this.setState({ avatarState: false });
    avatarSrc = avatarSrcAll[countAvatar];
    ++countAvatar;
    if (countAvatar > 8) {
      countAvatar = 2;
    }
  }

  componentDidMount() {
    setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval();
  }
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
          <img src={outSide} className="outSide" alt="plant" />
          {/* <div className="top">
          <div className="Frame">
            <img src={frame} className="frame" alt="frame" />
          </div>
          <div className="Avatar">
            <img src={avatarSrc} className="avatar" alt="logo" />

            <p>
              <b>
                <code>Front-End Web Developer</code>
              </b>
            </p>
          </div>
        </div> */}

          <img src={plant} className="plant" alt="pixelPc" />
          <img src={pixelPc} className="pixelPc" alt="pixelPc" />
          <img src={pixelCup} className="pixelCup" alt="plant" />
          <div className="PcScreen">
          <div>
             
            </div>
            <div>
              <img
                src={LinkedIn}
                className="linkedIn"
                alt="LinkedIn"
                onClick={this.linkedinLink}
              />
            </div>
            <div>
              <img
                src={gitHubLogo}
                className="gitHubLogo"
                alt="gitHubLogo"
                onClick={this.gitHubImageClick}
              /> <img
              src={cvlogo}
              className="cvlogo"
              alt="cvlogo"
              onClick={this.linkedinLink}
            />
            </div>
            <div>
              <img
                src={instagramLogo}
                className="instagramLogo"
                alt="instagramLogo"
                onClick={this.instagramImageClick}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
