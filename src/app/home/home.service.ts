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
    
    getTime() {
        return this.http.get(Constants.HOST + Constants.TIMER.GET_NOW,new RequestOptions({headers: this.getHeaders()}))
            .map(
                (res: Response) => {
                    return res.json();
                }
            );
    }

}