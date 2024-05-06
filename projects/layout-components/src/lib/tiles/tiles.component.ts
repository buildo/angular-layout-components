import { Component, HostBinding, Input, numberAttribute } from '@angular/core';
import { Gap, Padding } from '../common';

@Component({
  selector: 'tiles',
  standalone: true,
  imports: [],
  template: `<ng-content></ng-content>`,
  styleUrl: './tiles.component.css',
})
export class TilesComponent {
  @HostBinding('style.gap') @Input() gap: Gap = '0';
  @HostBinding('style.grid-template-rows') @Input() gridTemplateRows: string =
    'auto';
  @HostBinding('style.padding') @Input() padding: Padding = '0';
  @Input({ transform: numberAttribute }) columns: number = 0;
  @HostBinding('style.grid-template-columns') get gridTemplateColumns() {
    return `repeat(${this.columns}, 1fr)`;
  }
}
