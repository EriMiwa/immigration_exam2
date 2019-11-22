import React from 'react';
import './Home.css';
import imgTitle from '../../resources/image-title.svg';
import imgTitleSp from '../../resources/image-title-sp.svg';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        width: 0,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
      window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {  
      this.setState({ width: window.innerWidth });
  }

  render () {
    return (
      <>
        <div className="Home" id="home">
          <div className="container-left">
            {(
              this.state.width < 800 ? 
              <img src={imgTitleSp} alt="Dr. Turban" /> :
              <img src={imgTitle} alt="Dr. Turban" /> 
            )}
          </div>
          <div className="container-right">
            <div className="title-area">
              <h1>Dr. Turban Lana</h1>
              <h3>— Ph.D. Clinical Psychotherapist</h3>
              <p>Our clinic can help you with all the exams needed for immigration purpose. You can have your x-ray and blood tests done in one place, saving you a lot of time.</p>
            </div>
            <div className="btn-area">
              <a href="mailto:panelphysicians@gmail.com?Subject=Appointment%20medical%20exam" >
                <button className="btn-red btn-long">Schedule Appointment</button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Home;