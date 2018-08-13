import React from 'react';

const TourModel= (props) =>{
  return(
      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__right">
            <a href="#section-tours" className="popup__close">&times;</a>
          </div>
          <section className="section-tour-model">
            <div className="row">
              <div className="tour-panel">
                <div className="tour-panel__settings">
                  <form action="#" className="form">
                    <div className="form__group u-margin-bottom-medium">
                      <div className="u-margin-bottom-medium">
                        <h2 className="heading-secondary">
                            Select
                        </h2>
                      </div>
                      <div className="form__radio-group">
                          <input type="radio" className="form__radio-input" id="small" name="size"/>
                          <label htmlFor="small" className="form__radio-label">
                              <span className="form__radio-button"></span>
                              small
                          </label>
                      </div>

                      <div className="form__radio-group">
                          <input type="radio" className="form__radio-input" id="large" name="size"/>
                          <label htmlFor="large" className="form__radio-label">
                              <span className="form__radio-button"></span>
                              Medium
                          </label>
                      </div>
                      <div className="form__radio-group">
                          <input type="radio" className="form__radio-input" id="large" name="size"/>
                          <label htmlFor="large" className="form__radio-label">
                              <span className="form__radio-button"></span>
                              Large
                          </label>
                      </div>
                      <div className="form__radio-group">
                          <input type="radio" className="form__radio-input" id="large" name="size"/>
                          <label htmlFor="large" className="form__radio-label">
                              <span className="form__radio-button"></span>
                              Extra Large
                          </label>
                      </div>
                    </div>
                    <div className="form__group">
                        <button className="btn btn--purple">Next step &rarr;</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}

export default TourModel;
