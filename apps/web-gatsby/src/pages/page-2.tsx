import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link, useTranslation } from "gatsby-plugin-react-i18next"

const SecondPage = () => {
  const { t } = useTranslation("page-2")
  return (
    <Layout>
      <Seo title="Page two" />
      <h1>{t("welcome")}</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
