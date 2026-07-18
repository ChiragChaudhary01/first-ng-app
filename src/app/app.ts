import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './component/header/header';

@Component({
  selector: 'app-root',
  imports: [Header, RouterOutlet],
  template: `
    <app-header/>
    <main>
      <router-outlet/>
    </main>
  `,
  styles: [`
    main {
      padding: 16px;
    }
    `],
})
export class App {
  protected readonly title = signal('frist-ng-app');
}
