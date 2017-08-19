import { Component, OnInit } from '@angular/core';
import { BaseService } from './../shared/services/base.service';

@Component({
  selector: 'afd-render-layout',
  templateUrl: './layout.component.html',
  styleUrls: [ './layout.component.css' ]
})

export class LayoutComponent implements OnInit { 
  constructor(private baseService: BaseService) {}

  ngOnInit() {
    //set default service
    this.baseService.setTitle();
  }

  name = 'Angular'; 
}
