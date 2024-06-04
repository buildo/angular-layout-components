import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'placeholder',
  standalone: true,
  imports: [],
  template: `
    <p><ng-content></ng-content></p>
    <p class="default">Placeholder</p>
  `,
  styleUrls: ['./placeholder.component.scss'],
})
export class PlaceholderComponent {
  @HostBinding('style.width') @Input({ required: true }) width:
    | string
    | undefined;
}
