import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
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
        path: 'groups',
        children: [
          {
            path: '',
            loadChildren: '../groups/groups.module#GroupsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/devices',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/devices',
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
