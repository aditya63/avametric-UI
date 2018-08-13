import React from 'react';

const PartnerBox = (props) =>{
  return(
    <div>
      {props.partnerData.name?
      <div className="col-1-of-3">
        <div className="partner-box">
          <img className="partner-box__icon" src={props.partnerData.logo.thumb.url}/>
          <div className="partner-tertiary"><a  className ="partner-box__link" href={props.partnerData.web}>{props.partnerData.name}</a></div>
        </div>
      </div>
      :
      <div className="col-1-of-3">
        <div className="partner-box">
          <div className="partner-tertiary">{props.partnerData}</div>
        </div>
      </div>
    }
    </div>
  )
}

export default PartnerBox;
