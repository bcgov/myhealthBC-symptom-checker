import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import house from '../images/house.svg';
import { Button } from '../components/Button';
import { Link, useNavigate } from 'react-router-dom';

export const ResultAsymptomatic = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const restart = () => {
    navigate('/');
  };

  return (
    <div className='flex flex-col justify-center items-center m-auto'>
      <div>{t('Recommendation')}</div>
      <div className='my-5 border rounded-full bg-greenLight'>
        <img src={house} height={110} width={110} alt='safe house' />
      </div>
      <h1 className='text-3xl font-bold text-bcGreenSuccess'>{t('ResultAsymptomatic')}</h1>
      <div className='my-12'>
        <Button variant='primary' widthClass='w-72' onClick={restart}>
          {t('Retake')}
        </Button>
      </div>
      <hr className='w-full border-2 border-bcYellowPrimary mb-7' />
      <div className='w-full'>
        <div>{t('ResultAsymptomaticDescription')}</div>
        <div className='bg-bcLightBlueBackground my-4 p-4 text-bcBlueLink'>
          <div>
            <Trans i18nKey='ResultAsymptomaticNotice1'>
              If you have any questions or concerns, contact your health care provider or call{' '}
              <b>8-1-1</b>.
            </Trans>
          </div>
          <div>
            <Trans i18nKey='ResultAsymptomaticNotice2'>
              For more information on COVID-19 and how to stay safe, visit the{' '}
              <a href='http://www.bccdc.ca/'>BCCDC website</a>
            </Trans>
          </div>
        </div>
      </div>
    </div>
  );
};
