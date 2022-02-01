import React from 'react';
import { Trans } from 'react-i18next';

export const HealthLinkBC = () => {
  return (
    <Trans i18nKey='HealthLinkBC'>
      For more information on cough, see HealthLinkBC&apos;s information for{' '}
      <a
        className='underline text-bcBlueLink'
        href='https://www.healthlinkbc.ca/health-topics/vomt3'
        target='_blank'
        rel='noreferrer'
      >
        children age 11 and younger
      </a>
      and for{' '}
      <a
        className='underline text-bcBlueLink'
        href='https://www.healthlinkbc.ca/health-topics/navt4'
        target='_blank'
        rel='noreferrer'
      >
        people age 12 and older.
      </a>
    </Trans>
  );
};
