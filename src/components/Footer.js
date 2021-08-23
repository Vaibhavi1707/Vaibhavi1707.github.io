import React from "react";
// import { MDBContainer, MDBFooter } from "../../node_modules/mdbreact";

const Footer = () => {
  return (
    // <MDBFooter  className="font-small pt-4 mt-4">
      <div style = {{ padding: "30px" }}>
        <div fluid style = {{ color: "white" }}>
          &copy; {new Date().getFullYear()} Copyright: <a style = {{ textDecoration: null, color: "white" }} href="https://github.com/Vaibhavi1707"> Vaibhavi Lokegaonkar </a>
        </div>
      </div>
    // </MDBFooter>
  );
}

export default Footer;