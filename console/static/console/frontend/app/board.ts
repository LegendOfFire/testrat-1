
export class Board {
  serial : string;
  boardType : string;
  date : string;
  operLED : string;
  faultLED : string;
  maintLED : string;

  match(re) : boolean {
    return re.test(this.serial) ||
           re.test(this.boardType) ||
           re.test(this.date);
  }
}
