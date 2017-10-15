webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__people_people_component__ = __webpack_require__("../../../../../src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__publications_publications_component__ = __webpack_require__("../../../../../src/app/publications/publications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__research_research_component__ = __webpack_require__("../../../../../src/app/research/research.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__resources_resources_component__ = __webpack_require__("../../../../../src/app/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__teaching_teaching_component__ = __webpack_require__("../../../../../src/app/teaching/teaching.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_component__ = __webpack_require__("../../../../../src/app/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'people', component: __WEBPACK_IMPORTED_MODULE_4__people_people_component__["a" /* PeopleComponent */] },
    { path: 'research', component: __WEBPACK_IMPORTED_MODULE_6__research_research_component__["a" /* ResearchComponent */] },
    { path: 'publications', component: __WEBPACK_IMPORTED_MODULE_5__publications_publications_component__["a" /* PublicationsComponent */] },
    { path: 'resources', component: __WEBPACK_IMPORTED_MODULE_7__resources_resources_component__["a" /* ResourcesComponent */] },
    { path: 'teaching', component: __WEBPACK_IMPORTED_MODULE_8__teaching_teaching_component__["a" /* TeachingComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__["a" /* ContactComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(appRoutes
            // { enableTracing: true } // <-- for debugging
            )
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
        ]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n  \n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\n  <nav class=\"navbar\" role=\"navigation\">\n    <div class=\"container\">\n      <div class=\"menu-container\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".nav-collapse\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"toggle-icon\"></span>\n        </button>\n        <div class=\"navbar-logo\">\n          <a class=\"navbar-logo-wrap\"\n             routerLink=\"home\"\n             routerLinkActive=\"active\">\n            <img src=\"assets/img/SVLLogo.svg\" alt=\"SVL\" style=\"width:60px;\">\n          </a>\n        </div>\n      </div>\n\n      <div class=\"collapse navbar-collapse nav-collapse\">\n        <div class=\"menu-container\">\n          <ul class=\"navbar-nav navbar-nav-right\">\n            <li class=\"nav-item\" *ngFor=\"let section of sections\">\n              <a routerLink=\"/{{section.id}}\"\n                 routerLinkActive=\"active\"\n                 class=\"nav-item-child\">{{section.name}}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </nav>\n</header>\n\n<router-outlet></router-outlet>\n\n<footer>\n  <div class=\"content-footer container\">\n    <div class=\"row\">\n      <div class=\"col-xs-6\">\n        <h2>Contact us</h2>\n        <p class=\"margin-b-0\">Admin: Tin Tin Wisniewski\n          <br>Email: tintinyw at cs dot stanford dot edu\n          <br>Phone: (650) 723-3819\n          <br>Fax: (650) 725-1449\n        </p>\n      </div>\n      <div class=\"col-xs-6 text-right\">\n        <h2>-</h2>\n        <p class=\"margin-b-0\">\n          <br>Computer Science Department\n          <br>Stanford University\n          <br>353 Serra Mall, Stanford, CA 94305-9025.\n        </p>\n      </div>\n    </div>\n  </div>\n</footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Section */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Section = (function () {
    function Section() {
    }
    return Section;
}());

var SECTIONS = [
    { id: 'people', name: 'People' },
    { id: 'research', name: 'Research' },
    { id: 'publications', name: 'Publications' },
    { id: 'resources', name: 'Resources' },
    { id: 'teaching', name: 'Teaching' },
];
var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'SVL';
        this.sections = SECTIONS;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.router.events.subscribe(function (event) {
            // ignore if routing to an anchor tag
            if (event.url.indexOf('#') > -1) {
                return;
            }
            if (!(event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__publications_publications_filter_pipe__ = __webpack_require__("../../../../../src/app/publications/publications-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__people_people_component__ = __webpack_require__("../../../../../src/app/people/people.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__publications_publications_component__ = __webpack_require__("../../../../../src/app/publications/publications.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__research_research_component__ = __webpack_require__("../../../../../src/app/research/research.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__resources_resources_component__ = __webpack_require__("../../../../../src/app/resources/resources.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__teaching_teaching_component__ = __webpack_require__("../../../../../src/app/teaching/teaching.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__not_found_component__ = __webpack_require__("../../../../../src/app/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_9__people_people_component__["a" /* PeopleComponent */],
            __WEBPACK_IMPORTED_MODULE_11__research_research_component__["a" /* ResearchComponent */],
            __WEBPACK_IMPORTED_MODULE_4__publications_publications_filter_pipe__["a" /* PublicationsFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_10__publications_publications_component__["a" /* PublicationsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__resources_resources_component__["a" /* ResourcesComponent */],
            __WEBPACK_IMPORTED_MODULE_13__teaching_teaching_component__["a" /* TeachingComponent */],
            __WEBPACK_IMPORTED_MODULE_7__contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_14__not_found_component__["a" /* PageNotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Google Map -->\n<div id=\"map\" class=\"map height-300\"></div>\n\n<!-- Contact List -->\n<div class=\"section-seperator\">\n  <div class=\"content-md container\">\n    <div class=\"row\">\n      <!-- Contact List -->\n      <div class=\"col-sm-6 sm-margin-b-50\">\n        <h4><a href=\"#\">Tin Tin Wisniewski</a> <span class=\"text-uppercase margin-l-20\">Admin</span></h4>\n        <ul class=\"list-unstyled contact-list\">\n          <li><i class=\"margin-r-10 color-base icon-call-out\"></i>(650) 723-3819 </li>\n          <li><i class=\"margin-r-10 color-base icon-envelope\"></i>tintinyw@stanford.edu</li>\n        </ul>\n        <p><strong>Address</strong><br>\n          Computer Science Department, <br>Stanford University <br>353 Serra Mall, Stanford, CA 94305-9025.</p>\n      </div>\n      <!-- End Contact List -->\n\n      <!-- Contact List -->\n      <div class=\"col-sm-6 sm-margin-b-50\">\n        <h4><a href=\"#\">Silvio Savarese</a> <span class=\"text-uppercase margin-l-20\">Associate Professor</span></h4>                     \n        <ul class=\"list-unstyled contact-list\">\n          <li><i class=\"margin-r-10 color-base icon-call-out\"></i>TBD</li>\n          <li><i class=\"margin-r-10 color-base icon-envelope\"></i>ssilvio@stanford.edu </li>\n        </ul>\n        <p><strong>Address</strong><br>353 Serra Mall, Gates Building, <br>Stanford, CA 94305-9020</p>\n      </div>\n      <!-- End Contact List -->\n    </div>\n    <!--// end row -->\n  </div>\n</div>\n<!-- End Contact List -->\n\n<!-- Comment -->\n<div class=\"section-seperator\">\n  <div class=\"content-md container\">\n    <div class=\"row margin-b-40\">\n      <div class=\"col-sm-7\">\n        <h2>Join our lab</h2>\n        <p>We are always looking for outstanding prospective PhD candidates. If you are interested in joining the Stanford Vision and Learning Lab as a PhD candidate, please apply for admission to the department, indicating in your application your interest in the CStanford Vision and Learning Lab, Computer Science Department. If you are interested in a Postdoctoral Researcher position, please contact Prof. Savarese.</p>\n      </div>\n    </div>\n    <!--// end row -->\n\n    <div class=\"row\">\n      <div class=\"col-md-7 col-sm-7\">\n        <form>\n          <div class=\"margin-b-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\n          </div>\n          <div class=\"margin-b-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n          </div>\n          <div class=\"margin-b-10\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Phone\">\n          </div>\n          <div class=\"margin-b-20\">\n            <textarea class=\"form-control\" rows=\"5\" placeholder=\"Message\"></textarea>\n          </div>\n          <button type=\"submit\" class=\"btn-theme btn-theme-sm btn-base-bg text-uppercase\">Submit</button>\n        </form>\n      </div>\n    </div>\n    <!--// end row -->\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/contact/contact.component.html")
    })
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"overflow-h\">\n  <div class=\"content-md container\">\n\n    <div class=\"row margin-b-40\">\n      <div class=\"col-sm-9\">\n        <span>WELCOME TO</span>\n        <h2>Stanford Vision and Learning Lab</h2>\n        <p>The Stanford Vision and Learning Lab (SVL) at Stanford is directed by Professors Silvio Savarese, Fei-Fei Li, and Juan Carlos Niebles. We are tackling fundamental open problems in computer vision research and are intrigued by visual functionalities that give rise to semantically meaningful interpretations of the visual world.</p>\n      </div>\n    </div>\n\n    <!-- Team -->\n    <div class=\"row\">\n\n      <div class=\"col-sm-4 sm-margin-b-50\">\n        <div class=\"bg-color-white margin-b-20\">\n          <div class=\"wow zoomIn\" data-wow-duration=\".3\" data-wow-delay=\".1s\">\n            <img class=\"img-responsive\" src=\"assets/img/770x860/01.jpg\" alt=\"Team Image\">\n          </div>\n        </div>\n        <h4><a href=\"http://cvgl.stanford.edu/silvio/\">Silvio Savarese</a></h4>\n        <p>ASSOCIATE PROFESSOR <br>DIRECTOR, <br>SAIL-TOYOTA CENTER FOR AI RESEARCH </p>\n        <a class=\"link\" href=\"http://cvgl.stanford.edu/silvio/\">Read More</a>\n      </div>\n      \n      <div class=\"col-sm-4 sm-margin-b-50\">\n        <div class=\"bg-color-white margin-b-20\">\n          <div class=\"wow zoomIn\" data-wow-duration=\".3\" data-wow-delay=\".1s\">\n            <img class=\"img-responsive\" src=\"assets/img/770x860/02.jpg\" alt=\"Team Image\">\n          </div>\n        </div>\n        <h4><a href=\"http://vision.stanford.edu/feifeili/\">Fei-Fei Li</a><span class=\"text-uppercase margin-l-20\"><br>(publishes under Li Fei-Fei)</span></h4>\n        <p>ASSOCIATE PROFESSOR DIRECTOR, <br>STANFORD AI LAB</p>\n        <a class=\"link\" href=\"http://vision.stanford.edu/feifeili/\">Read More</a>\n      </div>\n\n      \n      <div class=\"col-sm-4 sm-margin-b-50\">\n        <div class=\"bg-color-white margin-b-20\">\n          <div class=\"wow zoomIn\" data-wow-duration=\".3\" data-wow-delay=\".1s\">\n            <img class=\"img-responsive\" src=\"assets/img/770x860/03.jpg\" alt=\"Team Image\">\n          </div>\n        </div>\n        <h4><a href=\"http://www.niebles.net/\">Juan Carlos Niebles</a></h4>\n        <p>SENIOR RESEARCH SCIENTIST, <br>ASSOCIATE DIRECTOR, <br>SAIL-TOYOTA CENTER FOR AI RESEARCH </p>\n        <a class=\"link\" href=\"http://www.niebles.net/\">Read More</a>\n      </div>\n      <!-- End Team -->\n    </div>\n    <!--// end row -->\n  </div>\n</div>\n\n\n<div class=\"bg-color-sky-light\">\n  <div class=\"content-md container\">\n\n    <div class=\"row margin-b-40\">\n      <div class=\"col-sm-9\">\n        <h2>About SVL</h2>\n        <p>Our research addresses the theoretical foundations and practical applications of computational vision. We are focused on discovering and proposing the fundamental principles, algorithms and implementations for solving high-level visual perception and cognition problems involving computational geometry, automated image and video analysis, and visual reasoning. At the same time, our curiosity leads us to study the underlying neural mechanisms that enable the human visual system to perform high level visual tasks with amazing speed and efficiency.</p>\n      </div>\n    </div>\n    <!--// end row -->\n\n    <div class=\"masonry-grid\">\n      <div class=\"masonry-grid-sizer col-xs-6 col-sm-6 col-md-1\"></div>\n      <div class=\"masonry-grid-item col-xs-12 col-sm-6 col-md-8\">\n        <!-- Work -->\n        <div class=\"work\">\n          <div class=\"work-overlay\">\n            <img class=\"full-width img-responsive\" src=\"assets/img/800x400/01.jpg\" alt=\"SVL Group Image\">\n          </div>\n          <div class=\"work-content\">\n            <h3 class=\"color-white margin-b-5\">Our Group</h3>\n            <p class=\"color-white margin-b-0\">Join us today and we would love to meet you</p>\n          </div>\n          <a class=\"content-wrapper-link\" href=\"people.html\"></a>\n        </div>\n      </div>\n\n      <div class=\"masonry-grid-item col-xs-6 col-sm-6 col-md-4\">\n        <div class=\"work\">\n          <div class=\"work-overlay\">\n            <img class=\"full-width img-responsive\" src=\"assets/img/397x400/01.jpg\" alt=\"Portfolio Image\">\n          </div>\n          <div class=\"work-content\">\n            <h3 class=\"color-white margin-b-5\">At CVPR</h3>\n            <p class=\"color-white margin-b-0\">SVL receives V100 award from NVIDIA CEO Jensen Huang at CVPR 2017</p>\n          </div>\n          <a class=\"content-wrapper-link\" href=\"https://blogs.nvidia.com/blog/2017/07/22/tesla-v100-cvpr-nvail/\"></a>\n        </div>\n      </div>\n\n      <div class=\"masonry-grid-item col-xs-6 col-sm-6 col-md-4\">\n        <div class=\"work\">\n          <div class=\"work-overlay\">\n            <img class=\"full-width img-responsive\" src=\"assets/img/397x300/01.jpg\" alt=\"Portfolio Image\">\n          </div>\n          <div class=\"work-content\">\n            <h3 class=\"color-white margin-b-5\">At ICML 2017</h3>\n            <p class=\"color-white margin-b-0\">SVL receives V100 award from NVIDIA CEO Jensen Huang at ICML 2017</p>\n          </div>\n          <a class=\"content-wrapper-link\" href=\"https://blogs.nvidia.com/blog/2017/08/07/ai-researchers-tesla-v100-nvail-isml/\"></a>\n        </div>\n      </div>\n\n      <div class=\"masonry-grid-item col-xs-6 col-sm-6 col-md-4\">\n        <div class=\"work\">\n          <div class=\"work-overlay\">\n            <img class=\"full-width img-responsive\" src=\"assets/img/397x300/02.jpg\" alt=\"Portfolio Image\">\n          </div>\n          <div class=\"work-content\">\n            <h3 class=\"color-white margin-b-5\">At ICCV 2017</h3>\n            <p class=\"color-white margin-b-0\">6 papers accepted at ICCV 2017</p>\n          </div>\n          <a class=\"content-wrapper-link\" href=\"http://iccv2017.thecvf.com/\"></a>\n        </div>\n      </div>\n\n      <div class=\"masonry-grid-item col-xs-6 col-sm-6 col-md-4\">\n        <div class=\"work\">\n          <div class=\"work-overlay\">\n            <img class=\"full-width img-responsive\" src=\"assets/img/397x300/03.jpg\" alt=\"Portfolio Image\">\n          </div>\n          <div class=\"work-content\">\n            <h3 class=\"color-white margin-b-5\">At CVPR 2017</h3>\n            <p class=\"color-white margin-b-0\">13 papers accepted at CVPR 2017</p>\n          </div>\n          <a class=\"content-wrapper-link\" href=\"http://openaccess.thecvf.com/CVPR2017.py\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Clients -->\n\n<div class=\"content-md container\">\n  <div class=\"row margin-b-40\">\n    <div class=\"col-md-12 col-xs-12\">\n      <h2>Press Coverage</h2>\n      <div class=\"col-md-6 col-xs-12\">\n        <a href=\"https://techcrunch.com/2017/06/20/tesla-hires-deep-learning-expert-andrej-karpathy-to-lead-autopilot-vision/\"><img src=\"assets/img/clients/01.png\" alt=\"Clients Logo\"></a>\n        <p>SVL Alumnus hired as Vice President of AI at Tesla. “Tesla hires deep learning expert Andrej Karpathy to lead Autopilot vision”</p>\n      </div>\n      <div class=\"col-md-6 col-xs-12\">\n        <a href=\"https://qz.com/1034972/the-data-that-changed-the-direction-of-ai-research-and-possibly-the-world/\"><img src=\"assets/img/clients/02.png\" alt=\"Clients Logo\"></a>\n        <p>Fei-Fei Li of SVL and her work on ImageNet is featured in Quartz. “The data that transformed AI research—and possibly the world”</p>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"bg-color-sky-light\">\n  <div class=\"content-md container\">\n    <div class=\"row margin-b-40\">\n      <div class=\"col-md-6 col-xs-12\">\n        <h2>Join The Lab</h2>\n        <p>We are always looking for outstanding prospective PhD candidates. If you are interested in joining the Stanford Vision and Learning Lab as a PhD candidate, please apply for admission to the department, indicating in your application your interest in the Stanford Vision and Learning Lab, Computer Science Department. If you are interested in a Postdoctoral Researcher position, please contact Prof. Savarese or Prof. Fei-Fei Li.</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/home/home.component.html")
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    return PageNotFoundComponent;
}());
PageNotFoundComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: '<h2>Page not found</h2>'
    })
], PageNotFoundComponent);

//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/people/people.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-color-sky-light section-separator\">\n  <div class=\"content container\">\n    <div class=\"row\">\n      <div id=\"sidebar\" class=\"sidebar-wrap col-md-3 col-xs-10 sm-margin-b-30\">\n        <div class=\"sidebar\">\n          <ul class=\"list-unstyled sidenav-position\">\n            <li class=\"side-nav\"><a [routerLink]=\"['/people']\"\n                                    fragment=\"faculty\"\n                                    (click)=\"onAnchorClick()\">Faculty</a></li>\n            <li *ngFor=\"let group of people.groups\"\n                class=\"side-nav\">\n              <a [routerLink]=\"['/people']\"\n                 fragment=\"{{groupHref(group)}}\"\n                 (click)=\"onAnchorClick()\">{{group.name}}</a>\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <div id=\"content\" class=\"content col-md-9 sm-margin-b-30\">\n        <div>\n          <h2 id=\"faculty\">Faculty</h2>\n          <ul class=\"row list-unstyled\">\n            <li class=\"col-md-4 col-xs-4\">\n              <img class=\"people-image\" src=\"assets/img/770x860/01.jpg\">\n              <p><a  class=\"name-title\" href=\"http://cvgl.stanford.edu/silvio/\">Silvio Savarese</a></p>\n              <span class=\"text-uppercase\">ASSOCIATE PROFESSOR \n                <br>DIRECTOR, \n                <br>SAIL-TOYOTA CENTER FOR AI RESEARCH \n                <br>COMPUTER SCIENCE DEPARTMENT\n              </span>\n              <p>Office: Room 154 Gates Bldg</p>\n              <p><i class=\"margin-r-10 color-base icon-call-out\"></i>(650) 725-3860</p>\n              <p><i class=\"margin-r-10 color-base icon-envelope\"></i>ssilvio at stanford dot edu</p>\n            </li>\n\n            <li class=\"col-md-4 col-xs-4\">\n              <img class=\"people-image\" src=\"assets/img/770x860/02.jpg\">\n              <p><a class=\"name-title\" href=\"http://vision.stanford.edu/feifeili/\">Fei-Fei Li</a></p>\n              <span>(publishes under Li Fei-Fei)</span>\n              <br>\n              <span class=\"text-uppercase\">ASSOCIATE PROFESSOR \n                <br>DIRECTOR, STANFORD AI LAB\n                <br>COMPUTER SCIENCE DEPARTMENT\n              </span>\n              <p>Office: Room 246 Gates Bldg</p>\n              <p><i class=\"margin-r-10 color-base icon-call-out\"></i>(650) 725-3860</p>\n              <p><i class=\"margin-r-10 color-base icon-envelope\"></i>feifeili at cs dot stanford dot edu</p>\n            </li>\n\n            <li class=\"col-md-4 col-xs-4\">\n              <img class=\"people-image\" src=\"assets/img/770x860/03.jpg\">\n              <p><a  class=\"name-title\" href=\"http://www.niebles.net/\">Juan Carlos Niebles</a></p>\n              <span class=\"text-uppercase\">SENIOR RESEARCH SCIENTIST\n                <br>ASSOCIATE DIRECTOR, \n                <br>SAIL-TOYOTA CENTER FOR AI RESEARCH \n                <br>COMPUTER SCIENCE DEPARTMENT\n              </span>\n              <p>Office:Room 243 Gates Bldg</p>\n              <p><i class=\"margin-r-10 color-base icon-call-out\"></i>(650) 725-3860</p>\n              <p><i class=\"margin-r-10 color-base icon-envelope\"></i>jniebles at cs dot stanford dot edu</p>\n            </li>\n          </ul>\n        </div>\n\n        <div *ngFor=\"let group of people.groups\">\n          <h2 id=\"{{groupHref(group)}}\" class=\"jumptarget top-seprates\">{{group.name}}</h2>\n          <div class=\"row list-unstyled\">\n            <div *ngFor=\"let member of group.members\"\n                 class=\"col-md-4 col-xs-4 people-profile-card{{member.img ? '-w-img' : ''}}\">\n              <img *ngIf=\"member.img\" class=\"people-profile-image\" src=\"{{member.img}}\">\n              <p class=\"name-title\">{{member.name}}</p>\n              <span *ngIf=\"member.desc\" class=\"text-uppercase small-padding-top\">{{member.desc}}</span>\n              <span *ngIf=\"member.job\" class=\"text-uppercase small-padding-top\">{{member.job}}</span>\n              <br *ngIf=\"member.email\"><span *ngIf=\"member.email\">{{member.email}}</span>\n              <p *ngIf=\"member.web\"><a class=\"link-sytle\" href=\"{{member.web}}\">Website</a></p>\n          </div>\n        </div>\n      </div>\n      \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/people/people.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__people_service__ = __webpack_require__("../../../../../src/app/people/people.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PeopleComponent = (function () {
    function PeopleComponent(peopleService, route) {
        this.peopleService = peopleService;
        this.route = route;
    }
    PeopleComponent.prototype.onAnchorClick = function () {
        this.route.fragment.subscribe(function (f) {
            var element = document.querySelector("#" + f);
            if (element) {
                element.scrollIntoView(element);
                var top = element.offsetTop;
                window.scrollTo(0, top);
            }
        });
    };
    PeopleComponent.prototype.getPeople = function () {
        var _this = this;
        this.peopleService.getPeople().then(function (people) { return _this.people = people; });
    };
    PeopleComponent.prototype.groupHref = function (group) {
        return group.name.replace(/([\W-])/g, '').toLowerCase();
    };
    PeopleComponent.prototype.ngOnInit = function () {
        this.getPeople();
    };
    return PeopleComponent;
}());
PeopleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/people/people.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_2__people_service__["a" /* PeopleService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__people_service__["a" /* PeopleService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__people_service__["a" /* PeopleService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PeopleComponent);

var _a, _b;
//# sourceMappingURL=people.component.js.map

/***/ }),

/***/ "../../../../../src/app/people/people.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PEOPLE; });
var PEOPLE = {
    groups: [
        { name: "Postdocs",
            members: [
                { name: "Amir Zamir",
                    email: "zamir at cs.stanford dot edu",
                    desc: "Postdoctoral Researcher",
                    img: "http://cvgl.stanford.edu/people/amir.jpg",
                    web: "http://cs.stanford.edu/~amirz/"
                },
                { name: "Ozan Sener",
                    email: "osener at stanford dot edu",
                    desc: "Postdoctoral Researcher",
                    img: "http://cvgl.stanford.edu/people/ozan_c.png",
                    web: "http://ozansener.net/"
                },
                { name: "Animesh Garg",
                    email: "garg at cs dot stanford dot edu",
                    desc: "Postdoctoral Researcher",
                    img: "http://cvgl.stanford.edu/people/animesh.jpg",
                    web: "http://animesh.garg.tech//"
                },
                { name: "Patrick Goebel",
                    email: "pgoebel at stanford dot edu",
                    desc: "Postdoctoral Researcher",
                    img: "http://cvgl.stanford.edu/people/patrick_goebel.jpg",
                    web: null
                },
                { name: "Guido Pusiol",
                    email: "pusiol at cs.stanford dot edu",
                    desc: "Postdoctoral Researcher",
                    img: "http://vision.stanford.edu/img/pusiol.jpg",
                    web: "http://activityrecognition.com/"
                },
            ]
        },
        { name: "Students",
            members: [
                { name: "Albert Haque",
                    email: "ahaque [at] cs [dot] stanford [dot] edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://vision.stanford.edu/img/albert.jpg",
                    web: "http://www.albert.cm/"
                },
                { name: "De-An Huang",
                    email: "dahuang [at] cs [dot] stanford [dot] edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://vision.stanford.edu/img/DeAn.png",
                    web: "http://ai.stanford.edu/~dahuang/"
                },
                { name: "Justin Johnson",
                    email: "jcjohns at stanford dot edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://vision.stanford.edu/img/justin-v2.jpeg",
                    web: "http://cs.stanford.edu/people/jcjohns"
                },
                { name: "Ranjay Krishna",
                    email: "ranjaykrishna [at] gmail [dot] com",
                    desc: "PhD Candidate, Stanford",
                    img: "http://vision.stanford.edu/img/ranjay.png",
                    web: "http://ranjaykrishna.com/"
                },
                { name: "Serena Yeung ",
                    email: "serena [at] cs [dot] stanford [dot] edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://vision.stanford.edu/img/serena.jpg",
                    web: "http://ai.stanford.edu/~syyeung/"
                },
                { name: "Yuke Zhu ",
                    email: "yukez [at] cs [dot] stanford [dot] edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://vision.stanford.edu/img/yuke.jpeg",
                    web: "http://web.stanford.edu/~yukez/"
                },
                { name: "Damian Mrowca",
                    email: "mrowca [at] stanford [dot] edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://vision.stanford.edu/img/damian.jpg",
                    web: null
                },
                { name: "Iro Armeni",
                    email: "iarmeni at cs dot stanford dot edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://cvgl.stanford.edu/people/iro.jpg",
                    web: "http://cs.stanford.edu/~iarmeni/"
                },
                { name: "Christopher B. Choy",
                    email: " chrischoy at ai dot stanford dot edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://cvgl.stanford.edu/people/cchoy.png",
                    web: "http://chrischoy.org/"
                },
                { name: "Kuan Fang",
                    email: "kuanfang at stanford dot edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://cvgl.stanford.edu/people/kuan.jpg",
                    web: null
                },
                { name: "Kevin Chen",
                    email: "kchen92 at stanford dot edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://cvgl.stanford.edu/people/kevin.jpg",
                    web: null
                },
                { name: "Lyne P. Tchapmi",
                    email: "lynetcha at stanford dot edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://cvgl.stanford.edu/people/landscape.png",
                    web: null
                },
                { name: "Amir Sadeghian",
                    email: "amirabs at stanford dot edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://cvgl.stanford.edu/people/amir_cvgl.jpg",
                    web: null
                },
                { name: "Rachel Luo",
                    email: "rsluo at stanford dot edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://cvgl.stanford.edu/people/rachel_luo.JPG",
                    web: null
                },
                { name: "Danfei Xu",
                    email: "danfei at stanford dot edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://cvgl.stanford.edu/people/Danfei_Xu.jpeg",
                    web: "http://cs.stanford.edu/~danfei/"
                },
                { name: "Trevor Scott Standley",
                    email: "tstand at cs dot stanford dot edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://cvgl.stanford.edu/people/trevor_standley.png",
                    web: "http://trevorstandley.appspot.com/"
                },
                { name: "Ajay Mandlekar",
                    email: "amandlek at stanford dot edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://cvgl.stanford.edu/people/ajay_mandlekar.png",
                    web: null
                },
                { name: "John Emmons",
                    email: "emmons dot john at gmail dot com",
                    desc: "PhD Candidate, Stanford",
                    img: "http://cvgl.stanford.edu/people/john_emmons.jpg",
                    web: "http://johnemmons.com/"
                },
                { name: "Fei Xia",
                    email: "feixia at stanford dot edu",
                    desc: "PhD Candidate, Stanford",
                    img: "http://cvgl.stanford.edu/people/fei_xia.png",
                    web: "http://fxia.me/"
                },
                { name: "Lin Sun",
                    email: "sunlin1 at stanford dot edu",
                    desc: "Visiting Student, Stanford / PhD Candidate, HKUST",
                    img: "http://cvgl.stanford.edu/people/lin_sun.png",
                    web: null
                },
                { name: "John Lambert",
                    email: "johnlambert at cs [dot] stanford [dot] edu ",
                    desc: "Master’s Student, Stanford",
                    img: "http://web.stanford.edu/~johnwl/JWL_Tsaritsino.jpg",
                    web: "http://web.stanford.edu/~johnwl/"
                },
                { name: "Zelun Luo",
                    email: "zelunluo [at] stanford [dot] edu",
                    desc: "Master’s Student, Stanford",
                    img: "http://vision.stanford.edu/img/zelun.jpg",
                    web: "http://alan.vision/"
                },
                { name: "Shyamal Buch",
                    email: "shyamal [at] cs [dot] stanford [dot] edu",
                    desc: "Master’s Student, Stanford",
                    img: "http://vision.stanford.edu/img/shyamal.jpg",
                    web: null
                },
                { name: "JunYoung Gwak",
                    email: "jgwak at stanford dot edu",
                    desc: "Master’s Student, Stanford",
                    img: "http://cvgl.stanford.edu/people/jgwak.png",
                    web: "http://jgwak.com/"
                },
                { name: "Sasha Sax",
                    email: "asax at stanford dot edu",
                    desc: "Master’s Student, Stanford",
                    img: "http://cvgl.stanford.edu/people/sasha_sax.jpg",
                    web: null
                },
                { name: "Boris Ivanovic",
                    email: "borisi at stanford dot edu",
                    desc: "Master’s Student, Stanford",
                    img: "http://cvgl.stanford.edu/people/boris_ivanovic.jpg",
                    web: "http://www.borisivanovic.com/"
                },
                { name: "Julian Gao",
                    email: "julianyg at stanford dot edu",
                    desc: "Master’s Student, Stanford",
                    img: "http://cvgl.stanford.edu/people/julian_gao.jpg",
                    web: null
                },
                { name: "Andrey Kurenkov",
                    email: "andreyk at stanford dot edu",
                    desc: "Master’s Student, Stanford",
                    img: "http://cvgl.stanford.edu/people/andrey_kurenkov.jpg",
                    web: null
                },
                { name: "Amani Peddada",
                    email: "amanivp at stanford dot edu",
                    desc: "Master's Student, Stanford CS",
                    img: "http://cvgl.stanford.edu/people/amani.jpg",
                    web: null
                },
                { name: "William Shen",
                    email: "bshen88 at stanford dot edu",
                    desc: "Undergraduate Student, Stanford",
                    img: "http://cvgl.stanford.edu/people/william_shen.jpg",
                    web: null
                },
                { name: "Zhiyang He",
                    email: "hzyjerry at stanford dot edu",
                    desc: "Undergraduate Student, Stanford",
                    img: "http://cvgl.stanford.edu/people/zhiyang_he2.jpg",
                    web: null
                },
                { name: "Barry Chai ",
                    email: null,
                    desc: "Research Assistant",
                    img: "http://vision.stanford.edu/img/barry.jpg",
                    web: null
                },
            ]
        },
        { name: "Visiting / affiliated members",
            members: [
                { name: "Ariel Nuñez",
                    email: null,
                    desc: "Master’s Student, E.E. - Universidad del Norte",
                    img: null,
                    web: "http://piensa.co/"
                },
                { name: "Shuran Song",
                    email: null,
                    desc: "Visiting Scholar",
                    img: null,
                    web: null
                },
                { name: "Leo Keselman",
                    email: null,
                    desc: "Master's Student",
                    img: null,
                    web: null
                },
                { name: "Kaichun Mo",
                    email: null,
                    desc: "PhD Candidate",
                    img: null,
                    web: "http://cs.stanford.edu/~kaichun/"
                },
                { name: "Jingwei Ji",
                    email: null,
                    desc: "PhD Candidate",
                    img: null,
                    web: null
                },
                { name: "Lamberto Ballan",
                    email: null,
                    desc: "Postdoctoral Researcher",
                    img: null,
                    web: "http://www.lambertoballan.net/"
                },
                { name: "Timur Bagautdinov",
                    email: null,
                    desc: "Postdoctoral Researcher",
                    img: null,
                    web: "https://people.epfl.ch/timur.bagautdinov"
                },
                { name: "Brigit Schroeder",
                    email: null,
                    desc: "Visiting Scholar",
                    img: null,
                    web: "http://www.cs.uml.edu/~bschroed/"
                },
            ]
        },
        { name: "Alumni - Postdoc",
            members: [
                { name: "Alex Alahi",
                    email: null,
                    desc: "Postdoc, 2013-2017",
                    img: null,
                    web: "http://web.stanford.edu/~alahi/"
                },
                { name: "Judy Hoffman",
                    email: null,
                    desc: "Postdoc, 2016-2017",
                    img: null,
                    web: null
                },
                { name: "Joseph Lim",
                    email: null,
                    desc: "Postdoc, 2015-2016",
                    img: null,
                    web: "http://people.csail.mit.edu/lim/"
                },
                { name: "Lamberto Ballan",
                    email: null,
                    desc: "Postdoc, 2014-2016",
                    img: null,
                    web: "http://www.lambertoballan.net/"
                },
                { name: "Yu Xiang",
                    email: null,
                    desc: "Postdoc, 2015 - 2016",
                    img: null,
                    web: "https://yuxng.github.io/"
                },
                { name: "Hyun Oh Song",
                    email: null,
                    desc: "Postdoc, 2014 - 2016",
                    img: null,
                    web: "http://ai.stanford.edu/~hsong/"
                },
                { name: "Michelle Greene ",
                    email: null,
                    desc: "Postdoc, 2013-2015",
                    img: null,
                    web: "http://stanford.edu/~mrgreene/index.html"
                },
                { name: "Tian Lan",
                    email: null,
                    desc: "Postdoc, 2013 - 2014",
                    img: null,
                    web: "http://cs.stanford.edu/~taranlan/"
                },
                { name: "Roozbeh Mottaghi",
                    email: null,
                    desc: "Postdoc, 2013 - 2014",
                    img: null,
                    web: "http://cs.stanford.edu/~roozbeh/"
                },
                { name: "Alireza Fathi",
                    email: null,
                    desc: "Postdoc, 2013 - 2014",
                    img: null,
                    web: "http://ai.stanford.edu/~ajoulin/"
                },
                { name: "Roni Mittelman",
                    email: null,
                    desc: "Postdoc, 2011 - 2013",
                    img: null,
                    web: null
                },
                { name: "Jingen Liu",
                    email: null,
                    desc: "Postdoc, 2010 - 2011",
                    img: null,
                    web: "http://www.cs.ucf.edu/~liujg/"
                },
            ]
        },
        { name: "Alumni - PhD",
            members: [
                { name: "Timnit Gebru",
                    email: null,
                    desc: "PhD, 2012-2017",
                    img: null,
                    web: "http://ai.stanford.edu/~tgebru/"
                },
                { name: "Jon Krause",
                    email: null,
                    desc: "PhD, 2011-2016",
                    img: null,
                    web: "http://ai.stanford.edu/~jkrause"
                },
                { name: "Andrej Karpathy",
                    email: null,
                    desc: "PhD, 2011-2016",
                    img: null,
                    web: "http://cs.stanford.edu/people/karpathy"
                },
                { name: "Vignesh Ramanathan",
                    email: null,
                    desc: "PhD, 2011-2016",
                    img: null,
                    web: "http://ai.stanford.edu/~vigneshr"
                },
                { name: "Marius Cătălin Iordan",
                    email: null,
                    desc: "PhD, 2009-2016",
                    img: null,
                    web: "http://cs.stanford.edu/~mci"
                },
                { name: "David Held",
                    email: null,
                    desc: "PhD, 2016",
                    img: null,
                    web: "http://davheld.github.io/"
                },
                { name: "Olga Russakovsky",
                    email: null,
                    desc: "PhD, 2010-2015",
                    img: null,
                    web: "http://ai.stanford.edu/~olga/"
                },
                { name: "Kevin Tang",
                    email: null,
                    desc: "PhD, 2010-2015",
                    img: null,
                    web: "http://ai.stanford.edu/~kdtang/"
                },
                { name: "Chris Baldassano",
                    email: null,
                    desc: "PhD, 2010-2015",
                    img: null,
                    web: "http://www.chrisbaldassano.com/"
                },
                { name: "Sid Ying-Ze Bao",
                    email: null,
                    desc: "University of Michigan, ECE, PhD 2014",
                    img: null,
                    web: null
                },
                { name: "Gaurav Pandey",
                    email: null,
                    desc: "University of Michigan, ECE, PhD, 2014",
                    img: null,
                    web: null
                },
                { name: "Jia Deng",
                    email: null,
                    desc: "PhD, 2008-2013",
                    img: null,
                    web: "http://ai.stanford.edu/~jiadeng/"
                },
                { name: "Bangpeng Yao",
                    email: null,
                    desc: "PhD, 2008-2013",
                    img: null,
                    web: "http://ai.stanford.edu/~bangpeng/"
                },
                { name: "Wongun Choi",
                    email: null,
                    desc: "PhD 2013, University of Michigan",
                    img: null,
                    web: "http://www-personal.umich.edu/~wgchoi/"
                },
                { name: "Min Sun",
                    email: null,
                    desc: "PhD, 2013, University of Michigan, ECE",
                    img: null,
                    web: null
                },
                { name: "Jason Clemons",
                    email: null,
                    desc: "PhD 2013, University of Michigan, CSE",
                    img: null,
                    web: null
                },
                { name: "Jia Li",
                    email: null,
                    desc: "PhD, 2006-2011",
                    img: null,
                    web: "http://vision.stanford.edu/lijiali/"
                },
                { name: "Juan Carlos Niebles",
                    email: null,
                    desc: "PhD, 2005-2010",
                    img: null,
                    web: "http://www.niebles.net/"
                },
                { name: "Mani Golparvar-Fard",
                    email: null,
                    desc: "University of Illinois, at Urbana-Champaign, CEE, PhD, 2010",
                    img: null,
                    web: null
                },
            ]
        },
        { name: "Alumni - Master Students",
            members: [
                { name: "Yuanfang (Yolanda) Wang",
                    email: null,
                    desc: "MS, 2016-2018, CS, Stanford",
                    img: null,
                    web: null
                },
                { name: "Te-Lin Wu ",
                    email: null,
                    desc: "MS, 2015-2017, CS, Stanford",
                    img: null,
                    web: null
                },
                { name: "Ian Tam",
                    email: null,
                    desc: "MS, 2015-2017, CS, Stanford",
                    img: null,
                    web: null
                },
                { name: "Alexandre Robicquet",
                    email: null,
                    desc: "MS, 2015-2017, CS, Stanford",
                    img: null,
                    web: "http://web.stanford.edu/~arobicqu/"
                },
                { name: "Chris Cruise",
                    email: null,
                    desc: "MS, 2015-2017, ME, Stanford",
                    img: null,
                    web: null
                },
                { name: "Saumitro Dasgupta",
                    email: null,
                    desc: "MS, 2014-2015, CS, Stanford",
                    img: null,
                    web: "http://ai.stanford.edu/~saumitro"
                },
                { name: "Yuke Zhu",
                    email: null,
                    desc: "MS, 2014-2015, CS, Stanford",
                    img: null,
                    web: "http://web.stanford.edu/~yukez/"
                },
                { name: "Tsung-Chuan Chen",
                    email: null,
                    desc: "MS, 2014, EE, Stanford",
                    img: null,
                    web: null
                },
                { name: "Victor Escorcia",
                    email: null,
                    desc: "2014, Master’s Student, E.E., Universidad del Norte",
                    img: null,
                    web: null
                },
                { name: "Fabian Caba",
                    email: null,
                    desc: "2014, Master’s Student E.E., Universidad del Norte",
                    img: null,
                    web: null
                },
                { name: "Maria Alejandra Davila",
                    email: null,
                    desc: "2014, Master’s Student E.E.",
                    img: null,
                    web: null
                },
                { name: "Yu-Wei Chao",
                    email: null,
                    desc: "MS, 2011-2013, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Changkyu Song",
                    email: null,
                    desc: "MS, 2012-2013, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Shili Xu",
                    email: null,
                    desc: "MS, 2012-2013, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Wan Huang",
                    email: null,
                    desc: "MS, 2012-2013, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Ryan Tokola",
                    email: null,
                    desc: "MS, 2010-2013, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Murali Telaporu",
                    email: null,
                    desc: "MS, 2011-2012, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Ryan Tokola",
                    email: null,
                    desc: "MS, 2010-2013, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Mohit Bagra",
                    email: null,
                    desc: "MS, 2010-2012, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Shyam Kumar",
                    email: null,
                    desc: "MS, 2010-2011, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Khuram Shahid",
                    email: null,
                    desc: "MS, 2008-2010, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Liang Mei",
                    email: null,
                    desc: "MS, 2008-2010, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Paritosh Gupta",
                    email: null,
                    desc: "MS, 2008-2010, ECE, University of Michigan",
                    img: null,
                    web: null
                },
                { name: "Andrey del Pozo",
                    email: null,
                    desc: "MS, 2006–2008, CS, UIUC",
                    img: null,
                    web: null
                },
            ]
        },
        { name: "Alumni - Undergraduate",
            members: [
                { name: "Amani Peddada",
                    email: null,
                    desc: "2014—present, Stanford",
                    img: null,
                    web: null
                },
                { name: "Bryan Anenberg",
                    email: null,
                    desc: "2014—present, Stanford",
                    img: null,
                    web: null
                },
                { name: "Helen Jiang",
                    email: null,
                    desc: "2015—present, Stanford",
                    img: null,
                    web: null
                },
                { name: "Jyno Kim",
                    email: null,
                    desc: "2011-2012, University of Michigan",
                    img: null,
                    web: null
                },
            ]
        },
        { name: "Past Visiting / Affiliated Members",
            members: [
                { name: "Jorge Martínez",
                    email: null,
                    desc: "2016, Master’s E.E., Universidad del Norte",
                    img: null,
                    web: null
                },
                { name: "David Altamar",
                    email: null,
                    desc: "2016, Master’s E.E., Universidad del Norte",
                    img: null,
                    web: null
                },
                { name: "Kuo-Hao Zeng",
                    email: null,
                    desc: "2017, MS",
                    img: null,
                    web: "https://kuohaozeng.github.io/"
                },
                { name: "Ashesh Jain",
                    email: null,
                    desc: "PhD, Cornell University",
                    img: null,
                    web: null
                },
                { name: "Chenxia Wu",
                    email: null,
                    desc: "PhD, Cornell University",
                    img: null,
                    web: null
                },
                { name: "Francesco Castaldo",
                    email: null,
                    desc: "PhD, SUN, Italy",
                    img: null,
                    web: null
                },
                { name: "Sam Corbett-Davies",
                    email: null,
                    desc: "PhD candidate, Stanford University",
                    img: null,
                    web: null
                },
                { name: "Laura Leal-Taixe",
                    email: null,
                    desc: "PhD, Institute for Information Processing (TNT), Leibniz University Hannover, Germany",
                    img: null,
                    web: null
                },
                { name: "Giorgio Gemignani",
                    email: null,
                    desc: "PhD, Department of Applied Science, University of Naples Parthenope, Italy",
                    img: null,
                    web: null
                },
                { name: "Axel Furlan",
                    email: null,
                    desc: "PhD, University of Milan - Bicocca, Italy",
                    img: null,
                    web: null
                },
                { name: "Valeria Garro",
                    email: null,
                    desc: "PhD, University of Verona, Italy",
                    img: null,
                    web: null
                },
                { name: "Roberto Javier Lopez-Sastre",
                    email: null,
                    desc: "PhD, Dept. Signal Theory and Communications, U of Alcala",
                    img: null,
                    web: null
                },
            ]
        },
        { name: "Faculty & Industry Collaborators",
            members: [
                { name: "Ron Fedkiw",
                    email: null,
                    desc: "Professor, CS, Stanford",
                    img: null,
                    web: null
                },
                { name: "Oussama Khatib",
                    email: null,
                    desc: "Professor, CS, Stanford",
                    img: null,
                    web: null
                },
                { name: "Martin Fischer",
                    email: null,
                    desc: "Professor, CEE, Stanford",
                    img: null,
                    web: null
                },
                { name: "Deborah Gordon",
                    email: null,
                    desc: "Professor, Department of Biology, Stanford",
                    img: null,
                    web: null
                },
                { name: "Leo Guibas",
                    email: null,
                    desc: "Professor, CS, Stanford",
                    img: null,
                    web: null
                },
                { name: "Larry Davis",
                    email: null,
                    desc: "Professor, CS, UMD",
                    img: null,
                    web: null
                },
                { name: "Sebastian Thrun",
                    email: null,
                    desc: "Professor, Computer Science",
                    img: null,
                    web: null
                },
                { name: "Caroline Pantofaru",
                    email: null,
                    desc: "Research Scientist, Google",
                    img: null,
                    web: null
                },
                { name: "Alfred Hero",
                    email: null,
                    desc: "Professor, EECS, U-Michigan",
                    img: null,
                    web: null
                },
                { name: "Feniosky Pena-Mora",
                    email: null,
                    desc: "Dean of The Fu Foundation School of Engineering and Applied Science at Columbia University.",
                    img: null,
                    web: null
                },
                { name: "Min Sun",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://aliensunmin.github.io/"
                },
                { name: "Bernard Ghanem",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://www.bernardghanem.com/"
                },
                { name: "Alvaro Soto",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://asoto.ing.puc.cl/"
                },
                { name: "Mani Golparvar-Fard",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://raamac.cee.illinois.edu/"
                },
                { name: "Luciano Sbaiz",
                    email: null,
                    desc: null,
                    img: null,
                    web: null
                },
                { name: "Hrishikesh Aradhye",
                    email: null,
                    desc: null,
                    img: null,
                    web: "https://research.google.com/pubs/author37818.html"
                },
                { name: "Chih-Wei (Louis) Chen",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://ai.stanford.edu/~cwchen/"
                },
                { name: "Bangpeng Yao",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://ai.stanford.edu/~bangpeng/"
                },
                { name: "Andras Ferencz",
                    email: null,
                    desc: null,
                    img: null,
                    web: null
                },
                { name: "Bohyung Han",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://cvlab.postech.ac.kr/~bhhan/"
                },
                { name: "Jia Li",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://vision.stanford.edu/lijiali/"
                },
                { name: "Andrey Del Pozo",
                    email: null,
                    desc: null,
                    img: null,
                    web: null
                },
                { name: "Hongcheng Wang",
                    email: null,
                    desc: null,
                    img: null,
                    web: "http://hongchengwang.com/"
                },
            ]
        },
    ]
};
//# sourceMappingURL=people.data.js.map

/***/ }),

/***/ "../../../../../src/app/people/people.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeopleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__people_data__ = __webpack_require__("../../../../../src/app/people/people.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PeopleService = (function () {
    function PeopleService() {
    }
    PeopleService.prototype.getPeople = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__people_data__["a" /* PEOPLE */]);
    };
    return PeopleService;
}());
PeopleService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], PeopleService);

//# sourceMappingURL=people.service.js.map

/***/ }),

/***/ "../../../../../src/app/publications/publications-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * Filters a list of Publications by author name.
 * Takes a string for the author name that defaults to 'All'.
 * Usage:
 *   value | publicationsFilter:authorName
 * Example:
 *   {{ publications | publicationsFilter:'Fei-Fei Li' }}
 *   returns all publications only for Fei-Fei Li.
 */
var PublicationsFilterPipe = (function () {
    function PublicationsFilterPipe() {
    }
    PublicationsFilterPipe.prototype.transform = function (value, authorName) {
        if (authorName == 'All')
            return value;
        return value.filter(function (publication) {
            return publication.authors.indexOf(authorName) > -1;
        });
    };
    return PublicationsFilterPipe;
}());
PublicationsFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'publicationsFilter' })
], PublicationsFilterPipe);

