import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrls: ['./directive-example.component.scss']
})
export class DirectiveExampleComponent implements OnInit {
  value=1000;
  constructor() { }

  ngOnInit(): void {
  }

}
