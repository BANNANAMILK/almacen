var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    cantidad: {
        type: Number,
        required: true
    },
    categoria: {
        type: String,
        required: true
    }
});

ItemSchema.statics.getItems = function (cb) {
    Item.find({}, cb)
}

ItemSchema.statics.addItem = function (item, cb) {
    Item.create(item, cb)
}

ItemSchema.statics.editItem = function (item, cb) {
    Item.findOneAndUpdate({ _id: item._id }, item, cb)
}

ItemSchema.statics.suma = function (id, cb) {
    Item.findOneAndUpdate({ _id: id }, { $inc: { cantidad: 1 } }, cb)
}
ItemSchema.statics.resta = function (id, cb) {
    Item.findOneAndUpdate({ _id: id }, { $inc: { cantidad: -1 } }, cb)
}

ItemSchema.statics.borrarItem = function (id, cb) {
    Item.remove({ _id: id }, cb)
}
var Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
