import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className='w-full bg-bcBluePrimary border-t-2 border-bcYellowPrimary md:px-12'>
      <div className='bar-separator mx-2 md:mx-0 flex-col flex md:flex-row md:items-center md:align-center text-white py-2'>
        <a href='https://www2.gov.bc.ca/gov/content/about-gov-bc-ca'>About gov.bc.ca</a>
        <a href='https://www2.gov.bc.ca/gov/content/home/disclaimer'>Disclaimer</a>
        <a href='https://www2.gov.bc.ca/gov/content/home/privacy'>Privacy</a>
        <a href='https://www2.gov.bc.ca/gov/content/home/accessible-government'>Accessibility</a>
        <a href='https://www2.gov.bc.ca/gov/content/home/copyright'>Copyright</a>
        <a href='https://www2.gov.bc.ca/gov/content/home/get-help-with-government-services'>
          Contact Us
        </a>
      </div>
    </footer>
  );
};
