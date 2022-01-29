import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  notes:any;
  noteForm:FormGroup;
  token:any;
  
  constructor(private activateRoute:ActivatedRoute,private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      Title: ['', Validators.required],
      Message: ['', Validators.required],
  });
  this.token= this.activateRoute.snapshot.paramMap.get('token'); // allParams is an object

   
  }
  sendNotes(){
    if(this.noteForm.valid){
var reqData={
  title: this.noteForm.value.Title,
  message: this.noteForm.value.Message,
  }
  this.userService.sendNotes(reqData,this.token).subscribe((result:any)=>{
    console.log(result);
    
  })
  }else{
  console.log(this.noteForm.value)
  }
  }

}
