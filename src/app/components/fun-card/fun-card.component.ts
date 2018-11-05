import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { FunApi } from 'src/app/models/fun-apis';
import { FunCardService } from 'src/app/services/fun-card.service';

@Component({
  selector: 'app-fun-card',
  templateUrl: './fun-card.component.html',
  styleUrls: ['./fun-card.component.css'],
  providers: [FunCardService]
})
export class FunCardComponent implements OnInit {
  @Input()
  funApi: FunApi;

  @Output()
  check = new EventEmitter();

  response: any;

  constructor(
    private funCardService: FunCardService
  ) {

  }

  ngOnInit() {
    this.funCardService.assignConfig(this.funApi);

    this.funCardService.getData()
      .subscribe(this.updateResponse.bind(this));

    if (this.funApi.checked) {
      this.funCardService.triggerApi();
    }
  }

  toggleUpdate() {
    this.funCardService.triggerApi();
    this.check.emit(this.funApi);
  }

  onClick() {
    this.funCardService.fetchData()
      .subscribe(this.updateResponse.bind(this));
  }

  private updateResponse(response) {
    this.response = response;
  }
}
