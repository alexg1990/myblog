import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { setScrollDirection } from "../../state/actions";

import "./Header.css";

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
  render() {
    const Links = [
      <Link className="link" to="/">
        General
      </Link>,
      <Link className="link" to="/javascript">
        Javascript
      </Link>,
      <Link className="link" to="/react">
        React
      </Link>,
      <Link className="link" to="/typescript">
        Typescript
      </Link>
    ];
    const pageTitle = document.title;
    return (
      <nav
        id="nav"
        className={
          "container" +
          (this.props.prevOffset > 70
            ? " fixed animateIn"
            : this.state.shouldAnimate
            ? " animateOut"
            : "")
        }
      >
        {this.props.scrollDirection === "up" ? Links : pageTitle}
      </nav>
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
