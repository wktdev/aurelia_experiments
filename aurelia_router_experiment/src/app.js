export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';

    config.map([
      {route: ['','home'], name: 'home', moduleId: 'components/home/home', nav: true, title: 'Home'},
      {route: ['settings'], name: 'settings', moduleId: '/settings/settings', nav: true, title: 'Settings'}
    ]);


    this.router = router;

    console.log(router)

  }
}