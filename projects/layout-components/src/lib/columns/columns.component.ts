import { Component, HostBinding, Input } from '@angular/core';
import { AlignItems, Gap, JustifyContent, Padding } from '../common';

@Component({
  selector: 'columns',
  standalone: true,
  imports: [],
  template: `<ng-content></ng-content>`,
  styleUrl: './columns.component.css',
})
export class ColumnsComponent {
  @HostBinding('style.justify-content')
  @Input()
  justifyContent: JustifyContent = 'flex-start';
  @HostBinding('style.align-items') @Input() alignItems: AlignItems = 'stretch';
  @HostBinding('style.gap') @Input() gap: Gap = '0';
  @HostBinding('style.padding') @Input() padding: Padding = '0';
}
