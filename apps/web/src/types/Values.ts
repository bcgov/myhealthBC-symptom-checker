import { Symptoms } from './Symptoms';
import { TestResult } from './TestResult';

export class Values {
  emergent!: string;
  complicated!: string;
  symptoms!: Partial<Symptoms>;
  test!: Partial<TestResult>;
}
