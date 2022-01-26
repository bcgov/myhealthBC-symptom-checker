import { Symptoms } from './Symptoms';

export class Values {
  severe!: string;
  breathing!: string;
  symptoms!: Partial<Symptoms>;
  tested!: string;
  testDate!: Date;
  testResult!: string;
  severityOfBreathing!: string;
}
