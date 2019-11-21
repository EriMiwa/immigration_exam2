import React from 'react';
import './SideNav.css';




class SideNav extends React.Component {

  changeColor=()=>{
    var element = document.getElementById("first");
      element.classList.toggle("current");
  }
  changeColor1=()=>{
    var element = document.getElementById("second");
      element.classList.toggle("current");
  }
  changeColor2=()=>{
    var element = document.getElementById("third");
      element.classList.toggle("current");
  }
render(){

  return (
    <div className="SideNav">
      <div>
        <a href="#hero" className="SideNav-link" id="first" onClick={this.changeColor.bind(this)}></a>
      </div>
      <div>
        <a href="#about" className="SideNav-link" id="second" onClick={this.changeColor1.bind(this)}></a>
      </div>
      <div>
        <a href="#contact-sctn" className="SideNav-link"  id="third" onClick={this.changeColor2.bind(this)}></a>
      </div>
    </div>
  );
}
}
  


export default SideNav; 