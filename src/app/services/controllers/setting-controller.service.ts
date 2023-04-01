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
        componentProps: {
        },
        cssClass: 'bottom-modal-component auto-height',
        swipeToClose: true,
      };
    });
  }

  public setFilterModal(): IonicControllerAbstract {
    return this.setExtraOption(this.modalService, (ionicController): IonicControllerOptionType => {
      return {
        component: FilterModalComponent,
        componentProps: {
        },
        cssClass: 'city-modal-component',
        swipeToClose: true,
      };
    });
  }

}
