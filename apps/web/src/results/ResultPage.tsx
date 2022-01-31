import React from 'react';
import { Recommendation } from '../types/index';
import { ResultCall911 } from './ResultCall911';
import { ResultCall811 } from './ResultCall811';
import { ResultAsymptomaticNoTest } from './ResultAsymptomaticNoTest';
import { ResultSymptomaticTest } from './ResultSymptomaticTest';
import { ResultSymptomaticNoTest } from './ResultSymptomaticNoTest';
import { useParams } from 'react-router-dom';

export const ResultPage = () => {
  const { result } = useParams();

  const results = {
    [Recommendation.CALL_911]: <ResultCall911 />,
    [Recommendation.CALL_811]: <ResultCall811 />,
    [Recommendation.ASYMPTOMATIC_NO_TEST]: <ResultAsymptomaticNoTest />,
    [Recommendation.SYMPTOMATIC_TEST]: <ResultSymptomaticTest />,
    [Recommendation.SYMPTOMATIC_NO_TEST]: <ResultSymptomaticNoTest />,
  };
  return (
    <main className='container mx-auto max-w-main mt-0 md:mt-12 md:mb-12 py-6 md:py-12 px-6 md:px-24 bg-white md:rounded shadow-md'>
      {results[result as Recommendation]}
    </main>
  );
};
