import React, { Fragment } from "react";

const Logout = () => {
  return (
    <div>
      
        <Fragment>
          {" "}
          {localStorage.clear("token")};
          {window.location.replace("http://localhost:3000/login")};
        </Fragment>
      
    </div>
  );
};

export default Logout;
