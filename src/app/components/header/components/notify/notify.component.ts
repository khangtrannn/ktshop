import { Component } from '@angular/core';
import { NotifyItem } from './notify-item';

@Component({
  selector: 'app-notify',
  templateUrl: './notify.component.html',
  styleUrls: ['./notify.component.scss']
})
export class NotifyComponent {
  notifyItems: NotifyItem[] = [
    {
      name: 'Apple Watch Series 7',
      description: 'Đồng hồ Apple Watch chính hãng, SALE OF 20% đến hết tháng 09/2022',
      isNew: true,
      image: 'https://cdn.tgdd.vn/Products/Images/7077/229030/s16/apple-watch-series-6-lte-40mm-gold-1-650x650.png'
    },
    {
      name: 'Apple Watch',
      description: 'Đồng hồ Apple Watch chính hãng',
      isNew: true,
      image: 'https://cdn.tgdd.vn/Products/Images/7077/234918/s16/apple-watch-se-gps-44mm-1-1-650x650.png'
    },
    {
      name: 'Apple Watch',
      description: 'Đồng hồ Apple Watch chính hãng',
      isNew: false,
      image: 'https://cdn.tgdd.vn/Products/Images/7077/234910/s16/vn-apple-watch-series6-lte-40mm-blue-aluminum-deep-navy-sport-band-pdp-image-position-650x650.png'
    },
  ]
}
