import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  {
    path: 'dashboard',
    component: DashboardComponent
    // 路由现在指向了 popup 出口
    // outlet: 'popup' <a [routerLink]="[{ outlets: { popup: ['dashboard'] } }]">Contact</a>
  },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      // 每个导航生命周期中的事件输出到浏览器的控制台。 这应该只用于调试
      { enableTracing: true }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// <a [routerLink]="['/hero', hero.id]">

// ngOnInit() {
//   this.hero$ = this.route.paramMap.pipe(
//     switchMap((params: ParamMap) =>
//       this.service.getHero(params.get('id')))
//   );
// }

// ParamMap; API;
//   has(name);
//   如果参数名位于参数列表中; ，就返回; true; 。
//   get(name);
//   如果这个; map; 中有参数名对应的参数值; （字符串; ），就返回它; ，否则返回; null; 。如果参数值实际上是一个数组; ，就返回它的第一个元素; 。
//   getAll(name);
//   如果这个; map; 中有参数名对应的值; ，就返回一个字符串数组; ，否则返回空数组; 。当一个参数名可能对应多个值的时候; ，请使用; getAll; 。
//   keys;
//   返回这个; map; 中的所有参数名组成的字符串数组; 。

// gotoHeroes() {
//   this.router.navigate(['/heroes']);
//   this.router.navigate(['/heroes', { id: heroId, foo: 'foo' }]);
//   this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });
//   this.router.navigate([{ outlets: { popup: null }}]);
// }
