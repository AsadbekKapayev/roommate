import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../../services/controllers/modal.service";
import {CityService} from "../../../../services/common/city.service";
import {CommonItem} from "../../../../models/commons/CommonItem";
import {ImageService, LocalFile} from "../../../../services/common/image.service";
import {SubSink} from "../../../../shares/SubSink";
import {ProfileService} from "../../../../services/core/profile.service";
import {ToastService} from "../../../../services/core/toast.service";
import {Item} from "../../../../models/commons/Item";
import {take} from "rxjs";
import {User} from "../../../../models/commons/user/User";
import {TokenService} from "../../../../services/common/token.service";

@Component({
  selector: 'app-profile-setting-modal',
  templateUrl: './profile-setting-modal.component.html',
  styleUrls: ['./profile-setting-modal.component.scss'],
})
export class ProfileSettingModalComponent implements OnInit {

  subSink = new SubSink();

  profileImage: LocalFile;

  name: string;
  email: string;
  isEmailValid = true;
  genders: Item[];
  selectedGender: Item;

  profile: User;

  constructor(private modalService: ModalService,
              private cityService: CityService,
              private tokenService: TokenService,
              private profileService: ProfileService,
              private toastService: ToastService,
              private imageService: ImageService) {
  }

  async ngOnInit() {
    this.loadProfile();

    this.profileService.loadGenders().pipe(
      take(1)
    ).subscribe(x => {
      this.genders = x;
      this.selectedGender = x[0];
    })

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

  async onClickSave() {
    const response = await fetch(this.profileImage?.data);
    const blob = await response?.blob();
    this.subSink.sink = this.profileService.updateProfile(
      this.name,
      this.email,
      this.selectedGender?.id,
      blob
    ).subscribe(
      (x) => {
        this.profile = x?.data?.user;
        this.toastService.present('Ваши изменение сохранены');
        this.close();
      },
      (e) => {
        if (e.status === 422) {
          this.toastService.present('Такой email уже существует')
        }
      }
    )
  }

  onChangeEmail(email: string) {
    const regExp = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-z]{2,4}$');
    this.isEmailValid = regExp.test(email);
    this.email = email;
    console.log('2qcARfq9 :: ', email)
    console.log('2qcARfq9 :: reg exp :: ', regExp.test(email))
  }

  onClickGender(gender: Item) {
    this.selectedGender = gender;
  }

  loadProfile() {
    this.profileService.loadUser().pipe(
      take(1)
    ).subscribe(x => {
      this.profile = x;
      this.name = this.profile?.name;
      this.email = this.profile?.email;
      this.selectedGender = {
        id: this.profile?.gender_id
      };
    });
  }

}
