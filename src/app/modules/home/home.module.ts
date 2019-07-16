import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { MyTasksComponent } from './components/my-tasks/my-tasks.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { PersonalTaskComponent } from './components/my-tasks/personal-task/personal-task.component';

@NgModule({
  declarations: [MainPageComponent, MyTasksComponent, PersonalTaskComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule]
})
export class HomeModule {}
