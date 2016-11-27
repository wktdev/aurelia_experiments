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

      this.heading = "Invoice App";
      this.workEntries = [];
      this.workDate = '';
      this.workItem = '';
      this.workPayRate = '';
      this.workHours = '';
      this.workPayment = '';
    }

    App.prototype.addWorkEntry = function addWorkEntry() {

      this.workEntries.push(new _workEntry.WorkEntry(this.workDate, this.workItem, this.workPayRate, this.workHours, this.workPayment));
      console.log(this.workItem);
    };

    App.prototype.updateWorkEntry = function updateWorkEntry(workEntry) {
      var index = this.workEntries.indexOf(workEntry);
      var obj = new _workEntry.WorkEntry(this.workDate, this.workItemm, this.workPayRate, this.workHours, this.workPayment);
      this.workEntries[index] = obj;
      console.log(this.workEntries);
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
define('resources/index',["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.configure = configure;
  function configure(config) {}
});
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <h1>${heading}</h1>\r\n\r\n  <form submit.trigger=\"addWorkEntry()\">\r\n    <input type=\"date\" value.bind=\"workDate\">\r\n    <input type=\"string\" value.bind=\"workItem\">\r\n    <input type=\"number\" value.bind=\"workPayRate\">\r\n    <input type=\"number\" value.bind=\"workHours\">\r\n    <input type=\"number\" value.bind=\"workPayment\">\r\n    <button type=\"submit\">Add work</button>\r\n  </form>\r\n\r\n  <ul>\r\n    <li repeat.for=\"work of workEntries\">\r\n    <label for=\"date\">Date</label>\r\n    <input type=\"date\" value.bind=\"work.date\" name=\"date\">\r\n      <label for=\"item\">Item</label>\r\n    <input type=\"string\" value.bind=\"work.item\" name=\"item\">\r\n      <label for=\"pay-rate\">Pay rate</label>\r\n    <input type=\"number\" value.bind=\"work.payRate\" name=\"pay-rate\">\r\n      <label for=\"hours\">Hours</label>\r\n    <input type=\"number\" value.bind=\"work.hours\" name=\"hours\">\r\n      <label for=\"payment\">Payment</label>\r\n    <input type=\"number\" value.bind=\"work.payment\" name=\"payment\">\r\n    <button click.trigger =\"updateWorkEntry(work)\">Update</button>\r\n    <button click.trigger=\"removeWorkEntry(work)\">Remove</button>\r\n    </li>    \r\n  </ul>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map