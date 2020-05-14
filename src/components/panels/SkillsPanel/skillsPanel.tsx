import React from "react"
import ClassNames from "classnames"
import { Panel, PanelDescription } from "../index"
import "./skillsPanel.scss"

export const SkillsPanel = ({ className }) => {
  const name = ClassNames("skills-panel", className)
  return (
    <Panel className={name}>
      <div className="left-side"></div>
      <div className="right-side">
        <PanelDescription
          className="skills-description"
          title="I tend to work with React, JavaScript, TypeScript, and Sass."
          description=""
          rightOffset
        />
      </div>
    </Panel>
  )
}
