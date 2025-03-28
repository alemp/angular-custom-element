import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hello-custom-element',
  templateUrl: './hello-custom-element.component.html',
})
export class HelloCustomElementComponent {
  @Input() name: string = '';
}
