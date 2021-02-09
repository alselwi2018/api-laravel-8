import axios from 'axios';

const state = {
    images: [],
    loading: false
};
const getters = {
    allImages: (state) => state.images
};
const actions = {
    async fetchImages({commit}){
       
        const response = await axios.get('https://jsonplaceholder.typicode.com/photos');
        commit('setImages',response.data);
        
    }
   
};
const mutations = {
    setImages: (state, images) => (state.images = images)
};

export default {
    state,getters,actions,mutations

    
};