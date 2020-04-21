import React from "react"
import ClassNames from "classnames"
import "./panelGroup.scss"

interface panelGroupProps {
  children: React.ReactNode
}

export const PanelGroup = (props: panelGroupProps) => {
  const getPanels = () => {
    const { children } = props
    const panels = []
    React.Children.forEach(children, (element, index) => {
      panels.push(element)
      if (children.length - 1 == index) {
        return
      }
      const name = ClassNames("trans-panel", {
        inverted: element.props.className !== "dark-purple",
      })
      const transPanel = (
        <div className={name} key={index}>
          <div className="svg-container"></div>
        </div>
      )

      panels.push(transPanel)
    })
    return panels
  }
  return <>{getPanels()}</>
}
