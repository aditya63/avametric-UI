import React from 'react';

const Header = () =>{
  return(
    <header className="header">
            <div className="header__text--box">
              <h1 className="heading-primary">
                <span className="heading-primary--main">Avametric</span>
                <span className="heading-primary--sub">Measure fitness with ease</span>
              </h1>
              <a href="#section-tours" className="btn btn--main btn--animated">Take a tour</a>
            </div>
    </header>
  )
}

export default Header;
