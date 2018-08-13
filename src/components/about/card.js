import React from 'react';

const Card = (props) =>{
  console.log(props.accessoriesDetails)
  const cardDetails = props.accessoriesDetails && props.accessoriesDetails.accessories.map((details, i)=>{
    return <li key={i} ><a href="#popup">{details}</a></li>
  });

  return(
    <div className="col-1-of-2">
      <div className="card">
        <div className="card__side card__side--front">
          <div className="card_picture card__picture--mod">
            &nbsp;
          </div>
          <div className="card__heading-front">
            {props.accessoriesDetails.gender}
          </div>
        </div>
        <div className="card__side card__side--back card__side--back-1">
          <h4 className="card__heading-back">
              <span className="card__heading-span card__heading-span">Accessories</span>
          </h4>
          <div className="card__details">
              <ul>
                {cardDetails}
              </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card;
