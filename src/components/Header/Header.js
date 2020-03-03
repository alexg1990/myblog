import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setScrollDirection } from "../../state/actions";

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
      <Link to="/">General</Link>,
      <Link to="/javascript">Javascript</Link>,
      <Link to="/react">React</Link>,
      <Link to="/typescript">Typescript</Link>
    ];
    const pageTitle = document.title;
    return (
      <header className={"container" + this.handleAnimation()}>
        <img src={logo} />
        <nav>{this.props.scrollDirection === "up" ? Links : pageTitle}</nav>
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
