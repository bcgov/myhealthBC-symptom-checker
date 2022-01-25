import React from 'react';
import { Recommendation } from '../types/Recommendation';
import { ResultCall911 } from './ResultCall911';
import { ResultCall811 } from './ResultCall811';
import { ResultAsymptomatic } from './ResultAsymptomatic';
import { ResultSymptomaticTest } from './ResultSymptomaticTest';
import { ResultSymptomaticNoTest } from './ResultSymptomaticNoTest';
import { useParams } from 'react-router-dom';

export const ResultPage = () => {
  const { result } = useParams();

  const results = {
    [Recommendation.CALL_911]: <ResultCall911 />,
    [Recommendation.CALL_811]: <ResultCall811 />,
    [Recommendation.ASYMPTOMATIC]: <ResultAsymptomatic />,
    [Recommendation.SYMPTOMATIC_TEST]: <ResultSymptomaticTest />,
    [Recommendation.SYMPTOMATIC_NO_TEST]: <ResultSymptomaticNoTest />,
  };
  return <>{results[result as Recommendation]}</>;
};
