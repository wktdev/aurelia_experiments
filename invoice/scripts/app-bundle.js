define('app',['exports', 'components/work-entry'], function (exports, _workEntry) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.App = undefined;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var App = exports.App = function () {
    function App() {
      _classCallCheck(this, App);

      this.heading = "works";
      this.workEntries = [];
      this.workDate = '';
      this.workItem = '';
      this.workPayRate = '';
      this.workHours = '';
      this.workPayment = '';
    }

    App.prototype.addWorkEntry = function addWorkEntry() {

      this.workEntries.push(new _workEntry.WorkEntry(this.workDate, this.workItemm, this.workPayRate, this.workHours, this.workPayment));
    };

    App.prototype.removeWorkEntry = function removeWorkEntry(workEntry) {

      var index = this.workEntries.indexOf(workEntry);
      if (index !== -1) {
        this.workEntries.splice(index, 1);
      }
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
define('components/todos',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Todo = exports.Todo = function Todo(description) {
    _classCallCheck(this, Todo);

    this.description = description;
    this.done = false;
  };
});
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('components/work-entry',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var WorkEntry = exports.WorkEntry = function WorkEntry(date, item, payRate, hours, payment) {
    _classCallCheck(this, WorkEntry);

    this.date = date;
    this.item = item;
    this.payRate = payRate;
    this.hours = hours;
    this.payment = payment;
  };
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\n  <h1>${heading}</h1>\n\n  <form submit.trigger=\"addWorkEntry()\">\n    <input type=\"date\" value.bind=\"workDate\">\n    <input type=\"string\" value.bind=\"workItem\">\n    <input type=\"number\" value.bind=\"workPayRate\">\n    <input type=\"number\" value.bind=\"workHours\">\n    <input type=\"number\" value.bind=\"workPayment\">\n    <button type=\"submit\">Add work</button>\n  </form>\n\n  <ul>\n    <li repeat.for=\"work of workEntries\">\n    <input type=\"date\" value.bind=\"work.date\">\n    <input type=\"string\" value.bind=\"work.item\">\n    <input type=\"number\" value.bind=\"work.payRate\">\n    <input type=\"number\" value.bind=\"work.hours\">\n    <input type=\"number\" value.bind=\"work.payment\">\n    <button click.trigger=\"removeWorkEntry(work)\">Remove</button>\n    </li>    \n  </ul>\n</template>"; });
//# sourceMappingURL=app-bundle.js.map