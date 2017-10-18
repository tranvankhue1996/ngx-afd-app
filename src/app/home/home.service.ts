import { Constants } from './../shared/constants/constants';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class HomeService {
    constructor(private http: Http) {}

    private getHeaders(){
        let headers = new Headers();
        return headers;
    }

    private getRequestOptions() {
        return new RequestOptions({
            headers: this.getHeaders()
        });
    }

    getTime() {
        return this.http.get(Constants.HOST + Constants.TIMER.GET_NOW, this.getRequestOptions())
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

    sendMessage(message: string) {
        return this.http.get(`${Constants.HOST}${Constants.CHATBOT.RANDOM_NUMBER}/${message}`, this.getRequestOptions())
            .map(
                (res: Response) => {
                    return res.json();
                }   
            );
    }

}