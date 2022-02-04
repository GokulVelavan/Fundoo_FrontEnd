import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.scss']
})
export class UpdateComponentComponent implements OnInit {
title:any;
message:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,public dialogRef: MatDialogRef<UpdateComponentComponent>,private userService:UserService,) {}

  ngOnInit(): void {
    console.log("vada",this.data)
    this.title=this.data.title
    this.message=this.data.message
  }

  update()
  {
      var reqData={
        title: this.title,
        message: this.message,
        }
        this.userService.updateSingleNote(localStorage.getItem("token"),this.data.id,reqData).subscribe((result:any)=>{
          console.log(result);
          if(result.Success == true)
          {
            window.location.reload();
          }
          
        })
        this.dialogRef.close();
  }
  
}




