import React from 'react';
import Photo1 from "../../img/ph-1.jpg"
import Photo2 from "../../img/ph-2.jpg"
import Photo3 from "../../img/ph-3.jpg"

const LearnMorePics = () =>{
  return(
    <div className="composition">
      <img src={Photo1} alt="Photo1" className="composition__photo composition__photo--p1"/>
      <img src={Photo2} alt="Photo2" className="composition__photo composition__photo--p2"/>
      <img src={Photo3} alt="Photo3" className="composition__photo composition__photo--p3"/>
    </div>
  )
}

export default LearnMorePics;
