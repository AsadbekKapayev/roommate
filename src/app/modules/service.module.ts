import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import {AuthInterceptor} from "../services/interceptors/auth.interceptor";
import {throwIfAlreadyLoaded} from "./module-import-guard";

const PROVIDERS = [

  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
];


@NgModule({
  declarations: [],
  imports: []
})
export class ServicesModule {
  constructor(@Optional() @SkipSelf() parentModule: ServicesModule) {
    throwIfAlreadyLoaded(parentModule,
      'ServicesModule');
  }

  static forRoot(): ModuleWithProviders<ServicesModule> {
    return {
      ngModule: ServicesModule,
      providers: [
        ...PROVIDERS],
    } as ModuleWithProviders<ServicesModule>;
  }
}