//# sourceMappingURL=publications-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/publications/publications.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-color-sky-light section-seperator\">\n  <div class=\"content container\">\n    <div class=\"row\">\n      <div id=\"sidebar\" class=\"sidebar-wrap col-md-3 col-xs-10 sm-margin-b-30\">\n        <ul class=\"sidebar list-unstyled sidenav-position\">\n          <li *ngFor=\"let section of sections\" class=\"side-nav\">\n            <a [routerLink]=\"['/publications']\"\n               fragment=\"{{sectionHref(section)}}\"\n               (click)=\"onAnchorClick()\">{{section.name}}</a>\n          </li>\n        </ul>\n      </div>\n\n      <div id=\"content\" class=\"content col-md-9 col-xs-12 sm-margin-b-30\">\n        <form class=\"filterstyle\">\n          <div class=\"filteroption\"><input [(ngModel)]=\"author\"\n                 type=\"radio\"\n                 name=\"author\"\n                 value=\"All\">All</div>\n          <div class=\"filteroption\"><input [(ngModel)]=\"author\"\n                 type=\"radio\"\n                 name=\"author\"\n                 value=\"Fei-Fei Li\">Fei-Fei Li</div> \n          <div class=\"filteroption\"><input [(ngModel)]=\"author\"\n                 type=\"radio\"\n                 name=\"author\"\n                 value=\"Juan Carlos Niebles\">Juan Carlos Niebles</div> \n          <div class=\"filteroption\"><input [(ngModel)]=\"author\"\n                 type=\"radio\"\n                 name=\"author\"\n                 value=\"Silvio Savarese\">Silvio Savarese</div> \n        </form>\n\n        <ul class=\"row list-unstyled\">\n          <li *ngFor=\"let section of sections\">\n            <h2 id=\"{{sectionHref(section)}}\">{{section.name}}</h2>\n            <ul class=\"list-unstyled\">\n              <li *ngFor=\"let publication of section.publications | publicationsFilter:author\"\n                  class=\"publication-list\">\n                <div class=\"row top-seprates\">\n                  <div class=\"col-md-3 col-xs-3\">\n                    <img *ngIf=\"publication.image != ''\"\n                         class=\"img-responsive article-seprates\"\n                         src=\"/assets/img/pub/{{publication.image}}\">\n                  </div>\n                  <div class=\"col-md-9 col-xs-9\">\n                    <p><b>{{publication.title}}</b></p>\n                    <p *ngIf=\"publication.info != ''\"><em>{{publication.info}}</em></p>\n                    <p>{{publication.authorsText}}</p>\n                    <div [innerHtml]=\"publicationHtml(publication)\"></div>\n                  </div>\n                </div>\n              </li>\n            </ul>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/publications/publications.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__publications__ = __webpack_require__("../../../../../src/app/publications/publications.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__publications_service__ = __webpack_require__("../../../../../src/app/publications/publications.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PublicationsComponent = (function () {
    function PublicationsComponent(publicationsService, route) {
        this.publicationsService = publicationsService;
        this.route = route;
        this.author = __WEBPACK_IMPORTED_MODULE_2__publications__["a" /* ALL */];
    }
    PublicationsComponent.prototype.onAnchorClick = function () {
        this.route.fragment.subscribe(function (f) {
            var element = document.querySelector("#" + f);
            if (element) {
                element.scrollIntoView(element);
                var top = element.offsetTop;
                window.scrollTo(0, top);
            }
        });
    };
    PublicationsComponent.prototype.getSections = function () {
        var _this = this;
        this.publicationsService.getSections().then(function (sections) { return _this.sections = sections; });
    };
    PublicationsComponent.prototype.sectionHref = function (section) {
        return section.name.replace(/([\W-])/g, '').toLowerCase();
    };
    PublicationsComponent.prototype.publicationHtml = function (pub) {
        var joined_refs = '';
        for (var _i = 0, _a = pub.refs; _i < _a.length; _i++) {
            var ref = _a[_i];
            joined_refs += '[<a class="link-sytle" href="' + ref.href + '">' + ref.text + '</a>] ';
        }
        return joined_refs;
    };
    PublicationsComponent.prototype.ngOnInit = function () {
        this.getSections();
    };
    return PublicationsComponent;
}());
PublicationsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/publications/publications.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_3__publications_service__["a" /* PublicationsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__publications_service__["a" /* PublicationsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__publications_service__["a" /* PublicationsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], PublicationsComponent);

var _a, _b;
//# sourceMappingURL=publications.component.js.map

/***/ }),

/***/ "../../../../../src/app/publications/publications.data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SECTIONS; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__publications__ = __webpack_require__("../../../../../src/app/publications/publications.ts");

