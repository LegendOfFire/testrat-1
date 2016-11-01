
export class Cell {
  cellId : string;
  opState : string;
  admState : string;

  match(re) : boolean {
    return re.test(this.cellId) ||
           re.test(this.opState) ||
           re.test(this.admState);
  }
}
