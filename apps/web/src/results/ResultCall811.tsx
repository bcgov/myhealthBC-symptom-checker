import React from 'react';
import { Trans, useTranslation } from 'react-i18next';

import stethoscope from '../images/stethoscope.svg';
import { ResultPageLayout } from './ResultPageLayout';
import { NoticeBox } from '../components/NoticeBox';

export const ResultCall811 = () => {
  const { t } = useTranslation();

  return (
    <ResultPageLayout
      image={stethoscope}
      imageBg='bg-lightYellowBackground'
      imageAlt='stethoscope'
      title={t('Result811')}
      titleColor='text-bcBlueNav'
    >
      <Trans i18nKey='Result811Description'>
        These symptoms require emergency medical care. You should <b>call 9-1-1 immediately</b>, or
        go directly to your nearest emergency department.
      </Trans>
      <NoticeBox>
        <div>
          <Trans i18nKey='Result811Notice'>
            For more information on where you can call for help,{' '}
            <a
              className='underline text-bcBlueAccent'
              href='https://bc.wethrive.ninja/covid19app/resources/559894d8-8df3-4243-9246-bf7a46323744'
            >
              click here
            </a>
            .
          </Trans>
        </div>
      </NoticeBox>
    </ResultPageLayout>
  );
};
