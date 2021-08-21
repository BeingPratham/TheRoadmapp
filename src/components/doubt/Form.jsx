import axios from "axios";
import React from "react";
import "./form.css";
import { motion } from "framer-motion";
// import  { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";
class Form extends React.Component {
  handleFormSubmit = async (event, requestType) => {
    event.preventDefault();

    const email = event.target.elements.email.value;
    const content = event.target.elements.content.value;
    console.log(email, content);
    
    this.form.reset();
    if(localStorage.getItem('token')!==null){
    if (requestType === "post") {
      await axios
        .post("http://127.0.0.1:8000/api/", {
          email: email,
          content: content,
        })
        // .then((res) => console.log(res));
        alert('SuccessFully Submited!!');
    }
  }
  else{
    this.props.history.push('/login')
  }
  };
  render() {
    return (
      <div>
        <motion.form
          initial={{ x: -1500 }}
          animate={{ x: 0 }}
          transition={{
            delay: 1.2,
            type: "spring",
            stiffness: 500,
          }}
          ref={form => this.form = form}
          className="frm"
          onSubmit={(event) =>
            this.handleFormSubmit(event, this.props.requestType)
          }
        >
          <motion.label
            initial={{ x: 8500 }}
            animate={{ x: 0 }}
            transition={{
              delay: 1.4,
              type: "spring",
              stiffness: 500,
            }}
            className="lbl"
          >
            Email:
            <motion.input
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{
                delay: 1.6,
                type: "spring",
                stiffness: 500,
              }}
              type="email"
              initialValue=''
              name="email"
              className="email-doubt"
            />
          </motion.label>
          <br />
          <motion.label
            initial={{ x: 8500 }}
            animate={{ x: 0 }}
            transition={{
              delay: 1.8,
              type: "spring",
              stiffness: 500,
            }}
            className="lbl"
          >
            Doubt:
            <motion.textarea
              initial={{ x: -1500 }}
              animate={{ x: 0 }}
              transition={{
                delay: 2.0,
                type: "spring",
                stiffness: 500,
              }}
              name="content"
              initialValue=''
              className="content-doubt"
            ></motion.textarea>
          </motion.label>
          <br></br>
          <center>
            <motion.button
              initial={{ x: 8500 }}
              animate={{ x: 0 }}
              transition={{
                delay: 2.2,
                type: "spring",
                stiffness: 500,
              }}
              type="submit"
              value="Submit"
              className="sub-btn"
            >
              Submit
            </motion.button>
          </center>
        </motion.form>
      </div>
    );
  }
}


export default withRouter(Form);
