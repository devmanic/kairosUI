import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SdkService } from "./sdk.servive";
import { CredentialsService } from "./credentials.service.ts";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { SDKInceptor } from "./http-interceptor.service";
import { LoaderModule } from "./loader/loader.module";
import LoaderService from "./loader.service";
import { LoaderComponent } from "./components/loader.component";

const components: any[] = [
  LoaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    LoaderService,
    SdkService,
    CredentialsService,
    {provide: HTTP_INTERCEPTORS, useClass: SDKInceptor, multi: true}
  ],
  declarations: components,
  exports: components
})
export class SharedModule {
}
