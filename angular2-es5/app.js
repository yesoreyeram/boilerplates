(function () {
    // Create Component
    var AppComponent = ng.core
        .Component({
            selector: "my-app",
            template: "Hello World!"
        })
        .Class({
            constructor: function () { }
        });

    // Create Module
    var AppModule = ng.core
        .NgModule({
            imports: [ng.platformBrowser.BrowserModule],
            declarations: [AppComponent],
            bootstrap: [AppComponent]
        })
        .Class({
            constructor: function () { }
        });

    // Bootstrap Module
    ng.platformBrowserDynamic
        .platformBrowserDynamic()
        .bootstrapModule(AppModule)
})();