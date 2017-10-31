import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TabsComponent} from './tabs/tabs.component';

const routes: Routes = [
  {
    path: 'movies',
    component: TabsComponent,
    children: [
      {
        path: ':cat',
        component: TabsComponent,
        children: [
          {
            path: ':mov',
            component: TabsComponent,
          },
        ],
      },
    ],
  },
  {
    path: '**',
    component: TabsComponent,
  },
  {
    path: '',
    component: TabsComponent,
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
