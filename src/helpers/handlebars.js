const Handlebars  = require('handlebars');

module.exports = {
    index: function (a, b) {
      return a + b;
    },
    sortable: function (field, sort) {
      
      const sortType = field === sort.col ? sort.type : 'default'
      const icons = {
        default: 'oi oi-elevator',
        asc :'oi oi-sort-ascending',
        desc: 'oi oi-sort-descending'
      };
      const types ={
        default: 'desc',
        asc :'desc',
        desc: 'asc'
      }
      const icon = icons[sortType] ? icons[sortType] : icons['default'];
      const type = types[sortType] ? types[sortType] : types['default'];
      let link = Handlebars.escapeExpression(`?_sort&col=${field}&type=${type}`);
      return new Handlebars.SafeString(`<a href="${link}"><span class="${icon}"></span></a>`);
    }
  };