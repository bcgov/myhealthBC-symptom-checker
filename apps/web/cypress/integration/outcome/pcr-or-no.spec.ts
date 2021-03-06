/// <reference types="cypress" />
/// <reference path="../../support/index.ts"/>

describe('Recommendations', () => {
  let questions: Record<string, any>;

  beforeEach(() => {
    cy.home();
    cy.startAssessment();
    cy.fixture('questions').then((data: Record<string, any>) => {
      questions = data;
      answerNoForHealthWorkQuestions(questions);
    });
  });
  const answerNoForHealthWorkQuestions = (questions: any) => {
    cy.no().continue();
    cy.contains(questions.q2.question).no().continue();
    cy.contains(questions.q3.question).selectSymptom('fever').continue();
    cy.contains(questions.hwq1.question).no().continue();
    cy.contains(questions.hwq2.question).no().continue();
    cy.contains(questions.hwq3.question).no().continue();
  };
  // Case 1 PCR
  it('Case 1 - PCR > Indigenous no, no vax ,under fifty, multiple conidtions.', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.hwq7m.question).yes().continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 2 Non PCR
  it('CASE 2 Rapid test > Indigenous no, no vax under fifty, no conditions.', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.hwq7m.question).no().continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 3
  it('Case 3 PCR > Indigenous no, no vax fifty to sixty nine.', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.hwq6.question).selectRadio('FiftyToSixtyNine').continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 3
  it('Case 3 PCR > Indigenous no, no vax, seventy plus.', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 4
  it('Case 4 Rapid test > Indigenous no, partial vax, under fifty.', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 5
  it('Case 5 Rapid test > Indigenous no, partial vax, fifty to sixty nine, multiple conditions no.', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial').continue();
    cy.contains(questions.hwq6.question).selectRadio('FiftyToSixtyNine').continue();
    cy.contains(questions.hwq7m.question).no().continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 6
  it('Case 6 PCR > Indigenous no, partial vax, fifty to sixty nine, multiple coniditions yes', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial').continue();
    cy.contains(questions.hwq6.question).selectRadio('FiftyToSixtyNine').continue();
    cy.contains(questions.hwq7m.question).yes().continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 7
  it('Case 7 PCR > Indigenous no, partial vax, over seventy, multiple coniditions yes', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.hwq7s.question).yes().continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 8
  it('Case 8 Rapid Test > Indigenous no, partial vax, over seventy, one or more coniditions no', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.hwq7s.question).no().continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 8.5 - 2nd partial vaccination added
  it('Case 8.5 Rapid Test > Indigenous no, partial JJ vax, over seventy, one or more coniditions no', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('PartialJJ').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.hwq7s.question).no().continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 9
  it('Case 9 Rapid test > Indigenous no, full vax, under fifty,  multiple coniditions yes', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Full').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 10
  it('Case 10 Rapid test > Indigenous no , full vax, fifty to sixty nine', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Full').continue();
    cy.contains(questions.hwq6.question).selectRadio('FiftyToSixtyNine').continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 11
  it('Case 11 PCR > Indigenous no, full vax, over seventy, multiple conditions yes', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Full').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.hwq7m.question).yes().continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 12
  it('Case 12 Rapid > Indigenous no, full vax, over seventy, complications no', () => {
    cy.contains(questions.hwq4.question).no().continue();
    cy.contains(questions.hwq5.question).selectRadio('Full').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.hwq7m.question).no().continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });
  // Case 13
  it('Case 13 PCR > Indigenous yes, no vax', () => {
    cy.contains(questions.hwq4.question).yes().continue();
    cy.contains(questions.hwq5.question).selectRadio('None').continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 14
  it('Case 14 Rapid test > Indigenous yes, partial vax, under fifty', () => {
    cy.contains(questions.hwq4.question).yes().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 15
  it('Case 15 PCR > Indigenous yes, partial vax, fifty to sixitynine', () => {
    cy.contains(questions.hwq4.question).yes().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial').continue();
    cy.contains(questions.hwq6.question).selectRadio('FiftyToSixtyNine').continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });
  // Case 16
  it('Case 16 PCR > Indigenous yes, partial vax, over seventy', () => {
    cy.contains(questions.hwq4.question).yes().continue();
    cy.contains(questions.hwq5.question).selectRadio('Partial').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });

  // Case 17
  it('Case 17 Rapid Test > Indigenous yes, full vax , under fifty', () => {
    cy.contains(questions.hwq4.question).yes().continue();
    cy.contains(questions.hwq5.question).selectRadio('Full').continue();
    cy.contains(questions.hwq6.question).selectRadio('UnderFifty').continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });

  // Case 18
  it('Case 18 Rapid Test > Indigenous yes, full vax, fifty to sixty nine', () => {
    cy.contains(questions.hwq4.question).yes().continue();
    cy.contains(questions.hwq5.question).selectRadio('Full').continue();
    cy.contains(questions.hwq6.question).selectRadio('FiftyToSixtyNine').continue();
    cy.contains(questions.recommendation.rapidTest.title);
  });
  // Case 19
  it('Case 19 PCR > Indigenous yes, full vax, seventy plus', () => {
    cy.contains(questions.hwq4.question).yes().continue();
    cy.contains(questions.hwq5.question).selectRadio('Full').continue();
    cy.contains(questions.hwq6.question).selectRadio('OverSeventy').continue();
    cy.contains(questions.recommendation.symptomaticNeedTest.title);
  });
});
