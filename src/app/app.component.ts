import { Component } from '@angular/core';
import {AppService} from "./app.service";
import {SwUpdate} from "@angular/service-worker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'spring-front';

  constructor(private appService: AppService, private swUpdate: SwUpdate) {
  }

  ngOnInit(): void {

    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if(confirm("New version available. Load New Version?")) {
          window.location.reload();
        }
      });
    }

  }

  getModels() {
    this.appService.getModels().subscribe((data) => {
      console.log(data);
    })

  }

}
