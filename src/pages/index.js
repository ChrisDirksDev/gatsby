import React from "react"

import Layout from "../starterComponents/layout"
import SEO from "../components/seo"
import {
  HeroPanel,
  SummaryPanel,
  PortfolioPanel,
  SkillsPanel,
  PanelGroup,
  ContactPanel,
} from "../components/panels"
import { FloatingHeader } from "../components/FloatingHeader"
import { Footer } from "../components/Footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <FloatingHeader />
    <PanelGroup>
      <HeroPanel className="primary" />
      <SummaryPanel className="secondary" />
      <SkillsPanel className="primary" />
      <PortfolioPanel className="secondary" />
      <ContactPanel className="primary" />
    </PanelGroup>
    <Footer />
  </Layout>
)

export default IndexPage
