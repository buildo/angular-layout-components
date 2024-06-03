import { Component, HostBinding, Input } from '@angular/core';
import { AlignItems, Gap, JustifyContent, Padding } from '../common';

@Component({
  selector: 'stack',
  standalone: true,
  imports: [],
  template: `<ng-content></ng-content>`,
  styleUrl: './stack.component.css',
})
export class StackComponent {
  @HostBinding('style.justify-content')
  @Input()
  justifyContent: JustifyContent = 'flex-start';
  @HostBinding('style.align-items')
  @Input()
  alignItems: AlignItems = 'stretch';
  @HostBinding('style.height')
  @Input()
  height?: string;
  @HostBinding('style.gap')
  /**
   * The gap between the children of the stack.
   */
  @Input()
  gap: Gap = '0';
  @HostBinding('style.padding') @Input() padding: Padding = '0';
}
