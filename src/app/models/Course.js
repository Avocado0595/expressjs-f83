const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, require: true},
    description: {type: String, maxLength: 600},
    image: {type: String},
    video: {type: String, require: true},
    level: {type: String},
    slug: { type: String, slug: "name", unique: true }
}, {timestamps: true});
mongoose.plugin(slug);
Course.plugin(mongoose_delete, { 
    overrideMethods: 'all',
    deletedAt: true
});

Course.query.sortable = function(req){
    if (req.query.hasOwnProperty('_sort')){
        console.log(req.query.type);
        const  isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            [req.query.col]: isValidType? req.query.type : 'desc'
        })
    }
    return this;
}


module.exports = mongoose.model('Course', Course);