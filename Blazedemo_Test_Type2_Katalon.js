/**
 * Script Name: {katalon}
 * 
 * Generated using  New Relic Synthetics Formatter for Katalon
 *
 * Feel free to explore, or check out the full documentation
 * https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers
 * for details.
 */

/** CONFIGURATIONS **/

// Theshold for duration of entire script - fails test if script lasts longer than X (in ms)
var ScriptTimeout = 180000;
// Script-wide timeout for all wait and waitAndFind functions (in ms)
var DefaultTimeout = 30000;
// Change to any User Agent you want to use.
// Leave as "default" or empty to use the Synthetics default.
var UserAgent = "default";

/** HELPER VARIABLES AND FUNCTIONS **/

const assert = require('assert'),
	By = $driver.By,
	browser = $browser.manage()
/** BEGINNING OF SCRIPT **/

console.log('Starting synthetics script: {katalon}');
console.log('Default timeout is set to ' + (DefaultTimeout/1000) + ' seconds');

// Setting User Agent is not then-able, so we do this first (if defined and not default)
if (UserAgent && (0 !== UserAgent.trim().length) && (UserAgent != 'default')) {
  $browser.addHeader('User-Agent', UserAgent);
  console.log('Setting User-Agent to ' + UserAgent);
}

// Get browser capabilities and do nothing with it, so that we start with a then-able command
$browser.getCapabilities().then(function () { })
	.then(() => {
            logger.log(1, "https://blazedemo.com/");
            return $browser.get("https://blazedemo.com/");
        })
	.then(() => {
            logger.log(2, "clickElement name=fromPort");
            return $browser.waitForAndFindElement(By.name("fromPort"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
	.then(() => {
            let valueString = ("label=San Diego").split("=", 2);
            logger.log(3, "select option "+valueString[1]+" from dropdown list name=fromPort");
            return $browser.waitForAndFindElement(By.name("fromPort"), DefaultTimeout)
                .then(function(selectElement){
                    return selectElement.findElement(By.xpath('//option[.="'+valueString[1]+'"]'))
                        .then(function(el){
                            el.isSelected().then(function(bool) {if (!bool) { el.click();}})
                        })
                })
        })
	.then(() => {
            logger.log(4, "clickElement name=toPort");
            return $browser.waitForAndFindElement(By.name("toPort"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
	.then(() => {
            let valueString = ("label=Berlin").split("=", 2);
            logger.log(5, "select option "+valueString[1]+" from dropdown list name=toPort");
            return $browser.waitForAndFindElement(By.name("toPort"), DefaultTimeout)
                .then(function(selectElement){
                    return selectElement.findElement(By.xpath('//option[.="'+valueString[1]+'"]'))
                        .then(function(el){
                            el.isSelected().then(function(bool) {if (!bool) { el.click();}})
                        })
                })
        })
	.then(() => {
            logger.log(6, "clickElement xpath=//input[@value=\'Find Flights\']");
            return $browser.waitForAndFindElement(By.xpath("//input[@value='Find Flights']"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
	.then(() => {
            logger.log(7, "clickElement xpath=//tr[3]/td/input");
            return $browser.waitForAndFindElement(By.xpath("//tr[3]/td/input"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
	.then(() => {
            logger.log(8, "clickElement id=inputName");
            return $browser.waitForAndFindElement(By.id("inputName"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
	.then(() => {
            logger.log(9, "type test");
            return $browser.waitForAndFindElement(By.id("inputName"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('test');
                })
        })
	.then(() => {
            logger.log(10, "clickElement id=address");
            return $browser.waitForAndFindElement(By.id("address"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
	.then(() => {
            logger.log(11, "type test");
            return $browser.waitForAndFindElement(By.id("address"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('test');
                })
        })
	.then(() => {
            logger.log(12, "clickElement id=city");
            return $browser.waitForAndFindElement(By.id("city"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
	.then(() => {
            logger.log(13, "type test");
            return $browser.waitForAndFindElement(By.id("city"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('test');
                })
        })
	.then(() => {
            logger.log(14, "clickElement id=state");
            return $browser.waitForAndFindElement(By.id("state"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
	.then(() => {
            logger.log(15, "type test");
            return $browser.waitForAndFindElement(By.id("state"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('test');
                })
        })
	.then(() => {
            logger.log(16, "clickElement id=zipCode");
            return $browser.waitForAndFindElement(By.id("zipCode"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
	.then(() => {
            logger.log(17, "type 12345");
            return $browser.waitForAndFindElement(By.id("zipCode"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('12345');
                })
        })
	.then(() => {
            logger.log(18, "clickElement id=creditCardNumber");
            return $browser.waitForAndFindElement(By.id("creditCardNumber"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
	.then(() => {
            logger.log(19, "type 444433332222");
            return $browser.waitForAndFindElement(By.id("creditCardNumber"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('444433332222');
                })
        })
	.then(() => {
            logger.log(20, "clickElement id=nameOnCard");
            return $browser.waitForAndFindElement(By.id("nameOnCard"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
	.then(() => {
            logger.log(21, "type test");
            return $browser.waitForAndFindElement(By.id("nameOnCard"), DefaultTimeout)
                .then(function (el) {
                    el.clear();
                    el.sendKeys('test');
                })
        })
	.then(() => {
            logger.log(22, "clickElement xpath=(.//*[normalize-space(text()) and normalize-space(.)=\'Credit Card Number\'])[1]/following::div[2]");
            return $browser.waitForAndFindElement(By.xpath("(.//*[normalize-space(text()) and normalize-space(.)='Credit Card Number'])[1]/following::div[2]"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
	.then(() => {
            logger.log(23, "clickElement xpath=//input[@value=\'Purchase Flight\']");
            return $browser.waitForAndFindElement(By.xpath("//input[@value='Purchase Flight']"), DefaultTimeout)
                .then(function (el) {
                    el.click();
                })
        })
	.then(function() {
		logger.end();
		console.log('Browser script execution SUCCEEDED.');
	}, function(err) {
		logger.end();
		console.log ('Browser script execution FAILED.');
		throw(err);
	});


//** Export Functions
const logger=(function (timeout=3000, mode='production') {

    var startTime = Date.now(),
        stepStartTime = Date.now(),
        prevMsg = '',
        prevStep = 0;


    if (typeof $util == 'undefined'  ){
        $util = {
            insights: {
                set: (msg) => {
                    console.log(`dryRun: sending to Insights using ${msg}`)
                }
            }
        }

    }

    function log(thisStep, thisMsg) {

        if (thisStep > prevStep && prevStep != 0) {
            end()
        }

        stepStartTime = Date.now() - startTime;

        if (mode != "production") {
            stepStartTime = 0

        }

        console.log(`Step ${thisStep}: ${thisMsg} STARTED at ${stepStartTime}ms.`);

        prevMsg = thisMsg;
        prevStep = thisStep;

    }

    function end() {
        var totalTimeElapsed = Date.now() - startTime;
        var prevStepTimeElapsed = totalTimeElapsed - stepStartTime;

        if (mode != 'production') {
            prevStepTimeElapsed = 0
            totalTimeElapsed = 0
        }

        console.log(`Step ${prevStep}: ${prevMsg} FINISHED. It took ${prevStepTimeElapsed}ms to complete.`);

        $util.insights.set(`Step ${prevStep}: ${prevMsg}`, prevStepTimeElapsed);
        if (timeout > 0 && totalTimeElapsed > timeout) {
            throw new Error('Script timed out. ' + totalTimeElapsed + 'ms is longer than script timeout threshold of ' + timeout + 'ms.');
        }
    }

    return {
        log,
        end
    }
})(ScriptTimeout)
