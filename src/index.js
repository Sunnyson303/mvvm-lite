var objProto = Object.prototype

function isArray(arr) {
  return Array.isArray(arr)
}

function isObj(obj) {
  // return objProto.toString.call(obj) === '[object object]'
  return typeof obj === 'object'
}

function MVVM(obj, options) {

  if (isObj) {
    if (!isArray(obj)) {
      observer(obj)
    }
  } else {
    console.error(' obj must be a object !')
  }

}

function watch(newVal, oldVal) {
  console.log('newVal', newVal, 'oldVal', oldVal);
  return [newVal, oldVal]
}

function observer(obj) {
  Object.keys(obj).forEach(key => {
    var oldVal = obj[key]
    Object.defineProperty(obj, key, {
      enumerable: true,
      configurable: false,
      get() {
        return oldVal
      },
      set(newVal) {
        watch(newVal, oldVal)
      }
    })
    if (isObj(oldVal)) {
      if(!isArray(oldVal)){ 
        observer(oldVal)
      } else {
        overWriteArrayMethods(oldVal)
      }
    }
  });
}

var arrayMethods = ['push', 'pop', 'shift', 'unshift', 'reverse', 'splice']
var arrayProto = Array.prototype

function overWriteArrayMethods(arr) {
  var oldArr = arr.slice()
  arrayMethods.forEach(method => {
    arr[method] = function(){
      var args = arguments
      arrayProto[method].apply(arr, args)
      watch(arr, oldArr)
    }
  })
}

module.exports = MVVM