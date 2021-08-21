import React from "react";
import "./ios.css";
import { motion } from "framer-motion";
import ios from "../Images/ios-know2.png";

const Iosdev = () => {
  return (
    <div>
      <motion.div className="webdev">
        <motion.h1
          className="web"
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{
            delay: 1.4,
            type: "spring",
            stiffness: 500,
          }}
        >
          IOS
        </motion.h1>
        <motion.h1
          className="dev"
          initial={{ x: 1500 }}
          animate={{ x: 0 }}
          transition={{
            delay: 1.4,
            type: "spring",
            stiffness: 500,
          }}
        >
          Devlopment
        </motion.h1>
      </motion.div>
      <div className="extra-space"></div>
      <div className="web-content">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 3,
          }}
          className="content"
        >
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 4.5,
              type: "spring",
            }}
            className="head"
          >
            <motion.hr
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                delay: 5,
              }}
              className="top"
            ></motion.hr>
            <motion.hr
              initial={{ x: 1500 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                delay: 5,
              }}
              className="right-top"
            />
            <motion.hr
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                delay: 5,
              }}
              className="center"
            ></motion.hr>
            <motion.hr
              initial={{ x: 1500 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                delay: 5,
              }}
              className="right-center"
            />
            <motion.hr
              initial={{ x: 1500 }}
              animate={{ x: 0 }}
              transition={{
                type: "spring",
                delay: 5,
              }}
              className="left-bottom"
            />
            <motion.hr
              initial={{ x: 1500 }}
              animate={{ x: 0 }}
              transition={{
                delay: 5,
              }}
              className="right-bottom"
            />

            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 4.7,
                type: "spring",
                stiffness: 200,
              }}
              className="web-intro"
            >
              Ios Development
            </motion.h1>
          </motion.div>
        </motion.div>
        <div className="web-cont">
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 1:- Technical Requirements </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) To learn iOS development, you need a Mac computer
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Many of the software tools you will use will be free, but getting a
            new Mac computer and an iPhone or an iPad can be expensive. Luckily,
            there are cheaper alternatives.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2) You create iOS apps using Xcode, provided by Apple for free.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Once you have a Mac, you will need to install{" "}
            <a
              href="https://developer.apple.com/xcode/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Xcode
            </a>{" "}
            on it.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Xcode is the integrated development environment (IDE) used by most
            developers to make iOS apps. You can get it for free on the Mac App
            Store or directly on Apple’s website.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3) An iOS device can be helpful but is optional
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            {" "}
            Q) Do you need an iPhone or an iPad?
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            ANS) If you own one already, it can be useful. But you don’t need to
            buy one to learn. Xcode comes with an iOS simulator that allows you
            to run all the apps you make on your computer.
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 2:- Learn programming in Swift</h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            The first necessary step for any software developer is to learn
            programming. This is a crucial part of being an iOS developer, so I
            recommend focusing on it before you try to learn anything else.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Learn Swift programming separately from iOS development
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) focus for a few weeks on getting a solid foundation of these
            programming concepts:{" "}
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>
              <b>The Basics : </b>
            </i>
            Numbers, Strings, Constants, Variables, and Operators.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>
              <b>Collections : </b>
            </i>
            arrays and dictionaries.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>
              <b>Control flow statements : </b>
            </i>
            if-else, switches, and for/while loops.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>
              <b>Types and interfaces : </b>
            </i>
            structures and enumerations, functions, methods, protocols, and
            extensions.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>
              <b>Object-Oriented programming concepts : </b>
            </i>
            classes, inheritance, and polymorphism.
          </h3>
          <br></br>
          <center>
            {" "}
            <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
              Best youtube videos to learn Swift :-
            </h3>
          </center>
          <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
            1){" "}
            <a
              href="https://www.youtube.com/playlist?list=PLuoeXyslFTuas6GrfsUiFPShGXmaVDbgN"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Paul Hudson
            </a>
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
            2){" "}
            <a
              href="https://www.youtube.com/playlist?list=PLMRqhzcHGw1b89DXHOVA77ozWXWmuBkWX"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              CodeWithCris
            </a>
          </h3>
          <br></br>
          <center>
            <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
              paid Courses for swift:-
            </h3>
          </center>
          <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
            1){" "}
            <a
              href="https://www.udemy.com/topic/swiftui/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Udemy
            </a>{" "}
            :- Choose any of them.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
            2){" "}
            <a
              href="https://www.coursera.org/learn/swift-programming?ranMID=40328&ranEAID=x3KQTxFMhb4&ranSiteID=x3KQTxFMhb4-7YEIEQy7K8LQaV3yw6s7JQ&siteID=x3KQTxFMhb4-7YEIEQy7K8LQaV3yw6s7JQ&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=x3KQTxFMhb4"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              University of Toronto
            </a>
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">
              Step 3:- The foundations of iOS development
            </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            After learning to program in Swift, the next step is learning how to
            make iOS apps.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) Focus on the fundamentals you need to build any iOS app
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            You can’t be an iOS developer if you only know Swift programming.
            After that, it’s time to tackle the iOS platform.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            iOS is vast and filled with technologies, frameworks, and design
            patterns. Every software platform is different, so even if you are
            already a developer, you will have to learn how things work in iOS.
          </h3>
          <br></br>
          <center>
            {" "}
            <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
              Best youtube videos to learn IOS Development :-
            </h3>
          </center>
          <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
            1){" "}
            <a
              href="https://www.youtube.com/playlist?list=PLpZBns8dFbgx0gr68lf-un9EjdmywTu4_"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Devslopes
            </a>
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
            2){" "}
            <a
              href="https://www.youtube.com/watch?v=09TeUXjzpKs"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              CodeWithCris
            </a>
          </h3>
          <br></br>
          <center>
            <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
              paid Courses for IOS Development:-
            </h3>
          </center>
          <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
            1){" "}
            <a
              href="https://www.udemy.com/course/ios-12-app-development-bootcamp/?LSNPUBID=vedj0cWlu2Y&ranEAID=vedj0cWlu2Y&ranMID=39197&ranSiteID=vedj0cWlu2Y-64ZCVBnINH7KX7a2Tw4qyA&utm_medium=udemyads&utm_source=aff-campaign"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Udemy
            </a>
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 20, lineHeight: 1.8 }}>
            2){" "}
            <a
              href="https://www.coursera.org/specializations/ios-development?ranMID=40328&ranEAID=vedj0cWlu2Y&ranSiteID=vedj0cWlu2Y-R0XBUPH3bNxkgDhie_te0Q&siteID=vedj0cWlu2Y-R0XBUPH3bNxkgDhie_te0Q&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=vedj0cWlu2Y"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Coursera
            </a>
          </h3>

          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 4:- Getting to the next level</h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Learning to make simple iOS apps can already land you an entry-level
            job, but it’s just a milestone. Being a developer requires much more
            than knowing how a single platform works. You will need to acquire
            other skills to be at the top of your game.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            After you get solid foundations, you should expand your knowledge to
            other topics of software development.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Here are some crucial topics you should focus on :-
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 15, lineHeight: 1.8 }}>
            1) Storing the app’s data on the disk
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 15, lineHeight: 1.8 }}>
            2) Databases and the SQL language
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 15, lineHeight: 1.8 }}>
            3) Networking and REST APIs
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 15, lineHeight: 1.8 }}>
            4) Algorithms and data structures
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 15, lineHeight: 1.8 }}>
            5) Architectural design patterns, software design principles, and
            paradigms
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Visual representation of Roadmap</h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <center>
            <img src={ios} className="webdev-image" alt="ios"></img>
          </center>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Iosdev;
