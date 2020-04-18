export default {
    name: "TheMusicComponent",

    template: `
    <section>
        <div class="row">
            <div class="col-12 order-2 order-md-1 col-md-3 media-container">
                <h4 class="media-title">{{ currentMediaDetails.music_title }}</h4>
                <p class="media-details" v-html="currentMediaDetails.music_storyline"></p>
                <span class="media-year">{{ currentMediaDetails.music_year }} </span>
            </div>

            <div class="col-12 order-1 order-md-2 col-md-9 media-container">
                <video autoplay controls muted :src="'video/' + currentMediaDetails.music_trailer" class="fs-video"></video>
            </div>
        </div>

        <div class="col-12 col-sm-9 media-info">
            <ul class="media-genres">
                <li>
                    <a href="action" @click.prevent="filterMedia('action')">Action</a>
                </li>
                <li>
                    <a href="comedy" @click.prevent="filterMedia('comedy')">Comedy</a>
                </li>
                <li>
                    <a href="family" @click.prevent="filterMedia('family')">Family</a>
                </li>
                <li>
                    <a href="fantasy" @click.prevent="filterMedia('fantasy')">Fantasy</a>
                </li>
                <li>
                    <a href="horror" @click.prevent="retrieveVideoContent">All</a>
                </li>
            </ul>
        </div>

        <div class="row">
            <div class="col-12 col-sm-9">
                <div class="thumb-wrapper clearfix">
                    <img v-for="item in allRetrievedVideos" :src="'images/' + item.music_cover" alt="media thumbnail" @click="loadNewMusic(item)" class="img-thumbnail rounded float-left media-thumb">
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
        filterMedia(filter) {
            // debugger;

            let url = `./admin/index.php?media=tv&filter=${filter}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.allRetrievedMedia = data;
                    this.currentMediaDetails = data[0];
                })

        },

        retrieveVideoContent() {
            // fetch all the video content here (don't care about filtering, genre etc at this point)
            // debugger;

            // You don't want to do this again and again because it will load longer. You only need to do it once, thus the local storage
            if (localStorage.getItem("cachedMusic")) {
                this.allRetrievedVideos = JSON.parse(localStorage.getItem("cachedMusic"));

                this.currentMediaDetails = this.allRetrievedVideos[0];

            } else {
                // If there's nothing in local storage then do this
                let url =`./admin/index.php?media=music`;

                fetch(url) 
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("cachedMusic", JSON.stringify(data));
                        this.allRetrievedVideos = data;
                        this.currentMediaDetails = data[0];
                })
            }

            // We should remove this cache when the user's gone as they might have different permissions so go to main.js logout function
            
        },

        loadNewMusic(music) {
            this.currentMediaDetails = music;
        }
    }
}