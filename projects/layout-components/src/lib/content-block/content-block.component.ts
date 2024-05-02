import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'content-block',
  standalone: true,
  imports: [],
  template: `<ng-content></ng-content>`,
  styleUrl: './content-block.component.css',
})
export class ContentBlockComponent {
  @HostBinding('style.max-width') @Input() maxWidth: string = '720px';
}
