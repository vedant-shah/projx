import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import * as AIicons from "react-icons/ai";
import * as Faicons from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-dark text-center text-white">
        {/* <!-- Grid container --> */}
        <div className="container  p-4 pb-0">
          {/* <!-- Section: Social media --> */}
          <section
            className="mb-4 d-flex justify-content-around mx-auto"
            style={{ maxWidth: "350px", fontSize: "1.75rem" }}>
            {/* <!-- Facebook --> */}

            <Faicons.FaFacebook style={{ color: "#3b5998" }} />

            {/* <!-- Twitter --> */}

            <AIicons.AiFillTwitterCircle style={{ color: "#1DA1F2" }} />

            {/* <!-- Google --> */}
            <AIicons.AiFillGoogleCircle style={{ color: "#ff3e30" }} />

            {/* <!-- Instagram --> */}

            <AIicons.AiFillInstagram style={{ color: "#E1306C" }} />

            {/* <!-- Linkedin --> */}
            <Faicons.FaLinkedin style={{ color: "#0077b5" }} />
            {/* <!-- Github --> */}
            <Faicons.FaGithub style={{ color: "#ffffff" }} />
          </section>
          {/* <!-- Section: Social media --> */}
        </div>
        {/* <!-- Grid container --> */}

        {/* <!-- Copyright --> */}
        <div className="text-center p-3">
          © 2022 Copyright:
          <Link className="text-white mx-2" to="/">
            ProjX
          </Link>
        </div>
        {/* <!-- Copyright --> */}
      </footer>
    </>
  );
}

export default Footer;
