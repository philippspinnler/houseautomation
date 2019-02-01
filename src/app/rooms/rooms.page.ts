import {Component} from '@angular/core';
import {RestClientService} from '../services/rest-client/rest-client.service';
import {Room} from '../models/Room';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-rooms',
    templateUrl: 'rooms.page.html',
    styleUrls: ['rooms.page.scss']
})
export class RoomsPage {
    rooms: Room[];

    constructor(private restClient: RestClientService, private navCtrl: NavController) {

    }

    async ionViewWillEnter() {
        this.rooms = await this.restClient.getRooms();
        console.log(this.rooms);
    }

    goToRoom(roomId) {
        this.navCtrl.navigateForward('/tabs/devices/' + roomId);
    }
}
