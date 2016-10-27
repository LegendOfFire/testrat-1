
import { Component, OnInit } from '@angular/core';
import { FaDirective } from 'angular2-fontawesome/directives';

import { Node } from './node';
import { Cell } from './cell';
import { Board } from './board';
import { NodeService } from './node.service';

@Component({
  moduleId    : module.id,
  selector    : 'webrat-dashboard',
  templateUrl : 'dashboard.component.html',
  styleUrls   : [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  nodes : Node[];
  query : string;

  constructor(private nodeService : NodeService) {}

  ngOnInit() : void {
    this.nodeService.getNodes()
      .then(nodes => this.nodes = nodes);
    this.query = "";
  }

  onSelect(node : Node) : void {
    console.log('Selected:', node);
  }

  toggleCellVisible(node : Node) : void {
    node.cellVisible = !node.cellVisible;
  }

  visibleCells(node : Node) : Cell[] {
    return node.cellVisible ? node.cell : [];
  }

  toggleBoardVisible(node : Node) : void {
    node.boardVisible = !node.boardVisible;
  }

  visibleBoards(node : Node) : Board[] {
    return node.boardVisible ? node.board : [];
  }

  toggleAlarmVisible(node : Node) : void {
    node.alarmVisible = !node.alarmVisible;
  }

  visibleAlarms(node : Node) : Alarm[] {
    return node.alarmVisible ? node.alarm : [];
  }
}
