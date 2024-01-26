import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.scss']
})
export class ParentComponentComponent implements OnInit {
  Data:any=[{
    name:'Dinesh',
    branch:'MCA'
  },
  {
    name:'Rahul',
    branch:'M.tech'
  }]
  constructor() { }

  ngOnInit(): void {
  }

  onAdded(data:any){
    this.Data.push({
      name:data.name,
      branch:data.branch
    })
  }

}
