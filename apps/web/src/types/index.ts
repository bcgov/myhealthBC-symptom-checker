import { SyntheticEvent } from 'react';
import * as yup from 'yup';

export type PageProps = {
  values?: Partial<SymptomCheckerForm>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange: (e: SyntheticEvent | null, key?: string, value?: any) => void;
};

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
  NA = 'N/A',
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
  shortnessOfBreath: SymptomDetails;
  soreThroat: SymptomDetails;
  lossOfSmellTaste: SymptomDetails;
  runnyNose: SymptomDetails;
  sneezing: SymptomDetails;
  diarrhea: SymptomDetails;
  lossOfAppetite: SymptomDetails;
  nauseaVomitting: SymptomDetails;
  bodyMuscleAches: SymptomDetails;
  none: SymptomDetails;
}

export interface SymptomDetails {
  isExperienced: boolean;
  severity: Severity;
}

export interface SymptomCheckerForm {
  emergentFactors: string;
  complicatingFactors: string;
  symptoms: Partial<Symptoms>;
  test?: Partial<TestResult>;
}

export const initialValues: Partial<SymptomCheckerForm> = {
  symptoms: {
    fever: { isExperienced: false, severity: Severity.NA },
    cough: { isExperienced: false, severity: Severity.NA },
    shortnessOfBreath: { isExperienced: false, severity: Severity.NA },
    soreThroat: { isExperienced: false, severity: Severity.NA },
    lossOfSmellTaste: { isExperienced: false, severity: Severity.NA },
    runnyNose: { isExperienced: false, severity: Severity.NA },
    sneezing: { isExperienced: false, severity: Severity.NA },
    diarrhea: { isExperienced: false, severity: Severity.NA },
    lossOfAppetite: { isExperienced: false, severity: Severity.NA },
    nauseaVomitting: { isExperienced: false, severity: Severity.NA },
    bodyMuscleAches: { isExperienced: false, severity: Severity.NA },
    none: { isExperienced: false, severity: Severity.NA },
  },
};

const yesOrNoValidator = yup.string().oneOf(['yes', 'no']).required('This is a required field');

export const validationSchema = [
  yup.object().shape({
    emergentFactors: yesOrNoValidator,
  }),
  yup.object().shape({
    complicatingFactors: yesOrNoValidator,
  }),
  yup.object().shape({
    symptoms: yup.object().test('required', (value, context) => {
      const isSet = Object.values(value).some((s: SymptomDetails) => s.isExperienced);
      if (isSet) return true;
      throw new yup.ValidationError('Required', value, context.path);
    }),
  }),
  yup.object().shape({
    test: yup.object().shape({
      tested: yesOrNoValidator,
      testDate: yup
        .date()
        .when('tested', { is: value => value === 'yes', then: s => s.required() }),
      result: yup
        .string()
        .when('tested', { is: value => value === 'yes', then: s => s.required() }),
    }),
  }),
];

export class TestResult {
  tested!: string;
  testDate!: Date;
  result!: Result;
}
