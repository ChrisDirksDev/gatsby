import React from "react"
import { Panel } from "../index"
import ClassNames from "classnames"

import "./heroPanel.scss"
export const HeroPanel = ({ className }) => {
  const name = ClassNames("hero-panel", className)
  return (
    <Panel className={name}>
      <div className="noselect hero-text-container">
        <h1>Hi</h1>
        <h1>I'm Chris</h1>
      </div>
    </Panel>
  )
}
