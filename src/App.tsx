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

import "./App.css";

var countAvatar = 1;
var avatarSrcAll = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
var avatarSrc = logo1;
function List() {
  if (!countAvatar) {
    return null;
  }

  if (countAvatar === 1) {
    return <img src={logo1} className="App-logo" alt="logo" />;
  }
  if (countAvatar === 2) {
    return <img src={logo2} className="App-logo" alt="logo" />;
  }
  if (countAvatar === 3) {
    return <img src={logo3} className="App-logo" alt="logo" />;
  }
  if (countAvatar === 4) {
    return <img src={logo4} className="App-logo" alt="logo" />;
  }
  if (countAvatar === 5) {
    return <img src={logo5} className="App-logo" alt="logo" />;
  }
  if (countAvatar === 6) {
    return <img src={logo6} className="App-logo" alt="logo" />;
  }
  if (countAvatar === 7) {
    return <img src={logo7} className="App-logo" alt="logo" />;
  }
  if (countAvatar === 8) {
    return <img src={logo8} className="App-logo" alt="logo" />;
  }
  if (countAvatar === 9) {
    return <img src={logo9} className="App-logo" alt="logo" />;
  }
}

class App extends React.Component<{}, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      avatarState: true,
    };
  }
  tick() {
    console.log(avatarSrc);
    this.setState({ model: false });
    avatarSrc = avatarSrcAll[countAvatar];
    ++countAvatar;
    if (countAvatar > 7) {
      countAvatar = 1;
    }
  }

  componentDidMount() {
    setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval();
  }

  render() {
    return (
      <div className="App">
        <div className="avatar">
          {List()}
          <p>{this.state.model}</p>
          <img
            src={avatarSrc}
            className="App-logo"
            alt="logo"
          />
           
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </div>
    );
  }
}

export default App;
