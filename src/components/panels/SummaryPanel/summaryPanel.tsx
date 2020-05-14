import React from "react"
import ClassNames from "classnames"
import { Panel, PanelDescription } from "../index"
import "./summaryPanel.scss"

export const SummaryPanel = ({ className }) => {
  const name = ClassNames("summary-panel", className)
  const title =
    "I'm a Full-Stack Developer with a targeted interest in responsive, fluid, and motion frontend design."
  const desc =
    "Over the last 8 years, I’ve held multiple development positions that have centered around developing, testing, and maintaining Web / Server applications. Between serving as a  Front-End developer at HiringThing, a Server Application developer at Selectron Technologies, and pursuing individual development projects and interests; I have been able to greatly increase my knowledge of various software technologies including ReactJS, Javascript(ES6), TypeScript, Redux, and SASS. This has led me to want to focus on further Front-End Web Development roles."
  return (
    <Panel className={name}>
      <div className="left-side">
        <PanelDescription
          className="summary-description"
          title={title}
          description={desc}
          leftOffset
        />
      </div>
      <div className="right-side"></div>
    </Panel>
  )
}
