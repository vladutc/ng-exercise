import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { AppContentComponent } from './components/app-content/app-content.component';
import { AppService } from './services/app.service';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [AppHeaderComponent, AppContentComponent],
  exports: [AppHeaderComponent, AppContentComponent],
  providers: [AppService]
})
export class CoreModule {}
