import MovieComponent from "./MovieComponent.js";
import TVComponent from "./TVComponent.js";
import MusicComponent from "./MusicComponent.js";



export default {
    name: "TheUserHomeComponent",

    props: ['permissions', 'activeMedia'],

    template: `
        <div class="container-fluid pt-5" id="media">
            <div class="row pt-5">
                <!-- show media icons here -->
                <div class="icon-home col-4 px-1 px-md-3 mt-md-5 mt-lg-5" v-for="media in mediaTypes" :data-type="media.description" @click="switchMedia(media.component)">
                    <img :src="'./images/button-'+ media.icon">
                </div>

        <component :is="this.activeComponent" :permissions="access.admin" class="col-12"></component>
        </div>
    </div>
    `,

    beforeCreate: function() {
        document.body.className = 'three';
    },

    data: function() {
        return {
            activeComponent: this.activeMedia,
            access: this.permissions,
            mediaTypes: [
                {
                    description: "Movies",
                    icon: "movie.svg",
                    component: MovieComponent
                },
                {
                    description: "Television",
                    icon: "tv.svg",
                    component: TVComponent
                },
                {
                    description: "Music",
                    icon: "music.svg",
                    component: MusicComponent
                }
            ]
        }
    },

    methods: {
        switchMedia(theComponent) {
            this.activeComponent = theComponent;
        },

        toSingleDetail() {
            this.singleDetail = !this.singleDetail;
        }
    }
}