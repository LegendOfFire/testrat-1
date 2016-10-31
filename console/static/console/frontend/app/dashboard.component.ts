
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
}
