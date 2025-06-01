import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import work1 from './work-1.png'
import work2 from './work-2.png'
import work3 from './work-3.png'
import work4 from './work-4.png'
import tausif from './tausifansarPic.jpg'
import tausifansar from './tausifansar.jpg'
import tausiflogo from './tausiflogo.jpg'
import tausiflogowhite from './tausiflogowhite.jpg'
import node from './nodejs.png'
import express from './express.png'
import react from './react.png'
import next from './next.png'
import tic from './tic.png'
import apanacollage from './apanacollage.png'
import texttoimage from './texttoimage.png'
import tomato from './tomato.png'
import weatherapp from './weather.png'
import myportfolio from './myportfolio.png'
import mylaptop from './mylaptop.jpg'
import careercoach from "./careercoach.jpg"


export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    node,express,next,react,
    tausif,tausifansar,tausiflogo,tausiflogowhite
    ,mylaptop
};

export const workData = [
    {
        title: 'Text to image',
        description: 'using mern',
        bgImage: texttoimage,
    },
    {
        title: 'Zomato clone',
        description: 'using mern',
        bgImage: tomato,
    },
    {
        title: 'AI career Coach',
        description: 'next.js, Gemini api',
        bgImage: careercoach,
    },
    {
        title: 'Weather app',
        description: 'using react',
        bgImage: weatherapp,
    },
    {
        title: 'My portfolio',
        description: 'using next,tailwind,web3',
        bgImage: myportfolio,
    },
    {
        title: 'Tic-toc-toe game',
        description: 'using html,css,js',
        bgImage: tic,
    },
    {
        title: 'Apana collage clone',
        description: 'using mern',
        bgImage: apanacollage,
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Frontend Devlopment', description: 'I built the project using HTML, CSS, JavaScript, React.js, and Next.js, with styling powered by Bootstrap and Tailwind CSS.', link: '' },
    { icon: assets.mobile_icon, title: 'Backend devlopment', description: 'Backend development using Node.js, Express, and MongoDB involves building scalable and efficient RESTful APIs. ', link: '' },
    { icon: assets.ui_icon, title: 'Deployment', description: ' Deploying projects using platforms like Vercel and Render', link: '' },
    { icon: assets.graphics_icon, title: 'Problem solving', description: 'I solved more than 350+ question on different coding plateform(leetcode ,GFG)', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript, java ,python,TypeScript' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Technologies', description: 'TailwindCss, Bootstrap,ReactJs ,NextJs,nodejs, express,MongoDb' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Zomato clone, Text to image generator, apna collage clone, weatherApp ,Tic-toc-toe game' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.node, assets.git,assets.react,assets.next,assets.express
];