web use expressJS

++ package: mongoose-delete
-> use to soft-delete

-> usage:
```javascript
const mongoose_delete = require('mongoose-delete');
const Course = new Schema({
    name: (type: String)
});
Course.plugin(mongoose_delete, { overrideMethods: 'all', deletedAt: true });
// change mongoose: deleteOne => delete

//{ overrideMethods: 'all' } => to override default method of mongoose, 
//deletedAt: true => save delete time
// find => return records except {deleted: true}
```
++ handlebars:
--> use {{#each}}
You can optionally provide an else section which will display only when the list is empty.
```handlebars
{{#each paragraphs}}
<p>{{this}}</p>
{{else}}
<p class="empty">No content</p>
{{/each}}
```
<strong>Don't use arrow function with 'this' keyword</strong>

note
```javascript
  checkAllSubmitBtn.click(function(e){
      e.preventDefault();
      var isSubmitable = $(this).hasClass('disabled');
     if (!isSubmitable){
        containerForm.submit();
     }
    })

    //dùng object assign
    //vd
    res.locals._sort.enabled = true;
    res.locals._sort.type = req.query.type;
    res.locals._sort.col = req.query.col;
    //tương đương với
    Object.assign(res.locals._sort,{
        enabled : true,
        type : req.query.type,
        col : req.query.col
    })
```
```
<a href="?_sort$column=name&type=asc></a>
```