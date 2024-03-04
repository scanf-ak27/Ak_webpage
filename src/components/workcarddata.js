//this will act as api and it will fetch this api  inside our workcard.js

import p1 from "../Assets/p1.jpg"
import p2 from "../Assets/p2.jpg"
import p3 from "../Assets/p3.jpg"

const ProjectCardData =[
    {
        imgsrc:p1,
        title:"Airline Management System",
        text:"This project aims to develop a software application for managing various aspects of an airline, using Java Swing for the user interface and MySQL for the database backend.",
        view:"https://github.com/scanf-ak27/Airline",
    },
    {
        imgsrc:p2,
        title:"Jarvis AI",
        text:"This project aims to build a personal assistant similar to Tony Stark's JARVIS from Iron Man, using Python for development.",
        view:"/comingsoon",
    },
    {
        imgsrc:p3,
        title:"Webpge Scrapping",
        text:"This project aims to develop a Python script to extract and store specific data from a website. Web scraping involves retrieving and parsing information from web pages and storing the data in .csv files, and this project will provide hands-on experience with the process.",
        view:"https://github.com/scanf-ak27/flipkart_scrapping",
    }
    
];

export default ProjectCardData