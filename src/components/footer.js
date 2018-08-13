import React from 'react';


const Footer = (props) =>{
  return(
    <footer className="footer">
      <div className="row">
        <div className="footer__logo--text">
          <h4 className="heading-tertiary">
            Avametric
          </h4>
        </div>
      </div>

      <div className="row">
        <div className="col-1-of-2">
            <div className="footer__navigation">
                <ul className="footer__list">
                    <li className="footer__item"><a href="#" className="footer__link">Company</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Contact us</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Carrers</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Privacy policy</a></li>
                    <li className="footer__item"><a href="#" className="footer__link">Terms</a></li>
                </ul>
            </div>
        </div>
        <div className="col-1-of-2">
            <p className="footer__copyright">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
