import { ChattingModel, STATUS_CONTENT_TYPE } from './chatting.model';
import { ChattingService } from './chatting.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChattingComponent implements OnInit {

  constructor(private chattingService: ChattingService) { }

  conversion: string = "";
  message: ChattingModel = new ChattingModel("", STATUS_CONTENT_TYPE.TEXT);
  isLoading: boolean = false;

  ngOnInit() {
    // this.conversion = [];
    this.updateConversion.bind(this);
  }

  sendMessage() {
    //check 
    if(this.message.content.indexOf("http") != -1) {
      this.message.type = STATUS_CONTENT_TYPE.LINK;
    }

    //send message to server
    if (this.message && this.message.content.length > 0) {
      this.chattingService.sendMessage(this.message)
        .subscribe(
        (success: ChattingModel) => {

          console.log('success: ', success);
          //update my message
          this.updateConversion(this.message);

          //toggle loading
          this.conversion.length != 0 ? this.isLoading = true : this.isLoading = false;

          //reset input
          this.message.resetAll();
          //update server message
          let loop = setInterval(() => {
            this.updateConversion(success, true);
            this.isLoading = false;
            clearInterval(loop);
          }, 600);
        },
        (error: any) => {
          console.log("cannot send message to server !");
        }
        );
    }
  }

  updateConversion(message: ChattingModel, isBot: boolean = false) {
    let HTMLclass: string = "alert alert-warning";
    if (isBot === false) {
      HTMLclass = "message me alert alert-primary";
    }
    else if (isBot === true) {
      HTMLclass = "message bot alert alert-secondary";
    }

    if(message.type === STATUS_CONTENT_TYPE.LINK) {
      message.content = `<a href="${message.content}" target="_blank">${message.content}</a>`;
    }

    let HTML_Message = `<div class="${HTMLclass}" role="alert">${message.content}</div>`;
    this.conversion += HTML_Message;
  }
}
