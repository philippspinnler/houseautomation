import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'devices/:roomId',
        children: [
          {
            path: '',
            loadChildren: '../devices/devices.module#DevicesPageModule'
          }
        ]
      },
      {
        path: 'devices',
        children: [
          {
            path: '',
            loadChildren: '../devices/devices.module#DevicesPageModule'
          }
        ]
      },
        {
        path: 'rooms',
        children: [
          {
            path: '',
            loadChildren: '../rooms/rooms.module#RoomsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/rooms',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/rooms',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
