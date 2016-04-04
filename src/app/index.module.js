import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { MainService } from './main/main.service';

angular.module('beyond', ['ui.router', 'ngMaterial', 'youtube-embed', 'bw.paging'])
  .config(config)
  .config(routerConfig)
  .run(runBlock)
  .controller('MainController', MainController)
  .service('MainService', MainService)