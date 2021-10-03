/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Card, CardBody,Button } from 'reactstrap';
import GlideComponent from 'components/carousel/GlideComponent';

const handleRedirect = (e) => {
  console.log(e);
}
const getHelp = () => {
  console.log('help')
}





const IconCard = ({ className = 'mb-4', icon, title, value, button, buttonTitle, func,cardClassName }) => {

  return (
    <div className={`icon-row-item icon-card ${className}`}>
      <Card style={{minHeight:'200px', maxHeight:'200px'}}>
        <CardBody className={`text-center  font-family-m ${cardClassName}`}>
          <i className={`${icon} carousel-icon`} />
          <p className="card-text icon-card-text font-family-m font-weight-semibold mb-0" style={{fontSize:'12px'}}>
            {title}
          </p>
          
          <p className="lead text-center">{value}</p>
          {button ?
            <Button color='primary' className='px-0 mx-2 my-2' onClick={() => func()}>
              {buttonTitle}
            </Button> : null
          }
        </CardBody>
      </Card>
    </div>
  );
};

const IconCardsCarousel = ({ className = 'icon-cards-row', history }) => {
  const getInfo = () => {
    history.push('/app/knowledgebase')
   }
  const counterData = [
    { title: 'Credit Balance', value: 'N34,000', button: true, buttonTitle:'Fund', func: handleRedirect },
    { title: 'Total Advert', icon: 'iconsminds-clock', button: false, value: 12 },
    { title: 'Help Center', icon: 'iconsminds-bar-chart-4', button: true,buttonTitle:'Contact', func: getHelp, value: 5, cardClassName :'py-3 pb-5'},
    { title: 'Knowledge Base', icon: 'iconsminds-arrow-shuffle', button: true,buttonTitle:'Get Info', func: getInfo, value: 25,cardClassName:'py-3 pb-5' },
  ];



  return (
    <div className={className}>
      <GlideComponent
        settings={{
          gap: 2,
          perView: 4,
          type: 'carousel',
          breakpoints: {
            320: { perView: 1 },
            576: { perView: 2 },
            1600: { perView: 4 },
            1800: { perView: 4 },
          },
          hideNav: true,
        }}
      >
        {counterData.map((item, index) => {
          return (
            <div key={`icon_card_${index}`}>
              <IconCard {...item} className="mb" />
            </div>
          );
        })}
      </GlideComponent>
    </div>
  );
};
export default IconCardsCarousel;
