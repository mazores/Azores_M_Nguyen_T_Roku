export default {
    name: "TheVideoComponent",

    template: `
    <section>
        <div class="row">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-title">{{ currentMediaDetails.movies_title }}</h4>
                <p class="media-details" v-html="currentMediaDetails.movies_storyline"></p>
                <span class="media-time">{{ currentMediaDetails.movies_runtime }}</span>
                <span class="media-year">{{ currentMediaDetails.movies_year }} </span>
            </div>

            <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                <video autoplay controls muted :src="'video/' + currentMediaDetails.movies_trailer" class="fs-video"></video>
            </div>
        </div>

        <div class="row">
            <div class="col-12 col-sm-9">
                <div class="thumb-wrapper clearfix">
                    <img v-for="item in allRetrievedVideos" :src="'images/' + item.movies_cover" alt="media thumbnail" @click="loadNewMovie(item)" class="img-thumbnail rounded float-left media-thumb">
                </div>
            </div>
        </div>
    </section>
    `,
 
    data: function () {
        return {
            currentMediaDetails: {}, 
            allRetrievedVideos: []
        }
    },

    created: function() {
        this.retrieveVideoContent();
    },

    methods: {
        retrieveVideoContent() {
            // fetch all the video content here (don't care about filtering, genre etc at this point)
            // debugger;

            // You don't want to do this again and again because it will load longer. You only need to do it once, thus the local storage
            if (localStorage.getItem("cachedVideo")) {
                this.allRetrievedVideos = JSON.parse(localStorage.getItem("cachedVideo"));

                this.currentMediaDetails = this.allRetrievedVideos[0];

            } else {
                // If there's nothing in local storage then do this
                let url =`./admin/index.php?media=movies`;

                fetch(url) 
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("cachedVideo", JSON.stringify(data));
                        this.allRetrievedVideos = data;
                        this.currentMediaDetails = data[0];
                })
            }

            // We should remove this cache when the user's gone as they might have different permissions so go to main.js logout function
            
        },

        loadNewMovie(movie) {
            this.currentMediaDetails = movie;
        }
    }
}