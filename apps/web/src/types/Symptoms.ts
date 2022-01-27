import { Severity } from './Severity';

export class Symptoms {
  fever: Severity | boolean = false;
  cough: Severity | boolean = false;
  breathing: Severity | boolean = false;
  throat: Severity | boolean = false;
  smell: Severity | boolean = false;
  runnyNose: Severity | boolean = false;
  sneezing: Severity | boolean = false;
  diarrhea: Severity | boolean = false;
  appetite: Severity | boolean = false;
  nausea: Severity | boolean = false;
  aches: Severity | boolean = false;
  none: Severity | boolean = false;
}
