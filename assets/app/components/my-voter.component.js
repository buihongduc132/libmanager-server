System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MyVoterComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyVoterComponent = (function () {
                function MyVoterComponent() {
                    this.onVoted = new core_1.EventEmitter();
                    this.voted = false;
                }
                MyVoterComponent.prototype.vote = function (agree) {
                    this.onVoted.emit(agree);
                    this.voted = true;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], MyVoterComponent.prototype, "name", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], MyVoterComponent.prototype, "onVoted", void 0);
                MyVoterComponent = __decorate([
                    core_1.Component({
                        selector: 'my-voter',
                        templateUrl: 'app/templates/my-voter.component.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyVoterComponent);
                return MyVoterComponent;
            }());
            exports_1("MyVoterComponent", MyVoterComponent);
        }
    }
});
//# sourceMappingURL=my-voter.component.js.map