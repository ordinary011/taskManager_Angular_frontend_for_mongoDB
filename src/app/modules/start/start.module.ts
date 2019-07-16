import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { StartRoutingModule } from './start-routing.module';

import { FormsModule } from '@angular/forms';
import { LogInComponent } from './components/log-in/log-in.component';

@NgModule({
  declarations: [SignUpComponent, LogInComponent],
  imports: [CommonModule, StartRoutingModule, FormsModule]
})
export class StartModule {}
