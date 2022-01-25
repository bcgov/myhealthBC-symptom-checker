import React from 'react';
import { useTranslation } from 'react-i18next';
import phone1 from '../images/phone1.png';
import phone2 from '../images/phone2.png';
import appStore from '../images/app_store.png';
import googlePlay from '../images/google_play.png';

export const DownloadBCApp = () => {
  const { t } = useTranslation();

  return (
    <div className='container mx-auto max-w-main my-12 pt-12 pb-12 px-28 bg-white pt-12 bg-white rounded'>
      <div className='relative'>
        <div className='absolute left-14 top-5 rounded-xl bg-black p-1 pt-3'>
          <img className='rounded-xl' src={phone2} width={74} height={162} alt='phone2 image' />
        </div>
        <div className='absolute left-32 top-9 rounded-xl bg-black p-1 pt-3'>
          <img className='rounded-xl' src={phone1} width={74} height={162} alt='phone1 image' />
        </div>
      </div>
      <div className='pl-80'>
        <h1 className='text-xl font-bold'>{t('DownloadApp')}</h1>
        <div className='my-4'>{t('DownloadAppDescription')}</div>
        <div className='flex'>
          <img src={appStore} width={126} alt='Apple app store' />
          <img className='ml-2' src={googlePlay} width={126} alt='Google app store' />
        </div>
      </div>
    </div>
  );
};
