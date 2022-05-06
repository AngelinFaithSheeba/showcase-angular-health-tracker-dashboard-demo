import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @Output() notify = new EventEmitter();
  @Input() today: Date;
  @Input() activities: any;
  public maxDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
