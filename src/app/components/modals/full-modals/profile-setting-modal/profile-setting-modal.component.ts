import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../../services/controllers/modal.service";
import {CityService} from "../../../../services/common/city.service";
import {CommonItem} from "../../../../models/commons/CommonItem";
import {Gender} from "../../../../models/commons/Gender";
import {ImageService, LocalFile} from "../../../../services/common/image.service";
import {SubSink} from "../../../../shares/SubSink";
import {ProfileService} from "../../../../services/core/profile.service";

@Component({
  selector: 'app-profile-setting-modal',
  templateUrl: './profile-setting-modal.component.html',
  styleUrls: ['./profile-setting-modal.component.scss'],
})
export class ProfileSettingModalComponent implements OnInit {

  profileImage: LocalFile;

  cities: CommonItem[];

  gender = Gender;
  selectedGender: string;

  subSink = new SubSink();

  constructor(private modalService: ModalService,
              private cityService: CityService,
              private profileService: ProfileService,
              private imageService: ImageService) {
  }

  async ngOnInit() {
    this.cities = this.cityService.loadCities();

    this.imageService.clearData();
    this.subSink.sink = this.imageService.images$.subscribe(x => {
      this.profileImage = x[x?.length - 1];
    })
  }

  close() {
    this.modalService.dismiss();
  }

  onClickCity(city: CommonItem) {
    this.modalService.dismiss();
  }

  async onClickProfile() {
    this.imageService.selectImage();
  }

}
