import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { setScrollDirection } from "../../state/actions";
import isMobile from "../../helpers/isMobile.js";
import addBreaksBetweenElements from "../../helpers/addBreaksBetweenElements.js";

import "./Header.css";
import logo from "../../assets/boldd.svg";

const Header = props => {
  const [showSubLinks, setShowSubLinks] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      props.dispatch(setScrollDirection(document.documentElement.scrollTop));
      if (!shouldAnimate && document.documentElement.scrollTop > 70) {
        setShouldAnimate(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return function cleanup() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const handleAnimation = () => {
    if (props.prevOffset > 70) {
      return " fixed animateIn";
    } else if (shouldAnimate) {
      return " animateOut";
    } else {
      return "";
    }
  };

  const handleClick = () => {
    setShowSubLinks(!showSubLinks);
  };

  const Links = [
    <Link to="/javascript">Javascript</Link>,
    <Link to="/react">React</Link>,
    <Link to="/typescript">Typescript</Link>
  ];

  let SubLinks;
  if (isMobile()) {
    SubLinks = addBreaksBetweenElements(Links);
  }

  return (
    <header className={handleAnimation()}>
      <nav className="navContainer" id="mainLinks">
        <Logo />
        <MainLinks
          handleClick={handleClick}
          showSubLinks={showSubLinks}
          Links={Links}
          scrollDirection={props.scrollDirection}
        />
        <LoginButton />
      </nav>
      {showSubLinks && (
        <nav className="navContainer" id="subLinks">
          {SubLinks}
        </nav>
      )}
    </header>
  );
};

const Logo = () => {
  return (
    <Link to="/" id="logo">
      <img src={logo} alt="logo" />
    </Link>
  );
};

const MainLinks = props => {
  const pageTitle = document.title;

  if (isMobile()) {
    return (
      <div
        style={{
          flex: 1,
          height: "100%",
          alignItems: "center",
          display: "flex",
          justifyContent: "center"
        }}
        onClick={props.handleClick}
      >
        <FontAwesomeIcon
          icon={props.showSubLinks ? faChevronDown : faChevronUp}
        />
      </div>
    );
  } else if (props.scrollDirection === "up") {
    return props.Links;
  } else {
    return pageTitle;
  }
};

const LoginButton = () => {
  return (
    <Button variant="contained" id="login">
      Login
    </Button>
  );
};

const mapStateToProps = state => {
  return {
    scrollDirection: state.scrollDirection,
    prevOffset: state.prevOffset
  };
};

export default connect(mapStateToProps)(Header);
