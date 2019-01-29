import {Component} from '@angular/core';
import {RestClientService} from '../services/rest-client/rest-client.service';
import {Group} from '../models/Group';

@Component({
    selector: 'app-groups',
    templateUrl: 'groups.page.html',
    styleUrls: ['groups.page.scss']
})
export class GroupsPage {
    groups: Group[];

    constructor(private restClient: RestClientService) {

    }

    async ionViewWillEnter() {
        this.groups = await this.restClient.getGroups();
        console.log(this.groups);
    }
}
