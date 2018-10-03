import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { GetComponent } from './get/get.component';
import { SpookyComponent } from './spooky/spooky.component';

export const routes: Routes = [
  { path: 'post', component: PostComponent},
  { path: '', component: GetComponent},
  { path: 'spooky', component: SpookyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }