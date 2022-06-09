import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

export const HealthLinkBC = ({ linkForChildren, linkForAdults, translationKey }) => {
  const { t } = useTranslation('severity');

  return (
    <Trans t={t} i18nKey={translationKey}>
      For more information on cough, see HealthLinkBC&apos;s information for{' '}
      <a
        className='underline text-bcBlueLink'
        href={linkForChildren}
        target='_blank'
        rel='noreferrer'
      >
        children age 11 and younger
      </a>{' '}
      and for{' '}
      <a
        className='underline text-bcBlueLink'
        href={linkForAdults}
        target='_blank'
        rel='noreferrer'
      >
        people age 12 and older.
      </a>
    </Trans>
  );
};
