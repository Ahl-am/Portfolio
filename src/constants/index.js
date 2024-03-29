import {
    shaguf,
    scbs,
    kfmc,
    coeia,
  } from "../assets";
  
  const navLinks = [
    {
      id: "work",
      title: "Work",
    },
  ];

  const experiences = [
    {
      title: "Software Engineer",
      company_name: "Shaguf",
      icon: shaguf,
      iconBg: "#0d1117",
      date: "JUNE 2022 - PRESENT",
      points: [
        "Implemented front-end tasks with a focus on responsiveness, accessibility and browser compatibility.",
        "Collaborated with cross-functional teams including designers, product managers, and other developers to create high-quality results.",
        "Enhanced the performance of the website.",
        "Worked on integrating and customizing 3rd party libraries such as PDF.js, videojs and richtexteditor to fit the business needs.",
        "Participated in code reviews and provided constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Sanam Company for Business Services",
      icon: scbs,
      iconBg: "#0d1117",
      date: "FEB 2022 - JUNE 2022",
      points: [
        "Contributed to the website by using Angular and ASP .NET Core.",
        "Built multiple pages by following Adobe XD designs.",
        "worked on identifying and solving bugs faced by customers.",
      ],
    },
    {
      title: "Web Developer Trainee",
      company_name: "King Fahad Medical City",
      icon: kfmc,
      iconBg: "#0d1117",
      date: "MAY 2021 - JULY 2021",
      points: [
        "Contributed to developing a website that allows the users to apply for training using ASP.NET and Microsoft SQL Server.",
      ],
    },
    {
      title: "Software Developer Trainee",
      company_name: "CoIEA",
      icon: coeia,
      iconBg: "#0d1117",
      date: "JULY 2020 - NOV 2020",
      points: [
        "Developed an online learning RESTFul web API with ASP .NET Core.",
      ],
    },
  ];

  export { navLinks, experiences };