
import { Component, OnInit } from '@angular/core';
import { FaDirective } from 'angular2-fontawesome/directives';

import { Node } from './node';
import { NodeService } from './node.service';

@Component({
  moduleId    : module.id,
  selector    : 'webrat-dashboard',
  templateUrl : 'dashboard.component.html',
  styleUrls   : [ 'dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  nodes : Node[];

  constructor(private nodeService : NodeService) {}

  ngOnInit() : void {
    this.nodeService.getNodes()
      .then(nodes => this.nodes = nodes);
  }

  onSelect(node : Node) : void {
    console.log('Selected:', node);
  }
}
