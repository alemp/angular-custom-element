import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { HelloCustomElementComponent } from './hello-custom-element/hello-custom-element.component';
import 'zone.js';

createApplication()
  .then(app => {
    const component = createCustomElement(HelloCustomElementComponent, { injector: app.injector });
    customElements.define('hello-custom-element', component);
  })
  .catch((err) => console.error(err));
;
