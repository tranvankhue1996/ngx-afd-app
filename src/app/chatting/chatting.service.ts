import { ChattingModel } from './chatting.model';
import { Constants } from './../shared/constants/constants';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ChattingService {
    constructor(private http: Http) {}

    private _getHeaders():Headers {
        let header = new Headers({
          'Content-Type': 'application/json'
        });
        return header;
    }
     

    sendMessage(content: ChattingModel) {

        let options = new RequestOptions({
            headers: this._getHeaders()
        });

        return this.http.post(`${Constants.HOST}${Constants.CHATBOT}`, JSON.stringify(content), options)
            .map(
                (res: Response) => {
                    return res.json();
                }   
            );
    }

}