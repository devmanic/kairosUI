import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { HomeComponent } from './home/home.component';
import { GalleryModule } from './gallery/gallery.module';
import { ToastService } from 'admanic-ui';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    AuthModule,
    GalleryModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [ToastService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
