import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/userservice/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {
 

  private _mobileQueryListener: () => void;
  mobileQuery: MediaQueryList;
   noteForm:FormGroup;
   token:any;

  constructor(changeDetectorRef: ChangeDetectorRef,private activateRoute:ActivatedRoute, media: MediaMatcher,private formBuilder: FormBuilder,private userService:UserService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this.noteForm = this.formBuilder.group({
      Title: ['', Validators.required],
      Message: ['', Validators.required],
      Pic: ['', Validators.required],
      
      // Remainder: ['', Validators.required],
      // Color: ['', Validators.required],
      // Image: ['', Validators.required],
      // IsArchive: ['', Validators.required],
      // IsPin: ['', Validators.required],
      // IsTrash: ['', Validators.required],
     
  });
  this.token= this.activateRoute.snapshot.paramMap.get('token'); // allParams is an object
    
  }
 
  value = ' ';
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);



}
