<template>
        <div class="p-6 sm:px-20 bg-white border-b border-gray-200">
            <div>
                <jet-application-logo class="block h-12 w-auto" />
            </div>

            <div class="mt-8 text-2xl">
                   
            </div>  
     
    <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    
    <div class="rounded overflow-hidden shadow-lg" v-for="image in allImages" :key="image.id" >
      <img class="w-full" :src="image.thumbnailUrl" alt="">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ image.title }}</div>
        
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"><a :href="image.url" target="_new" class="title font-bold block cursor-pointer hover:underline">{{image.url}}</a></span>
      </div>
      <hr>
      
      <button  class="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800">Delete</button>
    
    </div>
    </div>
    </div>
</template>
<script>
    import JetApplicationLogo from '@/Jetstream/ApplicationLogo'
    import { mapGetters, mapActions } from 'vuex';
    export default {
        name: "Images",
        components: {
            JetApplicationLogo
        },
         methods: {
             
            ...mapActions(['fetchImages'])
        },
        computed: mapGetters(["allImages"]),
        created(){
            
            try {
               this.loading = true
            this.fetchImages();
            this.loading = false
            
             } catch (error) {
            console.log(error)
            this.loading = false
            }
            
        },
        data(){
            return{
               
            }
        }
        // data(){
        //     return {
        //         images:[],
        //         image:{
        //             id:'',
        //             title:'',
        //             AlbumId:'',
        //             Url:''
        //         },
        //         image_id:'',         
        //     }    
        // },
        // created(){
        //     this.AllImages();
        //     },
        // methods:
        // {
        //     AllImages(){
        //         fetch('https://jsonplaceholder.typicode.com/photos')
        //             .then(res => res.json())
        //             .then(res => {
        //                 this.images = res;
        //         })
        //     },
        //     deleteImage(id){
        //         if(confirm('Are you sure?')){
        //             fetch(`https://jsonplaceholder.typicode.com/photos/${id}`,{
        //                 method: 'delete'
        //             })
        //             .then(res => res.json())
        //             .then(data=>{
        //                 alert("Image deleted");
        //                 this.AllImages();
        //             })
        //             .catch(err => console.log(err));
        //         }
        //     }
        // }
    }
</script>
<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-top: 16px solid #3498db;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

</style>
