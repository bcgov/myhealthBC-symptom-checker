import { Recommendation, Step } from 'src/types';

export function goBack(step: Step, index: number) {
  sendActionEvent(index, step.key || '', actions.GO_BACK, []);
}

export function goForward(step: Step, index: number) {
  sendActionEvent(index, step.key || '', actions.CONTINUE, []);
}

export function submitSymptomChoices(index: number, name: string, symptoms: string[]) {
  const formattedSymptoms = symptoms.map(symptom => {
    if (FormattedSymptoms[symptom]) {
      return FormattedSymptoms[symptom];
    }
    return symptom;
  });
  sendActionEvent(index, name, actions.CONTINUE, formattedSymptoms);
}

export function sendActionEvent(
  stage: number,
  name: string,
  action: string,
  symptom_list: string[],
) {
  //eslint-disable-next-line
  if ((window as any).snowplow) {
    //eslint-disable-next-line
    (window as any)?.snowplow('trackSelfDescribingEvent', {
      schema: 'iglu:ca.bc.gov.gateway/covid19_self_assessment_action/jsonschema/1-0-0',
      data: {
        stage_id: stage,
        stage_name: name,
        action: action,
        symptom_list: symptom_list,
      },
    });
  }
}

export function submitRecommendation(recommendation: Recommendation) {
  //eslint-disable-next-line
  if ((window as any).snowplow) {
    //eslint-disable-next-line
    (window as any).snowplow('trackSelfDescribingEvent', {
      schema: 'iglu:ca.bc.gov.gateway/recommendation/jsonschema/1-0-0',
      data: {
        recommendation_message: recommendation,
      },
    });
  }
}

const actions = {
  GO_BACK: 'Go Back',
  CONTINUE: 'Continue',
  SUBMIT: 'Submit',
};

const FormattedSymptoms = {
  cough: 'Cough',
  difficultBreathing: 'Difficult Breathing',
  soreThroat: 'Sore Throat',
  headache: 'Headache',
  diarrhea: 'Diarrhea',
  nauseaVomiting: 'Nausea Vomiting',
  bodyAches: 'Body Aches',
  fever: 'Fever',
  lossOfSmellTaste: 'Loss of Taste or Smell',
  fatigue: 'Fatigue',
  runnyNose: 'Runny nose',
  sneezing: 'Sneezing',
  lossOfAppetite: 'Loss of Appetite',
};
