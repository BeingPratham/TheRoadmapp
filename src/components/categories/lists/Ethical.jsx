import React from "react";
import { motion } from "framer-motion";
import pentesting from "../Images/pen-testing.jpeg";
const Ethical = () => {
  return (
    <div>
      <motion.div className="webdev">
        <motion.h1
          className="graphic"
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{
            delay: 1.4,
            type: "spring",
            stiffness: 500,
          }}
        >
          Ethical
        </motion.h1>
        <motion.h1
          className="design"
          initial={{ x: 1500 }}
          animate={{ x: 0 }}
          transition={{
            delay: 1.4,
            type: "spring",
            stiffness: 500,
          }}
        >
          Hacking
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
              Ethical Hacking
            </motion.h1>
          </motion.div>
        </motion.div>
        <div className="web-cont">
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Introduction </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>

          <center>
            <h3
              style={{
                marginTop: 10,
                marginLeft: 5,
                lineHeight: 1.8,
                color: "goldenrod",
              }}
            >
              What is penetration testing?
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Penetration testing is a type of security testing that is used to
            test the security of an application. It is conducted to find a
            security risk which might be present in a system.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            If a system is not secure, then an attacker may be able to disrupt
            or take unauthorized control of that system. A security risk is
            normally an accidental error that occurs while developing and
            implementing software. For example, configuration errors, design
            errors, and software bugs, etc.
          </h3>
          <br></br>

          <center>
            <h3
              style={{
                marginTop: 10,
                marginLeft: 5,
                lineHeight: 1.8,
                color: "goldenrod",
              }}
            >
              Want to become a penetration tester?
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Knowing about risks on the internet and how they can be prevented is
            very useful, especially as a developer. Web hacking and penetration
            testing is the v2.0 of self-defense! But is knowing about tools and
            how to use them really all you need to become a pen tester? Surely
            not. A real penetration tester must be able to proceed rigorously
            and detect the weaknesses of an application. They must be able to
            identify the technology behind and test every single door that might
            be open to hackers.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            This repository aims first to establish a reflection method on
            penetration testing and explain how to proceed to secure an
            application. And secondly, to regroup all kind of tools or resources
            pen testers need. Be sure to know basics of programming languages
            and internet security before learning pen testing.
          </h3>
          <br></br>

          <center>
            <h3
              style={{
                marginTop: 10,
                marginLeft: 5,
                lineHeight: 1.8,
                color: "goldenrod",
              }}
            >
              Some vocabulary
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>Infosec</i> :- Information security,
            which is the practice of preventing unauthorized access, use,
            disclosure, disruption, modification, inspection, recording or
            destruction of information. The information or data may take any
            form, e.g. electronic or physical. Infosec can also be a person who
            practices ethical security.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>Opsec</i> :- Operations security, which
            is a process that identifies critical information to determine if
            friendly actions can be observed by enemy intelligence, determines
            if information obtained by adversaries could be interpreted to be
            useful to them, and then executes selected measures that eliminate
            or reduce adversary exploitation of friendly critical information.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>Black/grey/white hat hacker</i> :-
            Someone who uses bugs or exploits to break into systems or
            applications. The goal and the method differs depending if they're a
            black, grey or white hat hacker. A black hat is just someone
            malicious that does not wait permission to break into a system or
            application. A white hat is usually a security researcher who
            practice ethical hacking. A grey hat is just in the middle of these
            two kind of hackers, they might want to be malicious if it can be
            benefit (data breach, money, whistleblowing ...).
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>Red team</i> :- According to Wikipedia,
            a red team or the red team is an independent group that challenges
            an organization to improve its effectiveness by assuming an
            adversarial role or point of view. It is particularly effective in
            organizations with strong cultures and fixed ways of approaching
            problems. The United States intelligence community (military and
            civilian) has red teams that explore alternative futures and write
            articles as if they were foreign world leaders. Little formal
            doctrine or publications about Red Teaming in the military exist. In
            infosec exercises, Red teamers are playing the role of attackers.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>Blue team</i> :- A blue team is a group
            of individuals who perform an analysis of information systems to
            ensure security, identify security flaws, verify the effectiveness
            of each security measure, and to make certain all security measures
            will continue to be effective after implementation. As a result,
            blue teams were developed to design defensive measures against red
            team activities. In infosec exercises, Blue teamers are playing the
            role of defenders
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>Penetration tester</i> :- An ethical
            hacker who practices security, tests applications and systems to
            prevent intrusions or find vulnerabilities.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>Security researcher</i> :- Someone who
            practices pen testing and browses the web to find phishing/fake
            websites, infected servers, bugs or vulnerabilities. They can work
            for a company as a security consultant and are most likely a Blue
            teamer.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>Reverse engineering</i> :- Reverse
            engineering, also called back engineering, is the process by which a
            man-made object is deconstructed to reveal its designs,
            architecture, or to extract knowledge from the object. Similar to
            scientific research, the only difference being that scientific
            research is about a natural phenomenon.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>Social engineering</i> :- In the
            context of information security, it refers to psychological
            manipulation of people into performing actions or divulging
            confidential information. A type of confidence trick for the purpose
            of information gathering, fraud, or system access, it differs from a
            traditional "con" in that it is often one of many steps in a more
            complex fraud scheme. The term "social engineering" as an act of
            psychological manipulation of a human, is also associated with the
            social sciences, but its usage has caught on among computer and
            information security professionals.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>Threat analyst</i> :- A threat hunter,
            also called a cybersecurity threat analyst, is a security
            professional or managed service provider (MSP) that proactively uses
            manual or machine-assisted techniques to detect security incidents
            that may elude the grasp of automated systems. Threat hunters aim to
            uncover incidents that an enterprise would otherwise not find out
            about, providing chief information security officers (CISOs) and
            chief information officers (CIOs) with an additional line of defense
            against advanced persistent threats (APTs).
          </h3>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">
              Difference between hacking and ethical hacking{" "}
            </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            A black hat is practicing penetration testing, but unlike a white
            hat, this is not ethical hacking. Ethical hacking is about finding
            vulnerabilities and improve the security of a system. An ethical
            hacker is the ultimate security professional. Ethical hackers know
            how to find and exploit vulnerabilities and weaknesses in various
            systems, just like a malicious hacker (a black hat hacker). In fact,
            they both use the same skills; however, an ethical hacker uses those
            skills in a legitimate, lawful manner to try to find vulnerabilities
            and fix them before the bad guys can get there and try to break in.
            An ethical hacker is basically a white hat hacker.
          </h3>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Languages </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Learning programming is the very first way to start learning about
            security. There's a lot of languages, most people start with Python,
            it's the easiest and the most popular one. PHP and Go are the less
            popular to write security-related stuff, but any of these can still
            be used in such context. Bash and Powershell are mostly about
            scripting and writing simple CLI applications.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Since not all languages work the same way, you need to look at how
            they work and what you want to learn. For example, C++ and Java
            compile, PHP and Python do not, they are interpreted languages. This
            definitely changes what you should use them for. Each language also
            has its own design patterns.
          </h3>
          <br></br>

          <center>
            <h3
              style={{
                marginTop: 10,
                marginLeft: 5,
                lineHeight: 1.8,
                color: "goldenrod",
              }}
            >
              Scripting
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            1) Bash
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            2) Powershell
          </h3>
          <br></br>

          <center>
            <h3
              style={{
                marginTop: 10,
                marginLeft: 5,
                lineHeight: 1.8,
                color: "goldenrod",
              }}
            >
              Software & mobile apps
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            1) Java
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            2) Swift
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            3) C / C++ / C#
          </h3>
          <br></br>

          <center>
            <h3
              style={{
                marginTop: 10,
                marginLeft: 5,
                lineHeight: 1.8,
                color: "goldenrod",
              }}
            >
              General purpose
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            1) Python
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            2) Perl
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            3) Ruby
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            4) PHP
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            5) Go
          </h3>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Basic steps of pen testing </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <center>
            <img
              src={pentesting}
              className="webdev-image"
              style={{ width: "50%", height: "500px" }}
              alt="ethical-hacking"
            ></img>
          </center>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Ethical Hacking Courses </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            1) Paid Course:-{" "}
            <a
              href="https://www.udemy.com/topic/ethical-hacking/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Udemy
            </a>
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            Books
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            1){" "}
            <a
              href="https://www.amazon.com/Penetration-Testing-Hands-Introduction-Hacking/dp/1593275641"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Penetration Testing: A Hands-On Introduction to Hacking (2014)
            </a>
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            2){" "}
            <a
              href="https://www.amazon.com/Kali-Linux-Revealed-Penetration-Distribution/dp/0997615605"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Kali Linux Revealed - PDF (2017)
            </a>
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            3){" "}
            <a
              href="https://www.amazon.com/Blue-Team-Field-Manual-BTFM/dp/154101636X"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Blue Team Field Manual (BTFM) (2017))
            </a>
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            4){" "}
            <a
              href="https://www.amazon.com/Cybersecurity-Defense-Strategies-Infrastructure-security/dp/1788475291"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Cybersecurity - Attack and Defense Strategies (2018))
            </a>
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            5){" "}
            <a
              href="https://www.amazon.com/Nmap-Network-Scanning-Official-Discovery/dp/0979958717"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              NMAP Network Scanning : Official Discovery (2009)
            </a>
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            6){" "}
            <a
              href="https://www.amazon.com/Social-Engineering-Art-Human-Hacking/dp/0470639539"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Social Engineering : The Art of Human Hacking (2010)
            </a>
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            7){" "}
            <a
              href="https://www.amazon.com/Incognito-Toolkit-Communicating-Publishing-Researching/dp/0985049146"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Incognito Toolkit: Tools, Apps, and Creative Methods for Remaining
              Anonymous (2013)
            </a>
          </h3>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Ethical;
