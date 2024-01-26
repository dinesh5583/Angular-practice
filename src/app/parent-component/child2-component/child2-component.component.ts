import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child2-component',
  templateUrl: './child2-component.component.html',
  styleUrls: ['./child2-component.component.scss']
})
export class Child2ComponentComponent implements OnInit {
  @Output('aliasCreated') newCreadted=new EventEmitter<any>();
  name=''
  branch=''
  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    this.newCreadted.emit({name:this.name,branch:this.branch})
  }
}
