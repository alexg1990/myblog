import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

import { setScrollDirection } from "../../state/actions";
import isMobile from "../../helpers/isMobile.js";

import "./Header.css";
import logo from "../../assets/boldd.svg";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldAnimate: false
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    this.props.dispatch(setScrollDirection(document.documentElement.scrollTop));
    !this.state.shouldAnimate &&
      document.documentElement.scrollTop > 70 &&
      this.setState({ shouldAnimate: true });
  };
  handleAnimation = () => {
    if (this.props.prevOffset > 70) {
      return " fixed animateIn";
    } else if (this.state.shouldAnimate) {
      return " animateOut";
    } else {
      return "";
    }
  };
  render() {
    const Links = [
      // <Link to="/" id="logo">
      //   <img src={logo} alt="logo" />
      // </Link>,
      <Link to="/javascript">Javascript</Link>,
      <Link to="/react">React</Link>,
      <Link to="/typescript">Typescript</Link>
      // <Button variant="contained" id="login">
      //   Login
      // </Button>
    ];
    const pageTitle = document.title;
    return (
      <header className={"container" + this.handleAnimation()}>
        <nav className="container">
          <Link to="/" id="logo">
            <img src={logo} alt="logo" />
          </Link>
          {isMobile() ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : this.props.scrollDirection === "up" ? (
            Links
          ) : (
            pageTitle
          )}

          <Button variant="contained" id="login">
            Login
          </Button>
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    scrollDirection: state.scrollDirection,
    prevOffset: state.prevOffset
  };
};

export default connect(mapStateToProps)(Header);
