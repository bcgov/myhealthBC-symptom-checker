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

export const validationSchema = [
  yup.object().shape({
    emergentFactors: yup.string().oneOf(['yes', 'no']).required('This is a required field'),
  }),
  yup.object().shape({
    complicatingFactors: yup.string().oneOf(['yes', 'no']).required('This is a required field'),
  }),
];

export class TestResult {
  tested!: string;
  testDate!: Date;
  result!: Result;
}
