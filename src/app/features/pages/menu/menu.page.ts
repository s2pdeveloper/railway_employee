import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menu!: string;
  private activatedRoute = inject(ActivatedRoute);
  constructor() {}
  public appPages = [
    { title: 'Bio data', url: '/default/', icon: 'alert-circle' },
    { title: 'Salary', url: '/default/', icon: 'call' },
  ];
  public labels = [{ title: '', url: '', icon: '' }];
  ngOnInit() {
    this.menu = this.activatedRoute.snapshot.paramMap.get('id') as string;
    console.log('this.menu', this.menu);
  }
}
