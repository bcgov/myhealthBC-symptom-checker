import React from 'react';
import { useTranslation } from 'react-i18next';
import appStore from '../images/app_store.svg';
import playStore from '../images/play_store.svg';
import android from '../images/android.svg';

export const DownloadBCApp = () => {
  const { t } = useTranslation();

  return (
    <div className='container flex flex-col md:flex-row mx-auto max-w-main md:my-12 pt-12 pb-12 px-5 md:px-28 bg-lightBlueBackground md:bg-white pt-12 bg-white md:rounded bg-bcLightBackground md:bg-white'>
      <img
        className='mx-auto md:ml-10 pb-10 md:pb-0'
        src={android}
        width={145}
        height={178}
        alt='android phone'
      />
      <div className='pl-2 pl-2 md:pl-28'>
        <h1 className='text-xl font-bold'>{t('DownloadApp')}</h1>
        <div className='my-4'>{t('DownloadAppDescription')}</div>
        <div className='flex'>
          <img src={appStore} width={134} alt='Apple app store' />
          <img className='ml-2' src={playStore} width={151} alt='Google app store' />
        </div>
      </div>
    </div>
  );
};
