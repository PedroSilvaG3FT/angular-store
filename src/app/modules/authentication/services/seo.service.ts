import { Injectable } from '@angular/core';
import { filter, map, mergeMap } from 'rxjs';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

type DataRouteType = {
  [key: string]: string;
};
@Injectable({ providedIn: 'root' })
export class SEOService {
  private readonly titlePrefix: string = 'Template';

  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  public getRouteData(route = this.activatedRoute): DataRouteType {
    if (!!route.children.length) return this.getRouteData(route.children[0]);
    else return route.snapshot.data;
  }

  public init() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map((route) => {
          while (route.firstChild) route = route.firstChild;
          return route;
        }),
        filter((route) => route.outlet === 'primary'),
        mergeMap((route) => route.data)
      )
      .subscribe((event: DataRouteType) => this.updateTitle(event['title']));
  }

  private updateTitle(title: string) {
    const value = `${this.titlePrefix} ${title ? `- ${title}` : ''}`;
    this.title.setTitle(value);
  }
}
