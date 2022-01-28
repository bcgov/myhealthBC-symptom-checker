import * as yup from 'yup';

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
  isExperienced?: boolean;
  severity?: Severity;
}

export interface SymptomCheckerForm {
  emergentFactors: string;
  complicatingFactors: string;
  symptoms: Symptoms;
  test?: Partial<TestResult>;
}

export const initialValues: SymptomCheckerForm = {
  complicatingFactors: '',
  emergentFactors: '',
  symptoms: {
    fever: { isExperienced: false },
    cough: { isExperienced: false },
    shortnessOfBreath: { isExperienced: false },
    soreThroat: { isExperienced: false },
    lossOfSmellTaste: { isExperienced: false },
    runnyNose: { isExperienced: false },
    sneezing: { isExperienced: false },
    diarrhea: { isExperienced: false },
    lossOfAppetite: { isExperienced: false },
    nauseaVomitting: { isExperienced: false },
    bodyMuscleAches: { isExperienced: false },
    none: { isExperienced: false },
  },
  test: { tested: undefined, testDate: undefined, result: undefined },
};

const yesOrNoValidator = yup.string().oneOf(['yes', 'no']).required('This is a required field');
// export const severityValidator = yup.object().test('severity required', (value, context) => {
//   return Object.values(value.symptoms).filter(s => {
//     const detail = s as SymptomDetails;
//     return !detail.isExperienced || detail.severity;
//   });
// });

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
