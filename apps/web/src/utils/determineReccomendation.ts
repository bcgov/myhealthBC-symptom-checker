import { AgeRanges, SymptomCheckerForm, VaccinationStatus } from 'src/types';

export enum Outcome {
  CONTINUE_PLUS_TWO = 'continue_plus_two',
  CONTINUE = 'continue',
  RAPID_TEST = 'rapid',
  PCR_TEST = 'pcr',
}

export function determineRecomendation(values: SymptomCheckerForm): Outcome {
  if (values?.indigenous === 'yes') {
    return indigenousYesRecommendation(values);
  } else if (values?.indigenous === 'no') {
    return indigenousNoRecommendation(values);
  }
  return Outcome.CONTINUE;
}
function indigenousYesRecommendation(values: SymptomCheckerForm): Outcome {
  switch (values?.healthWork?.unvaccinated) {
    case VaccinationStatus.Full:
      return indigenousYesFullVax(values);
    case VaccinationStatus.Partial1Dose:
      return indigenousYesPartialVax(values);
    case VaccinationStatus.Partial2Dose:
      return indigenousYesPartialVax(values);
    case VaccinationStatus.None:
      return Outcome.PCR_TEST;
  }
  return Outcome.CONTINUE;
}

function indigenousYesPartialVax(values: SymptomCheckerForm): Outcome {
  switch (values?.healthWork?.age) {
    case AgeRanges.UnderFifty:
      return Outcome.RAPID_TEST;
    case AgeRanges.FiftyToSixtyNine:
      return Outcome.PCR_TEST;
    case AgeRanges.OverSeventy:
      return Outcome.PCR_TEST;
  }
  return Outcome.CONTINUE;
}

function indigenousYesFullVax(values: SymptomCheckerForm): Outcome {
  switch (values?.healthWork?.age) {
    case AgeRanges.UnderFifty:
      return Outcome.RAPID_TEST;
    case AgeRanges.FiftyToSixtyNine:
      return Outcome.RAPID_TEST;
    case AgeRanges.OverSeventy:
      return Outcome.PCR_TEST;
  }
  return Outcome.CONTINUE;
}

function indigenousNoRecommendation(values: SymptomCheckerForm): Outcome {
  switch (values?.healthWork?.unvaccinated) {
    case VaccinationStatus.Full:
      return indigenousNoFullVaxAgeRecommendations(values);
    case VaccinationStatus.Partial1Dose:
      return indigenousNoPartialVaxAgeRecommendations(values);
    case VaccinationStatus.Partial2Dose:
      return indigenousNoPartialVaxAgeRecommendations(values);
    case VaccinationStatus.None:
      return indigenousNoNoVaxAgeRecommendations(values);
  }
  return Outcome.CONTINUE;
}
function indigenousNoFullVaxAgeRecommendations(values: SymptomCheckerForm) {
  switch (values.healthWork.age) {
    case AgeRanges.UnderFifty:
      return Outcome.RAPID_TEST;
    case AgeRanges.FiftyToSixtyNine:
      return Outcome.RAPID_TEST;
    case AgeRanges.OverSeventy:
      return multiConditionQuestion(values);
    default:
      return Outcome.CONTINUE;
  }
}

function indigenousNoPartialVaxAgeRecommendations(values: SymptomCheckerForm): Outcome {
  switch (values.healthWork.age) {
    case AgeRanges.UnderFifty:
      return Outcome.RAPID_TEST;
    case AgeRanges.FiftyToSixtyNine:
      return multiConditionQuestion(values);
    case AgeRanges.OverSeventy:
      if (!values?.healthWork?.chronicConditions) {
        return Outcome.CONTINUE_PLUS_TWO;
      } else {
        return multiConditionQuestion(values);
      }
    default:
      return Outcome.CONTINUE;
  }
}

function indigenousNoNoVaxAgeRecommendations(values: SymptomCheckerForm): Outcome {
  switch (values.healthWork.age) {
    case AgeRanges.UnderFifty:
      return multiConditionQuestion(values);
    case AgeRanges.FiftyToSixtyNine:
      return Outcome.PCR_TEST;
    case AgeRanges.OverSeventy:
      return Outcome.PCR_TEST;
    default:
      return Outcome.CONTINUE;
  }
}

function multiConditionQuestion(values: SymptomCheckerForm): Outcome {
  if (values?.healthWork?.chronicConditions === 'yes') {
    return Outcome.PCR_TEST;
  } else if (values?.healthWork?.chronicConditions === 'no') {
    return Outcome.RAPID_TEST;
  }
  return Outcome.CONTINUE;
}
