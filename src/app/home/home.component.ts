import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';
import { WebWorkerService } from 'angular2-web-worker/web-worker.service';



@Component({
    selector: 'afd-render-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ]
})

export class HomeComponent implements OnInit {

    constructor(private homeService: HomeService, private webWorkerService: WebWorkerService) {}

    now: string = "loading...";

    ngOnInit() {
        this.DoingWorker();
    }

    DoingWorker() {
        console.log('doing');
        let i = 1;
        let myInterval = setInterval(function() {


            let x = Date.now();
            console.log(x);
            this.now = x.toString();
            console.log('now: ', this.now);

            i++;
            if(i === 5) {
                clearInterval(myInterval);
            }
        }, 3000);


        let x = 1, y = 1;
        console.log("x++ = %d, ++y = %d", x++, ++y);
    }

    getTime() {
        this.homeService.getTime()
        .subscribe(
            (success: any) => {
                console.log('success', success);
                let time = new Date(success);
                this.now = time.toUTCString();
            },
            (error: any) => {
                alert('Cannot get timer from server');
            }
        );
    }
}