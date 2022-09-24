const app = new Vue({
    title:'PHP api',
    el:'#app',

    data: {
        disks:[],
    },

    methods: {
        fetchDisks(){
            axios
            .get('http://localhost:8888/php-ajax-dischi/seconda-versione/disks.php')
            .then((res)=> {
                console.log(res)
                const {response} = res.data
                this.disks = response
            })
        },
    },
    created(){
        this.fetchDisks();
    }
});