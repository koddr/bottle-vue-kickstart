// Add all libraries
require('./_bootstrap');

// Vue app
new Vue({
  el: '#kickstart-app',
  delimiters: ['[[', ']]'],
  data: {
    result: []
  },
  methods: {
    getAllArticles: function () {
      this.$http.get('/api/articles/')
          .then(function (response) {
            this.result = response.data;
          })
          .catch(function (error) {
            console.log(error);
          });
    }
  },
  created: function () {
    if (document.querySelectorAll('.articles').length > 0) {
      this.getAllArticles();
    }
  }
});
