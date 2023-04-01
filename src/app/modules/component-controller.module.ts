import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf
} from '@angular/core';
import {throwIfAlreadyLoaded} from "./module-import-guard";
import {FillProfileModalModule} from "../components/modals/bottom-modals/fill-profile-modal/fill-profile-modal.module";
import {FilterModalModule} from "../components/modals/full-modals/filter-modal/filter-modal.module";

const CONTROLLER_MODULES = [
  FillProfileModalModule,
  FilterModalModule,
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
