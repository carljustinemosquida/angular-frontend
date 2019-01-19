import { Component } from '@angular/core';
import { Router, Route } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-themed';

  constructor(private router: Router) {

  }

  // SHOW ALL POSSIBLE ROUTES
  // ngOnInit() {
  //   this.printpath('', this.router.config);
  // }
  // printpath(parent: String, config: Route[]) {
  //   for (let i = 0; i < config.length; i++) {
  //     let r = config[i];
  //     console.log(parent + '/' + r.path);
  //     if (r.children && r.path) {
  //       this.printpath(parent + '/' + r.path, r.children);
  //     }
  //   }
  // }
}
