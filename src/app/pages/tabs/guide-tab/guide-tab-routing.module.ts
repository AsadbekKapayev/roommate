import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideTabPage } from './guide-tab.page';

const routes: Routes = [
  {
    path: '',
    component: GuideTabPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GuideTabRoutingModule {}
