import { Step } from 'src/types';

export function goBack(step: Step) {
  console.log('Heading back to:', step);
}

export function goForward(step: Step) {
  console.log('Going forward to:', step);
}

export function submitForm(data: any) {
  console.log('Submitting form');
  console.log(data);
  sendAnalyticsRequest(1, 'test', 'test', ['sleepy']);
}

export function submitSymptomChoices(choices: string[]) {
  console.log('Submitting choices:', choices);
}

export function sendAnalyticsRequest(
  stage: number,
  name: string,
  action: string,
  symptom_list: string[],
) {
  console.log('Testing analytics script');

  console.log((window as any).snowplow);
  // if((window as any).snowplow){
  //   (window as any)?.snowplow('trackSelfDescribingEvent', {
  //     schema: 'iglu:ca.bc.gov.gateway/covid19_self_assessment_action/jsonschema/1-0-0',
  //     data: {
  //             stage_id:  stage,
  //             stage_name: name,
  //             action: action,
  //             symptom_list: symptom_list
  //     }
  // });
  // }
}

// export const;
