import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"

// core components
import Header from "components/Header/Header.jsx"
import Footer from "components/Footer/Footer.jsx"
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import HeaderLinks from "components/Header/HeaderLinks.jsx"
import Parallax from "components/Parallax/Parallax.jsx"

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx"

import { BRAND_NAME } from "../constants/common"
import {
  ABOUT_US_TITLE,
  ABOUT_US_SUBTITLE,
  ABOUT_US_BACKGROUND,
} from "../constants/aboutUs"
import BasicSection from "../sections/BasicSection"

const dashboardRoutes = []

class AboutUs extends React.Component {
  render() {
    const { classes, ...rest } = this.props
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand={BRAND_NAME}
          rightLinks={<HeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white",
          }}
          {...rest}
        />
        <Parallax filter image={ABOUT_US_BACKGROUND}>
          <div className={classes.container}>
          <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>{ABOUT_US_TITLE}</h1>
                <h4>{ABOUT_US_SUBTITLE}</h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <BasicSection />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default withStyles(landingPageStyle)(AboutUs)
