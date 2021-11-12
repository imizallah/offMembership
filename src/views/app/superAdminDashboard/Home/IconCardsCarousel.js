/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Card, CardBody, Button } from 'reactstrap';
import GlideComponent from 'components/carousel/GlideComponent';

// const handleRedirect = (e) => {
//   console.log(e);
// }





const IconCard = ({ className = 'mb-4', icon, title, value, button, buttonTitle, func, cardClassName }) => {
  return (
    <div className={`icon-row-item icon-card ${className}`}>
      <Card style={{ minHeight: '200px', maxHeight: '200px' }}>
        <CardBody className={`text-center  font-family-m ${cardClassName}`}>
          {icon ? <i className={`${icon} carousel-icon`} /> : <div className='mb-3' />}

          <p className="card-text icon-card-text font-family-m  mb-0" style={{ fontSize: '12px' }}>
            {title}
          </p>
          {value ? <p className="card-text icon-card-text font-family-m text-primary text-center mb-0" style={{ fontSize: '25px' }}>{value}</p> : null}

          {button ?
            <Button color='primary' className='px-2 mx-2 ' onClick={() => func()}>
              {buttonTitle}
            </Button> : null
          }
        </CardBody>
      </Card>
    </div>
  );
};

const IconCardsCarousel = ({ className = 'icon-cards-row', activities,advertsCount }) => {
  const { advertisersCount,
    customersCount,
    evpsCount,
    usersCount,
    // incomeCount,
    superevpsCount,
    vendorsCount } = activities;

  console.log(activities);
  const counterData = [
    { title: 'Total Users',icon: 'iconsminds-user', value: usersCount.toString(), button: false},
    { title: 'Total Advert', icon: 'iconsminds-clock', button: false, value: advertsCount.toString() },
    { title: 'Super EVPs', icon: 'iconsminds-bar-chart-4', value: superevpsCount.toString() },
    { title: 'EVPs', icon: 'iconsminds-arrow-shuffle', value: evpsCount.toString() },
    { title: 'Advertisers', icon: 'iconsminds-clock', button: false, value: advertisersCount.toString()},
    { title: 'Vendors', icon: 'iconsminds-clock', button: false, value: vendorsCount.toString() },
    { title: 'Customers', icon: 'iconsminds-clock', button: false, value: customersCount.toString() },
    { title: 'Sub EVPs', icon: 'iconsminds-clock', button: false, value: superevpsCount.toString(), },
  ];



  return (
    <div className={className}>
      <GlideComponent
        settings={{
          gap: 2,
          perView: 8,
          type: 'carousel',
          breakpoints: {
            320: { perView: 2 },
            576: { perView: 4 },
            1600: { perView: 8 },
            1800: { perView: 8 },
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
