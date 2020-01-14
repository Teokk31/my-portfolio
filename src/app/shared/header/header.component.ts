import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean;

  constructor() { }

  ngOnInit() {
    this.isCollapsed = window.innerWidth < 992;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event?: { target: { innerWidth: number; }; }) {
    if (event.target.innerWidth > 991) {
      this.isCollapsed = false;
    } else {
      this.isCollapsed = true;
    }
  }

  toggleMenu(): void {
    this.isCollapsed = !this.isCollapsed;
  }

}
