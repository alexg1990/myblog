import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelopeSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitterSquare,
  faGithubSquare
} from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <div id="footer">
      <div>
        <p style={{ fontWeight: 600 }}>@ Alex</p>
        <div id="contact">
          <FontAwesomeIcon icon={faEnvelopeSquare} />
          <FontAwesomeIcon icon={faGithubSquare} />
          <FontAwesomeIcon icon={faTwitterSquare} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
