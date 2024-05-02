import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'placeholder',
  standalone: true,
  imports: [],
  template: `<p>Placeholder</p>`,
  styleUrls: ['./placeholder.component.scss']
})
export class PlaceholderComponent {
  @HostBinding('style.width') @Input({ required: true }) width: string | undefined;
}
