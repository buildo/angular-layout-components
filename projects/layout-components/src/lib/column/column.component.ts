import { Component, HostBinding, Input } from '@angular/core';
import { ColumnFractionWidth } from '../common';

@Component({
  selector: 'column',
  standalone: true,
  imports: [],
  template: `<ng-content></ng-content>`,
  styleUrl: './column.component.scss',
})
export class ColumnComponent {
  @HostBinding('style.width') @Input() width:
    | string
    | ColumnFractionWidth
    | undefined;
  @HostBinding('style.flex-grow') @Input() flexGrow: string | undefined;
}
