import React from "react"
import "./floatingHeader.scss"
import Bird from "../../images/birdImage"
import Linkedin from "../../images/linkedinIcon"
import Github from "../../images/githubIcon"
import Facebook from "../../images/facebookIcon"

"use strict"

export const FloatingHeader = () => {
  return (
    <div className="floating-header color-primary">
      <div>
        <a href="www.chrisdirks.com">
          <Bird />
        </a>
      </div>
      <div className="socials">
        <a href="https://www.linkedin.com/in/chris-dirks/">
          <Linkedin />
        </a>
        <a href="https://github.com/ChrisDirksDev">
          <Github />
        </a>
        <a href="https://www.facebook.com/chrisdirks89">
          <Facebook />
        </a>
      </div>
    </div>
  )
}
