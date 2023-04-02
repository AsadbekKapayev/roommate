import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import {throwIfAlreadyLoaded} from "./module-import-guard";
import {FillProfileModalModule} from "../components/modals/bottom-modals/fill-profile-modal/fill-profile-modal.module";
import {FilterModalModule} from "../components/modals/full-modals/filter-modal/filter-modal.module";
import {CityAlmatyModalModule} from "../components/modals/bottom-modals/city-almaty-modal/city-almaty-modal.module";
import {CityModalModule} from "../components/modals/full-modals/city-modal/city-modal.module";

const CONTROLLER_MODULES = [
  FillProfileModalModule,
  FilterModalModule,
  CityAlmatyModalModule,
  CityModalModule,
];

@NgModule({
  declarations: [],
  imports: [...CONTROLLER_MODULES]
})
export class ComponentControllerModule {
  constructor(@Optional() @SkipSelf() parentModule: ComponentControllerModule) {
    throwIfAlreadyLoaded(parentModule,
      'ComponentModule');
  }

  static forRoot(): ModuleWithProviders<ComponentControllerModule> {
    return {
      ngModule: ComponentControllerModule,
      providers: [],
    } as ModuleWithProviders<ComponentControllerModule>;
  }
}
