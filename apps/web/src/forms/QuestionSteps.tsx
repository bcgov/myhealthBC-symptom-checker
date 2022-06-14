import React from 'react';
import {
  AgeRanges,
  QuestionType,
  Step,
  VaccinationStatus,
  validationSchema,
  YES_NO_OPTIONS,
} from '../types';
import { SymptomQuestion } from './SymptomQuestion';
import { Q3Symptoms } from './Q3Symptoms';
import { SeverityDifficultBreathing } from './SeverityDifficultBreathing';
import { SeverityNausea } from './SeverityNausea';
import { SeverityDiarrhea } from './SeverityDiarrhea';
import { SeveritySoreThroat } from './SeveritySoreThroat';
import { SeverityCough } from './SeverityCough';
import { SeverityHeadache } from './SeverityHeadache';
import { SeverityQuestion } from './SeverityQuestion';

export const QuestionSteps: Step[] = [
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
    type: QuestionType.SEVERITY,
    symptom: 'cough',
    component: <SeverityCough />,
    key: 'What is the severity of your cough?',
  },
  {
    type: QuestionType.SEVERITY,
    symptom: 'difficultBreathing',
    component: <SeverityDifficultBreathing />,
    key: 'What is the severity of your difficulty breathing?',
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
        name='healthWork.indigenous'
      />
    ),
    key: 'Do you self-identify as Indigenous?',
  },
  {
    type: QuestionType.HEALTH_WORK,
    component: (
      <SymptomQuestion
        answerOptions={YES_NO_OPTIONS}
        question={{
          title: 'HWQ4',
        }}
        name='healthWork.pregnant'
      />
    ),
    key: 'Are you pregnant?',
  },
  {
    type: QuestionType.HEALTH_WORK,
    component: (
      <SymptomQuestion
        answerOptions={YES_NO_OPTIONS}
        question={{
          title: 'HWQ6',
          options: ['HWQ6-1', 'HWQ6-2'],
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
        question={{
          title: 'HWQ7',
        }}
        answerOptions={Object.keys(VaccinationStatus).map((key, val) => {
          const index = val + 1;
          return { key: `HWQ7-${index}`, value: key };
        })}
        name='healthWork.unvaccinated'
      />
    ),
    key: 'Please select your COVID-19 vaccination status',
  },
  {
    type: QuestionType.HEALTH_WORK,
    component: (
      <SymptomQuestion
        answerOptions={Object.entries(AgeRanges).map((key, val) => {
          const index = val + 1;
          return { key: `HWQ8-${index}`, value: key[1] };
        })}
        question={{
          title: 'HWQ8',
        }}
        name='healthWork.age'
      />
    ),
    key: 'What is your age?',
  },
];

// return the final step of the survey, dependent on prior questions
export const LastStep = (isMultiple: boolean): Step => {
  const questionTitle = isMultiple ? 'HWQ9-M' : 'HWQ9-S';
  return {
    type: QuestionType.HEALTH_WORK,
    component: (
      <SymptomQuestion
        answerOptions={YES_NO_OPTIONS}
        question={{
          title: questionTitle,
          description: 'HWQ9-desc',
        }}
        name='healthWork.chronicConditions'
      />
    ),
    key: 'Do you have chronic conditions?',
  };
};

export const numberOfQuestions = QuestionSteps.length + 1;
