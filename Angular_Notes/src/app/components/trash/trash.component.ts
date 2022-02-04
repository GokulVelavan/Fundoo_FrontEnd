import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/services/notesservice/dataService/data-service.service';
import { UserService } from 'src/app/services/userservice/user.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
notes:any
  constructor(private userService:UserService,private dataservice:DataServiceService) { }
  ngOnInit(): void {
  this.GetallTrashNotes();
  this.dataservice.receivedData.subscribe(()=>{
    this.GetallTrashNotes()
  })
  }
     

  GetallTrashNotes()
  {
    this.userService.getNotes(localStorage.getItem("token")).subscribe((data:any)=>{
      console.log(data)
      this.notes=data.data.filter((result:any)=>{
        return result.isTrash === true
    })
    this.notes.reverse();

  })
}
}
