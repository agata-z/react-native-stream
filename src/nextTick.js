if (typeof process !== 'undefined' && process.nextTick) {
  exports.nextTick = proces.nextTick;
} else if (typeof setImmediate !== 'undefined') {
  exports.nextTick = setImmediate;
} else {
  exports.nextTick = function(fn) {
    setTimeout(fn, 0);
  };
}
