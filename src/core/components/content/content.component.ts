import { Component } from '@angular/core';
import { ContentService } from './content.service';
import { ScreenEnum } from 'src/shared/constants';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent {

  screenEnum = ScreenEnum

  constructor(public contentService: ContentService) { }

  getScreenTitle() {
    const titles = {
      [ScreenEnum.FORM]: 'Novo Cliente',
      [ScreenEnum.LIST]: 'Listagem de Clientes'
    }

    return titles[this.contentService.currentScreen] || 'Título'
  }

  add() {
    this.contentService.currentScreen = ScreenEnum.FORM;
  }
}
