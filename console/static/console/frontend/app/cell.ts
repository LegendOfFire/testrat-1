
export class Cell {
  id : string;
  opState : string;
  admState : string;

  match(re) : boolean {
    return re.test(this.id) ||
           re.test(this.opState) ||
           re.test(this.admState);
  }
}
