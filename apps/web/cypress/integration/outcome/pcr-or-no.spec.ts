/// <reference types="cypress" />
/// <reference path="../../support/index.ts"/>

describe('Recommendations', () => {
  let questions: Record<string, any>;
  const answerNoForHealthWorkQuestions = () => {
    cy.contains(questions.hwq1.question).no().continue();
    cy.contains(questions.hwq2.question).no().continue();
    cy.contains(questions.hwq3.question).no().continue();
  };
  beforeEach(() => {
    cy.home();
    cy.startAssessment();
    cy.fixture('questions').then((data: Record<string, any>) => {
      questions = data;
    });
    cy.contains(questions.q1.question).no().continue();
    cy.contains(questions.q2.question).no().continue();
    cy.contains(questions.q3.question).selectSymptom('fever').continue();
  });

  // Case 1 PCR
  it('shows symptomatic & no test recommendation with secondary symptoms', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.hwq7s.question).yes().continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 2 Non PCR
  it('shows symptomatic & no test recommendation with secondary symptoms', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.hwq7s.question).no().continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 3
  it('shows symptomatic & no test recommendation with secondary symptoms', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.hwq6.question).selectRadio('FiftyToSixtyNine').continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 3
  it('shows symptomatic & no test recommendation with secondary symptoms', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 4
  it('shows symptomatic & no test recommendation with secondary symptoms', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial1Dose').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 5
  it('shows symptomatic & no test recommendation with secondary symptoms', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.hwq7s.question).no().continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // // Case 6
  // it('shows symptomatic & no test recommendation with secondary symptoms', () => {
  //   cy.contains(questions.hwq4.question).no().continue();
  //   cy.contains(questions.hwq5.question).selectRadio('None').continue();
  //   cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
  //   cy.contains(questions.hwq7s.question).no().continue();
  //   cy.contains(questions.recommendation.symptomaticNeedTest.title);
  // });
  // // Case 7
  // it('shows symptomatic & no test recommendation with secondary symptoms', () => {
  //   cy.contains(questions.hwq4.question).no().continue();
  //   cy.contains(questions.hwq5.question).selectRadio('Partial1Dose').continue();
  //   cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
  //   cy.contains(questions.hwq7s.question).no().continue();
  //   cy.contains(questions.recommendation.symptomaticNeedTest.title);
  // });

  // // Case 8
  // it('shows symptomatic & no test recommendation with secondary symptoms', () => {
  //   cy.contains(questions.hwq4.question).no().continue();
  //   cy.contains(questions.hwq5.question).selectRadio('None').continue();
  //   cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
  //   cy.contains(questions.hwq7s.question).no().continue();
  //   cy.contains(questions.recommendation.symptomaticNeedTest.title);
  // });

  // // Case 9
  // it('shows symptomatic & no test recommendation with secondary symptoms', () => {
  //   cy.contains(questions.hwq4.question).no().continue();
  //   cy.contains(questions.hwq5.question).selectRadio('None').continue();
  //   cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
  //   cy.contains(questions.hwq7s.question).no().continue();
  //   cy.contains(questions.recommendation.symptomaticNeedTest.title);
  // });
  // // Case 10
  // it('shows symptomatic & no test recommendation with secondary symptoms', () => {
  //   cy.contains(questions.hwq4.question).no().continue();
  //   cy.contains(questions.hwq5.question).selectRadio('Partial1Dose').continue();
  //   cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
  //   cy.contains(questions.hwq7s.question).no().continue();
  //   cy.contains(questions.recommendation.symptomaticNeedTest.title);
  // });

  // // Case 11
  // it('shows symptomatic & no test recommendation with secondary symptoms', () => {
  //   cy.contains(questions.hwq4.question).no().continue();
  //   cy.contains(questions.hwq5.question).selectRadio('None').continue();
  //   cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
  //   cy.contains(questions.hwq7s.question).no().continue();
  //   cy.contains(questions.recommendation.symptomaticNeedTest.title);
  // });

  // // Case 12
  // it('shows symptomatic & no test recommendation with secondary symptoms', () => {
  //   cy.contains(questions.hwq4.question).no().continue();
  //   cy.contains(questions.hwq5.question).selectRadio('None').continue();
  //   cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
  //   cy.contains(questions.hwq7s.question).no().continue();
  //   cy.contains(questions.recommendation.symptomaticNeedTest.title);
  // });
  // // Case 13
  // it('shows symptomatic & no test recommendation with secondary symptoms', () => {
  //   cy.contains(questions.hwq4.question).no().continue();
  //   cy.contains(questions.hwq5.question).selectRadio('Partial1Dose').continue();
  //   cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
  //   cy.contains(questions.hwq7s.question).no().continue();
  //   cy.contains(questions.recommendation.symptomaticNeedTest.title);
  // });

  // // Case 14
  // it('shows symptomatic & no test recommendation with secondary symptoms', () => {
  //   cy.contains(questions.hwq4.question).no().continue();
  //   cy.contains(questions.hwq5.question).selectRadio('None').continue();
  //   cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
  //   cy.contains(questions.hwq7s.question).no().continue();
  //   cy.contains(questions.recommendation.symptomaticNeedTest.title);
  // });

  // // Case 15
  // it('shows symptomatic & no test recommendation with secondary symptoms', () => {
  //   cy.contains(questions.hwq4.question).no().continue();
  //   cy.contains(questions.hwq5.question).selectRadio('None').continue();
  //   cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
  //   cy.contains(questions.hwq7s.question).no().continue();
  //   cy.contains(questions.recommendation.symptomaticNeedTest.title);
  // });
  // // Case 16
  // it('shows symptomatic & no test recommendation with secondary symptoms', () => {
  //   cy.contains(questions.hwq4.question).no().continue();
  //   cy.contains(questions.hwq5.question).selectRadio('Partial1Dose').continue();
  //   cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
  //   cy.contains(questions.hwq7s.question).no().continue();
  //   cy.contains(questions.recommendation.symptomaticNeedTest.title);
  // });

  // // Case 17
  // it('shows symptomatic & no test recommendation with secondary symptoms', () => {
  //   cy.contains(questions.hwq4.question).no().continue();
  //   cy.contains(questions.hwq5.question).selectRadio('None').continue();
  //   cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
  //   cy.contains(questions.hwq7s.question).no().continue();
  //   cy.contains(questions.recommendation.symptomaticNeedTest.title);
  // });

  // // Case 18
  // it('shows symptomatic & no test recommendation with secondary symptoms', () => {
  //   cy.contains(questions.hwq4.question).no().continue();
  //   cy.contains(questions.hwq5.question).selectRadio('None').continue();
  //   cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
  //   cy.contains(questions.hwq7s.question).no().continue();
  //   cy.contains(questions.recommendation.symptomaticNeedTest.title);
  // });
  // // Case 19
  // it('shows symptomatic & no test recommendation with secondary symptoms', () => {
  //   cy.contains(questions.hwq4.question).no().continue();
  //   cy.contains(questions.hwq5.question).selectRadio('Partial1Dose').continue();
  //   cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
  //   cy.contains(questions.hwq7s.question).no().continue();
  //   cy.contains(questions.recommendation.symptomaticNeedTest.title);
  // });
});
