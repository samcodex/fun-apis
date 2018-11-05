import { Component, OnInit } from '@angular/core';

import { FunApi } from './models/fun-apis';
import { PersistentService } from './services/persistent.service';
import { ApiConfig } from './config/api-config';
import { CdkDragDrop, moveItemInArray, CdkDragEnter, CdkDragExit } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  funApis: FunApi[];

  funList: any;

  constructor(
    private persistentService: PersistentService
  ) {

  }

  ngOnInit() {
    this.persistentService.fetch().subscribe(
      data => {
        if (data) {
          this.funApis = data;
        } else {

          this.funApis = ApiConfig
            .map((config, index) => {
              config.id = index;
              return config;
            });

          console.log(this.funApis);
        }
      }
    );

  }

  onCheckCard(card) {
    this.persistentService.persist(this.funApis);
  }

  onDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.funApis, event.previousIndex, event.currentIndex);
    this.persistentService.persist(this.funApis);
  }

}
