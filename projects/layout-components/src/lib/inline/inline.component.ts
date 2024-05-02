import { Component, HostBinding, Input } from '@angular/core';
import { AlignItems, Gap, JustifyContent, Padding } from '../common';

@Component({
  selector: 'inline',
  standalone: true,
  imports: [],
  template: `<ng-content></ng-content>`,
  styleUrl: './inline.component.css',
})
export class InlineComponent {
  @HostBinding('style.justify-content')
  @Input()
  justifyContent: JustifyContent = 'flex-start';
  @HostBinding('style.align-items') @Input() alignItems: AlignItems = 'stretch';
  @HostBinding('style.gap') @Input() gap: Gap = '0';
  @HostBinding('style.padding') @Input() padding: Padding = '0';
}
