import React from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";
import { socialProfiles } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialProfiles.github && (
          <li>
            <a href={socialProfiles.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialProfiles.linkedin && (
          <li>
            <a href={socialProfiles.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};