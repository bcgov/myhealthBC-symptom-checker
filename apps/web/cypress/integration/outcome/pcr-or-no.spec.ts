/// <reference types="cypress" />
/// <reference path="../../support/index.ts"/>

describe('Recommendations', () => {
  let questions: Record<string, any>;
  const answerNoForHealthWorkQuestions = () => {
    cy.contains(questions.q1.question).no().continue();
    cy.contains(questions.q2.question).no().continue();
    cy.contains(questions.q3.question).selectSymptom('fever').continue();
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
  });

  // Case 1 PCR
  it('Case 1 - PCR', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.hwq7m.question).yes().continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 2 Non PCR
  it('CASE 2 Rapid test', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.hwq7m.question).no().continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 3
  it('Case 3 PCR', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.hwq6.question).selectRadio('FiftyToSixtyNine').continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 3
  it('Case 3 PCR', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 4
  it('Case 4 Rapid test', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial1Dose').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 5
  it('Case 5', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial1Dose').continue();
    cy.contains(questions.hwq6.question).selectRadio('FiftyToSixtyNine').continue();
    cy.contains(questions.hwq7m.question).no().continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 5
  it('Case 5', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial2Dose').continue();
    cy.contains(questions.hwq6.question).selectRadio('FiftyToSixtyNine').continue();
    cy.contains(questions.hwq7m.question).no().continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 6
  it('Case 6', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial1Dose').continue();
    cy.contains(questions.hwq6.question).selectRadio('FiftyToSixtyNine').continue();
    cy.contains(questions.hwq7m.question).yes().continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 6
  it('Case 6', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial2Dose').continue();
    cy.contains(questions.hwq6.question).selectRadio('FiftyToSixtyNine').continue();
    cy.contains(questions.hwq7m.question).yes().continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 7
  it('Case 7 PCR ', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial1Dose').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.hwq7s.question).yes().continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 8
  it('Case 8 Rapid test', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial1Dose').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.hwq7s.question).no().continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 9
  it('Case 9 Rapid test', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Full').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 10
  it('Case 10 Rapid', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Full').continue();
    cy.contains(questions.hwq6.question).selectRadio('FiftyToSixtyNine').continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 11
  it('Case 11 PCR', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Full').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.hwq7m.question).yes().continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 12
  it('Case 12 Rapid', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Full').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.hwq7m.question).no().continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });
  // Case 13
  it('Case 13 PCR', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).yes().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 14
  it('Case 14 Rapid test', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).yes().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial1Dose').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 15
  it('Case 15 PCR', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).yes().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial1Dose').continue();
    cy.contains(questions.hwq6.question).selectRadio('FiftyToSixtyNine').continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });
  // Case 16
  it('Case 16 PCR', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).yes().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial1Dose').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 17
  it('Case 17 Rapid Test', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).yes().continue();
    cy.contains(questions.hwq5.question).selectRadio('Full').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 18
  it('Case 18 Rapid Test', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).yes().continue();
    cy.contains(questions.hwq5.question).selectRadio('Full').continue();
    cy.contains(questions.hwq6.question).selectRadio('FiftyToSixtyNine').continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });
  // Case 19
  it('Case 19 PCR', () => {
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq4.question).yes().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial1Dose').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });
});
