import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Recommendation, ResultState } from '../types';
import { ResultCall911 } from './ResultCall911';
import { ResultCall811 } from './ResultCall811';
import { ResultAsymptomaticNoTest } from './ResultAsymptomaticNoTest';
import { ResultSymptomaticTest } from './ResultSymptomaticTest';
import { ResultSymptomaticNoTest } from './ResultSymptomaticNoTest';
import { ResultRapidTest } from './ResultRapidTest';

export const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  let recommendation = Recommendation.NONE;
  if (location.state) {
    recommendation = (location.state as ResultState).recommendation;
  }

  useEffect(() => {
    if (!location.state) {
      navigate('/');
    }
  }, []);

  const results = {
    [Recommendation.CALL_911]: <ResultCall911 />,
    [Recommendation.CALL_811]: <ResultCall811 />,
    [Recommendation.ASYMPTOMATIC_NO_TEST]: <ResultAsymptomaticNoTest />,
    [Recommendation.SYMPTOMATIC_TEST]: <ResultSymptomaticTest />,
    [Recommendation.SYMPTOMATIC_NO_TEST]: <ResultSymptomaticNoTest />,
    [Recommendation.RAPID_TEST]: <ResultRapidTest />,
  };
  return (
    <main className='container mx-auto max-w-main mt-0 md:mt-12 md:mb-12 py-6 md:py-12 px-6 md:px-24 bg-white md:rounded shadow-md'>
      {recommendation ? results[recommendation] : ''}
    </main>
  );
};
