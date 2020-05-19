import React from "react"
import ClassNames from "classnames"
import { SplitPanel, PanelDescription } from "../../index"
import reactIcon from "../../../../images/react.svg"

export const SkillsPanel = ({ className }) => {
  const name = ClassNames("skills-panel", className)
  const description = (
    <PanelDescription
      className="skills-description color-primary"
      title="I tend to work with anything JavaScript but I do have my favorites."
      description="For Programming languages I work with: JavaScript, TypeScript, HTML5, CSS3, SASS, and C#. Frameworks: React. Automation: Chai, Enzyme, Jest, and Cypress."
      leftOffset
    />
  )
  const image = <img src={reactIcon} />

  return (
    <SplitPanel
      className={name}
      rightContent={description}
      leftContent={image}
    />
  )
}
