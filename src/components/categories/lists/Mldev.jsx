import React from "react";
import { motion } from "framer-motion";
import ml from "../Images/ml.png";
const Mldev = () => {
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
          ML
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
              ML Development
            </motion.h1>
          </motion.div>
        </motion.div>
        <div className="web-cont">
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 1:- Choose the programming language </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            There are different programming languages in the market, but the
            most suitable for machine learning are Python and R.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            I recommend Python. Why? Because its popular, easy to learn and
            future-ready With Python, you can switch domains easily. Python
            offers popular frameworks like Django and Flask for backend
            development, Tkinter for GUI development, Pygames for Game
            development, etc
          </h3>
          <br></br>
          <h3
            style={{
              marginTop: 10,
              marginLeft: 5,
              lineHeight: 1.8,
              color: "gold",
            }}
          >
            1) Python Free course:-{" "}
            <a
              href="https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Pyhton Programming
            </a>
          </h3>
          <h3
            style={{
              marginTop: 10,
              marginLeft: 5,
              lineHeight: 1.8,
              color: "gold",
            }}
          >
            2) R Free course:-{" "}
            <a
              href="https://www.youtube.com/watch?v=KlsYCECWEWE"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              R Programming
            </a>
          </h3>
          <br></br>
          <br></br>
          <h3
            style={{
              marginTop: 10,
              marginLeft: 5,
              lineHeight: 1.8,
              color: "gold",
            }}
          >
            1) Python Paid course:-{" "}
            <a
              href="https://www.coursera.org/professional-certificates/google-it-automation?ranMID=40328&ranEAID=IokOf8qagZo&ranSiteID=IokOf8qagZo-2vzqvBQvS3GitXzsTdmzsw&siteID=IokOf8qagZo-2vzqvBQvS3GitXzsTdmzsw&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=IokOf8qagZo"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Python Programming
            </a>
          </h3>
          <h3
            style={{
              marginTop: 10,
              marginLeft: 5,
              lineHeight: 1.8,
              color: "gold",
            }}
          >
            2) R Paid course:-{" "}
            <a
              href="https://www.coursera.org/learn/r-programming?ranMID=40328&ranEAID=jU79Zysihs4&ranSiteID=jU79Zysihs4-HBG3qc7ZjZiliBwWxyTEiw&siteID=jU79Zysihs4-HBG3qc7ZjZiliBwWxyTEiw&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=jU79Zysihs4"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              R programming
            </a>
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 2:- Learn Linear Algebra </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            You should learn Linear Algebra if you wish to master Machine
            Learning.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            This is essential because if you want to tune your models with
            maximum flexibility, you need to know how they work, and knowing
            linear algebra is a must for that!
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            When you start, you should focus on Step 1, and while you are
            following step 1, you can begin learning Linear Algebra parallelly.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            You can Learn Linear algebra from here:-{" "}
            <a
              href="http://www.maths.qmul.ac.uk/~pjc/notes/linalg.pdf"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Linear Algebra
            </a>
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 3:- Learn Statistics </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Having a basic understanding of probability and statistics is
            important when it comes to mastering Machine Learning.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Learn Statistics from here:-{" "}
            <a
              href="https://www.mathsbox.org.uk/twi/astats.pdf"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Statistic Notes
            </a>
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 4:- Learn Core ML Algorithms</h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Once you have some idea of using sklearn after learning python, you
            should start looking into how these machine learning algorithms
            work.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            In order to get an idea of how these Machine learning algorithms
            work from within, look into:
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            1) Gradient Descent{" "}
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            2) Slope
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            3) Supervised vs Unsupervised learning
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            4) Reinforcement Learning
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            5) Basic Linear Regression
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            6) Working of all such similar models
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            7) Clustering
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
              Resources to Learn ML
            </h3>
          </center>
          <br></br>
          <h3
            style={{
              marginTop: 10,
              marginLeft: 5,
              lineHeight: 1.8,
              color: "gold",
            }}
          >
            1) Book:-{" "}
            <a
              href="https://www.amazon.in/Hands-Machine-Learning-Scikit-Learn-Tensor/dp/9352139054/ref=sr_1_1_sspa?crid=B4HPT6XKMT7&dchild=1&keywords=hands+on+ml+with+scikit+learn%2C+keras+and+tensorflow&qid=1629378032&sprefix=hands+on+ml%2Caps%2C286&sr=8-1-spons&psc=1&smid=AP6IZ69K79O66&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExSldGUVBLOTJEN1U1JmVuY3J5cHRlZElkPUEwNjA5MDI5MjhEN01QM1JFOVFBTSZlbmNyeXB0ZWRBZElkPUEwNzY2ODY3MUZEVENLMUVNTVlGUSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU="
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Hands-on ML with Scikit learn and tensorflow
            </a>
          </h3>
          <h3
            style={{
              marginTop: 10,
              marginLeft: 5,
              lineHeight: 1.8,
              color: "gold",
            }}
          >
            2) Best Free Course:-{" "}
            <a
              href="https://www.youtube.com/playlist?list=PLLssT5z_DsK-h9vYZkQkYNWcItqhlRJLN"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Andrew Ng
            </a>
          </h3>
          <h3
            style={{
              marginTop: 10,
              marginLeft: 5,
              lineHeight: 1.8,
              color: "gold",
            }}
          >
            3) Best Paid Course:-{" "}
            <a
              href="https://www.coursera.org/learn/machine-learning"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              ML-Coursera
            </a>
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 5:- Learn Python Libraries</h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>1) <a
              href="https://www.youtube.com/watch?v=Rbh1rieb3zc"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Numpy
            </a></h3>
            <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>2) <a
              href="https://www.youtube.com/watch?v=RhEjmHeDNoA"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Pandas
            </a></h3>
            <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step 6:- Learn Deployment</h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>To host your machine learning models with a powerful backend, you will need to learn
frameworks like Django and Flask.</h3>
<h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>Docker and Kubernetes can be of great help if you want to ship and deploy your models quickly!
Streamlit is worthy of looking into if you wish to build custom web apps for machine learning and
data science</h3><br></br><br></br>
          <hr></hr>
          <center>
            <h3 className="data">Visual Representation</h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <center>
            <img src={ml} className="webdev-image" alt="ML"></img>
          </center>
          <br></br><br></br>
        </div>
      </div>
    </div>
  );
};

export default Mldev;
