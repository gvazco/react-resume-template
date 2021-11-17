import React, { Component } from "react";

class Header extends Component {
  render() {
    if (this.props.data) {
      var logotipo = "images/" + this.props.data.logotipo;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
    }

    return (
      <header id="home">
        <div className="row banner">
          <div className="banner-text">
            <img className="logotipo" src={logotipo} alt="HRV-Logotipo" />
            <h3>
              <span>{occupation}</span> y {description}.
            </h3>
            <hr />
            {/* <ul className="social">{networks}</ul> */}
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
