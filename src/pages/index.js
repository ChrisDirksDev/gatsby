import React from "react"

import Layout from "../starterComponents/layout"
import SEO from "../components/seo"
import {
  HeroPanel,
  SummaryPanel,
  Panel,
  SkillsPanel,
  PanelGroup,
} from "../components/panels"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PanelGroup>
      <HeroPanel className="primary" />
      <SummaryPanel className="secondary" />
      <SkillsPanel className="primary" />
      <Panel className="secondary" />
    </PanelGroup>
  </Layout>
)

export default IndexPage
