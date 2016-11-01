
import { Component, OnInit, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { FaDirective } from 'angular2-fontawesome/directives';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';

import { Node } from './node';
import { Alarm } from './alarm';
import { Cell } from './cell';
import { Board } from './board';
import { NodeService } from './node.service';
import { CreateNodeComponent } from './create-node.component';

@Component({
  moduleId    : module.id,
  selector    : 'webrat-dashboard',
  templateUrl : 'dashboard.component.html',
  styleUrls   : [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  nodes : Node[];
  query : string;
  createEnbId : string;
  createOamIp : string;
  createDisplay : string = "none";

  constructor(private nodeService : NodeService,
              private overlay: Overlay,
              private vcRef : ViewContainerRef,
              public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  }

  ngOnInit() : void {
    this.nodeService.getNodes()
      .then(nodes => this.nodes = nodes);
    this.query = "";
    this.createEnbId = "";
    this.createOamIp = "";
    this.createDisplay = "none";
  }

  queryNodes(query : string) : Node[] {
    this.query.trim();
    if (this.query === "")
      return this.nodes;

    var re = new RegExp(this.query, 'i');
    return this.nodes.filter(function (n) {
      return n.match(re);
    });
  }

  onSelect(node : Node) : void {
    console.log('Selected:', node);
  }

  confirmCreate() : void {
    var x = {
      enbId : '',
      oamIp : ''
    };
    this.modal.open(CreateNodeComponent, overlayConfigFactory(x, BSModalContext))
      .then((rp) => {
        return rp.result.then((r) => {
          this.create(r.enbId, r.oamIp);
        }, () => {
        });
      });
  }

  create(enbId : string, oamIp: string) : void {
    console.log("create", enbId, oamIp);
    this.nodeService.create(enbId, oamIp)
      .then(node => {
        console.log("created", node);
        this.nodes.push(node);
      });
  }

  confirmRemove(enbId : string) : void {
    console.log("confirming remove", enbId);
    this.modal.confirm()
      .size('lg')
      .isBlocking(true)
      .showClose(true)
      .keyboard(27)
      .okBtn('Yes')
      .cancelBtn('No')
      .title('Confirm')
      .body(`
            <h3>Are your sure to delete node ` + enbId + ` ?</h3>
            `)
      .open()
      .then((rp) => {
        return rp.result.then((r) => {
          console.log('confirmed');
          this.remove(enbId);
        }, () => {
          console.log('canceled');
        });
      });
  }

  remove(enbId : string) : void {
    console.log("remove", enbId);
    this.nodeService.delete(enbId)
      .then(() => {
        console.log("deleted", enbId);
        this.nodes = this.nodes.filter(n => n.enbId != enbId);
      });
  }

  toggleCreate() : void {
    console.log("toggleCreate", this.createDisplay);
    if (this.createDisplay === "none")
      this.createDisplay = "block";
    else
      this.createDisplay = "none";
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

  cellIconName(cell : Cell) : string {
    if (cell.admState === 'LOCKED')
      return 'lock';
    else if (cell.admState === 'UNLOCKED')
      return 'unlock';
    else
      return 'question';
  }

  cellIconColor(cell : Cell) : string {
    if (cell.opState === 'ENABLED')
      return '#00ff00';
    else if (cell.opState === 'DISABLED')
      return '#c00000';
    else
      return '#808080';
  }

  boardIconName(board : Board) : string {
    if (board.boardType.indexOf('RU') >= 0)
      return 'podcast';
    else
      return 'server';
  }

  boardIconColor(board : Board) : string {
    if (board.faultLED === 'ON')
      return '#c00000';
    else if (board.operLED === 'ON')
      return '#00c000';
    else
      return '#404040';
  }

  showCellDetails(node : Node) : void {
    console.log('showCellDetails', node);

    var template = '';
    template += '<div>';
    template += '<table class="table">';
    template += '<tr><th>ID</th><th>OP state</th><th>ADM state</th></tr>';
    for (var i in node.cell) {
      template += '<tr>';
      template += ('<td>' + node.cell[i].cellId   + '</td>');
      template += ('<td>' + node.cell[i].opState  + '</td>');
      template += ('<td>' + node.cell[i].admState + '</td>');
      template += '</tr>';
    }
    template += '</table>'
    template += '</div>';

    this.modal.alert()
      .size('lg')
      .isBlocking(true)
      .showClose(true)
      .keyboard(27)
      .title('Cells in eNodeB ' + node.enbId)
      .body(template)
      .open();
  }

  showAlarmDetails(node : Node) : void {
    console.log('showAlarmDetails', node);

    var template = '';
    template += '<div>';
    template += '<table class="table">';
    template += '<tr><th>Severity</th><th>Problem</th><th>Description</th></tr>';
    for (var i in node.alarm) {
      template += '<tr>';
      template += ('<td>' + node.alarm[i].severity   + '</td>');
      template += ('<td>' + node.alarm[i].problem  + '</td>');
      template += ('<td>' + node.alarm[i].description + '</td>');
      template += '</tr>';
    }
    template += '</table>'
    template += '</div>';

    this.modal.alert()
      .size('lg')
      .isBlocking(true)
      .showClose(true)
      .keyboard(27)
      .title('Alarms in eNodeB ' + node.enbId)
      .body(template)
      .open();
  }

  showBoardDetails(node : Node) : void {
    console.log('showBoardDetails', node);

    var template = '';
    template += '<div>';
    template += '<table class="table">';
    template += '<tr><th>Type</th><th>OPER LED</th><th>FAULT LED</th><th>MAINT LED</th></tr>';
    for (var i in node.board) {
      template += '<tr>';
      template += ('<td>' + node.board[i].boardType   + '</td>');
      template += ('<td>' + node.board[i].operLED  + '</td>');
      template += ('<td>' + node.board[i].faultLED + '</td>');
      template += ('<td>' + node.board[i].maintLED + '</td>');
      template += '</tr>';
    }
    template += '</table>'
    template += '</div>';

    this.modal.alert()
      .size('lg')
      .isBlocking(true)
      .showClose(true)
      .keyboard(27)
      .title('Boards in eNodeB ' + node.enbId)
      .body(template)
      .open();
  }
}
