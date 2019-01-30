import {Component, Input, OnInit} from '@angular/core';
import {Device} from 'src/app/models/Device';

@Component({
  selector: 'device-lightbulb',
  templateUrl: './lightbulb.component.html',
  styleUrls: ['./lightbulb.component.scss']
})
export class LightbulbComponent implements OnInit {

  @Input() lightbulb: Device;

  constructor() { }

  ngOnInit() {
  }

}
