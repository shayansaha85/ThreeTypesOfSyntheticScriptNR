// Generated by Selenium IDE
// New Relic Synthetics Formatter for Selenium IDE
// Feel free to explore, or check out the full documentation
// https://docs.newrelic.com/docs/synthetics/new-relic-synthetics/scripting-monitors/writing-scripted-browsers
// for details


  const assert = require("assert");
  const urlRequest = require("urllib").request;
  // Theshold for duration of entire script - fails test if script lasts longer than X (in ms)
  // Script-wide timeout for all wait and waitAndFind functions (in ms)
  var DefaultTimeout = 30000;
  // Change to any User Agent you want to use.
  // Leave as "default" or empty to use the Synthetics default.
  var UserAgent = "default";
  const By = $driver.By;
  const browser = $browser.manage();
  var vars = new Map();
  const logger = function({timeout:e=18e4,stepLogging:t=!1,insightsKey:n=""}){const r=Date.now();var s=0,o="",i=0,a=0;function l({step:e=0,msg:t="",duration:r=0,eventType:s="SyntheticsCustom",custom:o={}}){if(void 0===n||""==n)return;var i={method:"POST",headers:{"X-Insert-Key":n,"Content-Type":"application/json"},data:{eventType:s,step:e,message:t,duration:r,JOB_ID:$env.JOB_ID,MONITOR_ID:$env.MONITOR_ID,ACCOUNT_ID:$env.ACCOUNT_ID,LOCATION:$env.LOCATION,PROXY_HOST:$env.PROXY_HOST,PROXY_PORT:$env.PROXY_PORT},dataType:"text"};const a=`https://insights-collector.newrelic.com/v1/accounts/${$env.ACCOUNT_ID}/events`;i.data=Object.assign({},i.data,o),urlRequest(a,i)}function c(e,t,n=""){e>a&&0!=a&&_({testCase:n});let i=`Step ${e}: ${t} STARTED at ${s=Date.now()-r}ms. testCase=${n}`;console.log(i),o=t,a=e}function _({testCase:i=""}){var c=Date.now()-r,_=c-s;if(console.log(`Step ${a}: ${o} FINISHED. It took ${_}ms to complete. testCase=${i}`),t&&n.length>0?l({step:a,msg:o,duration:_,custom:{testCase:i}}):t&&$util.insights.set(`Step ${a}: ${o}`,_),e>0&&c>e)throw new Error("Script timed out. "+c+"ms is longer than script timeout threshold of "+e+"ms.")}return{logStep:function(e){c(i++,e)},log:c,getStep:function(){return i},end:_,endTestCase:function(e=""){var i=Date.now()-r-s;console.log(`Step ${a}: ${o} FINISHED. It took ${i}ms to complete.`),t&&n.length>0?l({step:a,msg:o,duration:i,custom:{testCase:e}}):t&&$util.insights.set(`Step ${a}: ${o}`,i),$util.insights.set("testCase",e),$util.insights.set("testCaseStatus","Pass"),t&&n.length>0&&l({eventType:"SyntheticsTests",custom:{testCase:e,testCaseStatus:"Pass"}})},error:function(e,r=""){console.log(`Error in Step ${a}: ${o}`),$util.insights.set("errorStep",""+a),$util.insights.set("errorMsg",e.message),$util.insights.set("errorLineNumber",e.lineNumber),$util.insights.set("testCase",r),$util.insights.set("testCaseStatus","fail"),t&&n.length>0&&l({eventType:"SyntheticsTests",custom:{testCase:r,testCaseStatus:"Fail"}})},postInsights:l}}({})
  $browser.getCapabilities().then(function () { })
  // Test Case: BlazedemoTest  
  .then(function (){
  	return Promise.resolve(true)
  
    .then( function(){return logger.log(1,"Open URL https://blazedemo.com/","BlazedemoTest"),$browser.get("https://blazedemo.com/").then(e=>e)})
    .then( function(){return logger.log(2,"Set Window Size Width=945 Height=1012","BlazedemoTest"),$browser.manage().window().setSize(945,1012).then(e=>e)})
    .then( function(){return logger.log(3,"Click By.name(\"fromPort\")","BlazedemoTest"),$browser.waitForAndFindElement(By.name("fromPort"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(4,"Select By.name(\"fromPort\")","BlazedemoTest"),$browser.waitForAndFindElement(By.name("fromPort"),DefaultTimeout).then((function(e){return e.click(),logger.log(5,"Select By.xpath(\"//option[. = \'Boston\']\")","BlazedemoTest"),$browser.waitForAndFindElement(By.xpath("//option[. = 'Boston']"),DefaultTimeout).then((function(e){return e.click(),Promise.resolve(!0)}))}))})
    .then( function(){return logger.log(6,"Click By.name(\"toPort\")","BlazedemoTest"),$browser.waitForAndFindElement(By.name("toPort"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(7,"Select By.name(\"toPort\")","BlazedemoTest"),$browser.waitForAndFindElement(By.name("toPort"),DefaultTimeout).then((function(e){return e.click(),logger.log(8,"Select By.xpath(\"//option[. = \'Berlin\']\")","BlazedemoTest"),$browser.waitForAndFindElement(By.xpath("//option[. = 'Berlin']"),DefaultTimeout).then((function(e){return e.click(),Promise.resolve(!0)}))}))})
    .then( function(){return logger.log(9,"Click By.css(\".btn-primary\")","BlazedemoTest"),$browser.waitForAndFindElement(By.css(".btn-primary"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(10,"Click By.css(\"tr:nth-child(3) .btn\")","BlazedemoTest"),$browser.waitForAndFindElement(By.css("tr:nth-child(3) .btn"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(11,"Click By.id(\"inputName\")","BlazedemoTest"),$browser.waitForAndFindElement(By.id("inputName"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(12,"Type \"test\" using locator By.id(\"inputName\")","BlazedemoTest"),$browser.waitForAndFindElement(By.id("inputName"),DefaultTimeout).then(e=>(e.sendKeys("test"),Promise.resolve(!0)))})
    .then( function(){return logger.log(13,"Click By.id(\"address\")","BlazedemoTest"),$browser.waitForAndFindElement(By.id("address"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(14,"Type \"test\" using locator By.id(\"address\")","BlazedemoTest"),$browser.waitForAndFindElement(By.id("address"),DefaultTimeout).then(e=>(e.sendKeys("test"),Promise.resolve(!0)))})
    .then( function(){return logger.log(15,"Click By.id(\"city\")","BlazedemoTest"),$browser.waitForAndFindElement(By.id("city"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(16,"Type \"test\" using locator By.id(\"city\")","BlazedemoTest"),$browser.waitForAndFindElement(By.id("city"),DefaultTimeout).then(e=>(e.sendKeys("test"),Promise.resolve(!0)))})
    .then( function(){return logger.log(17,"Click By.id(\"state\")","BlazedemoTest"),$browser.waitForAndFindElement(By.id("state"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(18,"Type \"test\" using locator By.id(\"state\")","BlazedemoTest"),$browser.waitForAndFindElement(By.id("state"),DefaultTimeout).then(e=>(e.sendKeys("test"),Promise.resolve(!0)))})
    .then( function(){return logger.log(19,"Click By.id(\"zipCode\")","BlazedemoTest"),$browser.waitForAndFindElement(By.id("zipCode"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(20,"Type \"12345\" using locator By.id(\"zipCode\")","BlazedemoTest"),$browser.waitForAndFindElement(By.id("zipCode"),DefaultTimeout).then(e=>(e.sendKeys("12345"),Promise.resolve(!0)))})
    .then( function(){return logger.log(21,"Click By.id(\"creditCardNumber\")","BlazedemoTest"),$browser.waitForAndFindElement(By.id("creditCardNumber"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(22,"Type \"3333444455556666\" using locator By.id(\"creditCardNumber\")","BlazedemoTest"),$browser.waitForAndFindElement(By.id("creditCardNumber"),DefaultTimeout).then(e=>(e.sendKeys("3333444455556666"),Promise.resolve(!0)))})
    .then( function(){return logger.log(23,"Click By.id(\"nameOnCard\")","BlazedemoTest"),$browser.waitForAndFindElement(By.id("nameOnCard"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
    .then( function(){return logger.log(24,"Type \"test\" using locator By.id(\"nameOnCard\")","BlazedemoTest"),$browser.waitForAndFindElement(By.id("nameOnCard"),DefaultTimeout).then(e=>(e.sendKeys("test"),Promise.resolve(!0)))})
    .then( function(){return logger.log(25,"Click By.css(\".btn-primary\")","BlazedemoTest"),$browser.waitForAndFindElement(By.css(".btn-primary"),DefaultTimeout).then(e=>(e.click(),Promise.resolve(!0)))})
  	.then(function() {
  		logger.endTestCase("BlazedemoTest");
  	}, function(err) {
  		logger.error (err, "BlazedemoTest");
  		throw(err);
  	});
  
  })
  