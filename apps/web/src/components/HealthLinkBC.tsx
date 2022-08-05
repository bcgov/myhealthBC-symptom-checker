import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import PropTypes from 'prop-types';
import { Link } from './Link';

export const HealthLinkBC = ({ linkForChildren, linkForAdults, translationKey }) => {
  const { t } = useTranslation('severity');
  return (
    <Trans t={t} i18nKey={translationKey}>
      <div className='text-base text-bcGray mb-2'>
        Input title here
        <ul className='list-disc pl-6'>
          <li>
            <Link href={linkForChildren}>Children age 11 and younger</Link>
          </li>
          <li>
            <Link href={linkForAdults}>People age 12 and older</Link>
          </li>
        </ul>
      </div>
    </Trans>
  );
};

HealthLinkBC.propTypes = {
  linkForChildren: PropTypes.string.isRequired,
  linkForAdults: PropTypes.string.isRequired,
  translationKey: PropTypes.string.isRequired,
};
