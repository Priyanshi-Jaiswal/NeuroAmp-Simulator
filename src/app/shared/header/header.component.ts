// import { Component, OnInit } from '@angular/core';
// import { Router } from '@angular/router';
// import { AppService } from '../../app.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
// })
// export class HeaderComponent implements OnInit {
//   isShowSideNav = true;
//   loginDateTime: string = ''; 
//   imagePath = 'assets/img/genisis.png';

//   constructor(private appService: AppService, private router: Router) { 
//     this.updateLoginDateTime();
//   }

//   ngOnInit() {
//   }

//   updateLoginDateTime() {
//     const now = new Date();
//     this.loginDateTime = now.toLocaleString();
//   }

//   toggle(){
//     this.isShowSideNav = !this.isShowSideNav;
//     this.appService.sideNavShowEvent(this.isShowSideNav);
//   }

//   logout() {
//     sessionStorage.removeItem('userName');
//     this.router.navigate(['/login']);
//   }
// }



import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isShowSideNav = true;
  loginDateTime: string = ''; 
  imagePath = 'assets/img/genisis.png';
  user: any;
  selectedMenu: string = '';
  isShowSettingSubMenu: boolean = false;

  constructor(private appService: AppService, private router: Router) { 
    this.updateLoginDateTime();
  }

  ngOnInit() {
    this.getUser();
  }

  updateLoginDateTime() {
    const now = new Date();
    this.loginDateTime = now.toLocaleString();
  }

  getUser() {
    this.user = sessionStorage.getItem('userName')?.toUpperCase();
    return this.user;
  }

  toggle(){
    this.isShowSideNav = !this.isShowSideNav;
    this.appService.sideNavShowEvent(this.isShowSideNav);
  }

  toggleSettingsSubMenu() {
    this.isShowSettingSubMenu = !this.isShowSettingSubMenu;
  }

  logout() {
    sessionStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }

  // settings() {
  //   this.selectedMenu = 'settings';
  //   console.log('Settings clicked');
  //   // You might want to emit an event or perform an action here
  // }

  // document() {
  //   this.selectedMenu = '/fileUpload';
  //   console.log('Documents clicked');
  //   this.router.navigate(['/fileUpload']);
  // }

  // jira() {
  //   this.selectedMenu = '/jira';
  //   console.log('JIRA clicked');
  //   this.router.navigate(['/jira']);
  // }

  goToSettingsPage() {
    this.router.navigate(['/settings']); // Navigate to the settings page
  }
}