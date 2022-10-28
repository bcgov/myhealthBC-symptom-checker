import React from 'react';
import { Trans, useTranslation } from 'react-i18next';
import symptomaticTest from '../images/symptomaticTest.svg';
import { ResultPageLayout } from './ResultPageLayout';
import { Link811 } from 'src/components/Link811';
import { LinkUPCC } from 'src/components/LinkUPCC';
import { Link } from 'src/components/Link';

export const ResultSymptomaticTest = () => {
  const { t } = useTranslation();

  return (
    <ResultPageLayout
      image={symptomaticTest}
      imageBg='bg-white'
      imageAlt='rapid test'
      title={t('ResultSymptomaticTest')}
      titleColor='text-bcBlueNav'
    >
      <div>
        <Trans i18nKey='ResultSymptomaticTestDescription1'>
          <p>A positive Rapid Antigen Test (RAT) result is acceptable for initiating treatment.</p>
          <p>
            <Link href='https://www2.gov.bc.ca/gov/content/covid-19/info/testing#get'>
              Rapid antigen testing kits are free for everyone
            </Link>
            . Visit your local pharmacy and ask for your testing kit.
          </p>
          <p>
            <b>If you test positive,</b> you should stay home and limit contact with other people.
          </p>

          <p>Find out:</p>
        </Trans>
        <Trans i18nKey='ResultSymptomaticTestDescription2'>
          <ul className='list-disc pl-6'>
            <li>
              <Link href='http://www.bccdc.ca/health-info/diseases-conditions/covid-19/self-isolation#Self-isolation'>
                How long you need to self-isolate
              </Link>
            </li>
            <li>
              <Link href='https://www2.gov.bc.ca/gov/content/covid-19/vaccine/treatments#criteria'>
                If you can access treatment for COVID-19
              </Link>
            </li>
          </ul>
        </Trans>
        <Trans i18nKey='ResultSymptomaticTestDescription3'>
          <p>
            <b>If you test negative,</b> you should stay home until you feel well enough to return
            to your regular activities. If your symptoms do not improve or they get worse, you
            should take another rapid test and get health advice:
          </p>
          <ul className='list-disc pl-6'>
            <li>Contact your health care provider</li>
            OR
            <li>Call {Link811} to talk to a nurse at HealthLink BC</li>
          </ul>
          <p>
            If you start to feel very sick (for example, if you're having trouble breathing or can't
            drink anything), call 9-1-1 or visit an {LinkUPCC} or emergency department right away.
          </p>
        </Trans>
      </div>
    </ResultPageLayout>
  );
};
