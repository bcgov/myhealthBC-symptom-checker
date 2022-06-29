import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import PropTypes from 'prop-types';

export const HealthLinkBC = ({ linkForChildren, linkForAdults, translationKey }) => {
  const { t } = useTranslation('severity');

  return (
    <Trans t={t} i18nKey={translationKey}>
      Get more information about coughing from HealthLink BC information for{' '}
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

HealthLinkBC.propTypes = {
  linkForChildren: PropTypes.string.isRequired,
  linkForAdults: PropTypes.string.isRequired,
  translationKey: PropTypes.string.isRequired,
};
