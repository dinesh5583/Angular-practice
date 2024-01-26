import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServersService } from './servers.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  servers:any[]=[]
  constructor(private router:Router, private route:ActivatedRoute, private serverService:ServersService) { }
  onReload(){
    this.router.navigate(['servers'],{relativeTo:this.route})
  }
  ngOnInit(): void {
    this.servers=this.serverService.getServers()
  }

}
