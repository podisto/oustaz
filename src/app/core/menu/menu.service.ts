import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class MenuService {

  constructor(public translate: TranslateService) { }

  getAll() {
    return [
      {
        link: '/',
        label: this.translate.instant('HOME'),
        icon: 'home'
      },
      {
        link: '#',
        label: this.translate.instant('EXPLORE'),
        icon: 'explore'
      },
      {
        link: '#',
        label: this.translate.instant('SUBSCRIPTIONS'),
        icon: 'subscriptions'
      },
      {
        link: '#',
        label: this.translate.instant('HISTORY'),
        icon: 'history'
      },
      {
        link: '#',
        label: this.translate.instant('WATCH_LATER'),
        icon: 'schedule'
      },
      {
        link: '#',
        label: this.translate.instant('LIKED_VIDEOS'),
        icon: 'thumb_up_off_alt'
      }
      /*{
        link: 'http://primer.nyasha.me/docs',
        label: this.translate.instant('DOCS'),
        externalRedirect: true,
        icon: 'local_library'
      }*/
    ];
  }
}
