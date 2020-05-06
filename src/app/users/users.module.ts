import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './components/users-list/users-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [UsersListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    CoreModule,
    HttpClientModule,
    UsersRoutingModule
  ],
  providers: [UsersService]
})
export class UsersModule { }
