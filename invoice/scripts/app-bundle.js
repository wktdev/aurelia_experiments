define('app',["exports"], function (exports) {
  "use strict";

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

      this.numberOfFields = 0;
      this.counter = 0;
      this.form = { date: "", item: "", payRate: 0, hours: 0, payTotal: 0 }, this.formList = [];
    }

    App.prototype.addWorkForm = function addWorkForm() {
      this.formList.push(this.form);
      console.log(this.formList);
    };

    App.prototype.getDateTimeSpan = function getDateTimeSpan() {};

    App.prototype.setAllPayRate = function setAllPayRate() {};

    App.prototype.setAllHours = function setAllHours() {};

    App.prototype.setAllItem = function setAllItem() {};

    App.prototype.addMultipleWorkForms = function addMultipleWorkForms(num) {
      for (var i = 0; i < num; i += 1) {
        this.addWorkForm();
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
define('components/work-form/work-form',["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	function _classCallCheck(instance, Constructor) {
		if (!(instance instanceof Constructor)) {
			throw new TypeError("Cannot call a class as a function");
		}
	}

	var WorkForm = exports.WorkForm = function WorkForm() {
		_classCallCheck(this, WorkForm);
	};
});
define('text!app.html', ['module'], function(module) { module.exports = "<template> \r\n <require from=\"components/work-form/work-form.html\"></require>\r\n \r\n<h1>App</h1>\r\n\r\n<h2>Click to create new form</h2>\r\n\r\n\r\n <form>\r\n \t<input type=\"number\" value.bind=\"numberOfFields\">\r\n    <button type=\"submit\" click.trigger=\"addMultipleWorkForms(numberOfFields)\">Add Work Form</button>\r\n </form>\r\n\t\r\n\r\n<h1>${numberOfFields}</h1>\r\n\r\n<div>n</div>\r\n\r\n <work-form></work-form>\r\n\r\n</template>"; });
define('text!components/work-form/work-form.html', ['module'], function(module) { module.exports = "<template>\r\n\r\n\t\r\n<h1>Work form</h1>\r\n\r\n</template>"; });
//# sourceMappingURL=app-bundle.js.map