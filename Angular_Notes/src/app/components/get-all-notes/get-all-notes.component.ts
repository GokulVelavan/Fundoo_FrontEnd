import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/userservice/user.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  token:any;
  notes:any;


  constructor(private activateRoute:ActivatedRoute,private userService:UserService) { }

  ngOnInit(): void {
    this.token= this.activateRoute.snapshot.paramMap.get('token'); // allParams is an object
      this.userService.getNotes(this.token).subscribe(data=>{
        console.log(data)
        this.notes=data;
       
      })
  }

}
