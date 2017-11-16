import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app.routes';
import { GalleryModule } from './gallery/gallery.module';
import { ModalManagerService, ToastService } from 'admanic-ui';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    SharedModule,
    AuthModule,
    GalleryModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [ToastService, ModalManagerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
