
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

  match(query : string) : boolean {
    return true;
  }

}
