import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";
import {ModalService} from "../../../../services/controllers/modal.service";
import {FilterService} from "../../../../services/common/filter.service";
import {of, take} from "rxjs";
import {Item} from "../../../../models/commons/Item";

@Component({
  selector: 'app-select-modal',
  templateUrl: './select-modal.component.html',
  styleUrls: ['./select-modal.component.scss'],
})
export class SelectModalComponent implements OnInit, AfterViewInit {

  @Input() title: string;
  @Input() selectedValue: Item;

  @Input() set code(code: string) {
    let values = of(undefined);

    if (code === 'city') {
      // @ts-ignore
      values = this.filterService.loadCities();
    }

    values.pipe(
      take(1),
    ).subscribe(x => {
      this.values = x;
    })
  }

  values: Item[];

  constructor(private navCtrl: NavController,
              private modalService: ModalService,
              private filterService: FilterService) {
  }

  ngOnInit() {
  }

  close() {
    this.modalService.dismiss();
  }

  ngAfterViewInit(): void {
    this.selectedValue = this.values[0];
  }

  onSelectItem(item: Item) {
    this.close();
  }
}
