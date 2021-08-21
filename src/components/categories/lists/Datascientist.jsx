import React from "react";
import { motion } from "framer-motion";
import datascience from "../Images/datascience.png";
import dataroadmap from "../Images/Data-Science-Roadmap.png";
const Datascientist = () => {
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
          Data
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
          Scientist
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
              Data Scientist
            </motion.h1>
          </motion.div>
        </motion.div>
        <div className="web-cont">
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">What is Data Science? </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>

          <center>
            <img
              src={datascience}
              className="webdev-image"
              style={{ width: "50%", height: "400px" }}
              alt="data"
            ></img>
          </center>
          <br></br>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step1:- Learn the fundamentals </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
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
              Prepare your workspace
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Most learning platforms have integrated code exercises where you
            don’t need to install anything locally. But to learn it right, you
            should have an IDE installed on your local machine. Suggestions will
            be a marketplace with many options and few improvements from one
            platform to another.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>Tip no.1</i> :- Just use one and stick
            to it
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1){" "}
            <a
              href="https://www.anaconda.com/products/individual"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Anaconda
            </a>{" "}
            :- It’s a tool kit that fulfills all your necessities in writing and
            running code.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2){" "}
            <a
              href="https://atom.io/packages/ide-python"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Atom
            </a>{" "}
            :- A more advanced Python interface, highly recommended by experts.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3){" "}
            <a
              href="https://colab.research.google.com/notebooks/intro.ipynb"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Google Colab
            </a>{" "}
            :- It’s like a Jupyter Notebook but in the cloud. You don’t need to
            install anything locally. All the important libraries are already
            installed. For example NumPy, Pandas, Matplotlib, and Sci-kit Learn.
          </h3>
          <br></br>
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
              Best courses
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>Tip no.2</i> :- Focus on one course,
            learn the fundamentals (variables, strings, data structures, etc.),
            and apply code.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>Tip no.3</i> :- Don’t Chase
            certifications to it
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Beginner level :-{" "}
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            Free Course for Python Programming:-{" "}
            <a
              href="https://www.youtube.com/playlist?list=PLu0W_9lII9agICnT8t4iYVSZ3eykIAOME"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              CodeWithHarry
            </a>
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Intermediate level :-{" "}
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            Coursera :-{" "}
            <a
              href="https://www.coursera.org/specializations/data-science-python"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              {" "}
              Applied Data Science with Python Specialization
            </a>
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">
              Step2:- Leverage your skills into advanced levels
            </h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Completing this{" "}
            <a
              href="https://www.coursera.org/specializations/data-science-python"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              specialization
            </a>
            , you will have a good grasp of data exploration, data analysis,
            data visualization, introduction to NLP, and a good course on
            Machine learning. Believe it or not, you don’t need more than this
            course to start a machine learning project. It covers the most used
            Python packages needed in data science: Numpy, Pandas, Sci-kit
            learn, NLTK, and others.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Besides this specialization, if you are a reader type, we recommend
            “
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <a
              href="https://www.amazon.com/Hands-Machine-Learning-Scikit-Learn-TensorFlow/dp/1492032646/ref=pd_lpo_14_t_0/146-1893707-6075253?_encoding=UTF8&pd_rd_i=1492032646&pd_rd_r=5206b077-f856-4f48-a8f9-0affa4f7a02a&pd_rd_w=mYsRa&pd_rd_wg=Eu64f&pf_rd_p=a0d6e967-6561-454c-84f8-2ce2c92b79a6&pf_rd_r=60KFNA7A61P4X40JP49W&psc=1&refRID=60KFNA7A61P4X40JP49W"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Hands-On Machine Learning with Scikit-Learn, Keras, and
              TensorFlow: Concepts, Tools, and Techniques to Build Intelligent
              Systems 2nd Edition
            </a>
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            ” – 2nd Edition, be careful while ordering{" "}
          </h3>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Going through this book will take you to a higher level of Python
            programming, Machine Learning in-depth. And all that you need to
            know about Deep Learning. It covers all data structures. And all
            models till neural networks using the most used libraries like
            Sci-Kit learn (in-depth), TensorFlow and Keras.
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step3:- Build out a project portfolio</h3>
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
              Apply what you learn
            </h3>
          </center>
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
              Work with real-world dataset
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 15, lineHeight: 1.8 }}>
            <a
              href="https://datasetsearch.research.google.com/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Google dataset search tool
            </a>{" "}
            Google gives you a search tool to get any available online data set,
            data related to governments, finance, retail, ecommerce, etc.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 15, lineHeight: 1.8 }}>
            <a
              href="https://cloud.google.com/solutions/datasets"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Google Cloud Public Datasets
            </a>{" "}
            Making use of publicly available datasets.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 15, lineHeight: 1.8 }}>
            <a
              href="https://paperswithcode.com/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Papers with code
            </a>{" "}
            is one of the recent platforms that provide research papers with the
            datasets you can use to apply the methodologies in the papers.
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
              Collect your data and build your datasets
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <a
              href="https://www.omdena.com/projects/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Omdena
            </a>{" "}
            is specialized in building your career and experience while making a
            global impact. In 8-weeks challenges, you can join global teams of
            data scientists and build an environmental solution using your data
            science skills. A new challenge every week that targets social
            impacts, like infrastructure planning, agriculture development,
            climate change, and clean energy. In these challenges you start by
            collecting your data, build datasets, cleaning, process, explore
            then build machine learning models. Be sure that your level of
            experience has a place in a team of 50, so don’t hesitate to apply.
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
              Specific programming topics to know include
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            1) Common data structures (data types, lists, dictionaries, sets,
            tuples), writing functions, logic, control flow, searching and
            sorting algorithms, object-oriented programming. And working with
            external libraries.
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            2) SQL scripting: Querying databases using joins, aggregations, and
            subqueries
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            3) Comfort using the Terminal, version control in Git, and using
            GitHub
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            4) Cloud computing; using one of AWS, Azure, or Google Cloud
          </h3>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            5) Big data
          </h3>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Step4:- Mastering one Data Science field</h3>
          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            <i style={{ color: "gold" }}>Tip no.4</i> :- Data Science is vast.
            To stand out, we recommend you master one of these fields. They are
            very popular in the jobs market now.
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
              Remote Sensing
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Remote Sensing is the use of satellite or aircraft-based sensor
            technologies to detect and classify objects on Earth. Download
            opensource satellite images using packages like Rasterio and Folium,
            get meaningful and insightful data from every pixel in a satellite
            image.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            <a
              href="https://omdena.com/blog/geospatial-data-analytics/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Using GeoSpatial Data Analytics: A Friendly Guide to Folium and
              Rasterio
            </a>
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
              Natural Language Processing
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Natural Language Processing is how to teach a computer to be capable
            of “understanding” the contents of documents, including the
            contextual nuances of the language within them. Some interesting
            fields to focus on, Sentiment Analysis and Topic Modeling. To start,
            follow this tutorial:
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            <a
              href="https://omdena.com/blog/nlp-regex/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              NLP Data Preparation: From Regex to Word Cloud Packages and Data
              Visualization
            </a>
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
              Computer Vision
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Computer Vision includes methods for acquiring, processing,
            analyzing, and understanding digital images, and extraction of
            high-dimensional data from the real world. The first steps are to
            learn basic image processing and object detection tools like OpenCv,
            and practice modeling on some pre-trained models like YOLO.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            <a
              href="https://omdena.com/blog/opencv-pedestrian-detector/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
              Learning OpenCV from Scratch to Build a Pedestrian Detector
            </a>
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
              Anomaly Detection
            </h3>
          </center>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 5, lineHeight: 1.8 }}>
            Anomaly Detection Also known as Outliers detection is the
            identification of rare items, events, or observations that raise
            suspicions by differing significantly from the majority of the data.
            Mainly used in Healthcare and Pathology detection. An interesting
            application is to detect anomalies on the surface of Mars from
            landing images.
          </h3>
          <br></br>
          <h3 style={{ marginTop: 10, marginLeft: 25, lineHeight: 1.8 }}>
            <a
              href="https://omdena.com/blog/anomaly-detection/"
              target="_blank"
              className="web-links"
              rel="noreferrer"
            >
Anomaly Detection on Mars using Deep Learning
            </a>
          </h3>
          <br></br>
          <br></br>
          <hr></hr>
          <center>
            <h3 className="data">Visual Representation of Data Science</h3>

          </center>
          <br></br>
          <hr></hr>
          <br></br>
          <br></br>
          <center>
            <img src={dataroadmap} className="webdev-image" alt="ds-roadmap"></img>
          </center>
          <br></br>
          <br></br>
        </div>
      </div>
    </div>
  );
};

export default Datascientist;
