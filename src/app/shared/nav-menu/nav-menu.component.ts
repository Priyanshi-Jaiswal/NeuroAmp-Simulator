import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AppService } from '../../app.service';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  isShowPromptHistorySubMenu = true;
  isShowSettingSubMenu = true;
  isShowWorkSpaceSubMenu = true;
  isShowSideNav = true;
  selectedMenu: string = '';

  constructor(private router: Router, private appService: AppService) { }

  ngOnInit() {
    this.appService.sideNavData.subscribe((res: any) => {
      if (res === "") {
        this.isShowSideNav = true;
      }
      if (res === true) {
        this.isShowSideNav = true;
      } else if (res === false) {
        this.isShowSideNav = false;
      }
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.selectedMenu = event.url;
        if (event.urlAfterRedirects.includes('?')) {
          this.selectedMenu = this.selectedMenu.split('?')[0]          
        }
      }
    });    
  }

  askMe() {
    this.router.navigate(['/askMe'])
  }

  gatewayBridge() {
    this.router.navigate(['/gatewayBridge'])
  }

  insights() {
    this.router.navigate(['/insights'])
  }

  testbed() {
    this.router.navigate(['/testbed'])
  }

  myWorkSpace() {
    this.router.navigate(['/workSpace'])
  }

  devices() {
    this.router.navigate(['/devices'])
  }

  gateways() {
    this.router.navigate(['/gateways'])
  }

  testCaseManagement() {
    this.router.navigate(['/testCaseManagement']);
  }

  settings() {

  }

  document() {
    this.router.navigate(['/fileUpload']);
  }

  jira() {
    this.router.navigate(['/jira'])
  }
}
