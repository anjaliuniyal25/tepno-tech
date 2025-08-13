import React from 'react'
import PortfolioContent from './PortfolioContent';
import PortfolioContact from './PortfolioContact';
import PortfolioNavbar from './PortfolioNavbar';
import ServicesList from './ServiceList';
import WhyChooseUs from './WhyChooseUs';
import OurExperts from './OurExperts';
import OurSkills from './OurSkills';

const Portfolio = () => {
  return (
    <>
    <PortfolioNavbar/>
    <PortfolioContent/>
    <ServicesList/>
    <WhyChooseUs/>
    <OurExperts/>
    <OurSkills/>
    <PortfolioContact/>
    </>
  )
}

export default Portfolio;