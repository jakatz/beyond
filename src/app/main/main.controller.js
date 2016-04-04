let _stateParams;

export class MainController {
  constructor (youtubeFeed, $stateParams) {
    'ngInject';
    _stateParams = $stateParams

    this.feed = youtubeFeed;
    if (_stateParams.id) this.flag = this.feed.find(flag => flag.id === _stateParams.id);
  }

  convertDate(date) {
    return moment(date).format('MMM Do, YYYY')
  }
}
