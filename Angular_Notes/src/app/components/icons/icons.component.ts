import { Component, OnInit, ViewChild,Input,EventEmitter,Output } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { DataServiceService } from 'src/app/services/notesservice/dataService/data-service.service';
import { NotesserviceService } from 'src/app/services/notesservice/notesservice.service';
import { UserService } from 'src/app/services/userservice/user.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  @ViewChild('menuTrigger') menuTrigger: MatMenuTrigger;
  @Input() cardData:any
  @Output() changeColorOfNote = new EventEmitter<any>();
  
  constructor(public dialog: MatDialog,private userService:UserService,private noteservice:NotesserviceService,private dataservice:DataServiceService) {}

  colorFirstRow = [
    {
      colorName: 'White', bgColorValue: '#fff'
    },
    {
      colorName: 'Teal', bgColorValue: '#CDF0EA'
    },
    {
      colorName: 'Lime', bgColorValue: '#B3E283'
    },
    {
      colorName: 'Pink', bgColorValue: '#FFEBCC'
    },
    {
      colorName: 'Yellow', bgColorValue: '#FFFEA9'
    },
  ];
  colorSecondRow = [
    {
      colorName: 'Red', bgColorValue: '#F28B82'
    },
    {
      colorName: 'Orange', bgColorValue: '#FBBC05'
    },
    {
      colorName: 'Dark Blue', bgColorValue: '#AECBFA'
    },
    {
      colorName: 'Pink', bgColorValue: '#FDCFE8'
    },
    {
      colorName: 'Gray', bgColorValue: '#E8EAED'
    }
  ];
  ngOnInit(): void {
  }
  TrahNotes(id:any){
    this.userService.TrahNotes(localStorage.getItem("token"),id).subscribe((result:any)=>{
      console.log(result);
      if(result.success=true)
      {
        this.dataservice.sendData(result);
        this.reload();

      }
    })
    }
    archiveNotes(id:any)
    {
      this.userService.archiveNotes(localStorage.getItem("token"),id).subscribe((result:any)=>{
        console.log(result);
        if(result.success=true)
        {
          this.dataservice.sendData(result);
        this.reload();

        }
      })
    }
   changeColor(noteColor:any,id:any)
   {
       let data={
         color:noteColor
       }
       this.noteservice.changecolor(data,localStorage.getItem("token"),id).subscribe((result:any)=>{
        console.log(result);
        this.changeColorOfNote.emit(noteColor)
   this.reload()

      })
   }
   deleteNote(id:any)
   {
      this.userService.DeleteSingleNote(localStorage.getItem("token"),id).subscribe((result:any)=>{
        console.log(result);
   this.reload()

      })
      
   }
   reload()
   {
    window.location.reload()

   }
}
