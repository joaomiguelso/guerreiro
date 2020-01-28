import React from "react";
import { FaPlay } from 'react-icons/fa';

const demo_background = require("assets/img/landing-bg.jpg")

export const LANDING_TITLE = "Your Story Starts With Us.";

export const LANDING_DESCRIPTION = "Every landing page needs a small description after the big bold title, that's why we added this text here. Add here all the information that can make you or your product create the first impression.";

export const LANDING_BACKGROUND = demo_background;

export const LANDING_BUTTON = {
    isEnabled: true,
    link: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    color: "danger",
    size: "lg",
    description: "Watch video",
    icon: <FaPlay/>,
};