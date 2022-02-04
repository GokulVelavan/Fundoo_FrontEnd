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
   isMenuOpen=true;
   contentMargin=240;
  constructor(private route:Router,changeDetectorRef: ChangeDetectorRef,private activateRoute:ActivatedRoute, media: MediaMatcher,private formBuilder: FormBuilder,private userService:UserService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
   
  }
 
  value = ' ';
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  onToolbarMenuToggle(){
    this.isMenuOpen = !this.isMenuOpen;
    if(!this.isMenuOpen)
    {
      this.contentMargin=50;
    }
    else{
      this.contentMargin=400;
    }
  }
  Notes(){
    this.route.navigateByUrl('dashboard/notes');
  }

  Trash(){
    this.route.navigateByUrl('dashboard/trash');
  }
  Archive(){
    this.route.navigateByUrl('dashboard/archive')
  }

}
