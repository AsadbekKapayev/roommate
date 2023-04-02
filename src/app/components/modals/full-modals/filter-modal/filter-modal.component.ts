import {
  Component,
  OnInit
} from '@angular/core';
import {ModalService} from "../../../../services/controllers/modal.service";

@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
})
export class FilterModalComponent implements OnInit {

  selectedRoomQuantity: string;
  roomsQuantity: string[] = [
    '1', '2', '3', '4', '5+'
  ]

  constructor(private modalService: ModalService) {
  }

  async ngOnInit() {
  }

  close() {
    this.modalService.dismiss().then();
  }

  reset() {

  }
}