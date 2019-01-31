import {Component, Input, OnInit} from '@angular/core';
import {Device} from 'src/app/models/Device';
import {RestClientService} from '../../../services/rest-client/rest-client.service';

@Component({
  selector: 'device-lightbulb',
  templateUrl: './lightbulb.component.html',
  styleUrls: ['./lightbulb.component.scss']
})
export class LightbulbComponent implements OnInit {

  @Input() lightbulb: Device;

  constructor(private restClient: RestClientService) { }

  ngOnInit() {
  }

  async toggleLightBulb() {
    this.lightbulb.parameters.on = !this.lightbulb.parameters.on;
    await this.restClient.saveDevice(this.lightbulb);
  }

}
