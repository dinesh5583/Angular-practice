import { Component, OnInit } from '@angular/core';
import { AccountsServiceService } from '../accounts-service.service';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss'],
  providers:[]
})
export class NewAccountComponent implements OnInit {
  accounts:{name:string, status:string}[]=[]

  constructor(private loggingService:LoggingService, private accountService:AccountsServiceService) { }
  onCreateAccount(accountName:string,status:string){
    // const service=new LoggingService();
    // service.logStatusChange(accountName)
    this.loggingService.logStatusChange(status)
  }
  ngOnInit(): void {
    this.onCreateAccount('hello','HELLO DINESH')
  }

}
