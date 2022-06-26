import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'api-error',
  templateUrl: './api-error.component.html',
  styleUrls: ['./api-error.component.scss']
})
export class ApiErrorComponent implements OnInit {

  @Input()
  public apiError = false;

  constructor() { }

  ngOnInit(): void {
  }

}
