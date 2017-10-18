import { Observable } from 'rxjs/Rx';
import { HomeService } from './home.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'afd-render-home',
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.css' ],
    encapsulation: ViewEncapsulation.None
})

export class HomeComponent implements OnInit {

    constructor(private homeService: HomeService) {}

    conversion: string = "";
    message: string = "";
    isDisable: boolean = false;

    ngOnInit() {
        // this.conversion = [];
        this.updateConversion.bind(this);
        this.toggleControl.bind(this);
    }

    sendMessage() {
        //send message to server
        if(this.message && this.message.length > 0) {
            this.homeService.sendMessage(this.message)
                .subscribe(
                    (success: any) => {
                        //update my message
                        this.updateConversion(this.message);
                        console.log(this.message);

                        //disable control
                        this.toggleControl();

                        //reset input
                        this.message = "";

                        //update server message
                        let loop = setInterval(()=> {
                             this.updateConversion(success, 1);
                             clearInterval(loop);
                        }, 5000);
                        
                        this.toggleControl();
                    },
                    (error: any) => {
                        console.log("cannot send message to server !");
                    }
                );
        }
    }

    updateConversion(message: string, type: number = 0) {
        let HTMLclass: string = "alert alert-warning";
        if(type === 0) {
            HTMLclass = "message me alert alert-secondary";
        }
        else if(type === 1) {
            HTMLclass = "message bot alert alert-primary";
        }

        let HTML_Message = `<div class="${HTMLclass}" role="alert">${message}</div>`;
        this.conversion += HTML_Message;
    }

    toggleControl() {
        this.isDisable = !this.isDisable;
    }
}