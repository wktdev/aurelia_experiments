define('app',['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);
    }

    App.prototype.configureRouter = function configureRouter(config, router) {
      config.title = 'Aurelia';
      config.map([{ route: ['', 'home'], name: 'home', moduleId: 'home/home', nav: true, title: 'Home' }, { route: 'settings', name: 'settings', moduleId: 'settings/settings', nav: true, title: 'Settings' }]);
      this.router = router;
    };

    return App;
  }();
});
define('environment',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    debug: true,
    testing: true
  };
});
define('main',['exports', './environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;

  var _environment2 = _interopRequireDefault(_environment);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Promise.config({
    longStackTraces: _environment2.default.debug,
    warnings: {
      wForgottenReturn: false
    }
  });

  function configure(aurelia) {
    aurelia.use.standardConfiguration().feature('resources');

    if (_environment2.default.debug) {
      aurelia.use.developmentLogging();
    }

    if (_environment2.default.testing) {
      aurelia.use.plugin('aurelia-testing');
    }

    aurelia.start().then(function () {
      return aurelia.setRoot();
    });
  }
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('home/home',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Home = exports.Home = function Home() {
    _classCallCheck(this, Home);
  };
});
define('settings/settings',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Settings = exports.Settings = function Settings() {
    _classCallCheck(this, Settings);
  };
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <require from=\"components/navigation.html\"></require>\n  <h1>Aurelia Router Demo</h1>\n  <navigation router.bind=\"router\" ></navigation>\n\n    <router-view></router-view>\n\n</template>\n"; });
define('text!components/navigation.html', ['module'], function(module) { module.exports = "<template bindable=\"router\">\n  <nav>\n    <ul>\n      <li repeat.for=\"row of router.navigation\">\n        <a href.bind=\"row.href\">${row.title}</a>\n      </li>\n    </ul>\n  </nav>\n</template>\n"; });
define('text!home/home.html', ['module'], function(module) { module.exports = "<template>\n  <h2>Home</h2>\n</template>\n"; });
define('text!settings/settings.html', ['module'], function(module) { module.exports = "<template>\n  <h2>Settings</h2>\n</template>\n"; });
//# sourceMappingURL=app-bundle.js.map