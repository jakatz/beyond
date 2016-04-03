export class MainController {
  constructor (MainService) {
    'ngInject';

    MainService.getItems();
  }
}
