define('app',['exports', 'moment', 'components/work-entry'], function (exports, _moment, _workEntry) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.App = undefined;

    var _moment2 = _interopRequireDefault(_moment);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var App = exports.App = function () {
        function App() {
            _classCallCheck(this, App);

            this.heading = "Invoice App";
            this.startDate = '';
            this.endDate = '';
            this.workEntries = [];
            this.workDate = '';
            this.workItem = '';
            this.workPayRate = '';
            this.workHours = '';
            this.workPayment = '';
        }

        App.prototype.addWorkEntry = function addWorkEntry(workDate) {

            this.workEntries.push(new _workEntry.WorkEntry(workDate, this.workItem, this.workPayRate, this.workHours, this.workPayment));
        };

        App.prototype.addWorkEnteries = function addWorkEnteries() {

            var startDateArr = this.startDate.split("-");
            var endDateArr = this.endDate.split("-");
            var startDate = (0, _moment2.default)(startDateArr);
            var endDate = (0, _moment2.default)(endDateArr);

            var numberOfDays = endDate.diff(startDate, 'days') + 1;

            var currentDate = new Date(this.startDate);
            console.log(currentDate + " start date");

            for (var i = 0; i < numberOfDays; i += 1) {
                currentDate.setDate(currentDate.getDate() + 1);
                var answer = (0, _moment2.default)(currentDate).format('YYYY-MM-DD');
                this.addWorkEntry(answer);
            }
        };

        App.prototype.updateWorkEntry = function updateWorkEntry(workEntry) {
            var index = this.workEntries.indexOf(workEntry);
            var obj = new _workEntry.WorkEntry(workEntry.date, workEntry.item, workEntry.payRate, workEntry.hours, workEntry.payment);
            this.workEntries[index] = obj;
        };

        App.prototype.calculatePay = function calculatePay(workEntry) {
            var index = this.workEntries.indexOf(workEntry);
            var payment = workEntry.payRate * workEntry.hours;
            this.workEntries[index].payment = payment;
        };

        App.prototype.updateWorkEntryField = function updateWorkEntryField(workEntry) {
            var index = this.workEntries.indexOf(workEntry);
            this.workEntries[index] = workEntry;
            console.log(this.workEntries);
            this.calculatePay(workEntry);
        };

        App.prototype.removeWorkEntry = function removeWorkEntry(workEntry) {
            console.log(this.workEntries.indexOf(workEntry));
            var index = this.workEntries.indexOf(workEntry);
            this.workEntries.splice(index, 1);
        };

        App.prototype.copyWorkEntry = function copyWorkEntry(workEntry) {
            var obj = new _workEntry.WorkEntry(workEntry.date, workEntry.item, workEntry.payRate, workEntry.hours, workEntry.payment);
            var index = this.workEntries.indexOf(workEntry);

            this.workEntries.splice(index, 0, obj);
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
define('sandbox_ignore',[], function () {
  "use strict";

  console.log("2016-11-02".split("-"));
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
define('text!app.html', ['module'], function(module) { module.exports = "<template>\r\n  <h1>${heading}</h1>\r\n\r\n  <form submit.trigger=\"addWorkEnteries()\">\r\n    <input type=\"date\" value.bind=\"startDate\">\r\n    <input type=\"date\" value.bind=\"endDate\">\r\n    <button type=\"submit\">Add work</button>\r\n  </form>\r\n\r\n  <ul>\r\n    <li repeat.for=\"work of workEntries\">\r\n    <label for=\"date\">Date</label>\r\n    <input type=\"date\" value.bind=\"work.date\" change.trigger=\"updateWorkEntryField(work)\" keyup.trigger=\"updateWorkEntryField(work)\"  name=\"date\">\r\n      <label for=\"item\">Item</label>\r\n    <input type=\"string\" value.bind=\"work.item\" change.trigger=\"updateWorkEntryField(work)\"  keyup.trigger=\"updateWorkEntryField(work)\"  name=\"item\">\r\n      <label for=\"pay-rate\">Pay rate</label>\r\n    <input type=\"number\" value.bind=\"work.payRate\" change.trigger=\"updateWorkEntryField(work)\" keyup.trigger=\"updateWorkEntryField(work)\"  name=\"pay-rate\">\r\n      <label for=\"hours\">Hours</label>\r\n    <input type=\"number\" value.bind=\"work.hours\"  change.trigger=\"updateWorkEntryField(work)\"  keyup.trigger=\"updateWorkEntryField(work)\"  name=\"hours\">\r\n      <label for=\"payment\">Payment</label>\r\n    <input type=\"number\" value.bind=\"work.payment\" change.trigger=\"updateWorkEntryField(work)\" keyup.trigger=\"updateWorkEntryField(work)\"  name=\"payment\">\r\n    <button click.trigger=\"updateWorkEntry(work)\">Update</button>\r\n    <button click.trigger=\"removeWorkEntry(work)\">Remove</button>\r\n    <button click.trigger=\"copyWorkEntry(work)\">Copy</button>\r\n    </li>    \r\n  </ul>\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map