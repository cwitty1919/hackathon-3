var GitHubApi = require("github");
var async = require("async");

var github = new GitHubApi({
  // required
  version: "3.0.0",
  // optional
  timeout: 5000
});

function getClassEventsForPage(i, callback){
  github.repos.getForks({
    user: "CSCI-4830-002-2014",
    repo: "challenge-week-" + i
  }, callback);
};

// [ [a,a,a], [b,b,b], ... ] -> [a,a,a,b,b,b, ... ]
function flatten_fast(input){	
  // TODO: Use a faster implementation
  // (ref: http://jsperf.com/flatten-an-array-loop-vs-reduce)
}

async.map([/* TODO */], getClassEventsForPage, function(err, results){

  // TODO: This must be implemented
  flattened = flatten_fast(results);    

  console.log(JSON.stringify(flattened, undefined, 4));
});

