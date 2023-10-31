import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    data: {
      metadata: {
        title: 'Suyog Weds Payal',
        itemprop: 'Suyog Weds Payal',
        description: 'Join us as we embark on this beautiful journey of love, laughter, and a lifetime of shared dreams.Your presence will make our day even more special.'
      }
    }
  },
  {
    path: ':val', component: HomeComponent,
    data: {
      metadata: {
        title: 'Suyog Weds Payal',
        itemprop: 'Suyog Weds Payal',
        description: 'Join us as we embark on this beautiful journey of love, laughter, and a lifetime of shared dreams.Your presence will make our day even more special.'
      }
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
