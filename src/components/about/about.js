import React from 'react';
import LearnMoreText from './learnMoreText';
import LearnMorePics from './learnMorePics';
import PartnerBox from './partners';
import Card from './card';
import TourModel from './tourModel';

const About = (props)=> {
  const cardAccessories=[
                          { gender:'Male', accessories:['Shirt', 'T-shirt', 'Pants', "Jackets"]},
                          { gender:'Female', accessories:['Dress', 'Sports Wear', 'Pants', 'Skirts']}
                        ];

  const defaultPartnerNames = ['acme', 'Gap', 'Zara'];
  const partnerDefaultList = defaultPartnerNames.map((partner,i )=> <PartnerBox key={i} partnerData={partner}/>);
  const partnerAPIList = props.partnerInfo.map(partner => <PartnerBox key ={partner.id} partnerData={partner}/>);

  return(
    <main>
      <section className="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className ="heading-secondary">
            Learn more about AR clothing experience
          </h2>
        </div>
        <div className="row">
          <div className="col-1-of-2 u-padding-5">
              <LearnMoreText/>
              <LearnMoreText/>
              <a href="#" className="btn-text">Learn more &rarr;</a>
          </div>
          <div className="col-1-of-2">
            <LearnMorePics/>
          </div>
        </div>
      </section>

      <section className="section-partners">
        <div className = "u-center-text u-margin-bottom-big">
          <div className="heading-secondary section-partners__heading">
            Partners
          </div>
        </div>
        <div className="row">
          { props.partnerInfo?
            partnerAPIList:partnerDefaultList
          }
        </div>
      </section>

      <section id="section-tours" className="section-tours">
        <div className = "u-center-text u-margin-bottom-big">
          <div className="heading-secondary">
            Tour
          </div>
        </div>

        <div className="row">
        {
          cardAccessories.map((details, i) =>{
            return <Card key={i} accessoriesDetails={details}/>
          })
        }
        </div>
      </section>

      <TourModel />

    </main>
  )
}

export default About;
