
import { Cell } from './cell';
import { Board } from './board';
import { Alarm } from './alarm';

export class Node {
  enbId : string;
  oamIp : string;
  cellVisible : boolean = false;
  cell : Cell[] = [];
  boardVisible : boolean = false;
  board : Board[] = [];
  alarmVisible : boolean = false;
  alarm : Alarm[] = [];
  datetime : string;

  match(re) : boolean {
    return re.test(this.enbId) ||
           re.test(this.oamIp) ||
           this.matchCells(re) ||
           this.matchBoards(re) ||
           this.matchAlarms(re);
  }

  matchCells(re) : boolean {
    for (var c in this.cell) {
      if (this.cell[c].match(re))
        return true;
    }
    return false;
  }

  matchBoards(re) : boolean {
    for (var c in this.board) {
      if (this.board[c].match(re))
        return true;
    }
    return false;
  }

  matchAlarms(re) : boolean {
    for (var c in this.alarm) {
      if (this.alarm[c].match(re))
        return true;
    }
    return false;
  }
}
