import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { setScrollDirection } from "../../state/actions";
import isMobile from "../../helpers/isMobile.js";

import "./Header.css";
import logo from "../../assets/boldd.svg";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      showSubLinks: false,
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
  handleClick = () => {
    this.setState({ showSubLinks: !this.state.showSubLinks });
  };
  render() {
    const Links = [
      <Link to="/javascript">Javascript</Link>,
      <Link to="/react">React</Link>,
      <Link to="/typescript">Typescript</Link>
    ];
    const subLinks = [];
    if (isMobile()) {
      for (let i = 0; i < Links.length; i++) {
        subLinks.push(Links[i]);
        if (i < Links.length - 1) {
          subLinks.push(<hr />);
        }
      }
    }
    const pageTitle = document.title;
    return (
      <header className={this.handleAnimation()}>
        <nav className="navContainer" id="mainLinks">
          <Link to="/" id="logo">
            <img src={logo} alt="logo" />
          </Link>
          {isMobile() ? (
            <FontAwesomeIcon
              icon={this.state.showSubLinks ? faChevronDown : faChevronUp}
              onClick={this.handleClick}
            />
          ) : this.props.scrollDirection === "up" ? (
            Links
          ) : (
            pageTitle
          )}
          <Button variant="contained" id="login">
            Login
          </Button>
        </nav>
        {this.state.showSubLinks && (
          <nav className="navContainer" id="subLinks">
            {subLinks}
          </nav>
        )}
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
