
import { Component } from '@angular/core';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class CreateNodeModalContext extends BSModalContext {
  public enbId : string;
  public oamIp : string;
}

@Component({
  selector : 'modal-content',
  template : `
  <div style="padding:10px">
    <h2>Create node</h2>
    <div style="padding:10px">
      <input [(ngModel)]="context.enbId" type="text" class="form-control" placeholder="eNodeB ID">
      <input [(ngModel)]="context.oamIp" type="text" class="form-control" placeholder="OAM IP">
    </div>
    <button class="btn" (click)="create()">Create</button>
    <button class="btn" (click)="cancel()">Cancel</button>
  </div>
  `
})
export class CreateNodeComponent implements CloseGuard, ModalComponent<CreateNodeModalContext> {
  context : CreateNodeModalContext;

  constructor(public dialog : DialogRef<CreateNodeModalContext>) {
    this.context = dialog.context;
    dialog.setCloseGuard(this);
    console.log('context.input', this.context);
  }

  beforeDismiss() : boolean {
    return false;
  }

  beforeClose() : boolean {
    return false;
  }

  create() : void {
    console.log('create');
    this.dialog.close(this.context);
  }

  cancel() : void {
    console.log('cancel');
    this.dialog.dismiss();
  }
}
