import React from 'react';
import { ReactComponent as CallIcon } from 'src/images/footer_call.svg';

const PhoneIcon: React.FC = () => {
  return (
    <span className='h-6 w-6 mr-2 inline-block'>
      <CallIcon />
    </span>
  );
};

const FooterLink: React.FC<{ href: string; label?: string }> = ({ href, label, children }) => {
  return (
    <div className='md:mr-8 mt-2 md:mt-0'>
      <p className='block text-xs mt-4 lg:mt-0 mb-1'>{label}</p>
      <a
        className='w-full md:w-auto flex items-center justify-center button rounded-md px-6 py-2 border text-bcBluePrimary border-bcBluePrimary font-bold'
        href={href}
      >
        {children}
      </a>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className='w-full bg-white flex justify-center print:hidden'>
      <div
        className='md:w-layout w-full 2xl:mx-0 md:mx-0 sm:mx-12 py-12
        grid grid-cols-12 gap-8'
      >
        <div className='flex flex-col w-full items-start md:flex-col md:items-left md:align-left col-start-2 col-end-12'>
          <h3 className='text-lg text-bcBluePrimary font-bold mb-1'>Need help?</h3>
          <span className='text-sm block mb-4'>Talk to a Service BC agent.</span>
          <span className='text-sm font-bold block mb-1'>Service is available 7:30am to 8pm</span>

          <div className='flex flex-col lg:flex-row md:items-left w-full justify-left'>
            <FooterLink label='Within Canada' href='tel:+18882684319'>
              <PhoneIcon />
              1-888-COVID19 <span className='ml-4  font-normal'>(1-888-268-4319)</span>
            </FooterLink>
            <FooterLink label='International' href='tel:+16044120957'>
              <PhoneIcon />
              1-604-412-0957
            </FooterLink>
            <FooterLink label='Telephone for the Deaf' href='tel:711'>
              <PhoneIcon />
              Across B.C. Dial 711
            </FooterLink>
          </div>

          <p className='text-sm text-gray-600 mt-2'>Standard message and data rates may apply.</p>

          <div className='border-t-2 border-color-gray-300 my-6 w-full' />

          <h3 className='text-lg text-bcBluePrimary font-bold mb-1'>Translation Services</h3>
          <p className='text-sm text-gray-600 mb-1'>
            Available in more than 110+ languages, including
          </p>
          <p aria-hidden className='text-sm'>
            翻譯服務 | 翻译服务 | ਅਨੁਵਾਦਸਰਵਿਸਿਜ | خدمات ت رج م ه؟ | Services de traduction |
            Servicios de traducción
          </p>

          <p className='text-sm font-bold mb-1 mt-2'>Service is available 7:30 am to 8 pm</p>

          <div className='flex flex-col lg:flex-row md:items-left w-full justify-left'>
            <FooterLink href='tel:+18882684319'>
              <PhoneIcon />
              Call 1-888-268-4319
            </FooterLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
