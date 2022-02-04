import { Component, OnInit ,Input} from '@angular/core';
import { UserService } from 'src/app/services/userservice/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponentComponent } from '../update-component/update-component.component';
@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  token:any;
  notes:any;


  constructor(private activateRoute:ActivatedRoute,private userService:UserService,public dialog: MatDialog) { }

  ngOnInit(): void {
     this.getallNotes();
  }
 
getallNotes()
{
  this.userService.getNotes(localStorage.getItem("token")).subscribe((data:any)=>{
    console.log(data);
    this.notes=data.data.filter((result:any)=>{
      return result.isTrash === false && result.isArchive === false  
    })
    console.log(this.notes)
    this.notes.reverse();
  })
}
RefreshDashboard(event:any)
{
this.getallNotes();
}
}
