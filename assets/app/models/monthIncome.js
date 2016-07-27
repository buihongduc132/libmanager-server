System.register(['./baseObject.ts'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var baseObject_ts_1;
    var MonthIncome;
    return {
        setters:[
            function (baseObject_ts_1_1) {
                baseObject_ts_1 = baseObject_ts_1_1;
            }],
        execute: function() {
            MonthIncome = (function (_super) {
                __extends(MonthIncome, _super);
                function MonthIncome() {
                    _super.apply(this, arguments);
                }
                return MonthIncome;
            }(baseObject_ts_1.BaseObject));
            exports_1("MonthIncome", MonthIncome);
        }
    }
});
//# sourceMappingURL=monthIncome.js.map