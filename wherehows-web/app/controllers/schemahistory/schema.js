import Ember from 'ember';

export default Ember.Controller.extend({
  schemahistory: Ember.inject.controller(),
  actions: {
    onSelect: function (dataset, data) {
      const schemaHistoryController = this.schemahistory;

      schemaHistoryController.highlightRow(dataset, data, false);
      if (dataset && (dataset.id != 0)) {
        schemaHistoryController.updateTimeLine(dataset.id, false);
      }
    }
  },
  previousPage: function () {
    var model = this.get("model");
    if (model && model.data && model.data.page) {
      var currentPage = model.data.page;
      if (currentPage <= 1) {
        return currentPage;
      } else {
        return currentPage - 1;
      }
    } else {
      return 1;
    }
  }.property('model.data.page'),
  nextPage: function () {
    var model = this.get("model");
    if (model && model.data && model.data.page) {
      var currentPage = model.data.page;
      var totalPages = model.data.totalPages;
      if (currentPage >= totalPages) {
        return totalPages;
      } else {
        return currentPage + 1;
      }
    } else {
      return 1;
    }
  }.property('model.data.page'),
  first: function () {
    var model = this.get("model");
    if (model && model.data && model.data.page) {
      var currentPage = model.data.page;
      if (currentPage <= 1) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }.property('model.data.page'),
  last: function () {
    var model = this.get("model");
    if (model && model.data && model.data.page) {
      var currentPage = model.data.page;
      var totalPages = model.data.totalPages;
      if (currentPage >= totalPages) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }.property('model.data.page')
});
