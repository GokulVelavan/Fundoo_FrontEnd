import { Component, Input, OnInit } from '@angular/core';
import { UpdateComponentComponent } from '../update-component/update-component.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  @Input() Notes:any;
  title:any;
  message:any;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openDialog(dataObject:any) {
    const dialogRef=this.dialog.open(UpdateComponentComponent, {
      data:dataObject
    });
    dialogRef.afterClosed().subscribe(result => {
      this.title = result;
      this.message = result;
    });
  }
  colorMessageReceived(e:any){
    console.log(e);
  }
}
