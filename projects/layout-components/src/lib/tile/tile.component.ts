import { Component, HostBinding, Input } from '@angular/core';
import { Gap, Padding } from '../common';

@Component({
  selector: 'tile',
  standalone: true,
  imports: [],
  template: `<ng-content></ng-content>`,
  styleUrl: './tile.component.css',
})
export class TileComponent {
  @HostBinding('style.gap') @Input() gap: Gap = '0';
  @HostBinding('style.grid-template-columns')
  @Input()
  gridTemplateColumns: string = 'repeat(4, 1fr)';
  @HostBinding('style.grid-template-rows') @Input() gridTemplateRows: string =
    'auto';
  @HostBinding('style.padding') @Input() padding: Padding = '0';
}
