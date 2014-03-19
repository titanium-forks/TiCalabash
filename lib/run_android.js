/*jslint node: true */
'use strict';

var exec = require('./exec'),
    path = require('path'),
    defaultKeystore = {
        keystore_location: '',
        keystore_password: 'tirocks',
        keystore_alias: 'tidev'
    },
    customKeystore;

/**
 * Runs the build command
 * @param {Object} logger - The logger instance
 * @param {Object} config - The CLI config object
 * @param {CLI} cli - The CLI instance
 * @param {Function} finished - Callback when the command finishes
 */
module.exports = function(logger, config, cli, projectDir, finished) {
    if (!process.env.ANDROID_HOME) {
        throw 'Calabash requires that the env variable ANDROID_HOME be set to the path of your android SDK. We cant find ANDROID_HOME in your enviorment...';
    }

    var passthroughCommands = ['build'].concat(cli.argv['$_'].slice(3)),
        apkPath = path.join(projectDir, 'build', 'android', 'bin'),
        keystoreLocation = (cli.argv.keystore_location || cli.argv.K),
        keystorePass = (cli.argv.password || cli.argv.P),
        keystoreAlias = (cli.argv.alias || cli.argv.A);

    defaultKeystore.keystore_location = path.join(cli.sdk.path, 'android', 'dev_keystore');

    if (keystoreLocation) {
        customKeystore = {
            keystore_location: keystoreLocation,
            keystore_password: keystorePass,
            keystore_alias: keystoreAlias
        };
    }

    // Get build/android/bin
    console.log(cli);
    //if()

    console.info("yes. it is android alright");


    /**
		#do a clean first then build and run calabash-ios setup
		cd build/iphone && calabash-ios setup

		rm -fR features #relative to build/iphone
		ln -s ../../features features

		xcodebuild -project alloy_fugitive.xcodeproj -configuration Debug -target alloy_fugitive-cal  -sdk iphonesimulator
		****/



    // pass through the command args to Ti `build` commands
    // exec('ti', passthroughCommands, null, function(output) {

    //     console.info(output);
    // });



};