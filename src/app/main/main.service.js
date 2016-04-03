let _http;

export class MainService {
  constructor($http) {
    "ngInject";

    _http = $http;
  }

  getItems() {
    return _http.get('https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw')
      .then(res => res.data.items)
  }
}