import * as yup from 'yup';
import { ReactNode } from 'react';
import { BaseSchema } from 'yup';

export enum Result {
  Negative = 'Negative',
  Positive = 'Positive',
  Indeterminate = 'Indeterminate',
}

export enum Recommendation {
  NONE = 'none',
  CALL_911 = 'call911',
  CALL_811 = 'call811',
  ASYMPTOMATIC_NO_TEST = 'asymptomatic_no_test',
  SYMPTOMATIC_TEST = 'symptomatic_test',
  SYMPTOMATIC_NO_TEST = 'symptomatic_no_test',
}

export enum Severity {
  None = 'None',
  Mild = 'Mild',
  Moderate = 'Moderate',
  Severe = 'Severe',
}

export const YES_NO_OPTIONS = [
  {
    key: 'Yes',
    value: 'yes',
  },
  {
    key: 'No',
    value: 'no',
  },
];

export interface Symptoms {
  fever: SymptomDetails;
  cough: SymptomDetails;
  difficultBreathing: SymptomDetails;
  soreThroat: SymptomDetails;
  lossOfSmellTaste: SymptomDetails;
  headache: SymptomDetails;
  fatigue: SymptomDetails;
  runnyNose: SymptomDetails;
  sneezing: SymptomDetails;
  diarrhea: SymptomDetails;
  lossOfAppetite: SymptomDetails;
  nauseaVomiting: SymptomDetails;
  bodyAches: SymptomDetails;
  none: SymptomDetails;
}

export interface SymptomDetails {
  checked?: boolean;
  severity?: Severity;
  required?: boolean;
}

export interface HealthWorkDetails {
  immunocompromised?: boolean;
  unvaccinated?: boolean;
  careWorker?: boolean;
  congregated?: boolean;
}

export interface SymptomCheckerForm {
  emergentFactors: string;
  complicatingFactors: string;
  symptoms: Symptoms;
  test?: Partial<TestResult>;
  healthWork: HealthWorkDetails;
}

export const initialValues: SymptomCheckerForm = {
  complicatingFactors: '',
  emergentFactors: '',
  symptoms: {
    fever: { checked: false },
    cough: { checked: false, required: true },
    difficultBreathing: { checked: false, required: true },
    soreThroat: { checked: false, required: true },
    lossOfSmellTaste: { checked: false },
    headache: { checked: false, required: true },
    fatigue: { checked: false },
    runnyNose: { checked: false },
    sneezing: { checked: false },
    diarrhea: { checked: false, required: true },
    lossOfAppetite: { checked: false },
    nauseaVomiting: { checked: false, required: true },
    bodyAches: { checked: false, required: true },
    none: { checked: false },
  },
  test: { tested: undefined, testDate: undefined, result: undefined },
  healthWork: {},
};

export const validationSchema = {
  symptoms: yup.object().shape({
    symptoms: yup.object().test('required', (value, context) => {
      const isSet = Object.values(value).some((s: SymptomDetails) => s.checked);
      if (isSet) return true;
      throw new yup.ValidationError('Required', value, context.path);
    }),
  }),
  test: yup.object().shape({
    test: yup.object().shape({
      tested: yup.string().oneOf(['yes', 'no']),
      testDate: yup
        .date()
        .when('tested', { is: value => value === 'yes', then: s => s.required('Required') }),
      result: yup
        .string()
        .when('tested', { is: value => value === 'yes', then: s => s.required('Required') }),
    }),
  }),
};

export class TestResult {
  tested!: string;
  testDate!: Date;
  result!: Result;
}

export enum QuestionType {
  EMERGENT = 'emergent',
  COMPLICATED = 'complicated',
  SYMPTOMS = 'symptoms',
  SEVERITY = 'severity',
  RESULT = 'result',
  HEALTH_WORK = 'health/work',
}

export interface Step {
  type: QuestionType;
  component: ReactNode;
  validationSchema?: BaseSchema;
  symptom?: string;
}

export interface ResultState {
  recommendation: Recommendation;
}
