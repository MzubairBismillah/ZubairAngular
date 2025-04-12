import { CommonModule } from '@angular/common';
import { Component, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-ng-template',
  imports: [CommonModule],
  templateUrl: './ng-template.component.html',
  styleUrl: './ng-template.component.css'
})
export class NgTemplateComponent {

  isUserLoggedIn: boolean = true;
  loggedInUserName: string = 'Zubair Bismillah';

  @ViewChild('dynamicTemp') dynaTemplate: TemplateRef<any> | undefined;
  @ViewChild('dynamicContainer',{read:ViewContainerRef}) dynaContainer: ViewContainerRef | undefined;

  loadTemplate() {
    if (this.dynaTemplate) {
      this.dynaContainer?.createEmbeddedView(this.dynaTemplate);
    }
  }
}
