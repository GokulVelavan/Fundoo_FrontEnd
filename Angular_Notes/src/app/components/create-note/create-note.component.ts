import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  @Output() RefreshEvent = new EventEmitter<string>();
  notes:any;
  noteForm:FormGroup;
  token:any;
  card: boolean = false;

  constructor(private activateRoute:ActivatedRoute,private formBuilder: FormBuilder,private userService:UserService) { }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      Title: ['', Validators.required],
      Message: ['', Validators.required],
  });
  }

  cardSwap() {
    console.log(this.card);
    return this.card === true ? (this.card = false) : (this.card = true);
  }
  sendNotes(){
    if(this.noteForm.valid){
var reqData={
  title: this.noteForm.value.Title,
  message: this.noteForm.value.Message,
  }
  console.log(reqData);
  this.userService.sendNotes(reqData,localStorage.getItem("token")).subscribe((result:any)=>{
    if(result.success==true)
    {
      this.RefreshEvent.emit(result);
      console.log(result);
    }
    
  })
  }else{
  console.log(this.noteForm.value)
  }
  }

}
