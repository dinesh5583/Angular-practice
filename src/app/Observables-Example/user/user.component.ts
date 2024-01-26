import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { userService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent2 implements OnInit {
  id:any
  constructor(private route:ActivatedRoute, private userService:userService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params:Params)=>{
      this.id=params["id"]
    })
  }
  onActivate(){
    // this.userService.activatedEmitter.emit(true)
    this.userService.activatedEmitter.next(true)

  }
}
