import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, Params, Router } from '@angular/router';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss'],
})
export class ServerComponent implements OnInit {
  server: any;
  constructor(
    private serverService: ServersService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  ngOnInit(): void {
    this.route.data.subscribe(
      (data:Data)=>{
        this.server=data['server']
      }
    );
    // let id = this.route.snapshot.params['id'];
    // this.server = this.serverService.getServer(id);
    // this.route.params.subscribe((params: Params) => {
    //   this.server = this.serverService.getServer(params['id']);
    // });
  }

  onEdit() {
    this.router.navigate(['edit'],{relativeTo:this.route, queryParamsHandling:'preserve'})
  }
}
