// import MVVM from './src/index.js'

var MVVM =  require('./src/index.js')

var model = {
  name: 'sunny',
  works: ['1', '2', '3'],
  type: {
    name: 'person'
  }
}
var vm = new MVVM(model)

model.name = 'sunny1'
model.works.unshift(0)