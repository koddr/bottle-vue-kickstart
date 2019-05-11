// Include libraries
import Vue from "vue";
import axios from "axios";
import WebFont from "webfontloader";

// Init Google Fonts
WebFont.load({
  google: {
    families: ["Open+Sans:300,400"]
  }
});

// Init Vue app
const kickstart_app = new Vue({
  el: "#kickstart-app",
  delimiters: ["[[", "]]"],
  data() {
    return {
      result: []
    };
  },
  methods: {
    getAllArticles: function() {
      axios
        .get("/api/articles/")
        .then(response => {
          this.result = response.data;
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  mounted() {
    if (document.querySelectorAll(".articles").length > 0) {
      this.getAllArticles();
    }
  }
});
