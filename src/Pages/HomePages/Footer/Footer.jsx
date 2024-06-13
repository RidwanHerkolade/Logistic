import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer">
          <div className="footer__img">
            <img src="./img/diverLogo.png" />
          </div>
          <div className="video">
            <iframe
            //   width="560"
            //   height="315"
              src="https://www.youtube.com/embed/MMyZ9Pu01RI?si=OgRYvtKrTwmdfrBa"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div className="footers__links">
            <div className="footer__grids">
                <div className="footer__linkgrid">
                    <Link className="footergrid__links" to="/">DIVER</Link>
                </div>
                <div className="footer__linkgrid">
                    <Link className="footergrid__links" to="/">About </Link>
                    <Link className="footergrid__links" to="/">Blog </Link>
                    <Link className="footergrid__links" to="/">we are hiring </Link>
                </div>
                <div className="footer__linkgrid">
                    <Link className="footergrid__links" to="/">Support  </Link>
                    <Link className="footergrid__links" to="/">Product help </Link>
                    <Link className="footergrid__links" to="/">Report an issue </Link>
                </div>
                <div className="footer__linkgrid">
                    <Link className="footergrid__links" to="/">Developers  </Link>
                    <Link className="footergrid__links" to="/">Plus</Link>
                    <Link className="footergrid__links" to="/">Hack Blog</Link>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
