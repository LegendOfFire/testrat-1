
import { Cell } from './cell';
import { Board } from './board';

export class Node {
  enbId : string;
  oamIp : string;
  cells : Cell[];
  boards : Board[];
}