var SECTIONS = [
    { name: "Publications 2017",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Kuo-Hao Zeng, William B. Shen, De-An Huang, Min Sun, Juan Carlos Niebles.",
                image: "imitation.png",
                title: "Visual Forecasting by Imitating Dynamics in Natural Sequences.",
                info: "IEEE International Conference on Computer Vision (ICCV), Venice, Italy, October 2017.",
                refs: [
                    { href: "http://ai.stanford.edu/%7Edahuang/papers/iccv17-vfid.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Shyamal Buch, Victor Escorcia, Bernard Ghanem, Juan Carlos Niebles.",
                image: "sstad.png",
                title: "End-to-End, Single-Stream Temporal Action Detection in Untrimmed Videos.",
                info: "British Machine Vision Conference (BMVC), London, UK, September 2017.",
                refs: [
                    { href: "https://www.dropbox.com/s/9n90etsu6jubiax/0144.pdf?dl=1",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Shyamal Buch, Victor Escorcia, Chuanqi Shen, Bernard Ghanem, Juan Carlos Niebles.",
                image: "SST.jpg",
                title: "SST: Single-Stream Temporal Action Proposals.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Honolulu, Hawaii, USA, June 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/buch2017cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "https://drive.google.com/file/d/0B_-dKvCH2VL7WG01Wjh4TEdZSjQ/view?usp=sharing",
                        text: "POSTER",
                    },
                    { href: "https://github.com/shyamal-b/sst",
                        text: "CODE",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Kuo-Hao Zeng, Shih-Han Chou, Fu-Hsiang Chan, Juan Carlos Niebles, Min Sun.",
                image: "agent_risk.jpg",
                title: "Agent-centric Risk Assessment: Accident Anticipation and Risky Region Localization.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Honolulu, Hawaii, USA, June 2017.",
                refs: [
                    { href: "",
                        text: "PDF",
                    },
                    { href: "http://aliensunmin.github.io/project/video-Forecasting/",
                        text: "PROJECT",
                    },
                    { href: "http://ai.stanford.edu/~dahuang/posters/cvpr17_hao.pdf",
                        text: "POSTER",
                    },
                    { href: "https://arxiv.org/abs/1705.06560",
                        text: "ARXIV",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Ivan Lillo, Juan Carlos Niebles and Alvaro Soto.",
                image: "sparse.jpg",
                title: "Sparse composition of body poses and atomic actions for human activity recognition in RGB-D videos.",
                info: "Image and Vision Computing, March 2017.",
                refs: [
                    { href: "http://dx.doi.org/10.1016/j.imavis.2016.11.004",
                        text: "PDF",
                    },
                    { href: "http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/",
                        text: "DATA",
                    },
                    { href: "http://dx.doi.org/10.1016/j.imavis.2016.11.004",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Kuo-Hao Zeng, Tseng-Hung Chen, Ching-Yao Chuang, Yuan-Hong Liao, Juan Carlos Niebles and Min Sun.",
                image: "AAAI17VideoQA.jpg",
                title: "Leveraging Video Descriptions to Learn Video Question Answering.",
                info: "AAAI Conference on Artificial Intelligence (AAAI), San Francisco, USA, February 2017.",
                refs: [
                    { href: "https://aaai.org/ocs/index.php/AAAI/AAAI17/paper/view/14906",
                        text: "PDF",
                    },
                    { href: "http://aliensunmin.github.io/project/video-language/index.html#VideoQA",
                        text: "PROJECT",
                    },
                    { href: "http://ug-video.com/",
                        text: "DATA",
                    },
                    { href: "https://aaai.org/ocs/index.php/AAAI/AAAI17/paper/view/14906",
                        text: "DOI",
                    },
                    { href: "https://arxiv.org/abs/1611.04021",
                        text: "ARXIV",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Timnit Gebru, Judy Hoffman, Li Fei-Fei.",
                image: "",
                title: "Fine-grained Recognition in the Wild: A Multi-Task Domain Adaptation Approach",
                info: "ICCV 2017.",
                refs: [
                    { href: "https://arxiv.org/abs/1709.02476",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Yuke Zhu*, Daniel Gordon*, Eric Kolve, Dieter Fox, Li Fei-Fei, Abhinav Gupta, Roozbeh Mottaghi, Ali Farhadi.",
                image: "",
                title: "Visual Semantic Planning using Deep Successor Representations",
                info: "ICCV 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/zhu2017iccv.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Ranjay Krishna, Kenji Hata, Frederic Ren, Li Fei-Fei, Juan Carlos Niebles.",
                image: "",
                title: "Dense-Captioning Events in Videos",
                info: "ICCV 2017.",
                refs: [
                    { href: "https://arxiv.org/abs/1705.00754",
                        text: "PDF",
                    },
                    { href: "http://cs.stanford.edu/people/ranjaykrishna/densevid/> <! IMAGE pubimg/krishna2017iccv.png",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Justin Johnson, Bharath Hariharan, Laurens van der Maaten, Judy Hoffman, Li Fei-Fei, C. Lawrence Zitnick, Ross Girshick.",
                image: "pubimg/johnson2017iccv.png",
                title: "Inferring and Executing Programs for Visual Reasoning",
                info: "ICCV 2017 (oral).",
                refs: [
                    { href: "https://arxiv.org/abs/1705.03633",
                        text: "PDF",
                    },
                    { href: "http://cs.stanford.edu/people/jcjohns/iep",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Agrim Gupta, Justin Johnson, Alexandre Alahi, Li Fei-Fei.",
                image: "pubimg/gupta2017iccv.png",
                title: "Characterizing and Improving Stability in Neural Style Transfer.",
                info: "ICCV 2017.",
                refs: [
                    { href: "https://arxiv.org/abs/1705.02092",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Ajay Mandlekar*, Yuke Zhu*, Animesh Garg*, Li Fei-Fei, Silvio Savarese.",
                image: "pubimg/mandlekar2017iros.png",
                title: "Adversarially Robust Policy Learning through Active Construction of Physically-Plausible Perturbations.",
                info: "IROS 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/mandlekar2017iros.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. Alahi, J. Wilson, L. Fei-Fei S. Savarese,",
                image: "",
                title: "Unsupervised Camera Localization in Crowded Spaces",
                info: "in IEEE International Conference on Robotics and Automation (ICRA), 2017.",
                refs: [
                    { href: "http://web.stanford.edu/%7Ealahi/downloads/icra17.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "T. Bagautdinov, A. Alahi, F. Fleuret, P. Fua, S. Savarese,",
                image: "",
                title: "Social Scene Understanding: End-to-End Multi-Person Action Localization and Collective Activity Recognition",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017 oral presentation.",
                refs: [
                    { href: "https://arxiv.org/abs/1611.09078",
                        text: " PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "D. Ji, J. Kwon, M. McFarland, S. Savarese,",
                image: "",
                title: "Deep View Morphing",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017.",
                refs: [
                    { href: "https://arxiv.org/abs/1703.02168",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. R. Zamir*, T. Wu* , L. Sun, W. B. Shen, B. E. Shi, J. Malik, S. Savarese,",
                image: "",
                title: "Feedback Networks",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2017.",
                refs: [
                    { href: "https://arxiv.org/PDF/1612.09508",
                        text: "PDF",
                    },
                    { href: "http://feedbacknet.stanford.edu/",
                        text: "Webpage",
                    },
                    { href: "https://amberxu.github.io/bibtex/zamir2016feedback.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. Sadeghian, A. Alahi, S. Savarese,",
                image: "",
                title: "Tracking The Untrackable: Learning To Track Multiple Cues with Long-Term Dependencies",
                info: "",
                refs: [
                    { href: "https://arxiv.org/abs/1701.01909",
                        text: "arXiv",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "I. Armeni*, A. Sax*, A. R. Zamir, S. Savarese,",
                image: "",
                title: "Joint 2D-3D-Semantic Data for Indoor Scene Understanding",
                info: "arXiv preprint, 2017.",
                refs: [
                    { href: "https://arxiv.org/PDF/1702.01105.PDF",
                        text: "PDF",
                    },
                    { href: "http://3dsemantics.stanford.edu/",
                        text: "Webpage",
                    },
                    { href: "http://buildingparser.stanford.edu2D-3D-S.txt",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "C. Wu, J. Zhang, O. Sener, B. Selman, S. Savarese, and A. Saxena,",
                image: "",
                title: "Watch-n-Patch: Unsupervised Learning of Actions and Relations",
                info: "IEEE Transactions on Pattern Analysis and Machine Intelligence(PAMI) 2017.",
                refs: [
                    { href: "https://arxiv.org/PDF/1603.03541.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang, W. Choi, Y. Lin and S. Savarese,",
                image: "",
                title: "Subcategory-aware Convolutional Neural Networks for Object Proposals and Detection",
                info: "In IEEE Winter Conference on Applications of Computer Vision (WACV), 2017.",
                refs: [
                    { href: "http://arxiv.org/abs/1604.04693",
                        text: "arXiv",
                    },
                    { href: "http://yuxng.github.io/xiang_wacv17.PDF",
                        text: "PDF",
                    },
                    { href: "http://yuxng.github.io/xiang_wacv17_tr.PDF",
                        text: " Technical Report",
                    },
                    { href: "http://cvgl.stanford.edu/bibtex/xiang2017subcategory.bib",
                        text: "bibtex",
                    },
                    { href: "http://www.cvlibs.net/datasets/kitti/eval_object_detail.php?result=5e17cbbabbf775d8cc376793168be49bd6f01608",
                        text: "KITTI Results",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Albert Haque, Michelle Guo, Alexandre Alahi, Serena Yeung, Zelun Luo, Alisha Rege, Amit Singh, Jeffrey Jopling, Lance Downing, William Beninati, Terry Platchek, Arnold Milstein, Li Fei-Fei.",
                image: "pubimg/haque2017mlhc.png",
                title: "Towards Vision-Based Smart Hospitals: A System for Tracking and Monitoring Hand Hygiene Compliance.",
                info: "MLHC 2017.",
                refs: [
                    { href: "https://arxiv.org/pdf/1708.00163.pdf",
                        text: "PDF",
                    },
                    { href: "LINK https://aicare.stanford.edu/projects/hand_hygiene/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "De-An Huang, Joseph J. Lim, Li Fei-Fei, and Juan Carlos Niebles.",
                image: "pubimg/huang2017cvpr.png",
                title: "Unsupervised Visual-Linguistic Reference Resolution in Instructional Videos.",
                info: "CVPR 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/huang2017cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "LINK http://ai.stanford.edu/~dahuang/projects/vlrr/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Danfei Xu, Yuke Zhu, Christopher B. Choy, Li Fei-Fei.",
                image: "pubimg/xu2017cvpr.png",
                title: "Scene Graph Generation by Iterative Message Passing.",
                info: "CVPR 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/xu2017cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "LINK http://cs.stanford.edu/~danfei/scene-graph/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Yuke Zhu, Joseph J. Lim, Li Fei-Fei.",
                image: "pubimg/zhu2017cvpr.png",
                title: "Knowledge Acquisition for Visual Question Answering via Iterative Querying.",
                info: "CVPR 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/zhu2017cvpr.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Serena Yeung, Vignesh Ramanathan, Olga Russakovsky, Liyue Shen, Greg Mori, Li Fei-Fei.",
                image: "pubimg/yeung2017cvpr.png",
                title: "Learning to learn from noisy web videos.",
                info: "CVPR 2017.",
                refs: [
                    { href: "#",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Shyamal Buch, Victor Escorcia, Chuanqi Shen, Bernard Ghanem, Juan Carlos Niebles.",
                image: "pubimg/buch2017cvpr.png",
                title: "SST: Single-Stream Temporal Action Proposals.",
                info: "CVPR 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/buch2017cvpr.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Justin Johnson, Bharath Hariharan, Laurens van der Maaten, Li Fei-Fei, C. Lawrence Zitnick, Ross Girshick.",
                image: "pubimg/johnson2017cvpr.png",
                title: "CLEVR: A Diagnostic Dataset for Compositional Language and Elementary Visual Reasoning.",
                info: "CVPR 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/johnson2017cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "LINK http://cs.stanford.edu/people/jcjohns/clevr/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Jonathan Krause, Justin Johnson, Ranjay Krishna, Li Fei-Fei.",
                image: "pubimg/krause2017cvpr.png",
                title: "A Hierarchical Approach for Generating Descriptive Image Paragraphs.",
                info: "CVPR 2017 (spotlight).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/krause2017cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "LINK http://cs.stanford.edu/people/ranjaykrishna/im2p/index.html",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Zelun Luo, Boya Peng, De-An Huang, Alexandre Alahi, Li Fei-Fei.",
                image: "pubimg/luo2017cvpr.png",
                title: "Unsupervised Learning of Long-Term Motion Dynamics for Videos.",
                info: "CVPR 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/luo2017cvpr.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Katsuyuki Nakamura, Serena Yeung, Alexandre Alahi, Li Fei-Fei.",
                image: "pubimg/nakamura2017cvpr.png",
                title: "Jointly Learning Energy Expenditures and Activities using Egocentric Multimodal Signals.",
                info: "CVPR 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/nakamura2017cvpr.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Alexandre Alahi, Vignesh Ramanathan, Li Fei-Fei.",
                image: "pubimg/alahi2017gcbcv2.png",
                title: "Tracking Millions of Humans in Crowded Space.",
                info: "Group and Crowd Behavior for Computer Vision.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/alahi2017gcbcv2.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Alexandre Alahi, Vignesh Ramanathan, Kratarth Goel, Alexandre Robicquet, Amir Abbas Sadeghian, Li Fei-Fei, Silvio Savarese.",
                image: "pubimg/alahi2017gcbcv.png",
                title: "Learning to Predict Human Behaviour in Crowded Scenes.",
                info: "Group and Crowd Behavior for Computer Vision.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/alahi2017gcbcv.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Timnit Gebru, Jonathan Krause, Yilun Wang, Duyun Chen, Jia Deng, Li Fei-Fei.",
                image: "pubimg/gebru2017aaai.jpg",
                title: "Fine-Grained Car Detection for Visual Census Estimation.",
                info: "AAAI 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/gebru2017aaai.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Timnit Gebru, Jonathan Krause, Jia Deng, Li Fei-Fei.",
                image: "pubimg/gebru2017chi.jpg",
                title: "Scalable Annotation of Fine-Grained Objects Without Experts.",
                info: "CHI 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/gebru2017chi.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Alexandre Alahi, Judson Wilson, Li Fei-Fei, Silvio Savarese.",
                image: "pubimg/alahi2017icra.png",
                title: "Unsupervised Camera Localization in Crowded Spaces.",
                info: "ICRA 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/alahi2017icra.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Yuke Zhu, Roozbeh Mottaghi, Eric Kolve, Joseph J. Lim, Abhinav Gupta, Li Fei-Fei, Ali Farhadi.",
                image: "pubimg/icra2017.png",
                title: "Target-driven Visual Navigation in Indoor Scenes using Deep Reinforcement Learning.",
                info: "ICRA 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/zhu2017icra.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Ranjay Krishna, Yuke Zhu, Oliver Groth, Justin Johnson, Kenji Hata, Joshua Kravitz, Stephanie Chen, Yannis Kalantidis, Li Jia-Li, David Ayman Shamma, Michael Bernstrein, Li Fei-Fei.",
                image: "pubimg/visualgenome.png",
                title: "Visual Genome: Connecting Language and Vision Using Crowdsourced Dense Image Annotations.",
                info: "IJCV 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/visualgenome.pdf",
                        text: "PDF",
                    },
                    { href: "LINK https://visualgenome.org/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Kenji Hata, Ranjay Krishna, Li Fei-Fei, Michael Bernstein.",
                image: "pubimg/hata2017cscw.png",
                title: "A Glimpse Far into the Future: Understanding Long-term Crowd Worker Accuracy.",
                info: "CSCW 2017.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/hata2017cscw.pdf",
                        text: "PDF",
                    },
                    { href: "LINK http://cs.stanford.edu/people/ranjaykrishna/glimpse/",
                        text: "PROJECT",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2016",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Victor Escorcia, Fabian Caba Heilbron, Juan Carlos Niebles, Bernard Ghanem.",
                image: "eccv16.jpg",
                title: "DAPs: Deep Action Proposals for Action Understanding.",
                info: "European Conference on Computer Vision (ECCV), Amsterdam, Netherlands, October 2016.",
                refs: [
                    { href: "https://link.springer.com/chapter/10.1007/978-3-319-46487-9_47",
                        text: "PDF",
                    },
                    { href: "https://ivul.kaust.edu.sa/Pages/pub-Daps.aspx",
                        text: "PROJECT",
                    },
                    { href: "https://drive.google.com/open?id=0B0ZXjo_p8lHBRGlnZ0Q1dFk2SUk",
                        text: "VIDEO",
                    },
                    { href: "https://link.springer.com/chapter/10.1007/978-3-319-46487-9_47",
                        text: "DOI",
                    },
                    { href: "https://github.com/escorciav/daps",
                        text: "CODE",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Kuo-Hao Zeng, Tseng-Hung Chen, Juan Carlos Niebles, Min Sun.",
                image: "VTG.jpg",
                title: "Title Generation for User Generated Videos.",
                info: "European Conference on Computer Vision (ECCV), Amsterdam, Netherlands, October 2016.",
                refs: [
                    { href: "https://link.springer.com/chapter/10.1007/978-3-319-46475-6_38",
                        text: "PDF",
                    },
                    { href: "http://ug-video.com/",
                        text: "PROJECT",
                    },
                    { href: "https://www.youtube.com/watch?v=KCTQ0vMsyDc",
                        text: "VIDEO",
                    },
                    { href: "http://ug-video.com/",
                        text: "DATA",
                    },
                    { href: "https://link.springer.com/chapter/10.1007/978-3-319-46475-6_38",
                        text: "DOI",
                    },
                    { href: "https://arxiv.org/abs/1608.07068",
                        text: "ARXIV",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Fabian Caba Heilbron, Juan Carlos Niebles and Bernard Ghanem.",
                image: "proposals.jpg",
                title: "Fast Temporal Activity Proposals for Efficient Detection of Human Actions in Untrimmed Videos.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Las Vegas, USA, June 2016.",
                refs: [
                    { href: "https://doi.org/10.1109/CVPR.2016.211",
                        text: "PDF",
                    },
                    { href: "http://www.cabaf.net/temporalproposals/index.html",
                        text: "PROJECT",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2016.211",
                        text: "DOI",
                    },
                    { href: "https://github.com/cabaf/sparseprop",
                        text: "CODE",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Ivan Lillo, Juan Carlos Niebles and Alvaro Soto.",
                image: "actionlets3.jpg",
                title: "A Hierarchical Pose-Based Approach to Complex Action Understanding Using Dictionaries of Actionlets and Motion Poselets.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Las Vegas, USA, June 2016.",
                refs: [
                    { href: "https://doi.org/10.1109/CVPR.2016.218",
                        text: "PDF",
                    },
                    { href: "http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/",
                        text: "DATA",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2016.218",
                        text: "DOI",
                    },
                    { href: "https://arxiv.org/abs/1606.04992",
                        text: "ARXIV",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Guido Pusiol, Andre Esteva, Scott S. Hall, Michael Frank, Arnold Milstein, Li Fei-Fei.",
                image: "pubimg/pusiol2016miccai.png",
                title: "Vision-Based Classification of Developmental Disorders Using Eye-Movements.",
                info: "MICCAI 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/pusiol2016miccai.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Cewu Lu*, Ranjay Krishna*, Michael Bernstein, Li Fei-Fei.",
                image: "pubimg/lu2016eccv.png",
                title: "Visual Relationship Detection with Language Priors.",
                info: "ECCV 2016 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/lu2016eccv.pdf",
                        text: "PDF",
                    },
                    { href: "LINK http://cs.stanford.edu/people/ranjaykrishna/vrd/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "De-An Huang, Li Fei-Fei, Juan Carlos Niebles.",
                image: "ectc-1.png",
                title: "Connectionist Temporal Modeling for Weakly Supervised Action Labeling.",
                info: "European Conference on Computer Vision (ECCV), Amsterdam, Netherlands, October 2016.",
                refs: [
                    { href: "https://link.springer.com/chapter/10.1007/978-3-319-46493-0_9",
                        text: "PDF",
                    },
                    { href: "https://www.youtube.com/watch?v=RW5it641vIs",
                        text: "VIDEO",
                    },
                    { href: "https://link.springer.com/chapter/10.1007/978-3-319-46493-0_9",
                        text: "DOI",
                    },
                    { href: "https://arxiv.org/abs/1607.08584",
                        text: "ARXIV",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Albert Haque, Boya Peng*, Zelun Luo*, Alexandre Alahi, Serena Yeung, Li Fei-Fei.",
                image: "pubimg/haque2016eccv.jpg",
                title: "Towards Viewpoint Invariant 3D Human Pose Estimation.",
                info: "ECCV 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/haque2016eccv.pdf",
                        text: "PDF",
                    },
                    { href: "LINK https://www.albert.cm/projects/viewpoint_3d_pose/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Justin Johnson, Alexandre Alahi, and Li Fei-Fei.",
                image: "pubimg/johnson2016eccv.jpg",
                title: "Perceptual Losses for Real-time Style Transfer and Single Image Super-Resolution.",
                info: "ECCV 2016.",
                refs: [
                    { href: "#",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Amy Bearman, Olga Russakovsky, Vittorio Ferrari and Li Fei-Fei.",
                image: "pubimg/bearman2016eccv.png",
                title: "What's the point: Semantic segmentation with point supervision.",
                info: "ECCV 2016.",
                refs: [
                    { href: "#",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Jonathan Krause, Benjamin Sapp, Andrew Howard, Howard Zhou, Alexander Toshev, Tom Duerig, James Philbin, Li Fei-Fei.",
                image: "pubimg/krause2016eccv.jpg",
                title: "The Unreasonable Effectiveness of Noisy Data for Fine-Grained Recognition.",
                info: "ECCV 2016.",
                refs: [
                    { href: "http://arxiv.org/abs/1511.06789",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Andrej Karpathy*, Justin Johnson*, Li Fei-Fei.",
                image: "pubimg/KarpathyICLR2016.png",
                title: "Visualizing and Understanding Recurrent Networks.",
                info: "ICLR 2016 Workshop.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/KarpathyICLR2016.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Albert Haque, Alexandre Alahi, Li Fei-Fei.",
                image: "pubimg/haque2016cvpr.png",
                title: "Recurrent Attention Models for Depth-Based Person Identification.",
                info: "CVPR 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/haque2016cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "LINK http://www.albert.cm/projects/ram_person_id/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Serena Yeung, Olga Russakovsky, Greg Mori, Li Fei-Fei.",
                image: "pubimg/yeung2016cvpr.png",
                title: "End-to-end Learning of Action Detection from Frame Glimpses in Videos.",
                info: "CVPR 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/yeung2016cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "LINK http://ai.stanford.edu/~syyeung/frameglimpses.html",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Alexandre Alahi*, Kratarth Goel*, Vignesh Ramanathan, Alexandre Robicquet, Li Fei-Fei, Silvio Savarese.",
                image: "pubimg/alahi2016cvpr.png",
                title: "Social LSTM: Human Trajectory Prediction in Crowded Spaces.",
                info: "CVPR 2016 (spotlight).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/CVPR16_N_LSTM.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Vignesh Ramanathan, Jonathan Huang, Sami Abu-El-Haija, Alexander Gorban, Kevin Murphy, Li Fei-Fei.",
                image: "pubimg/ramanathan2016cvpr.png",
                title: "Detecting Events and Key Actors in Multi-person Videos.",
                info: "CVPR 2016 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/ramanathan2016cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "LINK http://basketballattention.appspot.com",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Justin Johnson*, Andrej Karpathy*, Li Fei-Fei.",
                image: "pubimg/densecap.svg",
                title: "DenseCap: Fully Convolutional Localization Networks for Dense Captioning.",
                info: "CVPR 2016 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/johnson2016cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "LINK http://cs.stanford.edu/people/karpathy/densecap/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Yuke Zhu, Oliver Groth, Michael Bernstein, Li Fei-Fei.",
                image: "pubimg/visual7w.png",
                title: "Visual7W: Grounded Question Answering in Images.",
                info: "CVPR 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/zhu2016cvpr.pdf",
                        text: "PDF",
                    },
                    { href: "LINK http://web.stanford.edu/~yukez/visual7w/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Christopher Baldassano, Diane M. Beck, Li Fei-Fei.",
                image: "pubimg/chris16.png",
                title: "Human-object Interactions are More than the Sum of Their Parts.",
                info: "Cerebral Cortex 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/CC2016.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Marius Cătălin Iordan, Michelle R. Greene, Diane M. Beck, Li Fei-Fei.",
                image: "pubimg/catalin16.jpg",
                title: "Typicality Sharpens Category Representations in Object-Selective Cortex.",
                info: "Neuroimage 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/iordan-etal-neuroimage-2016.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Ranjay Krishna, Kenji Hata, Stephanie Chen, Joshua Kravitz, David A. Shamma, Li Fei-Fei, Michael S. Bernstein.",
                image: "pubimg/krishna2016chi.jpg",
                title: "Embracing Error to Enable Rapid Crowdsourcing.",
                info: "CHI: ACM Conference on Human Factors in Computing Systems, 2016.",
                refs: [
                    { href: "http://hci.stanford.edu/publications/2016/rsvp/rsvp.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [],
                authorsText: "Michelle R. Greene.",
                image: "pubimg/CognitionIcon.png",
                title: "Estimations of Object Frequency are Frequently Overestimated.",
                info: "Cognition 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/GreeneCognition2016.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Michelle R. Greene, Christopher Baldassano, Diane M. Beck, Li Fei-Fei.",
                image: "pubimg/JEPGIcon.png",
                title: "Visual Scenes Are Categorized by Function.",
                info: "Journal of Experimental Psychology: General 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/GreeneJEPG2016.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Marie E. Vachovsky, Grace Wu, Sorathan Chaturapruek, Olga Russakovsky, Rick Sommer, Li Fei-Fei.",
                image: "pubimg/sailors.jpg",
                title: "Towards More Gender Diversity in CS through an Artificial Intelligence Summer Program for High School Girls.",
                info: "SIGCSE 2016.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/SAILORS-SIGCSE2016.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "C. B. Choy, J. Gwak, S. Savarese, M. Chandraker,",
                image: "",
                title: "Universal Correspondence Network",
                info: "in Neural Information Processing Systems (NIPS), 2016. oral presentation",
                refs: [
                    { href: "https://papers.nips.cc/paper/6487-universal-correspondence-network",
                        text: " PDF",
                    },
                    { href: "http://cvgl.stanford.edu/projects/ucn",
                        text: "project page",
                    },
                    { href: "https://amberxu.github.io/bibtex/choy2016universal.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "O. Sener, H. O. Song, A. Saxena, S. Savarese,",
                image: "",
                title: "Learning Transferrable Representations for Unsupervised Domain Adaptation",
                info: "in Neural Information Processing Systems (NIPS), 2016.",
                refs: [
                    { href: "https://papers.nips.cc/paper/6360-learning-transferrable-representations-for-unsupervised-domain-adaptation.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/soner2016learning.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "C. B. Choy, D. Xu*, J. Gwak*, K. Chen, S. Savarese,",
                image: "",
                title: "3D-R2N2: A Unified Approach for Single and Multi-view 3D Object Reconstruction",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [
                    { href: "http://download.springer.com/static/PDF/315/chp%253A10.1007%252F978-3-319-46484-8_38.PDF?originUrl=http%3A%2F%2Flink.springer.com%2Fchapter%2F10.1007%2F978-3-319-46484-8_38&token2=exp=1488871345%7Eacl=%2Fstatic%2FPDF%2F315%2Fchp%25253A10.1007%25252F978-3-319-46484-8_38.PDF%3ForiginUrl%3Dhttp%253A%252F%252Flink.springer.com%252Fchapter%252F10.1007%252F978-3-319-46484-8_38*%7Ehmac=87c4725a5031e36a5ede8b411ccaef0d38be69b891589f900bbd384d51728f73",
                        text: "PDF",
                    },
                    { href: "https://github.com/chrischoy/3D-R2N2",
                        text: "code",
                    },
                    { href: "http://3d-r2n2.stanford.edu/",
                        text: "project page",
                    },
                    { href: "https://amberxu.github.io/bibtex/choy20163d.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. Robicquet, A. Sadeghian, A. Alahi, S. Savarese,",
                image: "",
                title: "Learning Social Etiquette: Human Trajectory Prediction",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [
                    { href: "http://web.stanford.edu/%7Ealahi/downloads/ECCV16social.PDF",
                        text: "PDF",
                    },
                    { href: "http://cvgl.stanford.edu/projects/uav_data/",
                        text: "project",
                    },
                    { href: "https://amberxu.github.io/bibtex/robicquet2016learning.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "L. Ballan, F. Castaldo, A. Alahi, F. Palmieri, S. Savarese,",
                image: "",
                title: "Knowledge Transfer for Scene-specific Motion Prediction",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [
                    { href: "https://amberxu.github.io/papers/ballan_eccv16.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. R. Zamir, P. Agrawal, T. Wekel, J. Malik, S. Savarese,",
                image: "",
                title: "Generic 3D Representations via Pose Estimation and Matching",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [
                    { href: "https://amberxu.github.io/papers/zamir_eccv16.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/papers/zamir_eccv16_supp.PDF",
                        text: "supplementary",
                    },
                    { href: "http://3drepresentation.stanford.edu/",
                        text: "project",
                    },
                    { href: "https://amberxu.github.io/bibtex/zamir_eccv16.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang, W. Kim, W. Chen, J. Ji, C. Choy, H. Su, R. Mottaghi, L. Guibas, S. Savarese,",
                image: "",
                title: "ObjectNet3D: A Large Scale Database for 3D Object Recognition.",
                info: "in European Conference on Computer Vision (ECCV), 2016 spotlight.",
                refs: [
                    { href: "https://amberxu.github.io/papers/xiang_eccv16.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/papers/xiang_eccv16_tr.PDF",
                        text: "technical report",
                    },
                    { href: "https://amberxu.github.io/bibtex/xiang_eccv16.bib",
                        text: "bibtex",
                    },
                    { href: "http://cvgl.stanford.edu/projects/objectnet3d",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "D. Held, S. Thrun, S. Savarese,",
                image: "",
                title: "Learning to Track at 100 FPS with Deep Regression Networks",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [
                    { href: "http://arxiv.org/abs/1604.01802",
                        text: "arXiv",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "C. Redondo-Cabrera, R. LÃ³pez-Sastre, Y. Xiang, T. Tuytelaars, S. Savarese,",
                image: "",
                title: "Pose Estimation Errors, the Ultimate Diagnosis",
                info: "in European Conference on Computer Vision (ECCV), 2016.",
                refs: [
                    { href: "https://amberxu.github.io/papers/eccv2016-redondo.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/cabrera_eccv16.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "D. Held, D. Guillory, B. Rebsamen, S. Thrun, S. Savarese,",
                image: "",
                title: "A Probabilistic Framework for Real-time 3D Segmentation using Spatial, Temporal, and Semantic Cues",
                info: "Proceedings of Robotics: Science and Systems (RSS), 2016.",
                refs: [
                    { href: "http://davheld.github.io/segmentation3D/segmentation3D.html",
                        text: "project",
                    },
                    { href: "https://amberxu.github.io/bibtex/held_rss16.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "I. Armeni, O. Sener, A. R. Zamir, H. Jiang, I. Brilakis, M. Fischer, S. Savarese,",
                image: "",
                title: "3D Semantic Parsing of Large-Scale Indoor Spaces",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2016 oral presentation.",
                refs: [
                    { href: "http://buildingparser.stanford.edu3D_Semantic_Parsing.PDF",
                        text: "PDF",
                    },
                    { href: "http://buildingparser.stanford.edusupp_mat.PDF",
                        text: "technical report",
                    },
                    { href: "https://amberxu.github.io/bibtex/armeni_cvpr16.bib",
                        text: "bibtex",
                    },
                    { href: "http://buildingparser.stanford.edu/",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. Jain, A. R. Zamir, S. Savarese, A. Saxena,",
                image: "",
                title: "Structural-RNN: Deep Learning on Spatio-Temporal Graphs",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2016 oral presentation, Best Student Paper Award;.",
                refs: [
                    { href: "https://amberxu.github.io/papers/jain_cvpr16.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/papers/srnn_supplementary.PDF",
                        text: "technical report",
                    },
                    { href: "http://asheshjain.org/srnn/index.html",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. Alahi*, K. Goel*, V. Ramanathan, A. Robicquet, L. Fei-Fei, S. Savarese,",
                image: "",
                title: "Social LSTM: Human Trajectory Prediction in Crowded Spaces",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2016 spotlight.",
                refs: [
                    { href: "https://amberxu.github.io/papers/CVPR16_Social_LSTM.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/alahi_cvpr16.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "H. O. Song, Y. Xiang, S. Jegelka, S. Savarese,",
                image: "",
                title: "Deep Metric Learning via Lifted Structured Feature Embedding",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2016 spotlight.",
                refs: [
                    { href: "https://amberxu.github.io/papers/song_cvpr16.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/papers/song_cvpr16_supp.PDF",
                        text: "technical report",
                    },
                    { href: "http://ai.stanford.edu/%7Ehsong/bibs/Song-CVPR16.txt",
                        text: "bibtex",
                    },
                    { href: "https://github.com/rksltnl/Deep-Metric-Learning-CVPR16",
                        text: "code",
                    },
                    { href: "http://cvgl.stanford.edu/projects/lifted_struct",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Dasgupta, K. Fang* , K. Chen*, S. Savarese,",
                image: "",
                title: "DeLay: Robust Spatial Layout Estimation for Cluttered Indoor Scenes",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2016.",
                refs: [
                    { href: "https://amberxu.github.io/papers/delay-robust-spatial.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/deeplayout.stanford.edu",
                        text: "project",
                    },
                    { href: "https://amberxu.github.io/papers/dasgupta_cvpr16.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "D. Held, S. Thrun, S. Savarese,",
                image: "",
                title: "Robust Single-View Instance Recognition",
                info: "in IEEE International Conference on Robotics and Automation (ICRA) 2016.",
                refs: [
                    { href: "https://amberxu.github.io/papers/held_icra16.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/held_icra16.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "C. Wu, J. Zhang, B. Selman, S. Savarese and A. Saxena,",
                image: "",
                title: "Watch-Bot: Unsupervised Learning for Reminding Humans of Forgotten Actions",
                info: "in IEEE International Conference on Robotics and Automation (ICRA) 2016.",
                refs: [
                    { href: "https://amberxu.github.io/papers/wu_icra16.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/wu_icra16.bib",
                        text: "bibtex",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2015",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Fabian Caba, Victor Escorcia, Bernard Ghanem, Juan Carlos Niebles.",
                image: "anet_cvpr15b.jpg",
                title: "ActivityNet: A Large-Scale Video Benchmark for Human Activity Understanding.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Boston, USA, June 2015.",
                refs: [
                    { href: "https://doi.org/10.1109/CVPR.2015.7298698",
                        text: "PDF",
                    },
                    { href: "http://activity-net.org",
                        text: "PROJECT",
                    },
                    { href: "http://activity-net.org/download.html",
                        text: "DATA",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2015.7298698",
                        text: "DOI",
                    },
                    { href: "https://github.com/activitynet/ActivityNet",
                        text: "CODE",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Victor Escorcia, Juan Carlos Niebles, Bernard Ghanem.",
                image: "cvpr15a.jpg",
                title: "On the Relationship between Visual Attributes and Convolutional Networks.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Boston, USA, June 2015.",
                refs: [
                    { href: "https://doi.org/10.1109/CVPR.2015.7298730",
                        text: "PDF",
                    },
                    { href: "https://drive.google.com/open?id=0B0ZXjo_p8lHBb3dDakFpNXRrUkU",
                        text: "VIDEO",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2015.7298730",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Bernard Ghanem, Ali Thabet, Juan Carlos Niebles, Fabian Caba.",
                image: "manhattan.jpg",
                title: "Robust Manhattan Frame Estimation from a Single RGB-D Image.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Boston, USA, June 2015.",
                refs: [
                    { href: "https://doi.org/10.1109/CVPR.2015.7299001",
                        text: "PDF",
                    },
                    { href: "https://ivul.kaust.edu.sa/Pages/Pub-Manhattan-Frame-Estimation-CVPR-2015.aspx",
                        text: "PROJECT",
                    },
                    { href: "https://ivul.kaust.edu.sa/Documents/Data/Robust%20Manhattan%20Frame%20Estimation%20from%20a%20Single%20RGB-D%20Image.zip",
                        text: "DATA",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2015.7299001",
                        text: "DOI",
                    },
                    { href: "https://ivul.kaust.edu.sa/Documents/more/code/MFE.zip",
                        text: "CODE",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. X. Chang, T. Funkhouser, L. Guibas, P. Hanrahan, Q. Huang, Z. Li, S. Savarese, M. Savva, S. Song, H. Su, J. Xiao, L. Yi, F. Yu,",
                image: "",
                title: "ShapeNet: An Information-Rich 3D Model Repository",
                info: "in arXiv 2015.",
                refs: [
                    { href: "http://arxiv.org/PDF/1512.03012v1.PDF",
                        text: "PDF",
                    },
                    { href: "http://dblp.uni-trier.de/rec/bibtex/journals/corr/ChangFGHHLSSSSX15",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi, Y. Chao, C. Pantofaru, S. Savarese,",
                image: "",
                title: "Indoor Scene Understanding with Geometric and Semantic Contexts",
                info: "in International Journal of Computer Vision (IJCV) April 2015, Volume 112, Issue 2, pp 204-220.",
                refs: [
                    { href: "http://link.springer.com/article/10.1007%2Fs11263-014-0779-4",
                        text: "paper",
                    },
                    { href: "https://amberxu.github.io/bibtex/choi_ijcv15.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "F. Castaldo, A. R. Zamir, R. Angst, F. Palmieri, and S. Savarese,",
                image: "",
                title: "Semantic Cross-View Matching",
                info: "in Vision from Satellite to Street - The Second International Workshop in Conjunction with ICCV 2015. Google runner-up best paper award on",
                refs: [
                    { href: "http://web.ornl.gov/%7Ejiy/open/VisionfromSatellitetoStreet.htm",
                        text: "VFSTS Workshop 2015.",
                    },
                    { href: "https://amberxu.github.io/papers/castaldo_iccv15.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/castaldo2015.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "T. Lan, Y. Zhu, A. R. Zamir and S. Savarese,",
                image: "",
                title: "Action Recognition by Hierarchical Mid-level Action Elements",
                info: "in International Conference on Computer Vision (ICCV), 2015.",
                refs: [
                    { href: "https://amberxu.github.io/papers/tian2015.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/lan_iccv2015.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "O. Sener, A. R. Zamir, S. Savarese, A. Saxena,",
                image: "",
                title: "Unsupervised Semantic Parsing of Video Collections",
                info: "in International Conference on Computer Vision (ICCV), 2015.",
                refs: [
                    { href: "https://amberxu.github.io/papers/video_storyline.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/sener_iccv15.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang, A. Alahi, and S. Savarese,",
                image: "",
                title: "Learning to Track: Online Multi-Object Tracking by Decision Making",
                info: "in International Conference on Computer Vision (ICCV), 2015. Accepted as Oral,",
                refs: [
                    { href: "https://amberxu.github.io/papers/xiang_iccv15.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/xiang_iccv15.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/xiang_iccv15_tr.PDF",
                        text: "technical report",
                    },
                    { href: "http://cvgl.stanford.edu/projects/MDP_tracking",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "G. Pandey, J. R. McBride, S. Savarese, R. M. Eustice,",
                image: "",
                title: "Automatic Extrinsic Calibration of Vision and Lidar by Maximizing Mutual Information",
                info: "In the Journal of Field Robotics, 2015",
                refs: [
                    { href: "https://amberxu.github.io/papers/pandey_jfr15.PDF",
                        text: "PDF",
                    },
                    { href: "http://onlinelibrary.wiley.com/doi/10.1002/rob.2015.32.issue-5/issuetoc",
                        text: "Journal of Field Robotics, Volume 32, Issue 5, August 2015",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "David Held, Jesse Levinson, Sebastian Thrun, Silvio Savarese,",
                image: "",
                title: "Robust Real-Time Tracking Combining 3D Shape, Color, and Motion",
                info: "In International Journal of Robotics Research (IJRR) 2015.",
                refs: [
                    { href: "http://web.stanford.edu/%7Edavheld/DavidHeld_files/ijrr_tracking.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang, W. Choi, Y. Lin and S. Savarese,",
                image: "",
                title: "Data-Driven 3D Voxel Patterns for Object Category Recognition",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2015. Accepted as Oral,",
                refs: [
                    { href: "https://amberxu.github.io/papers/xiang_cvpr15_3dvp.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/xiang_cvpr15.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/xiang_cvpr15_3dvp_tr.PDF",
                        text: "technical report",
                    },
                    { href: "http://cvgl.stanford.edu/projects/3DVP",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "R. Mottaghi, Y. Xiang and S. Savarese,",
                image: "",
                title: "A Coarse-to-Fine Model for 3D Pose Estimation and Sub-category Recognition",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2015.",
                refs: [
                    { href: "https://amberxu.github.io/papers/Mottaghi15cvpr.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/mottaghi_cvpr15.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/Mottaghi15cvpr-sm.PDF",
                        text: "technical report",
                    },
                    { href: "http://cvgl.stanford.edu/projects/C2F",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "C. B. Choy, M. Stark, S. Corbett-Davies, S. Savarese,",
                image: "",
                title: "Enriching Object Detection with 2D-3D Registration and Continuous Viewpoint Estimation",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2015.",
                refs: [
                    { href: "https://amberxu.github.io/papers/choy_cvpr15_hires.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/papers/choy_cvpr15_supp.PDF",
                        text: "supplementary",
                    },
                    { href: "https://amberxu.github.io/bibtex/choy_cvpr15.bib",
                        text: "bibtex",
                    },
                    { href: "https://github.com/chrischoy/enriching_object_detection",
                        text: "code",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "C. Wu, J. Zhang, S. Savarese, A. Saxena,",
                image: "",
                title: "Watch-n-Patch: Unsupervised Understanding of Actions and Relations",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2015.",
                refs: [
                    { href: "https://amberxu.github.io/papers/watchnpatch_cvpr15.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/watchnpatch_cvpr15.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Michelle R. Greene, Abraham P. Botros, Diane M. Beck, Li Fei-Fei.",
                image: "pubimg/APPIcon.png",
                title: "What You See is What You Expect: Rapid Scene Understanding Benefits from Prior Experience.",
                info: "Attention, Perception, & Psychophysics 2015.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/improbableAPP2015.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Sebastian Schuster, Ranjay Krishna, Angel Chang, Li Fei-Fei, Christopher D. Manning.",
                image: "pubimg/3571351_orig.png",
                title: "Generating Semantically Precise Scene Graphs from Textual Descriptions for Improved Image Retrieval.",
                info: "Empirical Methods in Natural Language Processing (EMNLP) - Vision and Language Workshop 2015 (oral).",
                refs: [
                    { href: "http://nlp.stanford.edu/pubs/schuster-krishna-chang-feifei-manning-vl15.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Marius Cătălin Iordan, Armand Joulin, Diane M. Beck, Li Fei-Fei.",
                image: "pubimg/mci_nips2015.jpg",
                title: "Locally-Optimized Inter-Subject Alignment of Functional Cortical Regions.",
                info: "Machine Learning and Interpretation in Neuroimaging (MLINI) Workshop, NIPS 2015.",
                refs: [
                    { href: "",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Alexandre Alahi, Albert Haque, Li Fei-Fei.",
                image: "pubimg/rgbw15_1.png",
                title: "RGB-W: When Vision Meets Wireless.",
                info: "ICCV 2015.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/RGBW_ICCV15.pdf",
                        text: "PDF",
                    },
                    { href: "LINK https://www.albert.cm/projects/rgbw/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Kevin Tang, Manohar Paluri, Li Fei-Fei, Rob Fergus, Lubomir Bourdev.",
                image: "pubimg/yfcc100m.png",
                title: "Improving Image Classification with Location Context.",
                info: "ICCV 2015.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/tang2015iccv.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Vignesh Ramanathan, Kevin Tang, Greg Mori and Li Fei-Fei.",
                image: "pubimg/vig15.png",
                title: "Learning temporal embeddings for complex video analysis.",
                info: "ICCV 2015.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/RamanathanICCV2015.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Justin Johnson*, Lamberto Ballan*, Li Fei-Fei.",
                image: "pubimg/GraphNeighborhoodSmall.jpg",
                title: "Love Thy Neighbors: Image Annotation by Exploiting Image Metadata.",
                info: "ICCV 2015.",
                refs: [
                    { href: "http://cs.stanford.edu/people/jcjohns/papers/iccv15/JohnsonICCV2015.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Justin Johnson, Ranjay Krishna, Michael Stark, Li-Jia Li, David Ayman Shamma, Michael Bernstein, Li Fei-Fei.",
                image: "pubimg/justin15.png",
                title: "Image Retrieval using Scene Graphs.",
                info: "CVPR 2015.",
                refs: [
                    { href: "http://cs.stanford.edu/people/jcjohns/papers/cvpr2015/JohnsonCVPR2015.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Andrej Karpathy, Li Fei-Fei.",
                image: "pubimg/rnn7.png",
                title: "Deep Visual-Semantic Alignments for Generating Image Descriptions.",
                info: "CVPR 2015 (oral).",
                refs: [
                    { href: "http://cs.stanford.edu/people/karpathy/cvpr2015.pdf",
                        text: "PDF",
                    },
                    { href: "LINK http://cs.stanford.edu/people/karpathy/deepimagesent/",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Jonathan Krause, Hailin Jin, Jianchao Yang, Li Fei-Fei.",
                image: "pubimg/jon_cvpr15.png",
                title: "Fine-Grained Recognition without Part Annotations.",
                info: "CVPR 2015.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/joncvpr15.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Olga Russakovsky, Li-Jia Li, Li Fei-Fei.",
                image: "pubimg/olga15.jpg",
                title: "Best of both worlds: human-machine collaboration for dense object annotation.",
                info: "CVPR 2015.",
                refs: [
                    { href: "http://ai.stanford.edu/%7Eolga/papers/RussakovskyCVPR15.pdf",
                        text: "PDF",
                    },
                    { href: "LINK http://ai.stanford.edu/~olga/best_of_both_worlds.html",
                        text: "PROJECT",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Christopher Baldassano, Diane M. Beck, Li Fei-Fei.",
                image: "pubimg/brain.png",
                title: "Parcellating connectivity in spatial maps.",
                info: "PeerJ 2015.",
                refs: [
                    { href: "http://www.princeton.edu/%7Echrisb/peerj-784.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Olga Russakovsky*, Jia Deng*, Hao Su, Jonathan Krause, Sanjeev Satheesh, Sean Ma, Zhiheng Huang, Andrej Karpathy, Aditya Khosla, Michael Bernstein, Alexander C. Berg, Li Fei-Fei.",
                image: "pubimg/ilsvrc.jpg",
                title: "ImageNet Large Scale Visual Recognition Challenge.",
                info: "IJCV 2015.",
                refs: [
                    { href: "http://arxiv.org/abs/1409.0575",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Marius Cătălin Iordan, Michelle R. Greene, Diane M. Beck, Li Fei-Fei.",
                image: "pubimg/cogneuro15.jpeg",
                title: "Basic Level Category Structure Emerges Gradually Across Human Ventral Visual Cortex.",
                info: "Journal of Cognitive Neuroscience 2015.",
                refs: [
                    { href: "http://cs.stanford.edu/%7Emci/materials/iordan-etal-jocn-2015.pdf",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2014",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Fabian Caba Heilbron, Ali Thabet, Juan Carlos Niebles, Bernard Ghanem.",
                image: "actioncue.jpg",
                title: "Camera Motion and Surrounding Scene Appearance as Context for Action Recognition.",
                info: "Asian Conference on Computer Vision (ACCV), Singapore, November 2014.",
                refs: [
                    { href: "https://link.springer.com/chapter/10.1007/978-3-319-16817-3_38",
                        text: "PDF",
                    },
                    { href: "http://www.cabaf.net/actioncue/index.html",
                        text: "PROJECT",
                    },
                    { href: "https://link.springer.com/chapter/10.1007/978-3-319-16817-3_38",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Ardalan Khosrowpour, Juan Carlos Niebles and Mani Golparvar-Fard.",
                image: "automation2014.png",
                title: "Vision-based workface assessment using depth images for activity analysis of interior construction operations.",
                info: "Automation in Construction, December 2014.",
                refs: [
                    { href: "http://dx.doi.org/10.1016/j.autcon.2014.08.003",
                        text: "PDF",
                    },
                    { href: "http://dx.doi.org/10.1016/j.autcon.2014.08.003",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Ivan Lillo, Alvaro Soto, Juan Carlos Niebles.",
                image: "cvpr2014.png",
                title: "Discriminative Hierarchical Modeling of Spatio-Temporally Composable Human Activities.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), Colombus, USA, June 2014.",
                refs: [
                    { href: "https://doi.org/10.1109/CVPR.2014.109",
                        text: "PDF",
                    },
                    { href: "http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/",
                        text: "PROJECT",
                    },
                    { href: "https://www.youtube.com/watch?v=_pdfLrie0_8",
                        text: "VIDEO",
                    },
                    { href: "http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/",
                        text: "DATA",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2014.109",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Ardalan Khosrowpour, Igor Fedorov, Aleksander Holynski, Juan Carlos Niebles and Mani Golparvar-Fard.",
                image: "indoor.png",
                title: "Automated Worker Activity Analysis in Indoor Environments for Direct-Work Rate Improvement from long sequences of RGB-D Images.",
                info: "Construction Research Congress, Atlanta, USA, May 2014.",
                refs: [
                    { href: "http://dx.doi.org/10.1061/9780784413517.075",
                        text: "PDF",
                    },
                    { href: "http://dx.doi.org/10.1061/9780784413517.075",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun*, B. Kim*, P. Kohli, S. Savarese,",
                image: "",
                title: "Relating Things and Stuff via Object Property  Interactions",
                info: "in Pattern Analysis and Machine Intelligence (PAMI), 2014. (* indicates equal contribution)",
                refs: [
                    { href: "https://amberxu.github.io/papers/pami14_acrf.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/pami14_acrf.bib",
                        text: "bibtex",
                    },
                    { href: "http://cvgl.stanford.edu/projects/ACRF/ACRFproj.html",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi and S. Savarese,",
                image: "",
                title: "Understanding Collective Activities of People from Videos",
                info: "in Pattern Analysis and Machine Intelligence (PAMI), 2014.",
                refs: [
                    { href: "https://amberxu.github.io/papers/choi_pami14.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/choi_pami14.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "T. Lan, T. Chen, and S. Savarese,",
                image: "",
                title: "A Hierarchical Representation for Future Action Prediction",
                info: "in European Conference on Computer Vision (ECCV), 2014.",
                refs: [
                    { href: "https://amberxu.github.io/papers/lan_eccv14.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi, Y. Chao, C. Pantofaru and S. Savarese,",
                image: "",
                title: "Discovering Groups of People in Images",
                info: "in European Conference on Computer Vision (ECCV), 2014.",
                refs: [
                    { href: "https://amberxu.github.io/papers/choi_eccv14.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang*, C. Song*, R. Mottaghi and S. Savarese,",
                image: "",
                title: "Monocular Multiview Object Tracking with 3D Aspect Parts",
                info: "in European Conference on Computer Vision (ECCV), 2014.",
                refs: [
                    { href: "https://amberxu.github.io/papers/xiang_eccv14.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/xiang_eccv14.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/xiang_eccv14_tr.PDF",
                        text: "technical report",
                    },
                    { href: "https://amberxu.github.io/projects/multiview_tracking",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "R. Mittelman, B. Kuipers, S. Savarese, H. Lee,",
                image: "",
                title: "Structured Recurrent Temporal Restricted Boltzmann Machines",
                info: "in International Conference on Machine Learning (ICML), 2014.",
                refs: [
                    { href: "https://amberxu.github.io/papers/srtrbm_icml14.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "D. Held, J. Levinson, S. Thrun, S. Savarese,",
                image: "",
                title: "Combining 3D Shape, Color, and Motion for Robust Anytime Tracking",
                info: "in Robotics: Science and Systems (RSS), 2014.",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/held_rss2014.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "L. Leal-TaixÃ©, M. Fenzi, A. Kuznetsova, B. Rosenhahn, S. Savarese,",
                image: "",
                title: "Learning an image-based motion context for multiple people tracking",
                info: "in IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2014.",
                refs: [
                    { href: "https://amberxu.github.io/papers/LeaFenKuzRosSavCVPR14.PDF",
                        text: "PDF",
                    },
                    { href: "http://www.tnt.uni-hannover.de/papers/show_bibtex.php?id=1022",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "G. Pandey, J. R. McBride, S. Savarese and R. M. Eustice,",
                image: "",
                title: "Toward mutual information based place recognition",
                info: "in IEEE International Conference on Robotics and Automation (ICRA), 2014.",
                refs: [
                    { href: "http://robots.engin.umich.edu/publications/gpandey-2014a.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Bao, A. Furlan, L. Fei-Fei, S. Savarese,",
                image: "",
                title: "Understanding the 3D Layout of a Cluttered Room From Multiple Images",
                info: "in IEEE Winter Conference on Applications of Computer Vision (WACV), 2014.",
                refs: [
                    { href: "https://amberxu.github.io/papers/bao_wacv2014.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/bao_wacv2014.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang, R. Mottaghi and S. Savarese,",
                image: "",
                title: "Beyond PASCAL: A Benchmark for 3D Object Detection in the Wild",
                info: "in IEEE Winter Conference on Applications of Computer Vision (WACV), 2014.",
                refs: [
                    { href: "https://amberxu.github.io/papers/xiang_wacv14.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/xiang_wacv14.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/projects/pascal3d.html",
                        text: "PASCAL3D+",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Andrej Karpathy, Armand Joulin, Li Fei-Fei.",
                image: "pubimg/nips_small.jpg",
                title: "Deep Fragment Embeddings for Bidirectional Image-Sentence Mapping.",
                info: "NIPS 2014.",
                refs: [
                    { href: "http://cs.stanford.edu/people/karpathy/nips2014.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Vignesh Ramanathan, Armand Joulin, Percy Liang and Li Fei-Fei.",
                image: "pubimg/vignesh14.jpeg",
                title: "Joint person naming in videos and coreference resolution in text.",
                info: "ECCV 2014.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/vignesh14.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Yuke Zhu, Alireza Fathi, and Li Fei-Fei.",
                image: "pubimg/zhuECCV2014.png",
                title: "Reasoning About Object Affordances in a Knowledge Base Representation.",
                info: "ECCV 2014.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/zhu14.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Armand Joulin*, Kevin Tang*, Li Fei-Fei.",
                image: "pubimg/kevin14.jpeg",
                title: "Efficient Image and Video Co-localization with Frank-Wolfe Algorithm.",
                info: "ECCV 2014.",
                refs: [
                    { href: "http://ai.stanford.edu/%7Ekdtang/papers/eccv14-vidcoloc.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [],
                authorsText: "Pusiol, G., Soriano, L., Fei-Fei, L., Frank, M. C..",
                image: "pubimg/guido14.png",
                title: "Discovering the Signatures of Joint Attention in Child-Caregiver Interaction.",
                info: "CogSci 2014.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/guido14.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Andrej Karpathy, George Toderici, Sanketh Shetty, Thomas Leung, Rahul Sukthankar, Li Fei-Fei.",
                image: "pubimg/karpathy14.png",
                title: "Large-Scale Video Classification with Convolutional Neural Networks.",
                info: "CVPR 2014 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/karpathy14.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Alexandre Alahi, Vignesh Ramanathan, and Li Fei-Fei.",
                image: "pubimg/alahi14.png",
                title: "Socially-aware Large-scale Crowd Forecasting.",
                info: "CVPR 2014 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/alahi14.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Kevin Tang, Armand Joulin, Li-Jia Li, Li Fei-Fei.",
                image: "pubimg/coloc14.jpeg",
                title: "Co-localization in Real-World Images.",
                info: "CVPR 2014.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/tang14.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Jia Deng, Olga Russakovsky, Jonathan Krause, Michael Bernstein, Alexander C. Berg and Li Fei-Fei..",
                image: "pubimg/scalable14.jpeg",
                title: "Scalable Multi-Label Annotation.",
                info: "CHI 2014.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/chi2014-MultiLabel.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Michelle Greene, Li Fei-Fei.",
                image: "pubimg/visual14.jpeg",
                title: "Visual Categorization is Automatic and Obligatory: Evidence from a Stroop-like Paradigm.",
                info: "Journal of Vision, 2014.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/14.full.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Jonathan Krause, Timnit Gebru, Jia Deng, Li-Jia Li, Li Fei-Fei.",
                image: "pubimg/icpr.png",
                title: "Learning Features and Parts for Fine-Grained Recognition.",
                info: "ICPR, 2014.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/icpr14.pdf",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2013",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang and S. Savarese,",
                image: "",
                title: "Object Detection by 3D Aspectlets and Occlusion Reasoning",
                info: "in the 4th International IEEE Workshop on 3D Representation and Recognition (3dRR), 2013.",
                refs: [
                    { href: "https://amberxu.github.io/papers/xiang_3drr13.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/papers/xiang_3drr13_tr.PDF",
                        text: "technical report",
                    },
                    { href: "https://amberxu.github.io/bibtex/xiang_3drr13.bib",
                        text: "bibtex",
                    },
                    { href: "http://cvgl.stanford.edu/data/dataset_3dRR13.zip",
                        text: "dataset",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun, S. S. Kumar, G. Bradski, S. Savarese,",
                image: "",
                title: "Object detection, shape recovery, and 3D modelling by depth-encoded hough voting",
                info: "in Computer Vision and Image Understanding (CVIU), 2013.",
                refs: [
                    { href: "https://amberxu.github.io/papers/sun_cviu2013.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/sun_cviu2013.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "B. Kim, J. Park, A. Gilbert, S. Savarese,",
                image: "",
                title: "Hierarchical Classification of Images by Sparse Approximation",
                info: "in Image and Vision Computing (IMAVIS), 2013 in press.",
                refs: [
                    { href: "https://amberxu.github.io/papers/imavis13_sparse.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/imavis13_sparse.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "R. Tokola, W. Choi, and S. Savarese,",
                image: "",
                title: "Breaking the chain: liberation from the temporal Markov assumption for tracking human poses",
                info: "Proceedings of the International Conference in Computer Vision (ICCV) 2013.",
                refs: [
                    { href: "https://amberxu.github.io/papers/RT_ICCV2013_CAMERA_READY.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/tokola_iccv2013.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun, W. Huang, and S. Savarese,",
                image: "",
                title: "Find the Best Path: an Efficient and Accurate Classifier for Image Hierarchies",
                info: "Proceedings of the International Conference in Computer Vision (ICCV) 2013.",
                refs: [
                    { href: "https://amberxu.github.io/papers/PID2965309.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/sun_iccv2013.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "B. Kim, P. Kohli, and S. Savarese,",
                image: "",
                title: "3D Scene Understanding by Voxel-CRF",
                info: "Proceedings of the International Conference in Computer Vision (ICCV) 2013.",
                refs: [
                    { href: "https://amberxu.github.io/papers/iccv13_final_kks.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/kim_iccv2013.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y.-W. Chao, W. Choi, C. Pantofaru, and S. Savarese,",
                image: "",
                title: "Layout Estimation of Highly Cluttered Indoor Scenes using Geometric and Semantic Cues",
                info: "Proceedings of the International Conference on Image Analysis and Processing (ICIAP), 2013.",
                refs: [
                    { href: "https://amberxu.github.io/papers/chao_iciap2013.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/chao_iciap2013.bib",
                        text: "bibtex",
                    },
                    { href: "http://www.eecs.umich.edu/vision/IndoorHumanActivity/",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. Furlan, S. Miller, D. G. Sorrenti, L. Fei-Fei, and S. Savarese,",
                image: "",
                title: "Free your Camera: 3D Indoor Scene Understanding from Arbitrary Camera Motion",
                info: "Proceedings of the British Machine Vision Conference (BMVC), 2013.",
                refs: [
                    { href: "https://amberxu.github.io/papers/Furlan_et_al_Camera_Ready.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/fulan_bmvc13.bib",
                        text: "bibtex",
                    },
                    { href: "http://www.ira.disco.unimib.it/research/free-your-camera-3d-indoor-scene-understanding-from-arbitrary-camera-motion/",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "R. Mittelman, H. Lee, B. Kuipers, and S. Savarese,",
                image: "",
                title: "Weakly Supervised Learning of Mid-Level Features with Beta-Bernoulli Process Restricted Boltzmann Machines",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2013.",
                refs: [
                    { href: "https://amberxu.github.io/papers/Mittelman_cvpr13.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/Mittelman_cvpr13.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Bao, M. Chandraker, Y. Lin, and S. Savarese,",
                image: "",
                title: "Dense Object Reconstruction Using Semantic Priors",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2013. oral presentation",
                refs: [
                    { href: "https://amberxu.github.io/papers/Bao_semantic_reconstruction_cvpr13.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/Bao_cvpr13.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "B. Kim, S. Xu, and S. Savarese,",
                image: "",
                title: "Accurate Localization of 3D Objects from RGB-D Data using Segmentation Hypotheses",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2013.",
                refs: [
                    { href: "http://www.umich.edu/%7Ebsookim/papers/bkim_cvpr13.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/BKim_cvpr13.bib",
                        text: "bibtex",
                    },
                    { href: "http://cvgl.stanford.edu/projects/al3d/al3dproj.html",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi, Y.-W. Chao, C. Pantofaru, and S. Savarese,",
                image: "",
                title: "Understanding Indoor Scenes using 3D Geometric Phrases",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2013. oral presentation",
                refs: [
                    { href: "https://amberxu.github.io/papers/choi_cvpr13.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/papers/choi_cvpr13_supp.PDF",
                        text: "supplementary",
                    },
                    { href: "https://amberxu.github.io/bibtex/choi_cvpr13.bib",
                        text: "bibtex",
                    },
                    { href: "http://www.eecs.umich.edu/vision/3DGP/",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi, C. Pantofaru and S. Savarese,",
                image: "",
                title: "A General Framework for Tracking Multiple People from a Moving Camera",
                info: "in Pattern Analysis and Machine Intelligence (PAMI), 2012 in press.",
                refs: [
                    { href: "http://www.willowgarage.com/sites/default/files/pami_preprint.PDF",
                        text: "pre-print",
                    },
                    { href: "http://www-personal.umich.edu/%7Ewgchoi/pami_track/",
                        text: "details",
                    },
                    { href: "http://www-personal.umich.edu/%7Ewgchoi/pami_track/choi_pami12.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Mani Golparvar-Fard, Arsalan Heydarian and Juan Carlos Niebles.",
                image: "earthmoving.jpg",
                title: "Vision-based action recognition of earthmoving equipment using spatio-temporal features and support vector machine classifiers.",
                info: "Advanced Engineering Informatics, Sydney, Australia, October 2013.",
                refs: [
                    { href: "http://dx.doi.org/10.1016/j.aei.2013.09.001",
                        text: "PDF",
                    },
                    { href: "/iccvw13",
                        text: "PROJECT",
                    },
                    { href: "https://www.youtube.com/watch?v=a71etgmhlpQ",
                        text: "VIDEO",
                    },
                    { href: "http://dx.doi.org/10.1016/j.aei.2013.09.001",
                        text: "DOI",
                    },
                    { href: "https://github.com/cabaf/activity_annotation",
                        text: "CODE",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Milad Memarzadeh, Mani Golparvar-Fard and Juan Carlos Niebles.",
                image: "hogc.jpg",
                title: "Automated 2D detection of construction equipment and workers from site video streams using histograms of oriented gradients and colors.",
                info: "Automation in Construction, July 2013.",
                refs: [
                    { href: "http://dx.doi.org/10.1016/j.autcon.2012.12.002",
                        text: "PDF",
                    },
                    { href: "http://dx.doi.org/10.1016/j.autcon.2012.12.002",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "R. Mittelman and M. Sun and B. Kuipers and S. Savarese,",
                image: "",
                title: "Learning Hierarchical Linguistic Descriptions of Visual Datasets",
                info: "NAACL-HLT Workshop on Vision and Language, 2013.",
                refs: [
                    { href: "https://amberxu.github.io/papers/Mittelman_wvl13.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/Mittelman_wvl13.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "V. Garro and A. Fusiello and S. Savarese,",
                image: "",
                title: "Label Transfer Exploiting Three-dimensional Structure for Semantic Segmentation",
                info: "Proceedings of the 6th International Conference on Computer Vision/Computer Graphics Collaboration Techniques and Applications (MIRAGE).",
                refs: [
                    { href: "https://amberxu.github.io/papers/garro_MIRAGE13.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/garro_MIRAGE13.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Axel Furlan, Stephen Miller, Domenico Giorgio Sorrenti, Li Fei-Fei, Silvio Savarese.",
                image: "pubimg/furlan13.png",
                title: "Free your Camera: 3D Indoor Scene Understanding from Arbitrary Camera Motion.",
                info: "BMVC 2013.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/furlan13.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Jonathan Krause, Michael Stark, Jia Deng, Li Fei-Fei.",
                image: "pubimg/3d13.jpeg",
                title: "3D Object Representations for Fine-Grained Categorization.",
                info: "ICCV 2013, Workshop on 3D Representation and Recognition.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/3drr13.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Kevin Tang, Bangpeng Yao, Li Fei-Fei, Daphne Koller.",
                image: "pubimg/combining13.jpeg",
                title: "Combining the Right Features for Complex Event Recognition.",
                info: "ICCV 2013.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/iccv13-andor.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Vignesh Ramananthan, Percy Liang, and Li Fei-Fei.",
                image: "pubimg/video13.jpeg",
                title: "Video Event Understanding using Natural Language Descriptions.",
                info: "ICCV 2013.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/vigneshICCV13.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "O. Russakovsky, Jia Deng, Zhiheng Huang, Alexander C. Berg and Li Fei-Fei.",
                image: "pubimg/detecting13.jpeg",
                title: "Detecting avocados to zucchinis: what have we done, and where are we going?.",
                info: "ICCV 2013.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/iccv13-ILSVRCanalysis.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao, J. Ma, and L. Fei-Fei.",
                image: "pubimg/discovering13.jpeg",
                title: "Discovering Object Functionality.",
                info: "ICCV 2013.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/Yao_Discovering_Object_Functionality_2013_ICCV_paper.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L.-J. Li and H. Su and Y. Lim and L. Fei-Fei.",
                image: "pubimg/object13.jpeg",
                title: "Object Bank: An Object-Level Image Representation for High-Level Visual Recognition.",
                info: "IJCV 2013.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/li_ijcv2013.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "J. Deng, J. Krause, and L. Fei-Fei.",
                image: "pubimg/fine13.jpeg",
                title: "Fine-Grained Crowdsourcing for Fine-Grained Recognition.",
                info: "CVPR 2013 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/DengKrauseFei-Fei_CVPR2013.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "V. Ramanathan, B. Yao, and L. Fei-Fei.",
                image: "pubimg/social13.jpeg",
                title: "Social Role Discovery in Human Events.",
                info: "CVPR 2013 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/334.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "K. Tang, R. Sukthankar, J. Yagnik, and L. Fei-Fei.",
                image: "pubimg/discrim13.jpeg",
                title: "Discriminative Segment Annotation in Weakly Labeled Video.",
                info: "CVPR 2013 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/cvpr2013-crane-small.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "A. Torralbo, D.B. Walther, B. Chai, E. Caddigan, L. Fei-Fei, and D.M. Beck.",
                image: "pubimg/good13.jpeg",
                title: "Good Exemplars of Natural Scene Categories Elicit Clearer Patterns than Bad Exemplars but not Greater BOLD Activity.",
                info: "PLoS ONE. 2013 (Article).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/journal.pone.0058594.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "C. Baldassano, D.M. Beck, and L. Fei-Fei.",
                image: "pubimg/diff13.jpeg",
                title: "Differential Connectivity Within the Parahippocampal Place Area.",
                info: "NeuroImage 2013.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/NI2013.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "A. Karpathy, S. Miller, and L. Fei-Fei.",
                image: "pubimg/objdisc13.jpeg",
                title: "Object Discovery in 3D Scenes via Shape Analysis.",
                info: "ICRA 2013 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/ICRA2013_ObjectDiscoveryViaShapeAnalysis.pdf",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2012",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Victor Escorcia, Maria A. Dávila, Mani Golparvar-Fard, Juan Carlos Niebles.",
                image: "crc2012.jpg",
                title: "Automated Vision-based Recognition of Construction Worker Actions for Building Interior Construction Operations Using RGBD Cameras.",
                info: "Construction Research Congress, West Lafayette, Indiana, USA, May 2012.",
                refs: [
                    { href: "http://dx.doi.org/10.1061/9780784412329.089",
                        text: "PDF",
                    },
                    { href: "http://dx.doi.org/10.1061/9780784412329.089",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Arsalan Heydarian, Mani Golparvar-Fard, Juan Carlos Niebles.",
                image: "equipment_actions.jpg",
                title: "Automated visual recognition of construction equipment actions using spatio-temporal features and multiple binary support vector machines.",
                info: "Construction Research Congress, West Lafayette, Indiana, USA, May 2012.",
                refs: [
                    { href: "http://dx.doi.org/10.1061/9780784412329.090",
                        text: "PDF",
                    },
                    { href: "http://dx.doi.org/10.1061/9780784412329.090",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi and S. Savarese,",
                image: "",
                title: "A Unified Framework for Multi-Target Tracking and Collective Activity Recognition",
                info: "Proc. of European Conference of Computer Vision (ECCV), 2012.",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/choi_eccv_12.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/choi_eccv_12.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/papers/choi_eccv_12_supplementary.PDF",
                        text: "supplementary material",
                    },
                    { href: "http://www-personal.umich.edu/%7Ewgchoi/eccv12/wongun_eccv12.html",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Bao, Y. Xiang and S. Savarese,",
                image: "",
                title: "Object Co-detection",
                info: "Proc. of European Conference of Computer Vision (ECCV), 2012,",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/bao_eccv12_codetection.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/bao_eccv12_codetection.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/posters/yingze_eccv12_co-detection.PDF",
                        text: "poster",
                    },
                    { href: "http://cvgl.stanford.edu/projects/codetection/index.html",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "B. Kim*, M. Sun*, P. Kohli, S. Savarese,",
                image: "",
                title: "Relating Things and Stuff by High-Order Potential Modeling",
                info: "ECCV 2012 Workshop on Higher-Order Models and Global Constraints in Computer Vision (HiPot). (* indicates equal contribution),",
                refs: [
                    { href: "https://amberxu.github.io/papers/kim_hipotws_eccv12.PDF",
                        text: "PDF",
                    },
                    { href: "http://www.eecs.umich.edu/vision/projects/ACRF/bibtex_eccv.bib",
                        text: "bibtex",
                    },
                    { href: "http://cvgl.stanford.edu/projects/ACRF/ACRFproj.html",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "G. Pandey, J. McBride, S. Savarese, R. Eustice,",
                image: "",
                title: "Toward Mutual Information based Automatic Registration of 3D Point Clouds",
                info: "IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2012.",
                refs: [
                    { href: "http://robots.engin.umich.edu/publications/gpandey-2012b.PDF",
                        text: "PDF",
                    },
                    { href: "http://robots.engin.umich.edu/Publications?action=bibentry&bibfile=perl.bib&bibref=gpandey-2012b#gpandey-2012bBib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "*M. Sun, *S. Ying-Ze Bao and Silvio Savarese,",
                image: "",
                title: "Object Detection using Geometrical Context Feedback",
                info: "International Journal of Computer Vision 2012(2), *indicates equal contributions.",
                refs: [
                    { href: "https://amberxu.github.io/papers/Sun_IJCV_2012.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun, M. Telaprolu, H. Lee, S. Savarese,",
                image: "",
                title: "An Efficient Branch-and-Bound Algorithm for Optimal Human Pose Estimation",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2012.",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/sun_bb_cvpr2012.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/sun_bb_cvpr2012.PDF",
                        text: "PDF",
                    },
                    { href: "http://www.eecs.umich.edu/vision/BBproj.html",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Bao, M. Bagra, Y.-W. Chao, S. Savarese,",
                image: "",
                title: "Structure From Motion with Points, Objects, and Regions",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2012.",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/bao_cvpr2012_ssfm.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/bao_cvpr2012_ssfm.PDF",
                        text: "PDF",
                    },
                    { href: "http://www.eecs.umich.edu/vision/projects/ssfm/index.html",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Xiang and S. Savarese,",
                image: "",
                title: "Estimating the Aspect Layout of Object Categories",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2012.",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/xiang_cvpr12.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/xiang_cvpr12.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/papers/xiang_cvpr12_tr.PDF",
                        text: "technical report",
                    },
                    { href: "http://www.eecs.umich.edu/vision/projects/ALM/Aspect_Layout_Model.zip",
                        text: "code",
                    },
                    { href: "http://www.eecs.umich.edu/vision/projects/ALM/ALMproj.html",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Kumar, M. Sun, S. Savarese,",
                image: "",
                title: "Mobile Object Detection through Client-Server based Vote Transfer",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2012.",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/Kumar_cvpr12.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/Kumar_cvpr12.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "G. Pandey, J. R. McBride, S. Savarese and R. M. Eustice,",
                image: "",
                title: "Automatic targetless extrinsic calibration of a 3d lidar and camera by maximizing mutual information",
                info: "The AAAI National Conference on Artifical Intelligence, Toronto, Canada, July 2012.",
                refs: [
                    { href: "http://robots.engin.umich.edu/Publications?action=bibentry&bibfile=perl.bib&bibref=gpandey-2012a",
                        text: "bibtex",
                    },
                    { href: "http://robots.engin.umich.edu/publications/gpandey-2012a.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun, M. Telaprolu, H. Lee, S. Savarese,",
                image: "",
                title: "Efficient and Exact MAP Inference using Branch and Bound",
                info: "15th International Conference on Artificial Intelligence and Statistics (AISTATS), 2012.",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/aistats_bb_final.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/aistats_bb_final.PDF",
                        text: "PDF",
                    },
                    { href: "http://www.eecs.umich.edu/vision/BBproj.html",
                        text: "project",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "Automated model-based progress monitoring using unordered daily construction photographs and IFC as-planned models",
                info: "ASCE Journal of Computing in Civil Engineering, 2012 (in press).",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "X. Chen, A. Hero, S. Savarese,",
                image: "",
                title: "Multimodality video indexing and retrieval using directed information",
                info: "IEEE Transactions on Multimedia, Volume 14, No.1, Feb, 2012.",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/CHEN_ITSP2010.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/CHEN_ITSP2010.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "J. Clemons, Y. Bao, V. Sharma, S. Savarese, T. Austin,",
                image: "",
                title: "MVSS: Michigan Visual Sonification System",
                info: "IEEE International Conference on Emerging Signal Processing Applications (ESPA), January 2012.",
                refs: [
                    { href: "http://web.eecs.umich.edu/%7Ejclemons/publications/MVSS.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "K. Tang, V. Ramanathan, L. Fei-Fei, and D. Koller.",
                image: "",
                title: "Shifting Weights: Adapting Object Detectors from Image to Video.",
                info: "NIPS 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/nips12-adapt.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Christopher Baldassano, Marius Cătălin Iordan, Diane M. Beck, Li Fei-Fei.",
                image: "",
                title: "Discovering Voxel-Level Connectivity Between Cortical Regions.",
                info: "Machine Learning and Interpretation in Neuroimaging (MLINI) Workshop, NIPS 2012.",
                refs: [
                    { href: "http://cs.stanford.edu/%7Emci/materials/baldassano-iordan-etal-2012b.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "O. Russakovsky, Y. Lin, K. Yu, and L. Fei-Fei.",
                image: "",
                title: "Object-centric spatial pooling for image classification.",
                info: "ECCV 2012.",
                refs: [
                    { href: "http://ai.stanford.edu/%7Eolga/papers/eccv12-OCP.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao and L. Fei-Fei.",
                image: "",
                title: "Action Recognition with Exemplar Based 2.5D Graph Matching.",
                info: "ECCV 2012 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoFei-Fei_ECCV12.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Christopher Baldassano, Marius Cătălin Iordan, Diane M. Beck, and Li Fei-Fei.",
                image: "",
                title: "Voxel-Level Functional Connectivity using Spatial Regularization.",
                info: "NeuroImage 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/NI2012.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "H. Su, J. Deng, and L. Fei-Fei.",
                image: "",
                title: "Crowdsourcing Annotations for Visual Object Detection.",
                info: "AAAI Human Computation Workshop 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/bbox_submission.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "G. Kim, L. Fei-Fei, and E. Xingi.",
                image: "",
                title: "Web Image Prediction Using Multivariate Point Processes.",
                info: "KDD 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/KimFei-FeiXing_KDD2012.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "H. Su*, A. Yu*, and L. Fei-Fei.",
                image: "",
                title: "Efficient Euclidean Projections onto the Intersection of Norm Balls.",
                info: "ICML 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/SuYuFei-Fei_ICML2012.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Milad Memarzadeh, Arsalan Heydarian, Mani Golparvar-Fard, Juan Carlos Niebles.",
                image: "equipment_tracking.jpg",
                title: "Real-time and automated recognition and 2D tracking of Construction workers and equipment from Site video streams.",
                info: "ASCE International Conference on Computing in Civil Engineering, Clearwater Beach, Florida, USA, June 2012.",
                refs: [
                    { href: "http://dx.doi.org/10.1061/9780784412343.0054",
                        text: "PDF",
                    },
                    { href: "http://dx.doi.org/10.1061/9780784412343.0054",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao, G. Bradski, and L. Fei-Fei.",
                image: "",
                title: "A Codebook-Free and Annotation-Free Approach for Fine-Grained Image Categorization.",
                info: "ICML 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoBradskiFei-Fei_CVPR2012.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "K. Tang, L. Fei-Fei, and D. Koller.",
                image: "",
                title: "Learning Latent Temporal Structure for Complex Event Detection.",
                info: "CVPR 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/cvpr12-temporal.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "J. Deng, J. Krause, A. Berg, and L. Fei-Fei.",
                image: "",
                title: "Hedging Your Bets: Optimizing Accuracy-Specificity Trade-offs in Large Scale Visual Recognition.",
                info: "CVPR 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/DengKrauseBergFei-Fei_CVPR2012.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao and L. Fei-Fei.",
                image: "",
                title: "Recognizing Human Actions in Still Images by Modeling the Mutual Context of Objects and Human Poses.",
                info: "PAMI 2012.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/yaopami12.pdf",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2011",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "J. Deng, S. Satheesh, A. C. Berg, and L. Fei-Fei.",
                image: "",
                title: "Fast and Balanced: Efficient Label Tree Learning for Large Scale Object Recognition.",
                info: "NIPS 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/NIPS2011_0391.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Zhao, L. Fei-Fei and E. Xing.",
                image: "",
                title: "Large-Scale Category Structure Aware Image Categorization.",
                info: "NIPS 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/NIPS2011_0730.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao, X. Jiang, A. Khosla, A.L. Lin, L.J. Guibas, and L. Fei-Fei.",
                image: "",
                title: "Human Action Recognition by Learning Bases of Action Attributes and Parts.",
                info: "ICCV 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoJiangKhoslaLinGuibasFei-Fei_ICCV2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "G. Kim, E.P. Xing, L. Fei-Fei, and T. Kanade.",
                image: "",
                title: "Distributed cosegmentation vis submodular optimization on anisotropic diffusion.",
                info: "ICCV 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/KimXingFei-FeiKanade_ICCV2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "M. Savva, N. Kong, A. Chhajta, L. Fei-Fei, M. Agrawala, and J. Heer.",
                image: "",
                title: "ReV ReVision: Automated Classification, Analysis and Redesign of Chart Imagesision: Automated Classification, Analysis and Redesign of Chart Images.",
                info: "UIST 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/KimXingFei-FeiKanade_ICCV2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao, A. Khosla, and L. Fei-Fei.",
                image: "",
                title: "Classifying Actions and Measuring Action Similarity by Modeling the Mutual Context of Objects and Human Poses.",
                info: "ICML 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoKhoslaFei-Fei_ICML2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "D. B. Walther, B. Chai, E. Caddigan, D. M. Beck and L. Fei-Fei.",
                image: "",
                title: "Simple line drawings suffice for functional MRI decoding of natural scene categories.",
                info: "PNAS 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/WaltherChaiCaddiganBeckFei-Fei_full_PNAS2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "J. Deng, A. Berg, and L. Fei-Fei.",
                image: "",
                title: "Hierarchical Semantic Indexing for Large Scale Image Retrieval.",
                info: "CVPR 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/DengBergFei-Fei_CVPR2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao*, A. Khosla*, and L. Fei-Fei.",
                image: "",
                title: "Combining Randomization and Discrimination for Fine-Grained Image Categorization.",
                info: "CVPR 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoKhoslaFeiFei_CVPR2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Zhao, L. Fei-Fei, and E.P. Xing.",
                image: "",
                title: "Online Detection of Unusual Events in Videos via Dynamic Sparse Coding.",
                info: "CVPR 2011.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/ZhaoFeiFeiXing_CVPR2011.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun and S. Savarese,",
                image: "",
                title: "Articulated Part-based Model for Joint Object Detection and Pose Estimation",
                info: "Proceedings of the International Conference in Computer Vision (ICCV) 2011.",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/SUN_ICCV2011.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/Sun_ICCV11_PID2005385.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/papers/sun_iccv11_iccv_supp_camera.PDF",
                        text: "supp. material",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "L. Mei, J. Liu, A. Hero, S. Savarese,",
                image: "",
                title: "Robust Object Pose Estimation via Statistical Manifold Modeling",
                info: "Proceedings of the International Conference in Computer Vision (ICCV) 2011.",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/LIANG_ICCV2011.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/mei_iccv2011.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Yingze Bao, M. Bagra, S. Savarese,",
                image: "",
                title: "Semantic Structure From Motion with Object and Point Interactions",
                info: "Winner of the best student paper award, IEEE Workshop on Challenges and Opportunities in Robot Perception (in conjunction with ICCV-11).",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/bao_CORP2011.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/bao_CORP2011.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Yingze Bao, M. Sun, S. Savarese,",
                image: "",
                title: "Toward coherent object detection and scene layout understanding",
                info: "Image and Vision Computing 2011 (9). (Editor choice)",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/BAO_IVC_2011.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/BAO_IVC_2011.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi, C. Pantofaru, S. Savarese,",
                image: "",
                title: "Detecting and Tracking People using an RGB-D Camera via Multiple Detector Fusion",
                info: "Workshop on Challenges and Opportunities in Robot Perception (in conjunction with ICCV-11).",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/choi_corp11.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/choi_corp11.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "J. Clemons, H. Zhu, S. Savarese, T. Austin,",
                image: "",
                title: "MEVBench: A Mobile Computer Vision Benchmarking Suite",
                info: "IEEE International Symposium on Workload Characterization, November 2011.",
                refs: [
                    { href: "http://www.eecs.umich.edu/mevbench/publications/mevbench.bib",
                        text: "bibtex",
                    },
                    { href: "http://www.eecs.umich.edu/mevbench/publications/IISWCFinalCopy.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, S. Savarese,",
                image: "",
                title: "Monitoring Changes of 3D Building Elements from Unordered Photo Collections",
                info: "IEEE workshop on Computer Vision for Remote Sensing of the Environment (in conjunction with ICCV-11).",
                refs: [
                    { href: "https://amberxu.github.io/papers/Golparvar-Fard-cvrse2011.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "R. Lopez, T. Tuytelaars and S. Savarese,",
                image: "",
                title: "Deformable Part Models Revisited: A Performance Evaluation for Object Category Pose Estimation",
                info: "IEEE Workshop on Challenges and Opportunities in Robot Perception (in conjunction with ICCV-11).",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/lopeziccv2011.bib",
                        text: "bib",
                    },
                    { href: "http://agamenon.tsc.uah.es/Personales/rlopez/docs/lopez2011-iccv.PDF",
                        text: "PDF",
                    },
                    { href: "http://agamenon.tsc.uah.es/Personales/rlopez/data/pose-estimation/",
                        text: "code&dataset",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "B. Kim, J. Park, A. Gilbert, S. Savarese,",
                image: "",
                title: "Hierarchical Classification of Images by Sparse Approximation",
                info: "Proceedings of the British Machine Vision Conference (BMVC) 2011,",
                refs: [
                    { href: "https://amberxu.github.io/bibtex/KIM_BMVC2011.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/papers/kim_bmvc2011.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Yingze Bao and S. Savarese,",
                image: "",
                title: "Semantic Structure from Motion",
                info: "Proceedings of the IEEE International Conference on Computer Vision and Pattern Recognition, 2011,",
                refs: [
                    { href: "https://amberxu.github.io/papers/bao_ssfm_cvpr2011.PDF",
                        text: "PDF",
                    },
                    { href: "http://www.eecs.umich.edu/vision/projects/ssfm/index.html",
                        text: "webpage",
                    },
                    { href: "https://amberxu.github.io/bibtex/Bao_CVPR2011_SSFM.bib",
                        text: "bibtex",
                    },
                    { href: "https://amberxu.github.io/posters/yingze_cvpr2011_poster_nologo.PDF",
                        text: "poster",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi, K. Shahid, and S. Savarese,",
                image: "",
                title: "Learning Context for Collective Activity Recognition",
                info: "Proceedings of the IEEE International Conference on Computer Vision and Pattern Recognition, 2011,",
                refs: [
                    { href: "https://amberxu.github.io/papers/cvpr2011choishahid.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/Choi_CVPR_2011.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "J. Liu, M. Shah, B. Kuipers, S. Savarese,",
                image: "",
                title: "Cross-View Action Recognition via View Knowledge Transfer",
                info: "Proceedings of the IEEE International Conference on Computer Vision and Pattern Recognition, 2011 (To Appear). oral presentation,",
                refs: [
                    { href: "https://amberxu.github.io/papers/cvpr11_liu_b.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/liu-cvpr11a-crossview.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "J. Liu, B. Kuipers, S. Savarese,",
                image: "",
                title: "Recognizing Human Actions by Attributes",
                info: "Proceedings of the IEEE International Conference on Computer Vision and Pattern Recognition, 2011 (To Appear). oral presentation,",
                refs: [
                    { href: "https://amberxu.github.io/papers/cvpr11_liu_a.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/liu-cvpr11b-attributes.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "J. Clemons, S. Savarese, T. Austin,",
                image: "",
                title: "EFFEX: An Embedded Processor for Computer Vision Based Feature Extraction",
                info: "48th Design Automation Conference, 2011,",
                refs: [
                    { href: "https://amberxu.github.io/papers/Clemons_EFFEX_10.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun, S. Kumar, Bradsky, S. Savarese,",
                image: "",
                title: "Toward Automatic 3D Generic Object Modeling from One Single Image",
                info: "3DIM-PVT 2011",
                refs: [
                    { href: "http://www.eecs.umich.edu/%7Esunmin/app/3dimpvt_camera_ready.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Gaurav Pandey, James R. McBride, Silvio Savarese and Ryan M. Eustice,",
                image: "",
                title: "Visually Bootstrapped generalized ICP",
                info: "Proceedings of the IEEE International Conference on Robotics and Automation, Shanghai, China, 2011 (To Appear).",
                refs: [
                    { href: "http://robots.engin.umich.edu/publications/gpandey-2011b.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/gpandey-2011b.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "Integrated Sequential As-Built and As-Planned Representation with D4AR Tools in Support of Decision-Making Tasks in the AEC/FM Industry,",
                info: "ASCE Journal of Construction Engineering and Management,",
                refs: [
                    { href: "http://dx.doi.org/10.1061/%28ASCE%29CO.1943-7862.0000371",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, J. Bohn, J.Teizer, S. Savarese, and F. Pena-Mora.",
                image: "",
                title: "Evaluation of image-based modeling and laser scanning accuracy for emerging automated performance monitoring techniques",
                info: "Elsevier Journal of Automation in Construction (in press), 2011.",
                refs: [],
            },
        ],
    },
    { name: "Publications 2010",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L.-J. Li*, H. Su*, E.P. Xing and L. Fei-Fei.",
                image: "",
                title: "Object Bank: A High-Level Image Representation for Scene Classification and Semantic Feature Sparsification.",
                info: "NIPS 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/LiSuXingFeiFeiNIPS2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "J. Zhu, L.-J. Li, L. Fei-Fei and E.P. Xing.",
                image: "",
                title: "Large Margin Learning of Upstream Scene Understanding Models.",
                info: "NIPS 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/ZhuLiFeiFeiXingNIPS2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "J. Deng, A. Berg, K. Li and L. Fei-Fei.",
                image: "",
                title: "What does classifying more than 10,000 image categories tell us?.",
                info: "ECCV 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/DengBergLiFei-Fei_ECCV2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Juan Carlos Niebles, Chih-Wei Chen and Li Fei-Fei..",
                image: "NieblesChenFei-Fei_ECCV2010_icon.jpg",
                title: "Modeling Temporal Structure of Decomposable Motion Segments for Activity Classification.",
                info: "European Conference on Computer Vision (ECCV), Hersonissos, Crete, Greece, September 2010.",
                refs: [
                    { href: "https://link.springer.com/chapter/10.1007/978-3-642-15552-9_29",
                        text: "PDF",
                    },
                    { href: "http://vision.stanford.edu/Datasets/OlympicSports/",
                        text: "DATA",
                    },
                    { href: "https://link.springer.com/chapter/10.1007/978-3-642-15552-9_29",
                        text: "DOI",
                    },
                    { href: "http://vision.stanford.edu/documents/NieblesChenFei-Fei_ECCV2010.zip",
                        text: "SLIDES",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Zhao, L. Fei-Fei and E. P. Xing.",
                image: "",
                title: "Image Segmentation with Topic Random Fields.",
                info: "ECCV 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/ZhaoFei-FeiXing_ECCV2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L.J. Li*, H. Su*, Y. Lim and L. Fei-Fei.",
                image: "",
                title: "Objects as Attributes for Scene Classification.",
                info: "ECCV 2010 workshop on Parts and Attributes.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/LiSuLimFeiFei_ECCV2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "O. Russakovsky and L. Fei-Fei.",
                image: "",
                title: "Attribute learning in large-scale datasets.",
                info: "Parts and Attributes Workshop at ECCV 2010.",
                refs: [
                    { href: "http://ai.stanford.edu/%7Eolga/papers/eccv10workshop-Attributes.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "R. Fergus, L. Fei-Fei, P. Perona and A. Zisserman.",
                image: "",
                title: "Learning object categories from Internet image searches.",
                info: "Proc. Of IEEE, Special Issue on Internet Vision 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/FergusFei-FeiPeronaZisserman2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei and L.-J. Li.",
                image: "",
                title: "What, Where and Who? Telling the Story of an Image by Activity Classification, Scene Recognition and Object Categorization.",
                info: "Book chapter in \"Studies in Computational Intelligence- Computer Vision\". Volume 285/2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/Fei-Fei_Li_ICVSS09_bookchapter.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, and L. Fei-Fei.",
                image: "",
                title: "Multi-view Object Categorization and Pose Estimation.",
                info: "Book chapter in \"Studies in Computational Intelligence- Computer Vision\". Volume 285/2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/SavareseFei-Fei2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "D. B. Walther, D. M. Beck, and L. Fei-Fei.",
                image: "",
                title: "To err is human: investigating neural function by correlating error patterns with human behavior.",
                info: "MIT Press, Cambridge, Massachusetts. 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/WaltherBeckFei-Fei_2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao and L. Fei-Fei.",
                image: "",
                title: "Grouplet: a Structured Image Representation for Recognizing Human and Object Interactions.",
                info: "CVPR 2010 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoFei-Fei_CVPR2010a.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao and L. Fei-Fei.",
                image: "",
                title: "Modeling Mutual Context of Object and Human Pose in Human-Object Interaction Activities.",
                info: "CVPR 2010 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoFei-Fei_CVPR2010b.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Li-Jia Li*, Chong Wang*, Yongwhan Lim, David Blei and Li Fei-Fei.",
                image: "",
                title: "Building and Using a Semantivisual Image Hierarchy.",
                info: "CVPR 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/LiWangLimBleiFei-Fei_CVPR2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Juan Carlos Niebles, Bohyung Han and Li Fei-Fei.",
                image: "efficient_moving_people.jpg",
                title: "Efficient Extraction of Human Motion Volumes by Tracking.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition (CVPR), San Francisco, USA, June 2010.",
                refs: [
                    { href: "https://doi.org/10.1109/CVPR.2010.5540152",
                        text: "PDF",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2010.5540152",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "R. Socher and L. Fei-Fei.",
                image: "",
                title: "Connecting Modalities: Semi-supervised Segmentation and Annotation of Images Using Unaligned Text Corpora.",
                info: "CVPR 2010.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/SocherFeiFei_CVPR2010.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "*M. Sun, *S. Ying-Ze Bao and Silvio Savarese,",
                image: "",
                title: "Object Detection with Geometrical Context Feedback Loop",
                info: "Proc. of British Machine Vision Conference (BMVC), 59.1-59.11, 2010, oral presentation. (*indicates equal contributions)",
                refs: [
                    { href: "https://amberxu.github.io/papers/Sun_bmvc_2010.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/MinBMVC10.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi and S. Savarese,",
                image: "",
                title: "Multiple Target Tracking in World Coordinate with Single, Minimally Calibrated Camera",
                info: "Proc. of European Conference of Computer Vision, 553-567, 2010",
                refs: [
                    { href: "https://amberxu.github.io/papers/mtt_wg_eccv2010.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/Choi_ECCV_2010.bib",
                        text: "bibtex",
                    },
                    { href: "http://www.eecs.umich.edu/vision/mttproject.html",
                        text: "project&code",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun, G. Bradsky, B. Xu, and S. Savarese,",
                image: "",
                title: "Depth-Encoded Hough Voting for Joint Object Detection and Shape Recovery",
                info: "Proc. of European Conference of Computer Vision, 658-671, 2010",
                refs: [
                    { href: "https://amberxu.github.io/papers/Sun_Eccv_2010.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/MinECCV10.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S.Yingze Bao, M. Sun, and Silvio Savarese,",
                image: "",
                title: "Toward Coherent Object Detection And Scene Layout Understanding",
                info: "Proc. of IEEE Conference on Computer Vision and Pattern Recognition, 65-72, 2010",
                refs: [
                    { href: "https://amberxu.github.io/papers/bao_cvpr2010.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/Bao_CVPR2010_Layout.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Vineet R. Kamat, Julio C. Martinez, Martin Fischer, Mani Golparvar-Fard, Feniosky Pena-Mora, and Silvio Savarese,",
                image: "",
                title: "CEC: Research in Visualization Techniques for Field Construction",
                info: "Journal of Construction Engineering and Management doi:10.1061/(ASCE)CO.1943-7862.0000262",
                refs: [
                    { href: "http://ascelibrary.org/coo/resource/1/jcemxx/v1/i1/p177_s1?isAuthorized=no",
                        text: "link",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Gaurav Pandey, James McBride, Silvio Savarese and Ryan Eustice,",
                image: "",
                title: "Extrinsic calibration of a 3d laser scanner and an omnidirectional camera",
                info: "In 7th IFAC Symposium on Intelligent Autonomous Vehicles, 2010",
                refs: [
                    { href: "http://robots.engin.umich.edu/publications/gpandey-2010a.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/gpandey-2010a.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "I.Brilakis, M. Lourakis, R. Sacks, S. Savarese, S.Christodoulou,J.Teizer and A. Makhmalbaf,",
                image: "",
                title: "Toward automated generation of parametric BIMs based on hybrid video and laser scanning data.",
                info: "In Journal of Advanced Engineering Informatics, 24(4) 456-465, 2010",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "D4AR 4 Dimensional augmented reality - tools for automated remote progress tracking and support of decision-enabling tasks in the AEC/FM industry",
                info: "Proc. of The 6th Int. Conf. on Innovations in AEC Special Session - Transformative machine vision for AEC.State College, PA, Jun 9-11. Winner of the best student paper award.",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, J. Thomas, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "Remote assessment of pre and post-disaster critical physical infrastructures using segway mobile workstation chariot and D4AR 4D augmented reality models.",
                info: "Proc. of ICCCBE 2010 EG-ICE10., page 63,Nottingham, UK, Jun 30-Jul 2.",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "Model-based detection of progress using D4AR - A 4 Dimensional augmented reality- models generated by daily site photologs and building information models",
                info: "Proc. of ICCCBE 2010 EG-ICE10. page 81, Nottingham, UK, Jun 30-Jul 2.",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "Automated model component-based recognition of progress using daily construction photographs and 4D IFC-based models.",
                info: "Proc. of Construction Research Congress, 51-60, Banff, Canada, May 8-11",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "D4AR - 4 DIMENSIONAL AUGMENTED REALITY - MODELS FOR AUTOMATION AND INTERACTIVE VISUALIZATION OF CONSTRUCTION PROGRESS MONITORING",
                info: "Proc., 2010 International Conference on Construction Applications of Virtual Reality, 2010, Japan, 15-2",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "V. Kamat, J. Martinez, M. Fischer, M. Golparvar-Fard, F. Pena-Mora, and S. Savarese,",
                image: "",
                title: "CEC: Research in Visualization Techniques for Field Construction",
                info: "Proc., Construction Engineering Conference, Blacksburg, VA, Sep 30- Oct 2.",
                refs: [],
            },
        ],
    },
    { name: "Publications 2009",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Yao, D.B. Walther, D.M. Beck*, L. Fei-Fei*.",
                image: "",
                title: "Hierarchical Mixture of Classification Experts Uncovers Interactions between Brain Regions.",
                info: "NIPS 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/YaoWaltherBeckFei-Fei_NIPS2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B. Chai†, D.B. Walther†, D.M. Beck*, L. Fei-Fei*.",
                image: "",
                title: "Exploring Functional Connectivity of the Human Brain using Multivariate Information Analysis.",
                info: "NIPS 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/ChaiWaltherBeckFei-Fei_NIPS2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L.-J. Li and L. Fei-Fei.",
                image: "",
                title: "OPTIMOL: automatic Online Picture collecTion via Incremental MOdel Learning.",
                info: "IJCV 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/JiaFei-FeiIJCV_2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [],
                authorsText: "Peelen, Marius V. and Fei-Fei, Li and Kastner, Sabine.",
                image: "",
                title: "Neural mechanisms of rapid natural scene categorization in human visual cortex.",
                info: "Nature 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/PeelenFei-FeiKastner_Nature2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "D.B. Walther, E. Caddigan, L. Fei-Fei*, D.M. Beck*.",
                image: "",
                title: "Natural scene categories revealed in distributed patterns of activity in the human brain.",
                info: "Journal of Neuroscience, 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/WaltherCaddiganFei-FeiBeck_JoN2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L.-J. Li, R. Socher and L. Fei-Fei.",
                image: "",
                title: "Towards Total Scene Understanding:Classification, Annotation and Segmentation in an Automatic Framework.",
                info: "CVPR 2009 (oral).",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/LiSocherFei-Fei_CVPR2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "Chong Wang, David Blei and L. Fei-Fei.",
                image: "",
                title: "Simultaneous Image Classification and Annotation.",
                info: "CVPR 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/WangBleiFei-Fei_CVPR2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "J. Deng, W. Dong, R. Socher, L.-J. Li, K. Li and L. Fei-Fei.",
                image: "",
                title: "ImageNet: A Large-Scale Hierarchical Image Database.",
                info: "CVPR 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/ImageNet_CVPR2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "*M. Sun, *H. Su, S. Savarese and L. Fei-Fei.",
                image: "",
                title: "A Multi-View Probabilistic Model for 3D Object Classes.",
                info: "CVPR 2009.",
                refs: [
                    { href: "http://vision.stanford.edu/pdf/SunSuSavareseFei-Fei_CVPR2009.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "*H. Su, *M. Sun, L. Fei-Fei and S. Savarese.",
                image: "",
                title: "Learning a dense multi-view representation for detection, viewpoint classification and synthesis of object categories",
                info: "Proc. of International Conference in Computer Vision (ICCV), 213-220, 2009 oral presentation. (*indicates equal contributions);",
                refs: [
                    { href: "https://amberxu.github.io/papers/SuSunLiSavarese_ICCV2009.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/HaoMinICCV09.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "P. Gupta, S. Arrabolu, M. Brown, S. Savarese,",
                image: "",
                title: "Scene Categorization from Low Definition Video",
                info: "Proc. of International Conference in Computer Vision (ICCV), 1655-1662, 2009",
                refs: [
                    { href: "https://amberxu.github.io/papers/gupta_iccv09.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/Gupta_ICCV2009_building.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "L. Mei, M. Sun, K.M. Carter, A.O. Hero III, S. Savarese,",
                image: "",
                title: "Unsupervised Object Pose Classification from Short Video Sequences",
                info: "Proc. of British Machine Vision Conference (BMVC), 13-21, September 2009",
                refs: [
                    { href: "https://amberxu.github.io/papers/Liang_bmvc_09.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/LiangBMVC09.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi, K. Shahid, S. Savarese,",
                image: "",
                title: "What are they doing? : Collective Activity Classification Using Spatio-Temporal Relationship Among People",
                info: "Proc. of 9th International Workshop on Visual Surveillance (VSWS09) in conjuction with ICCV,1282-1289, 2009",
                refs: [
                    { href: "http://www.eecs.umich.edu/vision/paper/Wongun_CollectiveActivityRecognition09.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/Choi_VSWS_2009.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "*M. Sun, *H. Su, S. Savarese and L. Fei-Fei.",
                image: "",
                title: "A Multi-View Probabilistic Model for 3D Object Classes",
                info: "Proc. of Computer Vision and Pattern Recognition (CVPR), 1247-1254, 2009. (*indicates equal contributions,",
                refs: [
                    { href: "https://amberxu.github.io/papers/sun_A%20Multi-View%20Probabilistic%20Model%20for%203D%20Object%20Classes_cvpr09.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/MinHaoCVPR09.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Golparvar-Fard M.,Pena-Mora F., And Savarese S",
                image: "",
                title: "D4AR- A 4-Dimensional Augmented Reality Model for Automating Construction Progress Data Collection, Processing and Communication",
                info: "ITCON Special Issue: Next Generation Construction IT: Technology Foresight, Future Studies, Road mapping, and Scenario Planning, Vol 14, 129-153, 2009",
                refs: [
                    { href: "https://amberxu.github.io/papers/D4AR_itcon_2009.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Golparvar-Fard M., Savarese S. and Pena-Mora F.",
                image: "",
                title: "Interactive Visual Construction Progress Monitoring with 4D Augmented Reality Model",
                info: "Proc., Construction Research Congress, 41-50, Seattle, Washington, May 22-24, 2009 CRC First Place Poster Award",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Golparvar-Fard M., Pena-Mora F. and Savarese S",
                image: "",
                title: "Monitoring of Construction Performance Using Daily Progress Photograph Logs and 4D As-Planned Models",
                info: "Proc. of 2009 ASCE International Workshop on Computing in Civil Engineering, 53-63, Austin, Texas, June 24-27, 2009",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Golparvar-Fard M., Pena-Mora F. and Savarese S.",
                image: "",
                title: "Sparse Reconstruction and Geo-Registration of Daily Site Photographs for Representation of As-Built Construction Scene and Automatic Construction Progress Data Collection",
                info: "Proc. of 2009 International Symposium on Automation and Robotics in Construction, 535-543, Austin, TX, June 24-27,2009",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Bangpeng Yao, Juan Carlos Niebles and Li Fei-Fei.",
                image: "mining.jpg",
                title: "Mining Discriminative Adjectives and Prepositions for Natural Scene Recognition.",
                info: "IEEE Conference on Computer Vision and Pattern Recognition Workshops (CVPRW), Miami, USA, June 2009.",
                refs: [
                    { href: "https://doi.org/10.1109/CVPRW.2009.5204222",
                        text: "PDF",
                    },
                    { href: "https://doi.org/10.1109/CVPRW.2009.5204222",
                        text: "DOI",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2008",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "J.C. Niebles, B. Han, A. Ferencz and L. Fei-Fei.",
                image: "eccv08.jpg",
                title: "Extracting Moving People from Internet Videos.",
                info: "ECCV 2008.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/NieblesHanFerenczFei-Fei_ECCV2008.pdf",
                        text: "PDF",
                    },
                    { href: "http://vision.stanford.edu/projects/extractingPeople.html",
                        text: "PROJECT",
                    },
                    { href: "https://link.springer.com/chapter/10.1007/978-3-540-88693-8_39",
                        text: "DOI",
                    },
                    { href: "http://vision.stanford.edu/projects/extractingPeople/NieblesHanFerenczFei-Fei_ECCV2008_poster.pdf",
                        text: "POSTER",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "B.Collins, J. Deng, L. Kai and L. Fei-Fei.",
                image: "",
                title: "Towards scalable dataset construction: An active learning approach.",
                info: "ECCV 2008.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/CollinsDengLiFei-Fei_ECCV2008.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S.Savarese and L. Fei-Fei.",
                image: "",
                title: "View synthesis for recognizing unseen poses of object classes..",
                info: "ECCV 2008.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/SavareseFei-Fei_ECCV2008.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "J.C. Niebles, H. Wang and L. Fei-Fei..",
                image: "",
                title: "Unsupervised learning of human action categories using spatial-temporal words.",
                info: "IJCV 2008.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/NieblesWangFei-Fei_IJCV2008.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "S. Savarese, A. Del Pozo, J.C. Niebles and L. Fei-Fei..",
                image: "",
                title: "Spatial-temporal correlations for unsupervised action classification.",
                info: "IEEE Workshop on Motion and Video Computing, 2008.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/NieblesWangFei-Fei_IJCV2008.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S.Savarese and L. Fei-Fei.",
                image: "",
                title: "View synthesis for recognizing unseen poses of object classes",
                info: "Proc. of European Conference on Computer Vision (ECCV), 602-615, 2008",
                refs: [
                    { href: "https://amberxu.github.io/papers/savarese_feifei_eccv08.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/Savarese_ECCV2008_ViewSynth.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, R. Spronk, D. G. Stork, and A. DelPozo,",
                image: "",
                title: "Reflections on praxis and facture in a devotional portrait diptych: A computer analysis of the mirror in Hans Memlingâ€™s Virgin and Child and Maarten van Nieuwenhoveâ€",
                info: "IS&T/SPIE 20th Annual Symposium Electronic Imaging, Jan Jose, CA, Januray 29-31st, 2008",
                refs: [
                    { href: "https://amberxu.github.io/papers/Savarese_spronk_stork_etal_08.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "S. Savarese, A. Del Pozo, JC. Niebles, L. Fei-Fei,",
                image: "correlatons.jpg",
                title: "Spatial-Temporal Correlations for Unsupervised Action Classification,",
                info: "Proc. of IEEE Workshop on Motion and Video Computing, Copper Mountain, Colorado January 8-9, 1-8, 2008.",
                refs: [
                    { href: "https://amberxu.github.io/papers/SavareseDelPozoEtAl_WMVC08.PDF",
                        text: "PDF",
                    },
                    { href: "https://doi.org/10.1109/WMVC.2008.4544068",
                        text: "DOI",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2007",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L.-J. Li and L. Fei-Fei. .",
                image: "",
                title: "What, where and who? Classifying event by scene and object recognition.",
                info: "ICCV 2007.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/LiFei-Fei_ICCV07.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Cao and L. Fei-Fei..",
                image: "",
                title: "Spatially coherent latent topic model for concurrent object segmentation and classification.",
                info: "ICCV 2007.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/CaoFei-Fei_ICCV2007.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "D. Walther and L. Fei-Fei..",
                image: "",
                title: "Task-set switching with natural scenes: Measuring the cost of deploying top-down attention..",
                info: "Journal of Vision 2007.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/WaltherFei-Fei_JOV2007.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Li-Jia Li, Juan Carlos Niebles and Li Fei-Fei.",
                image: "optimol.png",
                title: "OPTIMOL: a framework for Online Picture collecTion via Incremental MOdel Learning.",
                info: "Association for the Advancement of Artificial Intelligence (AAAI) 2007 Robot Competition and Exhibition, Vancouver, Canada, July 2007.",
                refs: [
                    { href: "http://www.aaai.org/Papers/AAAI/2007/AAAI07-367.pdf",
                        text: "PDF",
                    },
                    { href: "http://vision.stanford.edu/srvc/",
                        text: "PROJECT",
                    },
                    { href: "http://www.aaai.org/Papers/AAAI/2007/AAAI07-367.pdf",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L.-J. Li, G. Wang and L. Fei-Fei..",
                image: "",
                title: "OPTIMOL: automatic Object Picture collecTion via Incremental MOdel Learning..",
                info: "CVPR 2007.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/LiWangFei-Fei_CVPR2007.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "J. C. Niebles and L. Fei-Fei..",
                image: "NieblesFei-Fei_CVPR2007.jpg",
                title: "A hierarchical model of shape and appearance for human action classification..",
                info: "CVPR 2007.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/NieblesFei-Fei_CVPR2007.pdf",
                        text: "PDF",
                    },
                    { href: "https://doi.org/10.1109/CVPR.2007.383132",
                        text: "DOI",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei, R. Fergus and P. Perona..",
                image: "",
                title: "Learning generative visual models for 101 object categories..",
                info: "Computer Vision and Image Understanding, 2007.",
                refs: [
                    { href: "",
                        text: "PDF",
                    },
                ],
            },
            { authors: [],
                authorsText: "Fei-Fei, L., Iyer, A., Koch, C., Perona, P..",
                image: "",
                title: "What do we perceive in a glance of a real-world scene?.",
                info: "Journal of Vision, 2007.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/Fei-Fei_GistJoV2007.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese and L. Fei-Fei.",
                image: "",
                title: "3D generic object categorization, localization and pose estimation",
                info: "Proc. of IEEE International Conf. in Computer Vision (ICCV), 1-8, Brazil, October, 2007 Accepted as Oral,",
                refs: [
                    { href: "https://amberxu.github.io/papers/3D%20generic%20object%20categorization_iccv07.PDF",
                        text: "PDF",
                    },
                    { href: "https://amberxu.github.io/bibtex/Savarese_ICCV2007_Multiview.bib",
                        text: "bibtex",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. DelPozo, and S. Savarese,",
                image: "",
                title: "Detecting Specular Surfaces on Natural Images",
                info: "Proc. of IEEE Conference on Computer Vision and Pattern Recognition, 1-8, Minnesota, USA, June 2007",
                refs: [
                    { href: "https://amberxu.github.io/papers/delpozo_savarese_cvpr07.PDF",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2006",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "J.C. Niebles, H. Wang, L. Fei-Fei..",
                image: "NieblesWangFei-Fei_BMVC2006.jpg",
                title: "Unsupervised learning of human action categories using spatial-temporal words.",
                info: "BMVC 2006.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/NieblesHWangFei-Fei_BMVC2006.pdf",
                        text: "PDF",
                    },
                    { href: "http://vision.stanford.edu/niebles/VPCVPR_06_May19.zip",
                        text: "VIDEO",
                    },
                    { href: "http://www.bmva.org/bmvc/2006/papers/283.pdf",
                        text: "DOI",
                    },
                    { href: "http://vision.stanford.edu/niebles/NieblesWangFeiFei_IMA-Workshop-06_poster.pdf",
                        text: "POSTER",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei..",
                image: "",
                title: "Knowledge transfer in learning to recognize visual object classes..",
                info: "ICDL 2006.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/Fei-Fei_ICDL2006.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "G. Wang, Y. Zhang, and L. Fei-Fei..",
                image: "",
                title: "Using dependent regions for object categorization in a generative framework..",
                info: "CVPR 2006.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/documents/WangZhangFei-Fei_CVPR2006.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei, R. Fergus and P. Perona.",
                image: "",
                title: "One-Shot learning of object categories.",
                info: "PAMI 2006.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/Fei-FeiFergusPerona2006.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, J. Winn and A. Criminisi,",
                image: "",
                title: "Discriminative Object Class Models of Appearance and Shape by Correlatons",
                info: "Proc. of IEEE Conference on Computer Vision and Pattern Recognition, 2033-2040 ,New York, USA, June 2006 ,",
                refs: [
                    { href: "https://amberxu.github.io/papers/Discriminative%20_Object_Class_Models_savarese_winn_criminisi_06.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Andreetto, S. Savarese, and P. Perona,",
                image: "",
                title: "Carving from ray-tracing constraints: IRT-carving",
                info: "Proc. of 3D Data Processing Visualization and Trasmission, 49-56, June 2006",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/3DPVT06.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, M. Andreetto, H. Rushmeier, F. Bernardini and P. Perona,",
                image: "",
                title: "3D Reconstruction by Shadow Carving: Theory and Practical Evaluation,",
                info: "International Journal of Computer Vision (IJCV) , 71(3), 305-336, March 2006",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/shadow_carving_06.PDF",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2005",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "R. VanRullen, L. Reddy and L. Fei-Fei..",
                image: "",
                title: "Binding is local problem for natural objects and scenes..",
                info: "Vision Research, 2005.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/VanRullenReddyFei-Fei_VR2005.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei, R. VanRuellen, C. Koch and P. Perona..",
                image: "",
                title: "Why does natural scene categorization require little attention? Exploring attentional requirements for natural and synthetic stimuli..",
                info: "Vision Cognition, 2005.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/Fei-FeiVanRullenKochPerona_VC2005.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "R. Fergus, L. Fei-Fei, P. Perona and A. Zisserman.",
                image: "",
                title: "Learning Object Categories from Google's Image Search.",
                info: "ICCV 2005.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/FergusFei-FeiPeronaZisserman_ICCV05.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei and P. Perona.",
                image: "",
                title: "A Bayesian Hierarchical Model for Learning Natural Scene Categories.",
                info: "CVPR 2005.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/Fei-FeiPerona2005.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, M. Chen and P. Perona,",
                image: "",
                title: "Local Shape from Mirror Reflections,",
                info: "International Journal of Computer Vision (IJCV), 64(1), 31-67, 2005,",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/local_shape_05.PDF",
                        text: "PDF",
                    },
                ],
            },
        ],
    },
    { name: "Publications 2004 & Before",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["c" /* NIEBLES */]],
                authorsText: "Humberto Campanella P., Mauricio Pardo G., Victor Manotas A., Javier Páez, Juan Carlos Niebles and David Angulo.",
                image: "tugboat.png",
                title: "Signal Processing Unit for River Tugboat Telemetry System.",
                info: "Conference on Design of Circuits and Integrated Systems (DCIS), Bordeaux, France, November 2004.",
                refs: [
                    { href: "",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, L. Fei-Fei and P. Perona,",
                image: "",
                title: "What do reflections tell us about the shape of a mirror?",
                info: "in Applied Perception in Graphics and Visualization [sponsored by ACM SIGGRAPH], 115-118, Los Angeles, August 7-8, 2004",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/p115-savarese.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, M. Chen and P. Perona,",
                image: "",
                title: "Recovering local shape of a mirror surface from reflection of a regular gridI",
                info: "Proc. of European Conference of Computer Vision, 468-481, Prague, May 2004.",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/sav_eccv04.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, M. Chen and P. Perona,",
                image: "",
                title: "Second Order Local Analysis for 3D Reconstruction of Specular Surfaces",
                info: "Proc. of 3D Data Processing Visualization and Trasmission, 356-361, Italy, June 2002.",
                refs: [
                    { href: "http://www.dei.unipd.it/conferences/3DPVT/Abstracts/117.html",
                        text: "Abstract",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese and P. Perona,",
                image: "",
                title: "Local Analysis for 3D Reconstruction of Specular Surfaces -- part II",
                info: "Proc. of European Conference of Computer Vision, 759-774, Denmark, May 2002.",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/23510759.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, H. Rushmeier, F. Bernardini and P. Perona,",
                image: "",
                title: "Implementation of a Shadow Carving System for Shape Capture",
                info: "Proc. of 3D Data Processing Visualization and Trasmission, 12 - 23, Padua, Italy, June 2002.",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/savarese_3DPVT.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese and P. Perona,",
                image: "",
                title: "Local Analysis for 3D Reconstruction of Specular Surfaces",
                info: "Proc. of IEEE Conference on Computer Vision and Pattern Recognition, II-738-745, Kawa'i, USA, December 2001.",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/P5_28.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, H. Rushmeier, F. Bernardini and P. Perona,",
                image: "",
                title: "Shadow Carving",
                info: "Proc. of the Int. Conf. on Computer Vision, 190-197 Vancouver, Canada, June 2001.",
                refs: [
                    { href: "http://www.vision.caltech.edu/savarese/papers_web/04_17.PDF",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei, R. Fergus, and P. Perona..",
                image: "",
                title: "Learning generative visual models from few training examples: an incremental Bayesian approach tested on 101 object categories.",
                info: "CVPR 2004 Workshop on Generative-Model Based Vision.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/Fei-FeiFergusPerona_GMBV04.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */]],
                authorsText: "L. Fei-Fei, R. Fergus, and P. Perona.",
                image: "",
                title: "A Bayesian approach to.",
                info: "ICCV 2003.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/Fei-Fei_ICCV03.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [],
                authorsText: "F.F. Li, R. VanRullen, C. Koch and P. Perona.",
                image: "",
                title: "Rapid natural scene categorization in the near absence of attention.",
                info: "Proc. Natl. Acad. Sci. 99.",
                refs: [
                    { href: "http://vision.stanford.edu/documents/LiVanRullenKochPerona_PNAS2002.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [],
                authorsText: "Abstracts",
                image: "",
                title: "",
                info: "Abstracts",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "J. Clemons, Y. Bao, M. Bagra, T. Austin, S. Savarese,",
                image: "",
                title: "Scene Understanding for the Visually Impaired Using Visual Sonification by Visual Feature Analysis and Auditory Signature",
                info: "Proc. of Vision Science Society, May 2012.",
                refs: [
                    { href: "http://www.visionsciences.org/abstract_detail.php?id=550",
                        text: "Abstract",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, A. Del Pozo, D. Baker, D.J. Simons,",
                image: "",
                title: "When are reflections useful in perceiving the shape of shiny surfaces?",
                info: "Proc. of Vision Science Society, Florida, May 2008",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar Fard, S. Savarese, F. Pena-Mora,",
                image: "",
                title: "Interactive Visual Construction Progress Monitoring with 4D Augmented Reality Model",
                info: "CCBE-XI, Beijing, October 16-18, 2008",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. Del Pozo, S. Savarese, D. Baker, D. J. Simons,",
                image: "",
                title: "Why do we see some surfaces as reflective?",
                info: "Proc. of Vision Science Society, Florida, May 2008",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, L. Fei-Fei and P. Perona,",
                image: "",
                title: "Can We See the Shape of a Mirror?",
                info: "Proc. of Vision Science Society, Florida, May 2003.",
                refs: [
                    { href: "http://journalofvision.org/3/9/74/",
                        text: "Abstract",
                    },
                ],
            },
            { authors: [],
                authorsText: "Patents",
                image: "",
                title: "",
                info: "Patents",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, S. Savarese (2011)",
                image: "",
                title: "D4AR modeling for automation and interactive visualization of construction progress monitoring",
                info: "Provisional Patent, U. S. Patent and Trademark Office (61/570,491).",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "F. Bernardini, B. Henning, H. Rushmeier, S. Savarese, G. Taubin,",
                image: "",
                title: "System, method, and program product for acquiring accurate object silhouettes for shape recovery",
                info: "IBM US Patent 6,455,835, (2001)",
                refs: [
                    { href: "http://patft.uspto.gov/netacgi/nph-Parser?Sect1=PTO1&Sect2=HITOFF&d=PALL&p=1&u=/netahtml/srchnum.htm&r=1&f=G&l=50&s1=6455835.WKU.&OS=PN/6455835&RS=PN/6455835",
                        text: "Abstract",
                    },
                ],
            },
        ],
    },
    { name: "Books and Book Chapters",
        publications: [
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "A. Alahi, V. Ramanathan, K. Goel, A. Robicquet, A. Sadeghian, L. Fei-Fei, S. Savarese,",
                image: "",
                title: "Learning to predict in crowds",
                info: "To appear in the book on “Group and Crowd Behavior for Computer Vision” by Elsevier.",
                refs: [
                    { href: "http://web.stanford.edu/%7Ealahi/downloads/Elsevier_Learning_to_predict_in_crowds.pdf",
                        text: "PDF",
                    },
                ],
            },
            { authors: [],
                authorsText: "A.R. Zamir, A. Hakeem, L. Van Gool, M. Shah, and R. Szeliski,",
                image: "",
                title: "Large-Scale Visual Geo-Location,",
                info: "Springer (2016).",
                refs: [
                    { href: "http://www.springer.com/gb/book/9783319257792#aboutBook",
                        text: "Book",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Sun and S. Savarese,",
                image: "",
                title: "Model-based object recognition",
                info: "Computer Vision, A Reference Guide 2014, Springer, pp 488-492.",
                refs: [
                    { href: "http://www.informatik.uni-trier.de/%7Eley/db/reference/vision/vision2014.html#SunS14",
                        text: "Book",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese,",
                image: "",
                title: "3D Shape from Specularities",
                info: "Computer Vision, A Reference Guide 2014, Springer, pp 726-729.",
                refs: [
                    { href: "http://www.informatik.uni-trier.de/%7Eley/db/reference/vision/vision2014.html#SunS14",
                        text: "Book",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "W. Choi and S. Savarese,",
                image: "",
                title: "Recognizing Complex Human Activities via Crowd Context",
                info: "Augmented Vision and Reality, Springer, 2013.",
                refs: [
                    { href: "http://link.springer.com/chapter/10.1007%2F8612_2012_4",
                        text: "Book",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "D. Hoiem and S. Savarese,",
                image: "",
                title: "Representations and Techniques for 3D Object Recognition and Scene Interpretation",
                info: "Synthesis lecture on Artificial Intelligence and Machine Learning, Morgan Claypool Publishers, 2011.",
                refs: [
                    { href: "http://www.amazon.com/Representations-Techniques-Recognition-Interpretation-Inetlligence/dp/1608457281",
                        text: "Book",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "M. Golparvar-Fard, F. Pena-Mora, and S. Savarese.",
                image: "",
                title: "Visualization of Construction Progress Monitoring using Unordered Construction Photo Collections and 4D Building Information Models",
                info: "in \"Augmented Reality\", ISBN 978-953-307-631-7. 2011",
                refs: [],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "Y. Bao and S. Savarese,",
                image: "",
                title: "Semantic Structure from Motion: a Novel Framework for Joint Object Recognition and 3D Reconstruction",
                info: "in \"Outdoor and Large-Scale Real-World Scene Analysis\", Springer, in press.",
                refs: [
                    { href: "https://amberxu.github.io/papers/bao_ssfm2011_extended.pdf",
                        text: "pre-print",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, D. G. Stork, A. DelPozo and R. Spronk,",
                image: "",
                title: "A computer analysis of the mirror in Hans Memlingis Virgin and Child and Maarten van Nieuwenhove",
                info: "in \"Digital Imaging for Cultural Heritage Preservation\", CRC Press 2011.",
                refs: [
                    { href: "http://www.amazon.com/Digital-Imaging-Cultural-Heritage-Preservation/dp/1439821739",
                        text: "Book",
                    },
                ],
            },
            { authors: [__WEBPACK_IMPORTED_MODULE_0__publications__["b" /* FEIFEILI */], __WEBPACK_IMPORTED_MODULE_0__publications__["d" /* SILVIO */]],
                authorsText: "S. Savarese, and L. Fei-Fei,",
                image: "",
                title: "Multi-view Object Categorization and Pose Estimation",
                info: "in \"Computer Vision: Detection, Recognition and Reconstruction (Studies in Computational Intelligence)\", Volume 285/2010, Springer, 2010.",
                refs: [
                    { href: "http://amzn.com/3642128475",
                        text: "Book",
                    },
                ],
            },
        ],
    },
];
//# sourceMappingURL=publications.data.js.map

/***/ }),

/***/ "../../../../../src/app/publications/publications.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicationsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__publications_data__ = __webpack_require__("../../../../../src/app/publications/publications.data.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var PublicationsService = (function () {
    function PublicationsService() {
    }
    PublicationsService.prototype.getSections = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__publications_data__["a" /* SECTIONS */]);
    };
    return PublicationsService;
}());
PublicationsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], PublicationsService);

//# sourceMappingURL=publications.service.js.map

/***/ }),

/***/ "../../../../../src/app/publications/publications.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FEIFEILI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return NIEBLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SILVIO; });
/* unused harmony export Aref */
/* unused harmony export Publication */
/* unused harmony export Section */
var ALL = "All";
var FEIFEILI = "Fei-Fei Li";
var NIEBLES = "Juan Carlos Niebles";
var SILVIO = "Silvio Savarese";
var Aref = (function () {
    function Aref() {
    }
    return Aref;
}());

var Publication = (function () {
    function Publication() {
    }
    return Publication;
}());

var Section = (function () {
    function Section() {
    }
    return Section;
}());

//# sourceMappingURL=publications.js.map

/***/ }),

/***/ "../../../../../src/app/research/research.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-color-sky-light section-seperator\">\n  <div class=\"content container\">\n    <div class=\"row\">\n      <div id=\"sidebar\" class=\"sidebar-wrap col-md-4 col-xs-10 sm-margin-b-30\">\n        <ul class=\"sidebar list-unstyled sidenav-position\">\n          <li class=\"side-nav\"><a [routerLink]=\"['/research']\" fragment=\"Highlight\" (click)=\"onAnchorClick()\">Highlighted Projects</a></li>\n          <li class=\"side-nav\"><a [routerLink]=\"['/research']\" fragment=\"Vision\" (click)=\"onAnchorClick()\">Vision & Language</a></li>\n          <li class=\"side-nav\"><a [routerLink]=\"['/research']\" fragment=\"2D\" (click)=\"onAnchorClick()\">2D Image Understanding</a></li>\n          <li class=\"side-nav\"><a [routerLink]=\"['/research']\" fragment=\"3D\" (click)=\"onAnchorClick()\">3D Scene and Object Understanding</a></li>\n          <li class=\"side-nav\"><a [routerLink]=\"['/research']\" fragment=\"Robotics\" (click)=\"onAnchorClick()\">Robotics</a></li>\n          <li class=\"side-nav\"><a [routerLink]=\"['/research']\" fragment=\"Reinforcement\" (click)=\"onAnchorClick()\">Reinforcement Learning</a></li>\n          <li class=\"side-nav\"><a [routerLink]=\"['/research']\" fragment=\"Video\" (click)=\"onAnchorClick()\">Video and Activity Understanding</a></li>\n          <li class=\"side-nav\"><a [routerLink]=\"['/research']\" fragment=\"Learning\" (click)=\"onAnchorClick()\">Learning Theory</a></li>\n          <li class=\"side-nav\"><a [routerLink]=\"['/research']\" fragment=\"Societal\" (click)=\"onAnchorClick()\">Societal Understanding</a></li>\n          <li class=\"side-nav\"><a [routerLink]=\"['/research']\" fragment=\"Visual\" (click)=\"onAnchorClick()\">Visual Reasoning</a></li>\n          <li class=\"side-nav\"><a [routerLink]=\"['/research']\" fragment=\"Data\" (click)=\"onAnchorClick()\">Data and Label Generation</a></li>\n          <li class=\"side-nav\"><a [routerLink]=\"['/research']\" fragment=\"Human\" (click)=\"onAnchorClick()\">Human Perception</a></li>\n        </ul>\n      </div>\n      \n      <div id=\"content\" class=\"col-md-8 col-xs-12 sm-margin-b-30\">\n        <h2 class=\"top-seprates\" id=\"Highlight\">Highlighted Projects</h2>\n           <ul class=\"row list-unstyled\">\n             <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">JackRabbot</p>\n           <p>Our work at the SVL is making practical a new generation of autonomous agents that can operate safely alongside humans in dynamic crowded environments such as terminals, malls, or campuses. The Stanford “Jackrabbot”, which takes it name from the nimble yet shy Jackrabbit, is a self-navigating automated electric delivery cart capable of carrying small payloads.</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/jackrabbot/\">Link</a> and <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/jackrabbot/cvgl_files/quartz_jr.mp4\">Video</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">ActivityNet: A Large-Scale Video Benchmark for Human Activity Understanding</p>\n           <p>Our benchmark aims at covering a wide range of complex human activities that are of interest to people in their daily living. We illustrate three scenarios in which ActivityNet can be used to compare algorithms for human activity understanding: global video classification, trimmed activity classification and activity detection.</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://activity-net.org/\">Link</a> and <a class=\"link-sytle\" href=\"http://www.niebles.net/images/anet_cvpr15b.jpg\">Video</a></p>\n           </li>\n           \n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">AI-Assisted Care</p>\n           <p>The Partnership in AI-Assisted Care (PAC) is an interdisciplinary collaboration between the School of Medicine and the Computer Science department focusing on cutting edge computer vision and machine learning technologies to solve some of healthcare's most important problems.</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"https://aicare.stanford.edu/\">Link</a> and <a class=\"link-sytle\" href=\"https://aicare.stanford.edu/projects/hand_hygiene/video/dispenser.mp4\">Video</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Visual Genome</p>\n           <p>Short Description: To achieve success at cognitive tasks, models need to understand the interactions and relationships between objects in an image. Visual Genome is a new dataset to connect dense, structured image concepts to language.</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://visualgenome.org/\">Link</a> and <a class=\"link-sytle\" href=\"http://visualgenome.org/static/images/front-page/interconnected_images.png\">Image</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">ObjectNet3D</p>\n           <p>ObjectNet3D is a large scale database for 3D object recognition. With 90,127 images, 201,888 objects in these images and 44,147 3D shapes, ObjectNet3D offers a powerful tool for learning to recognize 3D pose and 3D shape of objects from 2D images.</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/objectnet3d/\">Link</a> and <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/research/ObjectNet3D\">Video</a></p>\n           </li>     \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">ImageNet Challenge</p>\n           <p>The ImageNet Large Scale Visual Recognition Challenge (ILSVRC) evaluates algorithms for object detection and image classification at large scale. One high level motivation is to allow researchers to compare progress in computer vision across a wider variety of objects -- taking advantage of the quite expensive labeling efforts.</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://www.image-net.org/challenges/LSVRC/\">Link</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/ilsvrc_proj.jpg\">Image</a></p>\n           </li>   \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">ImageNet</p>\n           <p>ImageNet is an image database organized according to the WordNet hierarchy (currently only the nouns), in which each node of the hierarchy is depicted by hundreds and thousands of images. As the largest labelled image data set at the time of its release in 2009, ImageNet has helped to pave the way for today’s advances in visual recognition.</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://www.image-net.org/\">Link</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/imagenet_proj.png.jpg\">Image</a></p>\n           </li>\n           </ul>\n\n           <h2 id=\"Vision\" class=\"top-seprates jumptarget\">Visual Reasoning (visual question answering)</h2>\n           <ul class=\"row list-unstyled\">\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">A Hierarchical Approach for Generating Descriptive Image Paragraphs</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cs.stanford.edu/people/ranjaykrishna/im2p/index.html\">Project Page</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/krause2017cvpr.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Visual Genome: Connecting Language and Vision Using Crowdsourced Dense Image Annotations</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"https://visualgenome.org/\">Project Page</a>, <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/visualgenome.pdf\">Paper</a>, <a class=\"link-sytle\" href=\"http://visualgenome.org/api/v0/api_home.html\">Data</a>, <a class=\"link-sytle\" href=\"https://github.com/ranjaykrishna/visual_genome_python_driver\">API</a>, <a class=\"link-sytle\" href=\"https://twitter.com/visualgenome\">Twitter</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Visual Relationship Detection with Language Priors</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cs.stanford.edu/people/ranjaykrishna/vrd/\">Project Page</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/lu2016eccv.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">DenseCap: Fully Convolutional Localization Networks for Dense Captioning</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cs.stanford.edu/people/karpathy/densecap/\">Project Page</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/johnson2016cvpr.pdff\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Generating Semantically Precise Scene Graphs from Textual Descriptions for Improved Image Retrieval</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://nlp.stanford.edu/pubs/schuster-krishna-chang-feifei-manning-vl15.pdf\">Project Page</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Love Thy Neighbors: Image Annotation by Exploiting Image Metadata</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cs.stanford.edu/people/jcjohns/papers/iccv15/JohnsonICCV2015.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Image Retrieval using Scene Graphs</p>\n           <p>Check out our<a class=\"link-sytle\" href=\"http://cs.stanford.edu/people/jcjohns/papers/iccv15/JohnsonICCV2015.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Deep Fragment Embeddings for Bidirectional Image-Sentence Mapping</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://feedbacknet.stanford.edu/\">Project Page</a> and <a class=\"link-sytle\" href=\"http://cs.stanford.edu/people/karpathy/nips2014.pdf\">Paper</a></p>\n           </li>\n           </ul>\n\n           <h2 class=\"top-seprates jumptarget\" id=\"2D\">2D Image Understanding (segmentation, detection, depth incorporation, image matching)</h2>\n           <ul class=\"row list-unstyled\">\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">What's the point: Semantic segmentation with point supervision</p>\n           <p>Check out our<a class=\"link-sytle\" href=\"http://vision.stanford.edu/publications.html#\"> Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Recurrent Attention Models for Depth-Based Person Identification</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/haque2016cvpr.pdf\">Project Page</a> and <a class=\"link-sytle\" href=\"http://www.albert.cm/projects/ram_person_id/\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Subcategory-aware Convolutional Neural Networks for Object Proposals and Detection</p>\n           <p>Check out out <a class=\"link-sytle\" href=\"http://yuxng.github.io/xiang_wacv17.pdf\">Paper</a>, <a class=\"link-sytle\" href=\"http://arxiv.org/abs/1604.04693\">arXiv</a>, <a class=\"link-sytle\" href=\"http://yuxng.github.io/xiang_wacv17_tr.pdf\">Technical Report</a>, <a class=\"link-sytle\" href=\"http://www.cvlibs.net/datasets/kitti/eval_object_detail.php?result=5e17cbbabbf775d8cc376793168be49bd6f01608\">KITTI Results</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Robust Single-View Instance Recognition</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/papers/held_icra16.pdf\">Paper</a>, <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/held_icra16.bib\">bibtex</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Deep View Morphing</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"https://arxiv.org/abs/1703.02168\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Universal Correspondence Network</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/ucn\">Project Page</a>, <a class=\"link-sytle\" href=\"https://papers.nips.cc/paper/6487-universal-correspondence-network\">Paper</a>, <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/choy2016universal.bib\">bibtex</a></p>\n           </li>           \n           </ul>\n\n           <h2 class=\"top-seprates jumptarget\" id=\"3D\">3D Scene and Object Understanding (3D shape recognition, 3D reconstruction)</h2>\n           <ul class=\"row list-unstyled\">\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Towards Viewpoint Invariant 3D Human Pose Estimation</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"https://www.albert.cm/projects/viewpoint_3d_pose/\">Project Page</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/haque2016eccv.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Free your Camera: 3D Indoor Scene Understanding from Arbitrary Camera Motion</p>\n           <p>Check out our<a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/furlan13.pdf\"> Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">3D Object Representations for Fine-Grained Categorization</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://feedbacknet.stanford.edu/\">Project Page</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/3drr13.pdf\">Paper</a></p>\n           </li>\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Joint 2D-3D-Semantic Data for Indoor Scene Understanding</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://3dsemantics.stanford.edu/\">Project Page</a>, <a class=\"link-sytle\" href=\"https://arxiv.org/pdf/1702.01105.pdf\">Paper</a> and <a class=\"Link-sytle\" href=\"http://buildingparser.stanford.edu/images/2D-3D-S.txt\"></a>bibtex</p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">3D-R2N2: A Unified Approach for Single and Multi-view 3D Object Reconstruction</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://3d-r2n2.stanford.edu/\">Project Page</a>, <a class=\"link-sytle\" href=\"http://download.springer.com/static/pdf/315/chp%253A10.1007%252F978-3-319-46484-8_38.pdf?originUrl=http%3A%2F%2Flink.springer.com%2Fchapter%2F10.1007%2F978-3-319-46484-8_38&token2=exp=1488871345~acl=%2Fstatic%2Fpdf%2F315%2Fchp%25253A10.1007%25252F978-3-319-46484-8_38.pdf%3ForiginUrl%3Dhttp%253A%252F%252Flink.springer.com%252Fchapter%252F10.1007%252F978-3-319-46484-8_38*~hmac=87c4725a5031e36a5ede8b411ccaef0d38be69b891589f900bbd384d51728f73\">Paper</a> <a class=\"link-sytle\" href=\"https://github.com/chrischoy/3D-R2N2\">Code</a> and <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/choy20163d.bib\">bibtex</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">ObjectNet3D: A Large Scale Database for 3D Object Recognition</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/objectnet3d\">Project Page</a>, <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/papers/xiang_eccv16.pdf\">Paper</a>, <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/papers/xiang_eccv16_tr.pdf\">Technical Report</a> and <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/xiang_eccv16.bib\">bibtex</a></p>\n           </li>   \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">3D Semantic Parsing of Large-Scale Indoor Spaces</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://buildingparser.stanford.edu/\">Project Page</a>, <a class=\"link-sytle\" href=\"http://buildingparser.stanford.edu/images/3D_Semantic_Parsing.pdf\">Paper</a>, <a class=\"link-sytle\" href=\"http://buildingparser.stanford.edu/images/supp_mat.pdf\">Technical Report</a> and <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/armeni_cvpr16.bib\">bibtex</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">ShapeNet: An Information-Rich 3D Model Repository</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://dblp.uni-trier.de/rec/bibtex/journals/corr/ChangFGHHLSSSSX15\">bibtex</a> and <a class=\"link-sytle\" href=\"http://arxiv.org/pdf/1512.03012v1.pdf\">Paper</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Indoor Scene Understanding with Geometric and Semantic Contexts</p>\n           <p>Check out our <a class=\"link-sytle\" href=\" http://cvgl.stanford.edu/bibtex/choi_ijcv15.bib\">Project Page</a> and <a class=\"link-sytle\" href=\"http://link.springer.com/article/10.1007%2Fs11263-014-0779-4\">Paper</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">A Coarse-to-Fine Model for 3D Pose Estimation and Sub-category Recognition</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/C2F\">Project Page</a>, <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/papers/Mottaghi15cvpr.pdf\">Paper</a>, <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/mottaghi_cvpr15.bib\">bibtex</a> and <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/papers/Mottaghi15cvpr-sm.pdf\">Technical Report</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Data-Driven 3D Voxel Patterns for Object Category Recognition</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/3DVP\">Project Page</a>, <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/papers/xiang_cvpr15_3dvp.pdf\">Paper</a>, <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/xiang_cvpr15.bib\">bibtex</a> and <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/papers/xiang_cvpr15_3dvp_tr.pdf\">Technical Report</a></p>\n           </li> \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Beyond PASCAL: A Benchmark for 3D Object Detection in the Wild</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"Project: http://cvgl.stanford.edu/projects/pascal3d.html\">Project Page</a>, <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/papers/xiang_wacv14.pdf\">Paper</a> and <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/xiang_wacv14.bib\">bibtex</a></p>\n           </li>             \n           </ul>\n\n           <h2 class=\"top-seprates jumptarget\" id=\"Robotics\">Robotics (tracking, prediction, and localization)</h2>\n           <ul class=\"row list-unstyled\">\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Tracking Millions of Humans in Crowded Space</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/alahi2017gcbcv2.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Learning to Predict Human Behaviour in Crowded Scenes</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/alahi2017gcbcv.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Unsupervised Camera Localization in Crowded Spaces</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/alahi2017icra.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Social LSTM: Human Trajectory Prediction in Crowded Spaces</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/CVPR16_N_LSTM.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Socially-aware Large-scale Crowd Forecasting</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/alahi14.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Social Scene Understanding: End-to-End Multi-Person Action Localization and Collective Activity Recognition</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"https://arxiv.org/abs/1611.09078\">Paper</a></p>\n           </li>   \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Tracking The Untrackable: Learning To Track Multiple Cues with Long-Term Dependencies</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"https://arxiv.org/abs/1701.01909\"> arXiv</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Learning Social Etiquette: Human Trajectory Prediction</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/uav_data/\">Project Page</a>, <a class=\"link-sytle\" href=\"http://web.stanford.edu/~alahi/downloads/ECCV16social.pdf\">Paper</a> and <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/robicquet2016learning.bib\">bibtex</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Learning to Track at 100 FPS with Deep Regression Networks</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"arXiv: http://arxiv.org/abs/1604.01802\">arXiv</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">A Probabilistic Framework for Real-time 3D Segmentation using Spatial, Temporal, and Semantic Cues</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/held_rss16.bib\">arXiv</a> and <a class=\"link-sytle\" href=\"http://davheld.github.io/segmentation3D/segmentation3D.htmlf\">Paper</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Learning to Track: Online Multi-Object Tracking by Decision Making</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/MDP_tracking\">Project Page</a>, <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/papers/xiang_iccv15.pdf\">Paper</a>,<a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/xiang_iccv15.bib\">bibtex</a> and <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/papers/xiang_iccv15_tr.pdf\">Technical Report</a></p>\n           </li> \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Combining 3D Shape, Color, and Motion for Robust Anytime Tracking</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/held_rss2014.bib\">Technical Report</a></p>\n           </li>             \n           </ul>\n\n           <h2 class=\"top-seprates jumptarget\" id=\"Reinforcement\">Reinforcement Learning (policy & deep reinforcement learning)</h2>\n           <ul class=\"row list-unstyled\">\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Visual Semantic Planning using Deep Successor Representations</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/zhu2017iccv.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Adversarially Robust Policy Learning through Active Construction of Physically-Plausible Perturbations</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/mandlekar2017iros.pdf\">Paper</a></p>\n           </li>   \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Target-driven Visual Navigation in Indoor Scenes using Deep Reinforcement Learning</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/zhu2017icra.pdf\">Paper</a></p>\n           </li>            \n           </ul>\n\n           <h2 class=\"top-seprates jumptarget\" id=\"Video\">Video and Activity Understanding (action recognition, video captioning)</h2>\n           <ul class=\"row list-unstyled\">\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Dense-Captioning Events in Videos</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cs.stanford.edu/people/ranjaykrishna/densevid/\">Project Page</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/publications.html#\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Towards Vision-Based Smart Hospitals: A System for Tracking and Monitoring Hand Hygiene Compliance</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"https://aicare.stanford.edu/projects/hand_hygiene/\">Project Page</a> and <a class=\"link-sytle\" href=\"https://arxiv.org/pdf/1708.00163.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Unsupervised Visual-Linguistic Reference Resolution in Instructional Videos</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://ai.stanford.edu/~dahuang/projects/vlrr/\">Project Page</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/huang2017cvpr.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Learning to learn from noisy web videos</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/publications.html#\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">SST: Single-Stream Temporal Action Proposals</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/buch2017cvpr.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Unsupervised Learning of Long-Term Motion Dynamics for Videos</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/luo2017cvpr.pdf\">Paper</a></p>\n           </li>   \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Connectionist Temporal Modeling for Weakly Supervised Action Labeling</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/publications.html#\">Paper</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">End-to-end Learning of Action Detection from Frame Glimpses in Videos</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://ai.stanford.edu/~syyeung/frameglimpses.html\">Project Page</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/yeung2016cvpr.pdf\">Paper</a></p>\n           </li>  \n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Detecting Events and Key Actors in Multi-person Videos</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://basketballattention.appspot.com/\">Project Page</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/ramanathan2016cvpr.pdf\">Paper</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Learning temporal embeddings for complex video analysis</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/RamanathanICCV2015.pdf\">Paper</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Joint person naming in videos and coreference resolution in text</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/vignesh14.pdf\">Paper</a></p>\n           </li> \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Video Event Understanding using Natural Language Descriptions</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/vigneshICCV13.pdf\">Paper</a></p>\n           </li>     \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Action Recognition with Exemplar Based 2.5D Graph Matching</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/YaoFei-Fei_ECCV12.pdf\">Paper</a></p>\n           </li> \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Watch-n-Patch: Unsupervised Learning of Actions and Relations</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"https://arxiv.org/pdf/1603.03541.pdf\">Paper</a></p>\n           </li> \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Watch-Bot: Unsupervised Learning for Reminding Humans of Forgotten Actions</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/wu_icra16.bib\">bibtex</a> and <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/papers/wu_icra16.pdf\">Paper</a></p>\n           </li>   \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Visual Forecasting by Imitating Dynamics in Natural Sequences</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://ai.stanford.edu/~dahuang/papers/iccv17-vfid.pdf\">Paper</a></p>\n           </li> \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">End-to-End, Single-Stream Temporal Action Detection in Untrimmed Videos</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"https://www.dropbox.com/s/9n90etsu6jubiax/0144.pdf?dl=1\">Paper</a></p>\n           </li> \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Sparse composition of body poses and atomic actions for human activity recognition in RGB-D videos</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/\">Data</a> and <a class=\"link-sytle\" href=\"http://dx.doi.org/10.1016/j.imavis.2016.11.004\">Paper</a></p>\n           </li> \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">DAPs: Deep Action Proposals for Action Understanding</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"https://ivul.kaust.edu.sa/Pages/pub-Daps.aspx\">Project Page</a>, <a class=\"link-sytle\" href=\"https://link.springer.com/chapter/10.1007/978-3-319-46487-9_47\">Paper</a>, <a class=\"link-sytle\" href=\"https://drive.google.com/open?id=0B0ZXjo_p8lHBRGlnZ0Q1dFk2SUk\">Video</a> and <a class=\"link-sytle\" href=\" https://github.com/escorciav/daps\">Code</a></p>\n           </li>                                                                                         \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Title Generation for User Generated Videos</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://ug-video.com/\">Project Page</a>, <a class=\"link-sytle\" href=\"https://link.springer.com/chapter/10.1007/978-3-319-46475-6_38\">Paper</a>, <a class=\"link-sytle\" href=\"https://arxiv.org/abs/1608.07068\">arXiv</a>,<a class=\"link-sytle\" href=\"https://www.youtube.com/watch?v=KCTQ0vMsyDc\">Video</a> and <a class=\"link-sytle\" href=\" http://ug-video.com/\">Data</a></p>\n           </li>   \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Fast Temporal Activity Proposals for Efficient Detection of Human Actions in Untrimmed Videos</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://www.cabaf.net/temporalproposals/index.html\">Project Page</a>, <a class=\"link-sytle\" href=\"https://github.com/cabaf/sparseprop\">Code</a> and <a class=\"link-sytle\" href=\"https://doi.org/10.1109/CVPR.2016.211\">Paper</a></p>\n           </li>   \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">A Hierarchical Pose-Based Approach to Complex Action Understanding Using Dictionaries of Actionlets and Motion Poselets</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/\">Data</a>, <a class=\"link-sytle\" href=\"https://arxiv.org/abs/1606.04992\">arXiv</a> and <a class=\"link-sytle\" href=\"https://doi.org/10.1109/CVPR.2016.218\">Paper</a></p>\n           </li>   \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">ActivityNet: A Large-Scale Video Benchmark for Human Activity Understanding Unsupervised Semantic Parsing of Video Collections</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://activity-net.org/\">Project Page</a>, <a class=\"link-sytle\" href=\"https://github.com/activitynet/ActivityNet\">Code</a>, <a class=\"link-sytle\" href=\"http://activity-net.org/download.html\">Data</a> and <a class=\"link-sytle\" href=\"https://doi.org/10.1109/CVPR.2015.7298698\">Paper</a></p>\n           </li>                                                    \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Action Recognition by Hierarchical Mid-level Action Elements</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/lan_iccv2015.bib\">bibtex</a> and <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/papers/tian2015.pdf\">Paper</a></p>\n           </li>   \n           </ul>\n\n           <h2 class=\"top-seprates jumptarget\" id=\"Learning\">Learning Theory (metric learning, style transfer, domain adaptation)</h2>\n           <ul class=\"row list-unstyled\">\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Characterizing and Improving Stability in Neural Style Transfer</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/publications.html#\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Perceptual Losses for Real-time Style Transfer and Single Image Super-Resolution</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/publications.html#\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Visualizing and Understanding Recurrent Networks</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/KarpathyICLR2016.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Feedback Networks</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://feedbacknet.stanford.edu/\">Project Page</a>, <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/zamir2016feedback.bib\">bibtex</a> and <a class=\"link-sytle\" href=\"https://arxiv.org/pdf/1612.09508\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Learning Transferrable Representations for Unsupervised Domain Adaptation</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/bibtex/soner2016learning.bib\">bibtex</a> and <a class=\"link-sytle\" href=\"https://papers.nips.cc/paper/6360-learning-transferrable-representations-for-unsupervised-domain-adaptation.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Deep Metric Learning via Lifted Structured Feature Embedding</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/lifted_struct\">Project Page</a>, <a class=\"link-sytle\" href=\"https://github.com/rksltnl/Deep-Metric-Learning-CVPR16\">Code</a>, <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/papers/song_cvpr16_supp.pdf\">Technical Report</a>, <a class=\"link-sytle\" href=\"http://ai.stanford.edu/~hsong/bibs/Song-CVPR16.txt\">bibtex</a> and <a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/papers/song_cvpr16.pdf\">Paper</a></p>\n           </li>   \n           </ul> \n\n           <h2 class=\"top-seprates jumptarget\" id=\"Societal\">Societal Understanding (street view detection for census estimation)</h2>\n           <ul class=\"row list-unstyled\">\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Fine-Grained Car Detection for Visual Census Estimation</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/gebru2017aaai.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Vision-Based Classification of Developmental Disorders Using Eye-Movements</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/pusiol2016miccai.pdf\">Paper</a></p>\n           </li>            \n           </ul>\n\n           <h2 class=\"top-seprates jumptarget\" id=\"Visual\">Visual Reasoning (visual question answering)</h2>\n           <ul class=\"row list-unstyled\">\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Inferring and Executing Programs for Visual Reasoning</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cs.stanford.edu/people/jcjohns/iep\">Project Page</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/publications.html#\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Knowledge Acquisition for Visual Question Answering via Iterative Querying</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/zhu2017cvpr.pdf\">Paper</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">CLEVR: A Diagnostic Dataset for Compositional Language and Elementary Visual Reasoning</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://cs.stanford.edu/people/jcjohns/clevr/\">Project Page</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/johnson2017cvpr.pdf\">Paper</a></p>\n           </li> \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Visual7W: Grounded Question Answering in Images</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://web.stanford.edu/~yukez/visual7w/\">Project Page</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/zhu2016cvpr.pdf\">Paper</a></p>\n           </li> \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Leveraging Video Descriptions to Learn Video Question Answering</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://aliensunmin.github.io/project/video-language/index.html#VideoQA\">Project Page</a>, <a class=\"link-sytle\" href=\"http://ug-video.com/\">Data</a>, <a class=\"link-sytle\" href=\"https://arxiv.org/abs/1611.04021\">arXiv</a> and <a class=\"link-sytle\" href=\"https://aaai.org/ocs/index.php/AAAI/AAAI17/paper/view/14906\">Paper</a></p>\n           </li>                                               \n           </ul>\n\n           <h2 class=\"top-seprates jumptarget\" id=\"Data\">Data and Label Generation</h2>\n           <ul class=\"row list-unstyled\">\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Scalable Annotation of Fine-Grained Objects Without Experts</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/gebru2017chi.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">A Glimpse Far into the Future: Understanding Long-term Crowd Worker Accuracy</p>\n           <p>Check out our <a class=\"link-sytle\" href=\" http://cs.stanford.edu/people/ranjaykrishna/glimpse/\">Project Page</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/hata2017cscw.pdf\">Paper</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">The Unreasonable Effectiveness of Noisy Data for Fine-Grained Recognition</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://arxiv.org/abs/1511.06789\">Paper</a></p>\n           </li> \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Embracing Error to Enable Rapid Crowdsourcing</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://hci.stanford.edu/publications/2016/rsvp/rsvp.pdf\">Paper</a></p>\n           </li> \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">ImageNet Large Scale Visual Recognition Challenge</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://image-net.org/challenges/LSVRC/\">Project Page</a>, <a class=\"link-sytle\" href=\"http://ai.stanford.edu/~olga/bibtex/ILSVRC15.bib\">bibtex</a> and <a class=\"link-sytle\" href=\"http://arxiv.org/abs/1409.0575\">Paper</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">ImageNet: A Large-Scale Hierarchical Image Database</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/ImageNet_CVPR2009.pdf\">Paper</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Scalable Multi-Label Annotation</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/chi2014-MultiLabel.pdf\">Paper</a></p>\n           </li>   \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Fine-Grained Crowdsourcing for Fine-Grained Recognition</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://feedbacknet.stanford.edu/\">Project Page</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/DengKrauseFei-Fei_CVPR2013.pdf\">Paper</a></p>\n           </li>                                                         \n           </ul>\n\n           <h2 class=\"top-seprates jumptarget\" id=\"Human\">Human Perception</h2>\n           <ul class=\"row list-unstyled\">\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Human-object Interactions are More than the Sum of Their Parts</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/CC2016.pdf\">Paper</a></p>\n           </li>\n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Typicality Sharpens Category Representations in Object-Selective Cortex</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/iordan-etal-neuroimage-2016.pdf\">Paper</a></p>\n           </li>  \n\n           <li class=\"col-md-11 col-xs-12\">\n           <p class=\"name-title article-seprates\">Visual Categorization is Automatic and Obligatory: Evidence from a Stroop-like Paradigm</p>\n           <p>Check out our <a class=\"link-sytle\" href=\"http://feedbacknet.stanford.edu/\">Project Page</a> and <a class=\"link-sytle\" href=\"http://vision.stanford.edu/pdf/14.full.pdf\">Paper</a></p>\n           </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/research/research.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ResearchComponent = (function () {
    function ResearchComponent(route) {
        this.route = route;
    }
    ResearchComponent.prototype.onAnchorClick = function () {
        this.route.fragment.subscribe(function (f) {
            var element = document.querySelector("#" + f);
            if (element) {
                element.scrollIntoView(element);
                var top = element.offsetTop;
                window.scrollTo(0, top);
            }
        });
    };
    return ResearchComponent;
}());
ResearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/research/research.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], ResearchComponent);

var _a;
//# sourceMappingURL=research.component.js.map

/***/ }),

/***/ "../../../../../src/app/resources/resources.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-color-sky-light section-seperator\">\n  <div class=\"content container\">\n    <div class=\"row\">\n      <div id=\"sidebar\" class=\"sidebar-wrap col-md-2 col-xs-10 sm-margin-b-30\">\n        <div class=\"sidebar\">\n        </div>\n      </div>\n\n      <div id=\"content\" class=\"col-md-8 col-xs-12 sm-margin-b-30\">\n        <!-- Datasets -->\n        <h2 class=\"top-seprates\">Datasets</h2>\n        <ul class=\"row list-unstyled\">\n          <li class=\"col-md-11 col-xs-12\">\n            <div class=\"row top-seprates\">\n              <div class=\"col-md-3 col-xs-3\">\n                <a href=\"https://doi.org/10.1109/CVPR.2015.7298698\"><img class=\"img-responsive article-seprates\" src=\"http://www.niebles.net/images/anet_cvpr15b.jpg\"></a>\n              </div>\n              <div class=\"col-md-9 col-xs-9\">\n                <p class=\"name-title\" >ActivityNet</p>\n                <p><a class=\"link-sytle\" href=\"https://doi.org/10.1109/CVPR.2015.7298698\">ActivityNet: A Large-Scale Video Benchmark for Human Activity Understanding</a></p>\n                <p>Authors: Fabian Caba, Victor Escorcia, Bernard Ghanem, Juan Carlos Niebles</p>\n                <p>Venue: IEEE Conference on Computer Vision and Pattern Recognition (CVPR)</p>\n                <span>Location: Boston, USA | Date: June 2015</span>\n                <p>[<a class=\"link-sytle\" href=\"http://activity-net.org/\">Project</a>] [<a class=\"link-sytle\" href=\"https://github.com/activitynet/ActivityNet\">Code</a>] [<a class=\"link-sytle\" href=\"http://activity-net.org/download.html\">Data</a>]</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"col-md-11 col-xs-12\">\n            <div class=\"row top-seprates\">\n              <div class=\"col-md-3 col-xs-3\">\n                <a href=\"https://doi.org/10.1109/CVPR.2015.7299001\"><img class=\"img-responsive article-seprates\" src=\"http://www.niebles.net/images/manhattan.jpg\"></a>\n              </div>\n              <div class=\"col-md-9 col-xs-9\">\n                <p class=\"name-title\" >Robustness to Outliers in Manhattan Frame Estimation</p>\n                <p><a class=\"link-sytle\" href=\"https://doi.org/10.1109/CVPR.2015.7299001\">Robust Manhattan Frame Estimation from a Single RGB-D Image</a></p>\n                <p>Authors: Bernard Ghanem, Ali Thabet, Juan Carlos Niebles, Fabian Caba</p>\n                <p>Venue: IEEE Conference on Computer Vision and Pattern Recognition (CVPR)</p>\n                <span>Location: Boston, USA | Date: June 2015</span>\n                <p>[<a class=\"link-sytle\" href=\"https://ivul.kaust.edu.sa/Pages/Pub-Manhattan-Frame-Estimation-CVPR-2015.aspx\">Project</a>] [<a class=\"link-sytle\" href=\"https://ivul.kaust.edu.sa/Documents/more/code/MFE.zip\">Code</a>] [<a class=\"link-sytle\" href=\"https://ivul.kaust.edu.sa/Documents/Data/Robust%20Manhattan%20Frame%20Estimation%20from%20a%20Single%20RGB-D%20Image.zip\">Data</a>]</p>\n              </div>\n            </div>\n          </li>\n\n          <li class=\"col-md-11 col-xs-12\">\n            <div class=\"row top-seprates\">\n              <div class=\"col-md-3 col-xs-3\">\n                <a href=\"https://doi.org/10.1109/CVPR.2014.109\"><img class=\"img-responsive article-seprates\" src=\"http://www.niebles.net/images/cvpr2014.png\"></a>\n              </div>\n              <div class=\"col-md-9 col-xs-9\">\n                <p class=\"name-title\">Composable Activities</p>\n                <p><a class=\"link-sytle\" href=\"https://doi.org/10.1109/CVPR.2014.109\">Discriminative Hierarchical Modeling of Spatio-Temporally Composable Human Activities</a></p>\n                <p>Authors: Ivan Lillo, Alvaro Soto, Juan Carlos Niebles</p>\n                <p>Venue: IEEE Conference on Computer Vision and Pattern Recognition (CVPR)</p>\n                <span>Location: Columbus, USA | Date: June 2014</span>\n                <p>[<a class=\"link-sytle\" href=\"http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/\">Project</a>] [<a class=\"link-sytle\" href=\"http://ialillo.sitios.ing.uc.cl/ActionsCVPR2014/\">Data</a>] [<a class=\"link-sytle\" href=\"https://www.youtube.com/watch?v=_pdfLrie0_8\">Video</a>]</p>\n              </div>\n            </div>\n          </li>\n\n\n          <li class=\"col-md-11 col-xs-12\">\n            <div class=\"row top-seprates\">\n              <div class=\"col-md-3 col-xs-3\">\n                <a href=\"https://link.springer.com/chapter/10.1007/978-3-642-15552-9_29\" src=\"http://www.niebles.net/images/NieblesChenFei-Fei_ECCV2010_icon.jpg\"></a>\n              </div>\n              <div class=\"col-md-9 col-xs-9\">\n                <p class=\"name-title\">Olympic Sports</p>\n                <p><a class=\"link-sytle\" href=\"https://doi.org/10.1109/CVPR.2014.109\">Modeling Temporal Structure of Decomposable Motion Segments for Activity Classification</a></p>\n                <p>Authors: Juan Carlos Niebles, Chih-Wei Chen and Li Fei-Fei</p>\n                <p>Venue: European Conference on Computer Vision (ECCV)</p>\n                <span>Location: Hersonissos, Crete, Greece | Date: September 2010</span>\n                <p>[<a class=\"link-sytle\" href=\"http://vision.stanford.edu/Datasets/OlympicSports/\">Data</a>] [<a class=\"link-sytle\" href=\"http://vision.stanford.edu/documents/NieblesChenFei-Fei_ECCV2010.zip\">Slides</a>]</p>\n              </div>\n            </div>\n          </li>\n\n\n          <li class=\"col-md-11 col-xs-12\">\n            <div class=\"row top-seprates\">\n              <div class=\"col-md-3 col-xs-3\">\n                <a href=\"https://link.springer.com/chapter/10.1007/978-3-540-88693-8_39\"><img class=\"img-responsive article-seprates\" src=\"http://www.niebles.net/images/eccv08.jpg\"></a>\n              </div>\n              <div class=\"col-md-9 col-xs-9\">\n                <p class=\"name-title\">Moving People</p>\n                <p><a class=\"link-sytle\" href=\"https://link.springer.com/chapter/10.1007/978-3-540-88693-8_39\">Extracting Moving People from Internet Videos</a></p>\n                <p>Authors: Juan Carlos Niebles, Bohyung Han, Andras Ferencz and Li Fei-Fei</p>\n                <p>Venue: European Conference on Computer Vision (ECCV)</p>\n                <span>Location: Marseilles, France | Date: 2008</span>\n                <p>[<a class=\"link-sytle\" href=\"http://vision.stanford.edu/projects/extractingPeople.html\">Project</a>] [<a class=\"link-sytle\" href=\"http://vision.stanford.edu/projects/extractingPeople.html\">Data</a>] [<a class=\"link-sytle\" href=\"http://vision.stanford.edu/projects/extractingPeople/NieblesHanFerenczFei-Fei_ECCV2008_poster.pdf\">Poster</a>]</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"col-md-11 col-xs-12\">\n            <div class=\"row top-seprates\">\n              <div class=\"col-md-3 col-xs-3\">\n                <img class=\"img-responsive article-seprates\" src=\"http://buildingparser.stanford.edu/images/equirect.png\">\n              </div>\n              <div class=\"col-md-9 col-xs-9\">\n                <p class=\"name-title\">The Joint 2D-3D-Semantic (2D-3D-S) Dataset</p>\n                <p>Stanford 2D-3D-Semantics Dataset (2D-3D-S)</p>\n                <p>Authors: Iro Armeni, Alexander Sax, Amir R. Zamir, Silvio Savarese</p>\n                <span>Location: Columbus, USA | Date: June 2014</span>\n                <p>[<a class=\"link-sytle\" href=\"http://3dsemantics.stanford.edu\">Project</a>] [<a class=\"link-sytle\" href=\"https://github.com/alexsax/2D-3D-Semantics\">Data</a>]</p>\n              </div>\n            </div>\n          </li>\n\n          <li class=\"col-md-11 col-xs-12\">\n            <div class=\"row top-seprates\">\n              <div class=\"col-md-3 col-xs-3\">\n                <img class=\"img-responsive article-seprates\" src=\"assets/img/cvpr2014.png\">\n              </div>\n              <div class=\"col-md-9 col-xs-9\">\n                <p class=\"name-title\">ObjectNet3D</p>\n                <p><a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/objectnet3d/ObjectNet3D.png\">Title: ObjectNet3D: A Large Scale Database for 3D Object Recognition</a></p>\n                <p>Authors: Yu Xiang, Wonhui Kim, Wei Chen, Jingwei Ji, Christopher Choy, Hao Su, Roozbeh Mottaghi, Leonidas Guibas, and Silvio Savarese</p>\n                <p>Venue: European Conference on Computer Vision (ECCV)</p>\n                <span>Location: Amsterdam, Netherlands | Date: October, 2016</span>\n                <p>[<a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/objectnet3d/\">Project</a>] [<a class=\"link-sytle\" href=\"https://github.com/yuxng/ObjectNet3D_toolbox\">Code</a>] [<a class=\"link-sytle\" href=\"ftp://cs.stanford.edu/cs/cvgl/ObjectNet3D/ObjectNet3D_images.zip\">Data</a>]</p>\n              </div>\n            </div>\n          </li>\n          \n\n          <li class=\"col-md-11 col-xs-12\">\n            <div class=\"row top-seprates\">\n              <div class=\"col-md-3 col-xs-3\">\n                <a href=\"https://doi.org/10.1109/CVPR.2014.109\"><img class=\"img-responsive article-seprates\" src=\"http://cvgl.stanford.edu/projects/uav_data/hyang.jpg\"></a>\n              </div>\n              <div class=\"col-md-9 col-xs-9\">\n                <p class=\"name-title\">Human Trajectory</p>\n                <p><a class=\"link-sytle\" href=\"https://doi.org/10.1109/CVPR.2014.109\">Stanford Drone Dataset, in Learning Social Etiquette: Human Trajectory Prediction In Crowded Scenes</a></p>\n                <p>Authors: A. Robicquet, A. Sadeghian, A. Alahi, S. Savarese</p>\n                <p>Venue: European Conference on Computer Vision (ECCV)</p>\n                <span>Location: Amsterdam, Netherlands | Date: October, 2016</span>\n                <p>[<a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/uav_data/\">Project</a>] [<a class=\"link-sytle\" href=\"http://vatic2.stanford.edu/stanford_campus_dataset.zip\">Data</a>] [<a class=\"link-sytle\" href=\"https://www.youtube.com/watch?v=c6xQ6iz6wH8\">Video</a>]</p>\n              </div>\n            </div>\n          </li>  \n\n          <li class=\"col-md-11 col-xs-12\">\n            <div class=\"row top-seprates\">\n              <div class=\"col-md-3 col-xs-3\">\n                <a href=\"https://goo.gl/forms/4SoGp4KtH1jfRqEj2\"><img class=\"img-responsive article-seprates\" src=\"#\"></a>\n              </div>\n              <div class=\"col-md-9 col-xs-9\">\n                <p class=\"name-title\">Stanford Large-Scale Indoor Spaces 3D (S3DIS)</p>\n                <p><a class=\"link-sytle\" href=\"https://goo.gl/forms/4SoGp4KtH1jfRqEj2\">3D Semantic Parsing of Large-Scale Indoor Space</a></p>\n                <p>Authors: Iro Armeni, Ozan Sener, Amir R. Zamir, Helen Jiang, Ioannis Brilakis, Martin Fischer and Silvio Savarese</p>\n                <p>Venue: IEEE International Conference on Computer Vision and Pattern Recognition (CVPR)</p>\n                <span>Location: Las Vegas, Nevada | Date: June 2016</span>\n              </div>\n            </div>\n          </li>  \n\n          <li class=\"col-md-11 col-xs-12\">\n            <div class=\"row top-seprates\">\n              <div class=\"col-md-3 col-xs-3\">\n                <img class=\"img-responsive article-seprates\" src=\"http://cvgl.stanford.edu/projects/multiview_tracking/multiview_tracking.png\">\n              </div>\n              <div class=\"col-md-9 col-xs-9\">\n                <p class=\"name-title\">Multiview Tracking dataset</p>\n                <p>Monocular Multiview Object Tracking with 3D Aspect Parts</p>\n                <p>Authors: Yu Xiang*, Changkyu Song*, Roozbeh Mottaghi and Silvio Savarese</p>\n                <p>Venue: European Conference on Computer Vision (ECCV)</p>\n                <span>Location: Zurich, Switzerland | Date: September, 2014</span>\n                <p>[<a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/multiview_tracking\">Project</a>] [<a class=\"link-sytle\" href=\"https://github.com/changkyu/eccv2014_changkyu\">Code</a>] [<a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/data/multiview_tracking_dataset.zip\">Data</a>]</p>\n              </div>\n            </div>\n          </li>                    \n\n          <li class=\"col-md-11 col-xs-12\">\n            <div class=\"row top-seprates\">\n              <div class=\"col-md-3 col-xs-3\">\n                <img class=\"img-responsive article-seprates\" src=\"http://cvgl.stanford.edu/projects/pascal3d+/pascal3d.png\">\n              </div>\n              <div class=\"col-md-9 col-xs-9\">\n                <p class=\"name-title\">PASCAL3D+</p>\n                <p><a class=\"link-sytle\" href=\"https://doi.org/10.1109/CVPR.2014.109\">Beyond PASCAL: A Benchmark for 3D Object Detection in the Wild</a></p>\n                <p>Authors: Yu Xiang, Roozbeh Mottaghi and Silvio Savarese</p>\n                <p>Venue: IEEE Winter Conference on Applications of Computer Vision (WACV)</p>\n                <span>Date: 2014</span>\n                <p>[<a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/pascal3d.html\">Project</a>] [<a class=\"link-sytle\" href=\"ftp://cs.stanford.edu/cs/cvgl/PASCAL3D+_release1.1.zip\">Data</a>] [<a class=\"link-sytle\" href=\"https://www.youtube.com/watch?v=5Yeus0x6fo0\">Video</a>]</p>\n              </div>\n            </div>\n          </li>  \n\n          <li class=\"col-md-11 col-xs-12\">\n            <div class=\"row top-seprates\">\n              <div class=\"col-md-3 col-xs-3\">\n                <a href=\"https://doi.org/10.1109/CVPR.2014.109\"><img class=\"img-responsive article-seprates\" src=\"http://vhosts.eecs.umich.edu/vision//projects/ssfm/figures/main_figure_webpage.jpg\"></a>\n              </div>\n              <div class=\"col-md-9 col-xs-9\">\n                <p class=\"name-title\">Semantic Structure From Motion</p>\n                <p>Semantic Structure from Motion with Points, Regions, and Objects</p>\n                <p>Authors: Sid Yingze Bao, Mohit Bagra, Yu-Wei Chao, and Silvio Savarese</p>\n                <p>Venue: IEEE Conference on Computer Vision and Pattern Recognition (CVPR)</p>\n                <span>Location: Providence, RI, USA | Date: June 2012</span>\n                <p>[<a class=\"link-sytle\" href=\"http://www.eecs.umich.edu/vision/projects/ssfm/index.html\">Project</a>] [<a class=\"link-sytle\" href=\"https://www.youtube.com/watch?v=bG5SZOzVis8\">Video</a>]</p>\n              </div>\n            </div>\n          </li>  \n\n\n          <li class=\"col-md-11 col-xs-12\">\n            <div class=\"row top-seprates\">\n              <div class=\"col-md-3 col-xs-3\">\n                <img class=\"img-responsive article-seprates\" src=\"#\">\n              </div>\n              <div class=\"col-md-9 col-xs-9\">\n                <p class=\"name-title\">3D Object Dataset</p>\n                <p><a class=\"link-sytle\" href=\"https://doi.org/10.1109/CVPR.2014.109\">The 3D Object Dataset</a></p>\n                <span>Location: Columbus, USA | Date: June 2014</span>\n                <p>[<a class=\"link-sytle\" href=\"\">Data</a>]</p>\n              </div>\n            </div>\n          </li>  \n          <li class=\"col-md-11 col-xs-12\">\n            <div class=\"row top-seprates\">\n              <div class=\"col-md-3 col-xs-3\">\n                <img class=\"img-responsive article-seprates\" src=\"http://cvgl.stanford.edu/projects/collective/images/exwait.jpg\">\n              </div>\n              <div class=\"col-md-9 col-xs-9\">\n                <p class=\"name-title\">Collective Activity</p>\n                <p><a class=\"link-sytle\" href=\"https://doi.org/10.1109/CVPR.2014.109\">Collective Activity Classification Using Spatio-Temporal Relationship Among People</a></p>\n                <p>Authors: Wongun Choi, Khuram Shahid, Silvio Savarese</p>\n                <p>Venue: 9th International Workshop on Visual Surveillance (VSWS09) in conjuction with ICCV</p>\n                <span>Location: Kyoto, Japan | Date: 2009</span>\n                <p>[<a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/projects/collective/collectiveActivity.html\">Project</a>] [<a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/data/ActivityDataset.zip\">Data</a>]</p>\n              </div>\n            </div>\n          </li>  \n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/resources/resources.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResourcesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ResourcesComponent = (function () {
    function ResourcesComponent() {
    }
    return ResourcesComponent;
}());
ResourcesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/resources/resources.component.html")
    })
], ResourcesComponent);

//# sourceMappingURL=resources.component.js.map

/***/ }),

/***/ "../../../../../src/app/teaching/teaching.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg-color-sky-light section-seperator\">\n  <div class=\"content container\">\n    <div class=\"row\">\n      <div id=\"sidebar\" class=\"sidebar-wrap col-md-4 col-xs-10 sm-margin-b-30\">\n        <div class=\"sidebar\">\n          <ul class=\"sidebar list-unstyled sidenav-position\">\n            <li class=\"side-nav\"><a [routerLink]=\"['/teaching']\" fragment=\"SilvioClass\" (click)=\"onAnchorClick()\">Silvio Savarese's Courses</a></li>\n            <li class=\"side-nav\"><a [routerLink]=\"['/teaching']\" fragment=\"Fei-FeiClass\" (click)=\"onAnchorClick()\">Fei-Fei Li’s Courses</a></li>  \n            <li class=\"side-nav\"><a [routerLink]=\"['/teaching']\" fragment=\"JuanClass\" (click)=\"onAnchorClick()\">Juan Carlos Niebles's Courses</a></li>\n          </ul>\n        </div>\n      </div>\n\n      <div id=\"content\" class=\"content col-md-8 col-xs-12 sm-margin-b-30\">\n        <div class=\"row\"><h2 id=\"SilvioClass\">Silvio Savarese's Courses</h2></div>\n        <div class=\"row list-unstyled\">\n          <table class=\"bigger-padding\">\n            <tr>\n              <td><div align=\"left\">Autumn, 2017-18 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://web.stanford.edu/class/cs331b/\">CS 331B: Representation Learning in Computer Vision</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Winter, 2017-18 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://web.stanford.edu/class/cs231a/\">CS 231A: Computer Vision: From 3D Reconstruction to Recognition</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Spring, 2016-17 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://cs331b.stanford.edu/\">CS 331B: Representation Learning in Computer Vision</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Spring, 2015-16 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://cs231a.stanford.edu/\">CS 231A: Mobile Computer Vision</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Winter, 2013-14 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/teaching/cs231a_winter1415/\">CS 231A: Introduction to Computer Vision</a>\n              </td>\n            </tr>\n\n\n            <tr>\n              <td><div align=\"left\">Spring, 2013-14 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://web.stanford.edu/class/cs231m\">CS 231M: Mobile Computer Vision</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Winter, 2013-14 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://cvgl.stanford.edu/teaching/cs231a_winter1314/\">CS 231A: Introduction to Computer Vision</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Autumn, 2013-14 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://www.stanford.edu/class/archive/cs/cs331b/cs331b.1142/cgi-bin/mediawiki/index.php/Main_Page\">CS 331B: Advanced Reading in Computer Vision: 3D Representation and Recognition</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Winter, 2013-14 (Michigan)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://www.eecs.umich.edu/courses/eecs598.007\">EECS 598: Special Topics in Computer Vision</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Fall, 2011-12 (Michigan)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://www.eecs.umich.edu/vision/teaching/EECS442_2011/eecs442.html\">EECS 442: Computer Vision</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Fall, 2010-11 (Michigan)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://web.eecs.umich.edu/~silvio/teaching/EECS598_2010/eecs598.html\">EECS 598: Advanced Topics in Mobile Computer Vision</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Fall, 2010-11 (Michigan)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://web.eecs.umich.edu/~silvio/teaching/EECS442_2010/eecs442.html\">EECS 442: Computer Vision</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Winter, 2010 (Michigan)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://web.eecs.umich.edu/~silvio/teaching/EECS556_2009/eecs556.html\">EECS 556: Image Processing</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Fall, 2009-10 (Michigan)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://web.eecs.umich.edu/~silvio/teaching/EECS442_2009/eecs442.html\">EECS 442: Computer Vision</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Winter, 2009-10 (Michigan)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://web.eecs.umich.edu/~silvio/teaching/EECS598/eecs598.html\">EECS 598: Special Topics in Computer Vision</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Fall, 2008-09 (Michigan)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://web.eecs.umich.edu/~silvio/teaching/eecs442.html\">EECS 442: Computer Vision</a>\n              </td>\n            </tr>\n          </table>\n        </div>\n        <!-- End of Silvio's -->   \n\n\n        <!-- Fei-Fei's -->  \n        <div class=\"row\"><h2 class=\"top-seprates jumptarget\" id=\"Fei-FeiClass\">Fei-Fei Li’s Courses</h2></div>\n        <div class=\"row list-unstyled\">\n          <table class=\"bigger-padding\">\n            <tr>\n              <td><div align=\"left\">Spring, 2016-17 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs231n/2017\">CS231n: Convolutional Neural Networks for Visual Recognition</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Fall, 2016-17 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs131_fall1617/index.html\">CS131: Computer Vision: Foundations and Applications</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Winter, 2015-16 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://cs231n.stanford.edu/2016\">CS231n: Convolutional Neural Networks for Visual Recognition</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Fall, 2015-16 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs131_fall1516/index.html\">CS131: Computer Vision: Foundations and Applications</a></td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Spring, 2014-15 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs231b_spring1415/\">CS231B: The Cutting Edge of Computer Vision</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Winter, 2014-15 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs231n/2015\">CS231n: Convolutional Neural Networks for Visual Recognition</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Fall, 2014-15 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs131_fall1415/index.html\">CS131: Computer Vision: Foundations and Applications\n              </a></td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Spring, 2013-14 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td ><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs431_spring1314/\">CS431: High-level Vision: Behaviors, Neurons and Computational Models\n              </a></td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Winter, 2013-14 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs331_winter14/\">CS331: Advanced Reading in Computer Vision\n              </a></td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Fall, 2013-14 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs131_fall1314/\">CS131: Computer Vision: Foundations and Applications\n              </a></td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Spring, 2012-13 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs231b_spring1213/\">CS231B: The Cutting Edge of Computer Vision\n              </a></td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Autumn, 2012-13 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs231a_autumn1213/\">CS231A: Introduction to Computer Vision\n              </a></td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Autumn, 2012-13 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs331_fall12/\">CS331: Advanced Reading in Computer Vision\n              </a></td>\n            </tr>\n            <tr>\n              <td><div align=\"left\">Autumn, 2011-12 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs231a_autumn1112/\">CS231A: Introduction to Computer Vision\n              </a></td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Spring, 2010-11 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs223c_spring1011/\">CS223C: The Cutting Edge of Computer Vision\n              </a></td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Winter, 2010-11 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs223b/\">CS223B: Introduction to Computer Vision\n              </a></td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Winter, 2009-10 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs423_spring0910/\">CS423: High-level Vision: Behaviors, Neurons and Computational Models\n              </a></td>\n            </tr>\n            <tr>\n              <td><div align=\"left\">Spring, 2009-10 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs223b_winter0910/\">CS223B: Introduction to Computer Vision\n              </a></td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">ICCV 2009 short course </div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://people.csail.mit.edu/torralba/shortCourseRLOC/index.html\">Recognizing and Learning Object Categories: Year 2009</a></td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Fall, 2009-10 (Stanford)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs323_fall09/\">CS323: Recognizing and Learning High-Level Visual Concepts\n              </a></td>\n            </tr>\n\n\n            <tr>\n              <td><div align=\"left\">VLPR 2009 (Beijing)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/VLPR2009/\">Summer School in Vision, Learning and Pattern Recognition</a></td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Fall, 2008-09 (Princeton)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://www.cs.princeton.edu/courses/archive/fall08/cos429/\">COS 429: Computer Vision</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Spring, 2007-08 (Princeton)</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://www.cs.princeton.edu/courses/archive/spring08/cos598B/\">COS 598b/PSY 594: From Neuronal Mechanisms to Computational Models</a></td>\n            </tr>\n            <tr>\n              <td><div align=\"left\">Fall, 2007-08 (Princeton)</div></td>\n              <td></td>\n              <td>\n                <a class=\"link-sytle\" href=\"http://www.cs.princeton.edu/courses/archive/fall07/cos429/index.html\">COS 429: Computer Vision</a>\n              </td>\n            </tr>\n            <tr>\n              <td><div align=\"left\">CVPR 2007 short course</div></td>\n              <td></td>\n              <td><a class=\"link-sytle\" href=\"http://people.csail.mit.edu/torralba/shortCourseRLOC/index.html\">Recognizing and Learning Object Categories: Year 2007</a></td>\n            </tr>\n            <tr>\n              <td><div align=\"left\">ICVSS 2007</div></td>\n              <td></td>\n              <td><a class=\"link-sytle\" href=\"documents/Fei-Fei_ICVSS07_ObjectRecognition_web.pdf\">Computer Vision summer school: Object Recognition </a></td>\n            </tr>\n            <tr>\n              <td><div align=\"left\">Spring, 2007 (Princeton)</div></td>\n              <td></td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/cs598_spring07/\">COS 598D: High-Level Recognition in Computer Vision</a></td>\n            </tr>\n            <tr>\n              <td><div align=\"left\">Fall, 2006-07 (UIUC)</div></td>\n              <td></td>\n              <td><a class=\"link-sytle\" href=\"http://courses.ece.uiuc.edu/ece549/\">ECE 549: Computer Vision</a></td>\n            </tr>\n            <tr>\n              <td><div align=\"left\"><a href=\"http://research.microsoft.com/iccv2005/\">ICCV 2005</a> short course</div></td>\n              <td></td>\n              <td><a class=\"link-sytle\" href=\"http://people.csail.mit.edu/torralba/shortCourseRLOC/index.html\">Recognizing and Learning Object Categories</a></td>\n            </tr>\n            <tr>\n              <td><div align=\"left\">Fall, 2005-06 (UIUC)</div></td>\n              <td></td>\n              <td><a class=\"link-sytle\" href=\"http://courses.ece.uiuc.edu/ece598/ffl/\">ECE 598FL: Readings in Computer Vision and Learning</a></td>\n            </tr>\n          </table>\n        </div>\n        <!-- End of Fei-Fei -->  \n\n        <!-- carlos classes -->  \n        <div class=\"row\"><h2 class=\"top-seprates jumptarget\" id=\"JuanClass\">Juan Carlos Niebles' Courses</h2></div>\n        <div class=\"row list-unstyled\">\n          <table class=\"bigger-padding\">\n            <tr>\n              <td><div align=\"left\">Autumn, 2017-18</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs131_fall1718/cs231n/2017\">CS 131: Computer Vision: Foundations and Applications</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Autumn, 2016-17</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs131_fall1617/\">CS 131: Computer Vision: Foundations and Applications</a>\n              </td>\n            </tr>\n\n            <tr>\n              <td><div align=\"left\">Autumn, 2015-16</div></td>\n              <td>&nbsp;</td>\n              <td><a class=\"link-sytle\" href=\"http://vision.stanford.edu/teaching/cs131_fall1516/\">CS 131: Computer Vision: Foundations and Applications</a>\n              </td>\n            </tr>\n            <!-- End of Carlos -->  \n          </table>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/teaching/teaching.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeachingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeachingComponent = (function () {
    function TeachingComponent(route) {
        this.route = route;
    }
    TeachingComponent.prototype.onAnchorClick = function () {
        this.route.fragment.subscribe(function (f) {
            var element = document.querySelector("#" + f);
            if (element) {
                element.scrollIntoView(element);
                var top = element.offsetTop;
                window.scrollTo(0, top);
            }
        });
    };
    return TeachingComponent;
}());
TeachingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/teaching/teaching.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object])
], TeachingComponent);

var _a;
//# sourceMappingURL=teaching.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");


//import { platformBrowser } from '@angular/platform-browser';

//import { AppModuleNgFactory } from './app/app.module.ngFactory';

if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map