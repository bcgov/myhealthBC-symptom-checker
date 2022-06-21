import { SymptomCheckerForm, VaccinationStatus } from 'src/types';

export enum Outcome {
  CONTINUE_PLUS_TWO = 'continue_plus_two',
  CONTINUE = 'continue',
  RAPID_TEST = 'rapid',
  PCR_TEST = 'pcr',
}

export function determineRecomendation(values: SymptomCheckerForm): Outcome {
  if (values?.healthWork?.indigenous === 'yes') {
  }
  return Outcome.CONTINUE;
}
function indigenousYesRecommendation(values: SymptomCheckerForm): Outcome {
  switch (values?.healthWork?.unvaccinated) {
    case VaccinationStatus.Full:

    case VaccinationStatus.Partial1Dose:
    case VaccinationStatus.Partial2Dose:

    case VaccinationStatus.None:
      return Outcome.PCR_TEST;
  }
  return Outcome.CONTINUE;
}

function indigenousNoRecommendation(values: SymptomCheckerForm): Outcome {
  switch (values?.healthWork?.unvaccinated) {
    case VaccinationStatus.Full:

    case VaccinationStatus.Partial1Dose:
    case VaccinationStatus.Partial2Dose:

    case VaccinationStatus.None:
      return Outcome.PCR_TEST;
  }
  return Outcome.CONTINUE;
}

function multiConditionQuestion(values: SymptomCheckerForm, OnePlusMatters: boolean): Outcome {
  return Outcome.CONTINUE;
}
