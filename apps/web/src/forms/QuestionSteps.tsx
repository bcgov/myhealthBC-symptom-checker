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
    key: 'Are you experiencing any of the following? - Emergent',
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
    key: 'Are you experiencing any of the following? - Complicated',
  },
  {
    type: QuestionType.SYMPTOMS,
    component: <Q3Symptoms />,
    validationSchema: validationSchema.symptoms,
    key: 'Are you experiencing new or worsening symptoms?',
  },
  {
    type: QuestionType.RESULT,
    component: <Q4TestResult />,
    validationSchema: validationSchema.test,
    key: 'Have you received a new COVID-19 test result?',
  },
  {
    type: QuestionType.SEVERITY,
    symptom: 'difficultBreathing',
    component: <SeverityDifficultBreathing />,
    key: 'What is the severity of your difficulty breathing?',
  },
  {
    type: QuestionType.SEVERITY,
    symptom: 'cough',
    component: <SeverityCough />,
    key: 'What is the severity of your cough?',
  },
  {
    type: QuestionType.SEVERITY,
    symptom: 'bodyAches',
    component: <SeverityQuestion symptom='bodyAches' />,
    key: 'What is the severity of your body aches?',
  },
  {
    type: QuestionType.SEVERITY,
    symptom: 'soreThroat',
    component: <SeveritySoreThroat />,
    key: 'What is the severity of your sore throat?',
  },
  {
    type: QuestionType.SEVERITY,
    symptom: 'headache',
    component: <SeverityHeadache />,
    key: 'What is the severity of your headache?',
  },
  {
    type: QuestionType.SEVERITY,
    symptom: 'diarrhea',
    component: <SeverityDiarrhea />,
    key: 'What is the severity of your diarrhea?',
  },
  {
    type: QuestionType.SEVERITY,
    symptom: 'nauseaVomiting',
    component: <SeverityNausea />,
    key: 'What is the severity of your nausea or vomiting?',
  },
  {
    type: QuestionType.HEALTH_WORK,
    component: (
      <SymptomQuestion
        answerOptions={YES_NO_OPTIONS}
        question={{
          title: 'HWQ1',
          description: 'HWQ1-desc',
          options: ['HWQ1-1', 'HWQ1-2', 'HWQ1-3', 'HWQ1-4', 'HWQ1-5', 'HWQ1-6'],
        }}
        name='healthWork.immunocompromised'
      />
    ),
    key: 'Are you an individual who is moderately to severely immunocompromised?',
  },
  {
    type: QuestionType.HEALTH_WORK,
    component: (
      <SymptomQuestion
        answerOptions={YES_NO_OPTIONS}
        question={{
          title: 'HWQ2',
          options: ['HWQ2-1', 'HWQ2-2', 'HWQ2-3', 'HWQ2-4', 'HWQ2-5', 'HWQ2-6', 'HWQ2-7'],
        }}
        name='healthWork.vulnerableConditions'
      />
    ),
    key: 'Are you an individual who has any one of the following conditions?',
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
    key: 'Do you work as a health care worker in a hospital, long-term care facility ...?',
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
    key: 'Do you live or work in a congregate setting ...?',
  },
  {
    type: QuestionType.HEALTH_WORK,
    component: (
      <SymptomQuestion
        answerOptions={YES_NO_OPTIONS}
        question={{
          title: 'HWQ7',
          content: 'HWQ7-description',
        }}
        name='healthWork.unvaccinated'
      />
    ),
    key: 'Are you 18 years of age and older and unvaccinated or partially vaccinated?',
  },
];

export default QuestionSteps;
