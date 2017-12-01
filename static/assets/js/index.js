// Include all libraries
import Vue from 'vue';
import axios from 'axios';

// Vue app
const kickstart_app = new Vue({
    el: '#kickstart-app',
    delimiters: ['[[', ']]'],
    data: {
        result: []
    },
    methods: {
        getAllArticles: function () {
            axios.get('/api/articles/')
                .then((response) => {
                    this.result = response.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    mounted() {
        if (document.querySelectorAll('.articles').length > 0) {
            this.getAllArticles();
        }
    }
});
