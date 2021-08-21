import React from "react";
import { motion } from "framer-motion";
import frontend from "../Images/frontend-roadmap.jpg";
import backend from "../Images/backend-roadmap.jpg";
import { Button } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";

import "./webdev.css";
const ColorButton = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(yellow[500]),
    backgroundColor: yellow[500],
    "&:hover": {
      backgroundColor: yellow[700],
    },
  },
}))(Button);
const Webdev = () => {
  return (
    <div className="website-development">
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
          Web
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
              Web Development
            </motion.h1>
          </motion.div>
        </motion.div>
        
        <div className="web-cont">
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 1:- Learn the basics </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1)
            <a
              href="https://www.w3schools.com/html/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              HTML
            </a>{" "}
            :- The HyperText Markup Language, or HTML is the standard markup
            language for documents designed to be displayed in a web browser.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 100, lineHeight: 1.8 }}>
            Eg:- Think of a car, In car there is outer body which gives shape to
            the car like that HTML is the body of website.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2)
            <a
              href="https://www.w3schools.com/css/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              CSS
            </a>{" "}
            :- Cascading Style Sheets is a style sheet language used for
            describing the presentation of a document written in a markup
            language such as HTML.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 100, lineHeight: 1.8 }}>
            Eg:- In car they give unique designs to car so it looks attractive,
            Similiarly CSS provides design to website so it looks attractive.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3)
            <a
              href="https://www.w3schools.com/js/default.asp"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              JavaScript
            </a>{" "}
            :- JavaScript is the Programming Language for the Web. JS can update
            and change both HTML and CSS. JS can calculate, manipulate and
            validate data.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 100, lineHeight: 1.8 }}>
            Eg:- In car apart from body and design the main thing in engine by
            which the car runs, like that javascript gives action to website.
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 2:- Dig Deeper </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) When you feel comfortable with HTML and CSS, it is time to dig
            deeper.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2) You should learn how to use{" "}
            <a
              href="https://www.w3schools.com/whatis/whatis_google_maps.asp"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Maps
            </a>
            ,{" "}
            <a
              href="https://www.w3schools.com/whatis/whatis_google_fonts.asp"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Fonts
            </a>{" "}
            and{" "}
            <a
              href="https://www.w3schools.com/whatis/whatis_icons.asp"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Icons
            </a>{" "}
            in HTML.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3) On the JavaScript side, you should learn how to access the{" "}
            <a
              href="https://www.w3schools.com/whatis/whatis_htmldom.asp"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              HTML DOM
            </a>
            .
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            4) When you feel comfortable with HTML and CSS, it is time to dig
            deeperYou should also learn how to use{" "}
            <a
              href="https://www.w3schools.com/whatis/whatis_ajax.asp"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              AJAX
            </a>{" "}
            and{" "}
            <a
              href="https://www.w3schools.com/whatis/whatis_json.asp"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              JSON
            </a>{" "}
            for making server requests.
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 3:- Choose Frameworks </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Now it's time to look at some frameworks.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            CSS Frameworks:-{" "}
          </h3>
          <div className="btn">
            <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer"> 
              <ColorButton
                variant="contained"
                color="primary"
                className="cp"
                style={{
                  fontSize: 15,
                  backgroundColor: "blueviolet",
                  color: "white",
                }}
              >
                BootStrap
              </ColorButton>
            </a>
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
              <ColorButton
                variant="contained"
                color="green"
                className="cp"
                style={{
                  fontSize: 15,
                  backgroundColor: "#06b6d4",
                  color: "white",
                }}
              >
                Tailwind Css
              </ColorButton>
            </a>
            <a
              href="https://material.io/develop/web/getting-started"
              target="_blank"
              rel="noreferrer"
            >
              <ColorButton
                variant="contained"
                color="primary"
                className="cp"
                style={{
                  fontSize: 15,
                  backgroundColor: "#2d2d2d",
                  color: "white",
                }}
              >
                Material Design
              </ColorButton>
            </a>
            <a href="https://purecss.io/" target="_blank" rel="noreferrer">
              <ColorButton
                variant="contained"
                color="primary"
                className="cp"
                style={{
                  fontSize: 15,
                  backgroundColor: "#1f8dd6",
                  color: "white",
                }}
              >
                Pure CSS
              </ColorButton>
            </a>
          </div>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            javascript Frameworks:-{" "}
          </h3>
          <div className="btn">
            <a
              href="https://reactjs.org/docs/getting-started.html"
              target="_blank"
              rel="noreferrer"
            >
              <ColorButton
                variant="contained"
                color="primary"
                className="cp"
                style={{
                  fontSize: 15,
                  backgroundColor: "#212121",
                  color: "#5ed3f3",
                }}
              >
                React Js
              </ColorButton>
            </a>
            <a href="https://angularjs.org/" target="_blank" rel="noreferrer">
              <ColorButton
                variant="contained"
                color="green"
                className="cp"
                style={{
                  fontSize: 15,
                  backgroundColor: "#a6120d",
                  color: "#b3b3b3",
                }}
              >
                Angular Js
              </ColorButton>
            </a>
            <a href="https://vuejs.org/" target="_blank" rel="noreferrer">
              <ColorButton
                variant="contained"
                color="primary"
                className="cp"
                style={{
                  fontSize: 15,
                  backgroundColor: "#3fb27f",
                  color: "#32475b",
                }}
              >
                Vue Js
              </ColorButton>
            </a>
            <a href="https://jquery.com/" target="_blank" rel="noreferrer">
              <ColorButton
                variant="contained"
                color="primary"
                className="cp"
                style={{
                  fontSize: 15,
                  backgroundColor: "#78cff5",
                  color: "white",
                }}
              >
                JQuery
              </ColorButton>
            </a>
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              <ColorButton
                variant="contained"
                color="primary"
                className="cp"
                style={{
                  fontSize: 15,
                  backgroundColor: "white",
                  color: "#333333",
                }}
              >
                Next Js
              </ColorButton>
            </a>
            <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
              <ColorButton
                variant="contained"
                color="primary"
                className="cp"
                style={{
                  fontSize: 15,
                  backgroundColor: "purple",
                  color: "white",
                }}
              >
                Express Js
              </ColorButton>
            </a>
          </div>
          <br></br>
          <br></br>
          {/* <Particlebackground/> */}
          <center>
            <img src={frontend} className="webdev-image" alt="webdev"></img>
          </center>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 4:- Backend </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>

          <center>
            <img src={backend} className="webdev-image" alt="webdev"></img>
          </center>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Webdev;
