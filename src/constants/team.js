
import React from "react"
// React icons
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
// Demo Imgs
import team1 from "assets/img/faces/avatar.jpg"
import team2 from "assets/img/faces/christian.jpg"
import team3 from "assets/img/faces/kendall.jpg"
import JO from "assets/img/faces/joaooliveira_color.jpg"

const demo_description = <span>
    You can write here details about one of your team members. You can give
more details about what they do. Feel free to add some{" "}
    <a href="#pablo">links</a> for people to be able to follow them outside
    the site.
</span>;

const demo_social_media = [
    {
        name: "Twitter",
        icon: <FaTwitter />,
        link: "https://www.twitter.com"
    },
    {
        name: "Facebook",
        icon: <FaFacebook />,
        link: "https://www.facebook.com"
    },
    {
        name: "Instagram",
        icon: <FaInstagram />,
        link: "https://www.instagram.com"
    },
    { 
        name: "Linkedin",
        icon: <FaLinkedin />, 
        link: "https://www.linkedin.com/in/joaomiguelso/" },
];

export const TEAM_TITLE = "Here is our team"

export const TEAM = [
    {
        name: "João Oliveira",
        role: "Role",
        description: demo_description,
        imgSrc: JO,
        socialMedia: demo_social_media,
    },
    {
        name: "Gigi Hadid",
        role: "Role",
        description: demo_description,
        imgSrc: team1,
        socialMedia: demo_social_media,
    },
    {
        name: "Christian Louboutin",
        role: "Role",
        description: demo_description,
        imgSrc: team2,
        socialMedia: demo_social_media,
    },
    {
        name: "Kendall Jenner",
        role: "Role",
        description: demo_description,
        imgSrc: team3,
        socialMedia: demo_social_media,
    },
]
