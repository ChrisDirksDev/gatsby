import React from "react"

import Layout from "../starterComponents/layout"
import SEO from "../components/seo"
import { HeroPanel, Panel, PanelGroup } from "../components/panels"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <PanelGroup>
      <HeroPanel className="dark-purple" />
      <Panel className="slate-grey" />
      <Panel className="dark-purple" />
    </PanelGroup>
  </Layout>
)

export default IndexPage
