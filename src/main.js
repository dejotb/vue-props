import { createApp } from 'vue';

import App from './App.vue';

import friendContact from './components/FriendContact.vue'
import animalType from './components/AnimalType.vue'
import newFriend from './components/NewFriend.vue'

const app = createApp(App);

app.component('friend-contact', friendContact)
app.component('animal-type', animalType)
app.component('new-friend', newFriend)



app.mount('#app');
