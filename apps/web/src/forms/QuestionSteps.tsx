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
        answerOptions={YES_NO_OPTIONS}
        question={{
          title: 'Q1',
          options: ['Q1-1', 'Q1-2', 'Q1-3', 'Q1-4', 'Q1-5'],
        }}
        name='emergentFactors'
      />
    ),
  },
  {
    type: QuestionType.COMPLICATED,
    component: (
      <SymptomQuestion
        answerOptions={YES_NO_OPTIONS}
        question={{
          title: 'Q2',
          options: ['Q2-1', 'Q2-2'],
        }}
        name='complicatingFactors'
      />
    ),
  },
  {
    type: QuestionType.SYMPTOMS,
    component: <Q3Symptoms />,
    validationSchema: validationSchema.symptoms,
  },
  {
    type: QuestionType.RESULT,
    component: <Q4TestResult />,
    validationSchema: validationSchema.test,
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
    type: QuestionType.HEALTH_WORK,
    component: (
      <SymptomQuestion
        answerOptions={YES_NO_OPTIONS}
        question={{
          title: 'HWQ1',
          options: ['HWQ1-1', 'HWQ1-2', 'HWQ1-3', 'HWQ1-4', 'HWQ1-5', 'HWQ1-6'],
        }}
        name='healthWork.immunocompromised'
      />
    ),
  },
  {
    type: QuestionType.HEALTH_WORK,
    component: (
      <SymptomQuestion
        answerOptions={YES_NO_OPTIONS}
        question={{
          title: 'HWQ2',
          content: 'HWQ2-description',
        }}
        name='healthWork.unvaccinated'
      />
    ),
  },
  {
    type: QuestionType.HEALTH_WORK,
    component: (
      <SymptomQuestion
        answerOptions={YES_NO_OPTIONS}
        question={{
          title: 'HWQ3',
        }}
        name='healthWork.careWorker'
      />
    ),
  },
  {
    type: QuestionType.HEALTH_WORK,
    component: (
      <SymptomQuestion
        answerOptions={YES_NO_OPTIONS}
        question={{
          title: 'HWQ4',
        }}
        name='healthWork.congregated'
      />
    ),
  },
];

export default QuestionSteps;
