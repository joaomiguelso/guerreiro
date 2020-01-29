import React from "react"
// nodejs library that concatenates classes
import classNames from "classnames"
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles"
// core components
import GridContainer from "components/Grid/GridContainer.jsx"
import GridItem from "components/Grid/GridItem.jsx"
import Button from "components/CustomButtons/Button.jsx"
import Card from "components/Card/Card.jsx"
import CardBody from "components/Card/CardBody.jsx"
import CardFooter from "components/Card/CardFooter.jsx"
// styles
import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx"
// constants
import { TEAM, TEAM_TITLE } from "../constants/team"

class TeamSection extends React.Component {
  renderSocialMedia(classes, socialMedia = []) {
    return socialMedia.map(obj => (
      <Button
        key={obj.name}
        justIcon
        color="transparent"
        className={classes.margin5}
      >
        <a href={obj.link}>{obj.icon}</a>
      </Button>
    ))
  }

  render() {
    const { classes } = this.props
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    )

    return (
      <div className={classes.section}>
        <h2 className={classes.title}>{TEAM_TITLE}</h2>
        <div>
          <GridContainer>
            {TEAM.map(teamMember => (
              <GridItem key={teamMember.name} xs={12} sm={12} md={4}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img
                      src={teamMember.imgSrc}
                      alt="..."
                      className={imageClasses}
                    />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    {teamMember.name}
                    <br />
                    <small className={classes.smallTitle}>
                      {teamMember.role}
                    </small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      {teamMember.description}
                    </p>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    {this.renderSocialMedia(classes, teamMember.socialMedia)}
                  </CardFooter>
                </Card>
              </GridItem>
            ))}
          </GridContainer>
        </div>
      </div>
    )
  }
}

export default withStyles(teamStyle)(TeamSection)
