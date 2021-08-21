import React from "react";
import { motion } from "framer-motion";
import android from "../Images/android-roadmap.svg";
import "./android.css";

const Appdev = () => {
  return (
    <div>
      <motion.div className="webdev">
        <motion.h1
          className="android"
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{
            delay: 1.4,
            type: "spring",
            stiffness: 500,
          }}
        >
          Android
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
              Android Devlopment
            </motion.h1>
          </motion.div>
        </motion.div>
        
        <div className="web-cont">
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 1:- Choose the Language </h3>
          </center>
          
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1){" "}
            <a
              href="https://docs.oracle.com/en/java/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              JAVA
            </a>{" "}
            :- Java is the official language for Android App Development and
            consequently, it is the most used language as well. Many of the apps
            in the Play Store are built with{" "}
            <span className="lft-j">
              Java and it is also the most supported language by Google.
            </span>
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2){" "}
            <a
              href="https://kotlinlang.org/docs/home.html"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              KOTLIN
            </a>{" "}
            :- Kotlin is a cross-platform programming language that may be used
            as an alternative to Java for Android App Development. It has also
            been introduced as a{" "}
            <span className="lft-k">
              secondary “official” Java language in 2017.
            </span>
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 2:- Fundamentals </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) Install{" "}
            <a
              href="https://developer.android.com/studio"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Android Studio
            </a>
            .
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2) Learn the basics of KOTLIN or JAVA.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3) Learn the basics of{" "}
            <a
              href="https://www.javatpoint.com/java-oops-concepts"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              OOPS
            </a>
            .
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            4) Learn{" "}
            <a
              href="https://www.tutorialspoint.com/dsa_using_java/index.htm"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Datastructure and Algorithm
            </a>
            .
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            5) What is and how to use{" "}
            <a href="https://gradle.org/" target="_blank" className="web-links" rel="noreferrer">
              Gradle
            </a>
            .
          </h3>
          <br></br>
          <hr></hr>
          
          <center>
            <h3 className="data">Step 3:- Version control system </h3>
          </center>

          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) Learn to use{" "}
            <a href="https://gradle.org/" target="_blank" className="web-links" rel="noreferrer">
              Git
            </a>
            .
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2) What are version control system.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3) Why you should use one.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Learn{" "}
            <a
              href="https://www.udacity.com/course/version-control-with-git--ud123"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Version control system
            </a>{" "}
            here
          </h3>
          <br></br>
          <br></br>
          <center>
            <img src={android} className="webdev-image" alt="android-roadmap"></img>
          </center>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Top 5 Cross-platforms </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1){" "}
            <a
              href="https://www.javatpoint.com/phonegap"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Phone Gap
            </a>{" "}
            :- PhoneGap, an open-source, cross-platform app development
            framework, enables mobile app developers to code in a hassle-free
            manner. It offers the flexibility to use different languages without
            any hardware restrictions to the developers. PhoneGap is developed
            by Adobe and it offers cloud-based solutions that allows mobile app
            developers to craft mobile apps directly in the platform.
          </h3>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Pros :-
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) <i>Robust backend</i>:- Offers faster development process while
            reducing developers efforts.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2) <i>Flexibility</i>:- Offers mobile app development with
            JavaScript, HTML, CSS, Java, HTML5, Objective-C, C#, C++
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3) <i>Multi-platform</i>:- Offers mobile app development for
            multiple platforms with native look and feel
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            4) <i>UI libraries</i>:- Offers a vast UI libraries that helps in
            improving the viewing experience for different target viewers
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            5) <i>Faster development</i>:- Offers a quick development process
            due to the suppleness and flexibility it offers
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            6) <i>Large community base</i>:- Offers a large community base with
            adequate support
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            7) <i>Taps onto the device hardware</i>:- Offers complete
            utilization of device features such as camera, geolocation for
            better user-experience
          </h3>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Cons :-
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) Not suitable for app that will have a lot of graphic elements
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2) Lacks descriptive documentation that may be crucial for app
            development
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3) Not suitable for gaming apps
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            4) Lack support for plugins that have hook
          </h3>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2){" "}
            <a
              href="https://ionicframework.com/docs/v3/intro/tutorial/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Iconic
            </a>{" "}
            :- Now hybrid app development is easier with Ionic app development
            framework. If you are looking for faster development of your
            business app, Ionic is best-suited for you. Ionic uses a single code
            base. It has a huge library of tools and consists of the latest
            components. Ionic inherits a few iOS and Android design elements
            that allows it to build native-like hybrid apps and progressive web
            apps. Hire Ionic app developers for crafting hybrid apps that would
            seamlessly work on multiple devices.
          </h3>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Pros :-
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) <i>Faster development and shorter time-to-market</i>:- Ionic
            crafts your mobile app in a shorter period of time for both the
            platforms as compared to apps built natively. If you build apps for
            each platform, it not only consumes a lot of time but also results
            in delayed time to market and increased costs.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2) <i>Browser support</i>:- Ionic offers browser support, proving
            beneficial for both developers and entrepreneurs. Ionic experts
            offer mobile application development with Angular using web-views in
            the browser. They don’t need any complex IDEs or editors but only
            browser web-views for building the application layout.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3) <i>Programming languages</i>:- Ionic uses front-end web
            technologies such as JavaScript, HTML, CSS, and Angular. It utilizes
            HTML5. As a startup, you may need to consult a leading mobile app
            development company that would guide your application development
            aligning your business needs for both the platforms with new
            technologies.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            4) <i>A wide array of UI components</i>:- Ionic offers a wide range
            of plugins and UI components to enhance Ionic experts productivity
            and to reduce the development time and cost.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            5) <i>Native plug-ins</i>:- Ionic has a lot of native plugins that
            help developers to get access to native device APIs. This offers an
            optimal experience to the application users for both iOS and Android
            platforms.
          </h3>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Cons :-
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) Consists of unstable native plugins
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2) Debugging is difficult with Ionic framework
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3) Applications with lot of graphics and animations aren’t suitable
            for Ionic development
          </h3>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3){" "}
            <a
              href="https://reactnative.dev/docs/tutorial"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              React Native
            </a>{" "}
            :- React Native is best suited for apps that are required for
            Android and iOS. If you are looking for a mobile app that requires a
            custom design, then React Native can serve this purpose. React
            Native is a good candidate for applications that require shorter
            time-to-market and reduce production costs.
          </h3>
          <br></br>
          <br></br>

          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Pros :-
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) <i>Shorter time to market</i>:- Offers faster development as it
            has the potential to build applications for multiple platforms with
            the same codebase.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2) <i>Cost-effective</i>:- As a single codebase is used to develop
            applications for multiple platforms, mobile applications built using
            React Native are cost-effective as it saves time and money.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3) <i>One team for multiple platforms</i>:- As only a single
            codebase is required, you can have your app developed with a single
            development team that is familiar with JavaScript. This reduces the
            mobile app development cost. You don’t need to employ different
            teams for every platform.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            4) <i>Rich ecosystem</i>:- Offers an accelerated software
            development process due to its access to a plethora of libraries and
            tools that increases developers’ productivity.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            5) <i>Ensures stable growth</i>:- Offers a set of components that
            know how to display the app on a particular platform. React Native’s
            potential of app development without going in-depth of the platform,
            allows the developers to focus purely on application development.
            This results in the process of stable and resistant app development
            features and an organized release of features.
          </h3>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Cons :-
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) Requires new solutions to develop from scratch.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2) Due to use of Javascript, Objective-C, Java, and C / C ++,
            debugging is difficult
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3) It’s not a native solution as React Native is a cross-platform
            app development framework and to give it a native feel, it has to
            create a communication between the native world and JavaScript.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            4) React Native is sometimes slower than its native counterparts and
            takes more space
          </h3>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            4){" "}
            <a
              href="https://flutter.dev/docs/reference/tutorials"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Flutter
            </a>{" "}
            :- Flutter is an open-source mobile app development platform created
            by Google. It is an object-oriented language and contributes in app
            development for platforms such as Android, iOS, Linux, Mac, Windows,
            Google Fuchsia, and the web from a single codebase.
          </h3>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Pros :-
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) <i>Speed</i>:- Faster development and saves a lot of time,
            effort, and money due to single codebase for iOS and Android
            platforms
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2) <i>Hot reload</i>:- Helps in making changes to the code and
            immediately view the results without recompiling the code. This
            simplifies bug fixes and experiments with various UI elements.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3) <i>Customization and fast rendering</i>:- Due to Flutter’s
            layered architecture, Flutter gives you control over the pixels on
            the screen and allows seamless integration and use of overlays and
            animated graphics, videos, text, and controls.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            4) <i>Less testing</i>:- Due to the use of same code for different
            platforms, flutter app development requires less testing.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            5) <i>Same UI</i>:- Flutter allows sharing of both UI code and UI on
            all platforms.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            6) <i>Similar to Native app performance</i>:- The application
            performance is best in case of Flutter as it doesn’t depend on any
            intermediate code representations or interpretation. The Flutter app
            is developed into the machine code that eliminates any performance
            bugs of the interpretation process.
          </h3>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Cons :-
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) Lacks advanced features
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2) Many features aren’t yet supported
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3) Flutter apps require a lot of space and takes longer to download and update
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            4) The look and feel of Flutter apps aren’t 100% same as that of native solutions
          </h3>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            4){" "}
            <a
              href="https://dotnet.microsoft.com/learn/xamarin"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Xamarin
            </a>{" "}
            :- Xamarin  is a tool used for developing cross-platform yet native applications for iOS, Android, and Windows. Xamarin uses .NET and C# and it shares 90% of the code on other platforms for crafting intuitive and engaging mobile apps.
          </h3>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Pros :-
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) <i>Same stack for all platforms</i>:- It uses C# with .NET framework for mobile app development for any platform. You can use Visual Studio or Visual Studio Code for Xamarin app development.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2) <i>Performance is close to native</i>:-  Xamarin apps are considered as native as it’s performance is continuously improved to match the native development standards.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3) <i>User experience</i>:- Xamarin offers optimal user experience due to its use of platform-specific UI elements.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            4) <i>Hardware support</i>:-  Xamarin eliminates hardware compatibility issues and has the capability to work with common devices across the platforms
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            5) <i>Maintenance</i>:-  Xamarin has maintenance and updates easier due to its cross-platform nature. It simplifies easy deployment of changes and updates for both iOS and Android apps.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            6) <i>Resources</i>:- There is a lot of learning resources available on Xamarin to help people develop technical skills on this framework. 
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            7) <i>Support</i>:- Xamarin supports portable versions for many platforms for TVs, wearables, and IoT
          </h3>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Cons :-
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) It faces compatibility issues with third-party libraries and tools
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2) Xamarin apps are large as compared to their native counterparts
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3) There is a requirement for basic knowledge of native languages
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            4) Xamarin offers limited access to open source libraries
          </h3>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Appdev;
