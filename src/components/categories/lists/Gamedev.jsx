import React from "react";
import "./gamedev.css";
import { motion } from "framer-motion";
import game from "../Images/game-dev.png";

const Gamedev = () => {
  return (
    <div>
      <motion.div className="webdev">
        <motion.h1
          className="game"
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{
            delay: 1.4,
            type: "spring",
            stiffness: 500,
          }}
        >
          Game
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
              Game Development
            </motion.h1>
          </motion.div>
        </motion.div>
        <div className="web-cont">
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 1:- Choose a game engine </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Before you can move forward, ensure that your computer or laptop has
            at least 4GB of RAM. 8 GB RAM is recommended.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            A game engine is software that is required for a game’s operation.
            Although you can make your own game engine, you will need to have
            programming skills and plenty of time. However, there are many great
            free game engines available that you can use to create any kind of
            game you like. These game engines are used by the majority of game
            creators.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            There are numerous gaming engines available on the market. Unreal
            Engine, Unity, Gamemaker, and many other game engines are very
            popular. Unity is the most user-friendly gaming engine for
            beginners. It has a vast community and allows you to make nearly any
            style of game.
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 2:- Learn Unity </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Unity Tech created Unity, a cross-platform game development engine.
            Unity Tech allows you to create 3D and 2D games. You can also create
            virtual reality or argumented reality games.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Your first step is to master Unity. Once you are comfortable with
            it, you can move, rotate, place and render components in the editor.
            This is quite simple, but you will need to be able to perform
            actions and movements using a programming language.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Unity software is free and can be downloaded on any computer. If you
            have 8GB RAM pc/laptop, it runs smoothly. It lags if your 4GB ram
            computer/laptop is used.
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 3:- Learn C# programming language </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            After learning the basics of Unity, you’ll need to master c#
            programming languages. This is used to create scripts within unity.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            It is much easier to learn than C++ or C. It is used in Unity for
            game development. It is essential to consider and acquire the
            fundamentals of the language. However, mastering it in 15 to 20 days
            can be tough.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            You will need an IDE to learn and code c#. There is an official
            Microsoft IDE, which is the visual studio communtiy version. It is
            free Froever and allows you to write C# code.
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 4:- Learn about game design </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            You will be able build logic in your games after learning unity and
            C#. However, your game won’t look great so learn how to design
            characters and environments for your games.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            It’s a free and open-source 3D modeling program. It can be used to
            generate models for video games, as well as animations.
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 5:- Learn animation </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Animation is also required in your game. Unity has an animation
            feature that you can use to create animations. Animation is
            difficult and can be challenging.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Third-party assets can be used in your game, but they are usually
            paid. If you don’t have the money to hire an animator or purchase
            any assets, you will need to learn animation. If you put in the
            effort, it is not difficult.
          </h3>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Visual representation of roadmap</h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <center>
            <img src={game} className="webdev-image" alt="game"></img>
          </center>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Best Game Development courses</h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <center>
            <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
              Free Courses
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            1){" "}
            <a
              href="https://www.youtube.com/watch?v=gB1F9G0JXOo"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              FreeCodeCamp.org
            </a>
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            2){" "}
            <a
              href="https://www.youtube.com/playlist?list=PLPV2KyIb3jR5QFsefuO2RlAgWEz6EvVi6"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Brackeys
            </a>
          </h3>
          <br></br>
          <center>
            <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
              Paid Courses
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            1){" "}
            <a
              href="https://www.coursera.org/specializations/programming-unity-game-development?ranMID=40328&ranEAID=TnL5HPStwNw&ranSiteID=TnL5HPStwNw-Oy19WxuuXLUco.Zh6T0y0w&siteID=TnL5HPStwNw-Oy19WxuuXLUco.Zh6T0y0w&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=TnL5HPStwNw"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              University of Colorado
            </a>
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            2){" "}
            <a
              href="https://www.coursera.org/specializations/unity-3d-artist?ranMID=40328&ranEAID=TnL5HPStwNw&ranSiteID=TnL5HPStwNw-ga1rk_BS53IeHOoF4DpGGw&siteID=TnL5HPStwNw-ga1rk_BS53IeHOoF4DpGGw&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=TnL5HPStwNw"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Unity
            </a>
          </h3>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Why should you learn game development?</h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            If you enjoy gaming and are creative, game creation is a terrific
            career opportunity. If you study game development, it will teach you
            fundamental programming languages and other tech skills.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            This can be a great career option with multiple paths. You can
            either start your own business or apply for a job at one of the top
            gaming companies.
          </h3>
          <br></br><br></br>
        </div>
      </div>
    </div>
  );
};

export default Gamedev;
