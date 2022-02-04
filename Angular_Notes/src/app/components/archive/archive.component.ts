import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userservice/user.service';


@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
notes:any
  constructor(private userService:UserService) { }

  ngOnInit(): void {
  this.GetallarchiveNotes()
   
  }

  GetallarchiveNotes()
  {
    this.userService.getNotes(localStorage.getItem("token")).subscribe((data:any)=>{
      console.log(data)
      this.notes=data.data.filter((result:any)=>{
        return result.isArchive === true
    })
    this.notes.reverse();

  })
}


}
