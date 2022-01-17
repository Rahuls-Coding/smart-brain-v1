import React, {Component} from 'react'
import './App.css';
import Navigation from "./components/Navigation/Navigation"
import Logo from "./components/Logo/Logo"
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm"
import FaceRecognition from "./components/FaceRecognition/FaceRecognition"
import Rank from "./components/Rank/Rank"
import Particles from "react-tsparticles";
import Clarifai, { COLOR_MODEL } from "clarifai";
import particlesOptions from "./sample";

const app = new Clarifai.App({
  apiKey: "c86133ebdbf34ed7b39b8275595c2056"
})

class App extends Component { 
  constructor() {
    super()
    this.state = {
      input: "",
      imageUrl: "",
      box: {}
    }
  }
  
  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById("inputimage");
    const width = Number(image.width);
    const height = Number(image.height);
    console.log(width, height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width), 
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box)
    this.setState({box: box})
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value})

  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    console.log("clicked");
    app.models.predict(
      Clarifai.FACE_DETECT_MODEL, 
      this.state.input)
    .then( response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch(err => console.log(err))
  }

  render() {
    return (
    <div className="App"> 
      <Particles 
        id="tsparticles" 
        options={particlesOptions
        }
      />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm 
        onInputChange={this.onInputChange}
        onButtonSubmit={this.onButtonSubmit}
      />
     <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
      
    </div>
  );
  }
  
}

export default App;

