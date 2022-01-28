import React from 'react';
import { QuestionType, Step, validationSchema, YES_NO_OPTIONS } from '../types';
import { SymptomQuestion } from './SymptomQuestion';
import { Q3Symptoms } from './Q3Symptoms';
import { Q4TestResult } from './Q4TestResult';
import { SeverityDifficultBreathing } from './SeverityDifficultBreathing';
import { SeverityNausea } from './SeverityNausea';
import { SeverityDiarrhea } from './SeverityDiarrhea';
import { SeveritySoreThroat } from './SeveritySoreThroat';
import { SeverityCough } from './SeverityCough';
import { SeverityHeadache } from './SeverityHeadache';
import { SeverityQuestion } from './SeverityQuestion';

const QuestionSteps: Step[] = [
  {
    type: QuestionType.EMERGENT,
    component: (
      <SymptomQuestion
        key={0}
        showErrors
        answerOptions={YES_NO_OPTIONS}
        question={{
          title: 'Q1',
          options: ['Q1-1', 'Q1-2', 'Q1-3', 'Q1-4', 'Q1-5'],
        }}
        name='emergentFactors'
      />
    ),
    validationSchema: validationSchema[0],
  },
  {
    type: QuestionType.COMPLICATED,
    component: (
      <SymptomQuestion
        key={1}
        showErrors
        answerOptions={YES_NO_OPTIONS}
        question={{
          title: 'Q2',
          options: ['Q2-1', 'Q2-2'],
        }}
        name='complicatingFactors'
      />
    ),
    validationSchema: validationSchema[1],
  },
  {
    type: QuestionType.SYMPTOMS,
    component: <Q3Symptoms />,
    validationSchema: validationSchema[2],
  },
  {
    type: QuestionType.SEVERITY,
    symptom: 'difficultBreathing',
    component: <SeverityDifficultBreathing />,
  },
  {
    type: QuestionType.SEVERITY,
    symptom: 'cough',
    component: <SeverityCough />,
  },
  {
    type: QuestionType.SEVERITY,
    symptom: 'bodyAches',
    component: <SeverityQuestion symptom='bodyAches' />,
  },
  {
    type: QuestionType.SEVERITY,
    symptom: 'soreThroat',
    component: <SeveritySoreThroat />,
  },
  {
    type: QuestionType.SEVERITY,
    symptom: 'headache',
    component: <SeverityHeadache />,
  },
  {
    type: QuestionType.SEVERITY,
    symptom: 'diarrhea',
    component: <SeverityDiarrhea />,
  },
  {
    type: QuestionType.SEVERITY,
    symptom: 'nauseaVomiting',
    component: <SeverityNausea />,
  },
  {
    type: QuestionType.RESULT,
    component: <Q4TestResult key={100} />,
    validationSchema: validationSchema[3],
  },
];

export default QuestionSteps;
