import { Component, HostBinding, Input } from '@angular/core';
import { Padding } from '../common';

@Component({
  selector: 'inset',
  standalone: true,
  imports: [],
  template: `<ng-content></ng-content>`,
  styleUrl: './inset.component.css',
})
export class InsetComponent {
  @HostBinding('style.padding') @Input() padding: Padding = '0';
}
