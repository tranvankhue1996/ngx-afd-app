import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'afd-render-product',
    templateUrl: './product.component.html',
    styleUrls: [ './product.component.scss' ]
})

export class ProductComponent implements OnInit {
    listProducts: any[];
    listX: any[] = [1,2,3,4,5];
    ngOnInit() {
        this.getListData();
    }

    // Get data
    getListData() {
        let data: any[] = [];
        data.push({
            imgLink: 'https://mdbootstrap.com/images/regular/people/img%20(67).jpg',
            title: 'Attitude UI',
            type: 'NodeJS'
        });
        data.push({
            imgLink: 'https://mdbootstrap.com/images/regular/people/img%20(67).jpg',
            title: 'Sonic Chat',
            type: 'C++'
        });
        data.push({
            imgLink: 'https://mdbootstrap.com/images/regular/people/img%20(67).jpg',
            title: 'GE Tokio',
            type: 'Predix'
        });
        data.push({
            imgLink: 'https://mdbootstrap.com/images/regular/people/img%20(67).jpg',
            title: 'Tazania',
            type: 'Game'
        });
    }
}