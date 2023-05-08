import {Injectable} from '@angular/core';
import {AbstractSettingController} from "../../models/abstracs/AbstractSettingController";
import {ToastService} from "../core/toast.service";
import {IonicControllerAbstract} from "../../models/abstracs/IonicControllerAbstract";
import {IonicControllerOptionType} from "../../models/commons/IonicControllerOptionType";
import {ModalService} from "./modal.service";
import {
  FillProfileModalComponent
} from "../../components/modals/bottom-modals/fill-profile-modal/fill-profile-modal.component";
import {FilterModalComponent} from "../../components/modals/full-modals/filter-modal/filter-modal.component";
import {
  CityAlmatyModalComponent
} from "../../components/modals/bottom-modals/city-almaty-modal/city-almaty-modal.component";
import {CityModalComponent} from "../../components/modals/full-modals/city-modal/city-modal.component";
import {
  ProfileSettingModalComponent
} from "../../components/modals/full-modals/profile-setting-modal/profile-setting-modal.component";
import {SelectModalComponent} from "../../components/modals/full-modals/select-modal/select-modal.component";
import {FilterType} from "../../models/commons/ad/FilterType";
import {CheckboxModalComponent} from "../../components/modals/full-modals/checkbox-modal/checkbox-modal.component";
import {Item} from "../../models/commons/Item";
import {PhoneModalComponent} from "../../components/modals/bottom-modals/phone-modal/phone-modal.component";

/*
* Use only with Option, if you want use specific ionic controller use other service
* */
@Injectable({
  providedIn: 'root'
})
export class SettingControllerService extends AbstractSettingController {


  constructor(public toastService: ToastService,
              public modalService: ModalService) {
    super();
    this.setDefault();
  }


  public setDefault(): void {
  }

  /*
  * ActionSheet option
  * */

  /*
  * Modal option
  * */
  public setFillProfileModal(): IonicControllerAbstract {
    return this.setExtraOption(this.modalService, (ionicController): IonicControllerOptionType => {
      return {
        component: FillProfileModalComponent,
        componentProps: {},
        cssClass: 'bottom-modal-component auto-height',
        swipeToClose: true,
      };
    });
  }

  public setSelectModal(title: string, code: FilterType, selectedValues?: Item[]): IonicControllerAbstract {
    return this.setExtraOption(this.modalService, (ionicController): IonicControllerOptionType => {
      return {
        component: SelectModalComponent,
        componentProps: {
          title: title,
          code: code,
          selectedValues: selectedValues
        },
        cssClass: 'full-modal-component',
        swipeToClose: true,
      };
    });
  }

  public setCheckboxModal(title: string, code: FilterType, selectedValues?: Item[]): IonicControllerAbstract {
    return this.setExtraOption(this.modalService, (ionicController): IonicControllerOptionType => {
      return {
        component: CheckboxModalComponent,
        componentProps: {
          title: title,
          code: code,
          selectedValues: selectedValues
        },
        cssClass: 'full-modal-component',
        swipeToClose: true,
      };
    });
  }

  public setCityAlmatyModal(): IonicControllerAbstract {
    return this.setExtraOption(this.modalService, (ionicController): IonicControllerOptionType => {
      return {
        component: CityAlmatyModalComponent,
        componentProps: {},
        cssClass: 'bottom-modal-component auto-height',
        swipeToClose: true,
      };
    });
  }

  public setFilterModal(): IonicControllerAbstract {
    return this.setExtraOption(this.modalService, (ionicController): IonicControllerOptionType => {
      return {
        component: FilterModalComponent,
        componentProps: {},
        cssClass: 'full-modal-component',
        swipeToClose: true,
      };
    });
  }

  public setCityModal(): IonicControllerAbstract {
    return this.setExtraOption(this.modalService, (ionicController): IonicControllerOptionType => {
      return {
        component: CityModalComponent,
        componentProps: {},
        cssClass: 'full-modal-component',
        swipeToClose: true,
      };
    });
  }

  public setSettingModal(): IonicControllerAbstract {
    return this.setExtraOption(this.modalService, (ionicController): IonicControllerOptionType => {
      return {
        component: ProfileSettingModalComponent,
        componentProps: {},
        cssClass: 'full-modal-component',
        swipeToClose: true,
      };
    });
  }

  public setPhoneModal(phone: string): IonicControllerAbstract {
    return this.setExtraOption(this.modalService, (ionicController): IonicControllerOptionType => {
      return {
        component: PhoneModalComponent,
        componentProps: {
          phone: phone
        },
        cssClass: 'bottom-modal-component auto-height',
        swipeToClose: true,
      };
    });
  }

}
