define('app',['exports', 'components/work-form/work-entry'], function (exports, _workEntry) {
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

      this.numberOfFields = 0;
      this.workEntries = [];
      this.date = '';
      this.item = '';
      this.payRate = 0;
      this.hours = 0;
      this.payment = 0;
    }

    App.prototype.addWorkEntry = function addWorkEntry() {
      this.workEntries.push(new _workEntry.Work(this.date, this.item, this.payRate, this.hours, this.payment));
    };

    App.prototype.getDateTimeSpan = function getDateTimeSpan() {};

    App.prototype.setAllPayRate = function setAllPayRate() {};

    App.prototype.setAllHours = function setAllHours() {};

    App.prototype.setAllItem = function setAllItem() {};

    App.prototype.addMultipleWorkForms = function addMultipleWorkForms(num) {
      for (var i = 0; i < num; i += 1) {
        this.addWorkEntry();
      }
    };

    App.prototype.setFieldData = function setFieldData(index, val) {
      this.formList[index].date = val;
    };

    App.prototype.setFieldPayRate = function setFieldPayRate(index, val) {
      this.formList[index].payRate = val;
    };

    App.prototype.setHours = function setHours(index, val) {
      this.formList[index].hours = val;
    };

    App.prototype.calculatePayTotal = function calculatePayTotal(index, val) {
      var payRate = this.formList[index].payRate;
      var hours = this.formList[index].hours;
      this.formList[index].payTotal = payRate * hours;
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
define('components/work-form/work-entry',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Todo = exports.Todo = function Todo(date, item, payRate, hours, payment) {
    _classCallCheck(this, Todo);

    this.date = date;
    this.item = item;
    this.payRate = payRate;
    this.hours = hours;
    this.payment = payment;
  };
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n   <!--  <require from=\"components/work-form/work-form.html\"></require> -->\r\n    <h1>App</h1>\r\n    <h2>Click to create new form</h2>\r\n  \r\n  <form submit.trigger=\"addWorkEntry()\">\r\n    <input type=\"text\" value.bind=\"payRate\">\r\n    <button type=\"submit\">Add</button>\r\n  </form>\r\n\r\n\r\n\r\n    <ul>\r\n        <li repeat.for=\"workEntry of workEntries\">\r\n            <input type=\"date\" value.bind=\"workEntry.date\">\r\n            <input type=\"text\" value.bind=\"workEntry.item\">\r\n            <input type=\"number\" value.bind=\"workEntry.payRate\">\r\n            <input type=\"number\" value.bind=\"workEntry.hours\">\r\n            <input type=\"number\" value.bind=\"workEntry.payment\">\r\n    \r\n           <!--  <button click.trigger=\"removeTodo(todo)\">Remove</button> -->\r\n        </li>\r\n    </ul>\r\n\r\n\r\n\r\n</template>\r\n"; });
//# sourceMappingURL=app-bundle.js.map