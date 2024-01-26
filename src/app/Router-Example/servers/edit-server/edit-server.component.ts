import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';
import { CanComponentDeactivate } from './can-deactivate-guard.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.scss'],
})
export class EditServerComponent implements OnInit,CanComponentDeactivate {
  server: any;
  severName = '';
  serverStatus = '';
  allowEdit=false;
  //For Deactive route
  changesSaved=false;
  constructor(
    private serversService: ServersService,
    private route: ActivatedRoute,
    private router:Router
  ) {}
  canDeactivate():any{
    if(!this.allowEdit){
      return true;
    }
    if((this.severName!==this.server.name || this.serverStatus!==this.server.status)
    && !this.changesSaved){
      return confirm('Do u want to discard the chages?')
    }else{
      return true;
    }
  };

  ngOnInit(): void {
    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);
    this.route.queryParams.subscribe((queryParans:Params)=>{
      this.allowEdit=queryParans['allowEdit']=='1'?true:false;
    });
    this.route.fragment.subscribe();
    const id =+this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.severName = this.server?.name;
    this.serverStatus = this.server?.status;
  }

  onUpdateSever() {
    this.serversService.updateServer(this.server.id, {
      name: this.severName,
      status: this.serverStatus,
    });
    this.changesSaved=true;
    this.router.navigate(['../'],{relativeTo:this.route})
  }
}
