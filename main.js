


Vue.config.devtools = true;

// import moment from 'moment'

new Vue({
  el: '#app',
  data () {
    return {
      info: {},
      repo:{},
      collapsed: true,
      isActive: false,
   
    }
  },
    // mounted () {
    //   axios
    //     .get('https://api.github.com/users/amycruz97')
    //     .then(response => (this.info = response))
    //     .catch(error => console.log('error'))
    // }
    mounted () {
      axios.get('https://api.github.com/users/amycruz97')
  .then((response) => {
    (this.info = response)
    return axios.get('https://api.github.com/users/amycruz97/repos'); // using response.data
  })
  .then((response) => {
    (this.repo = response)
    console.log('Response', response);
    console.log(this.repo.data)

  });
    }
})