var _id = "mmir-plugin-encoder-amr";
var _paths = {
  "mmir-plugin-encoder-amr/amrnb": "www/amrnb.js",
  "mmir-plugin-encoder-amr/amrnb.min": "www/amrnb.min.js",
  "mmir-plugin-encoder-amr/workers/amrEncoder": "www/webworker/amrEncoder.js",
  "mmir-plugin-encoder-amr": "www/webworker/amrEncoder.js"
};
var _workers = [
  "mmir-plugin-encoder-amr/workers/amrEncoder"
];
var _exportedModules = [
  "mmir-plugin-encoder-amr"
];
var _dependencies = [
  "mmir-plugin-encoder-core"
];
function _join(source, target, dict){
  source.forEach(function(item){
    if(!dict[item]){
      dict[item] = true;
      target.push(item);
    }
  });
};
function _getAll(type, isResolve){

  var data = this[type];
  var isArray = Array.isArray(data);
  var result = isArray? [] : Object.assign({}, data);
  var dupl = result;
  if(isArray){
    dupl = {};
    _join(data, result, dupl);
  } else if(isResolve){
    var root = __dirname;
    Object.keys(result).forEach(function(field){
      result[field] = root + '/' + result[field];
    });
  }
  this.dependencies.forEach(function(dep){
    var depExports = require(dep + '/module-ids.js');
    var depData = depExports.getAll(type, isResolve);
    if(isArray){
      _join(depData, result, dupl);
    } else {
      Object.assign(result, depData)
    }
  });

  return result;
};
module.exports = {id: _id, paths: _paths, workers: _workers, modules: _exportedModules, dependencies: _dependencies, getAll: _getAll};
