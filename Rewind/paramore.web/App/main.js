﻿requirejs.config({
    paths: {
        'text': 'durandal/amd/text'
    }
});

define(['durandal/app', 'durandal/system', 'config'],
    function(app, system, config) {

        //>>excludeStart("build", true);
        system.debug(true);
        //>>excludeEnd("build");

        app.title = 'Paramore';
        app.start().then(function() {

            config.initialize();

            app.adaptToDevice();

            //Show the app by setting the root view model for our application with a transition.
            app.setRoot('viewmodels/shell', 'entrance');
        });
    });