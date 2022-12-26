import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pet-manager-frontend';
  loadedFeature = 'home';

  onNavigate(featureToNavigateTo) {
    this.loadedFeature = featureToNavigateTo;
  }

}
