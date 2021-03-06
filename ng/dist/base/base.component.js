"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BaseComponent = (function () {
    function BaseComponent() {
        this.contacts = new Array();
        this.lightbox = false;
        this.confirm = false;
        this.contacts = [
            {
                "id": 2,
                "name": "Vinoth",
                "number": "9962293024",
                "gender": "male"
            },
            {
                "id": 3,
                "name": "Naveen",
                "number": "9962293025",
                "gender": "male"
            },
            {
                "id": 4,
                "name": "Vivek",
                "number": "9962293026",
                "gender": "male"
            },
            {
                "name": "Rahul",
                "number": "4234234234",
                "id": 5
            },
            {
                "name": "Vikram",
                "number": "46448765",
                "id": 6
            }
        ];
    }
    BaseComponent.prototype.editContact = function (evt) {
        console.log(evt);
    };
    BaseComponent.prototype.showConfirm = function (evt) {
        this.confirm = true;
        this.lightbox = true;
        this.deleteContactObj = evt;
    };
    BaseComponent.prototype.deleteContact = function (evt) {
        var _this = this;
        if (evt == 'ok') {
            this.contacts.forEach(function (ele, ind) {
                if (ele.id == _this.deleteContactObj.id) {
                    _this.contacts.splice(ind, 1);
                }
            });
        }
        this.confirm = false;
        this.lightbox = false;
    };
    return BaseComponent;
}());
BaseComponent = __decorate([
    core_1.Component({
        selector: 'base',
        template: "\n\t\n        <div class=\"header\">\n\t\t\t<div class=\"icon icon-plus btn\" id=\"add_btn\"></div>\n            <div class=\"icon icon-search\"></div>\n            <!--<div class=\"search-input\"><input type=\"text\" class=\"search-text\" id=\"search_input\" placeholder=\"Type here to search\" oninput=\"document.dispatchEvent(new Event('search'))\"></div>-->\n            <div class=\"icon icon-menu btn\"></div>\n\t\t</div>\n        <div class=\"content\" id=\"contact_view\">\n           <contact *ngFor=\"let contact of contacts\" [contact]=\"contact\" (onEdit)=\"editContact($event)\" (onDelete)=\"showConfirm($event)\"></contact>\n\n         </div>\n        <div class=\"footer\">Total {{contacts.length}} contact(s)</div>\n\t\t<div class=\"light-box\" *ngIf=\"lightbox\"></div>\n\t\t<confirm (onConfirm)=\"deleteContact($event)\" *ngIf=\"confirm\"></confirm>\n    ",
        styles: ["\n    \n    \n    :host {\n\tposition: fixed;\n\twidth: 100%;\n\theight: 100%;\n\tmax-width: 480px;\n\ttransform: translateX(-50%) translateY(-50%);\n\tleft: 50%;\n\ttop: 50%;\n\tfont-family: calibri;\n\tdisplay: block;\n}\n\n.header {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 50px;\n\tbackground-color: #529aff;\n}\n\n.content {\n\tposition: absolute;\n\twidth: 100%;\n\ttop: 50px;\n\tbottom: 30px;\n\tbackground-color: #f9fcff;\n\toverflow-y: auto;\n\toverflow-x: hidden;\n}\n\n.footer {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 30px;\n\tbottom: 0;\n\tbackground-color: #529aff;\n\tcolor: white;\n\tpadding-top: 7px;\n\tbox-sizing: border-box;\n\tpadding-left: 10px;\n}\n\n.icon-plus {\n\tbackground-image: url('ng/dist/img/add.png');\n\tfloat: right;\n\tmargin-top: 10px;\n\tmargin-right: 10px;\n}\n\n.icon-search {\n\tbackground-image: url('ng/dist/img/search.png');\n\tfloat: right;\n\tmargin-top: 10px;\n\tmargin-right: 10px;\n}\n\n.icon-menu {\n\tbackground-image: url('ng/dist/img/menu.png');\n\tfloat: left;\n\tmargin-top: 10px;\n\tmargin-left: 10px;\n}\n\n.light-box {\n\tbackground-color: rgba(0, 0, 0, 0.5);\n\twidth: 100%;\n\theight: 100%;\n\tposition: absolute;\n}\n\n@media only screen and (min-width: 500px) {\n\t:host {\n\t\theight: 80%;\n\t}\n\t.header {\n\t\tborder-top-left-radius: 3px;\n\t\tborder-top-right-radius: 3px;\n\t}\n\t.footer {\n\t\tborder-bottom-left-radius: 3px;\n\t\tborder-bottom-right-radius: 3px;\n\t}\n}\n\n"]
    }),
    __metadata("design:paramtypes", [])
], BaseComponent);
exports.BaseComponent = BaseComponent;
//# sourceMappingURL=base.component.js.map