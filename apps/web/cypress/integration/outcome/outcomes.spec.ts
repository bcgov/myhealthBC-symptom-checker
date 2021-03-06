/// <reference types="cypress" />
/// <reference path="../../support/index.ts"/>

describe('Recommendations', () => {
  let questions: Record<string, any>;

  beforeEach(() => {
    cy.home();
    cy.startAssessment();
    cy.fixture('questions').then((data: Record<string, any>) => {
      questions = data;
    });
  });

  const answerNoForHealthWorkQuestions = () => {
    cy.contains(questions.hwq1.question).no().continue();
    cy.contains(questions.hwq2.question).no().continue();
    cy.contains(questions.hwq3.question).no().continue();
    cy.contains(questions.hwq4.question).no().continue();
  };

  it('shows asymptomatic recommendation for no test results', () => {
    cy.contains(questions.q1.question).no().continue();
    cy.contains(questions.q2.question).no().continue();
    cy.contains(questions.q3.question).selectSymptom('none').continue();
    cy.contains(questions.recommendation.asymptomatic.title);
  });

  // keeping this test here if they put the COVID test question back
  // but skipping it because for now it's removed
  it.skip('shows asymptomatic recommendation for test result', () => {
    cy.contains(questions.q1.question).no().continue();
    cy.contains(questions.q2.question).no().continue();
    cy.contains(questions.q3.question).selectSymptom('none').continue();
    cy.contains(questions.q4.question)
      .yes()
      .setTestDate('2021-12-31{enter}')
      .selectTestResult('Positive')
      .continue();
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq5.question).selectRadio('Partial2Dose').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.recommendation.asymptomatic.title);
  });

  it('show call 911 recommendation', () => {
    cy.contains(questions.q1.question).yes().continue();
    cy.contains(questions.recommendation.call911.title);
  });

  it('show call 811 recommendation', () => {
    cy.contains(questions.q1.question).no().continue();
    cy.contains(questions.q2.question).yes().continue();
    cy.contains(questions.recommendation.call811.title);
  });
  // This test does not match current requirements
  // If any symptoms are present, the outcome will be either get a rapid test or get a PCR test
  it.skip('shows symptomatic & no test recommendation with primary symptoms', () => {
    cy.contains(questions.q1.question).no().continue();
    cy.contains(questions.q2.question).no().continue();
    cy.contains(questions.q3.question)
      .selectSymptom('cough')
      .selectSymptom('difficultBreathing')
      .selectSymptom('bodyAches')
      .selectSymptom('soreThroat')
      .selectSymptom('headache')
      .selectSymptom('diarrhea')
      .selectSymptom('nauseaVomiting')
      .continue();
    cy.contains(questions.severity.cough).get('#Mild').click().continue();
    cy.contains(questions.severity.difficultBreathing).get('#None').click().continue();
    cy.contains(questions.severity.bodyAches).get('#Moderate').click().continue();
    cy.contains(questions.severity.soreThroat).get('#Severe').click().continue();
    cy.contains(questions.severity.headache).get('#Moderate').click().continue();
    cy.contains(questions.severity.diarrhea).get('#Mild').click().continue();
    cy.contains(questions.severity.nauseaVomiting).get('#None').click().continue();
    answerNoForHealthWorkQuestions();
    cy.contains(questions.hwq5.question).selectRadio('Full').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.hwq7m.question).yes().continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  it('shows symptomatic & test recommendation', () => {
    cy.contains(questions.q1.question).no().continue();
    cy.contains(questions.q2.question).no().continue();
    cy.contains(questions.q3.question).selectSymptom('fever').selectSymptom('cough').continue();
    cy.contains(questions.severity.cough).get('#Mild').click().continue();
    cy.contains(questions.hwq1.question).no().continue();
    cy.contains(questions.hwq2.question).no().continue();
    cy.contains(questions.hwq3.question).no().continue();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  it('shows rapid test recommendation', () => {
    cy.contains(questions.q1.question).no().continue();
    cy.contains(questions.q2.question).no().continue();
    cy.contains(questions.q3.question).selectSymptom('runnyNose').continue();
    cy.contains(questions.hwq1.question).no().continue();
    cy.contains(questions.hwq2.question).no().continue();
    cy.contains(questions.hwq3.question).no().continue();
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Full').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // removed Retake button based on changes Jul 20 2022
  it.skip('routes to the landing page by retake button', () => {
    cy.contains(questions.q1.question).yes().continue();
    cy.contains('Retake the Self-Assessment').click();
    cy.contains('COVID-19 self-assessment tool');
  });
});
