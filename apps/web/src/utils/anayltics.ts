import { Recommendation, Step } from 'src/types';

export function goBack(step: Step, index: number) {
  sendActionEvent(index, step.key || '', actions.GO_BACK, []);
}

export function goForward(step: Step, index: number) {
  sendActionEvent(index, step.key || '', actions.CONTINUE, []);
}

export function submitSymptomChoices(index: number, name: string, symptoms: string[]) {
  sendActionEvent(index, name, actions.CONTINUE, symptoms);
}

export function sendActionEvent(
  stage: number,
  name: string,
  action: string,
  symptom_list: string[],
) {
  if ((window as any).snowplow) {
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
  if ((window as any).snowplow) {
    (window as any).snowplow('trackSelfDescribingEvent', {
      schema: 'iglu:ca.bc.gov.gateway/recommendation/jsonschema/1-0-0',
      data: {
        recommendation_message: recommendation,
      },
    });
  }
}

const actions = {
  GO_BACK: 'go back',
  CONTINUE: 'continue',
  SUBMIT: 'submit',
};
