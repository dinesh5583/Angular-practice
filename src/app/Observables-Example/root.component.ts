import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { userService } from './user.service';

@Component({
  selector: 'app-roots',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit,OnDestroy {
  userActivated=false;
  private activatedSub!:Subscription
  constructor(private userService:userService) { }
  ngOnDestroy(): void {
    this.activatedSub.unsubscribe()
  }

  ngOnInit(): void {
    this.activatedSub=this.userService.activatedEmitter.subscribe((activate:any)=>{
      this.userActivated=activate
    })
  }

}
