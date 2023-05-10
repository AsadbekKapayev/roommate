import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {throwIfAlreadyLoaded} from "./module-import-guard";
import {FillProfileModalModule} from "../components/modals/bottom-modals/fill-profile-modal/fill-profile-modal.module";
import {FilterModalModule} from "../components/modals/full-modals/filter-modal/filter-modal.module";
import {CityAlmatyModalModule} from "../components/modals/bottom-modals/city-almaty-modal/city-almaty-modal.module";
import {CityModalModule} from "../components/modals/full-modals/city-modal/city-modal.module";
import {
  ProfileSettingModalModule
} from "../components/modals/full-modals/profile-setting-modal/profile-setting-modal.module";
import {SelectModalModule} from "../components/modals/full-modals/select-modal/select-modal.module";
import {CheckboxModalModule} from "../components/modals/full-modals/checkbox-modal/checkbox-modal.module";
import {PhoneModalModule} from "../components/modals/bottom-modals/phone-modal/phone-modal.module";
import {CreateAdModalModule} from "../components/modals/bottom-modals/create-ad-modal/create-ad-modal.module";

const CONTROLLER_MODULES = [
  FillProfileModalModule,
  FilterModalModule,
  SelectModalModule,
  CheckboxModalModule,
  CityAlmatyModalModule,
  CityModalModule,
  ProfileSettingModalModule,
  PhoneModalModule,
  CreateAdModalModule,
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
