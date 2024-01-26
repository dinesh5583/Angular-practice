import { Component, OnDestroy, OnInit } from '@angular/core';
import {interval, Observable, Subscription} from 'rxjs'
import {filter, map} from 'rxjs/operators'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent2 implements OnInit, OnDestroy {
  private firstObsSubscription!: Subscription;
  constructor() { }
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe()
  }

  ngOnInit(): void {
    // this.firstObsSubscription=interval(1000).subscribe(count=>{
    //   console.log(count)
    // })
    const customIntervalObservables=Observable.create((observer:any)=>{
      let count=0;
      setInterval(()=>{
        observer.next(count);
        if(count==2){
          observer.complete()
        }
        if(count>3){
          observer.error(new Error('Count is greater than 3'))
        }
        count++;
      },1000)
    });


    this.firstObsSubscription=customIntervalObservables.pipe(filter((data:any)=>{
      return data>0
    }),map((data:any)=>{
      return 'Round ' + (data+1);
    })).subscribe((data:any)=>{
      // console.log('Round: ' + (data+1));
      console.log(data);


    },(err:any)=>{
      console.log(err);
    },()=>{
      console.log('Completed');

    })
  }

}
