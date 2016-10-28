
export class Alarm {
  severity : string;
  problem : string;
  description : string;

  match(re) : boolean {
    return re.test(this.severity) ||
           re.test(this.problem) ||
           re.test(this.description);
  }
}
