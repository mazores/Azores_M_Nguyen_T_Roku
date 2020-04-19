import SingleMediaDetail from "./SingleMediaDetail.js";

export default {
    name: "TheMusicComponent",

    template: `
    <section>
        <div class="media-genres-container col-12 d-flex justify-content-end no-gutters mt-2 media-info my-md-4">
            <ul class="media-genres">
                <li>
                    <a href="1950" @click.prevent="filterMedia('1950')">1950</a>
                </li>
                <li>
                    <a href="1960" @click.prevent="filterMedia('1960')">1960</a>
                </li>
                <li>
                    <a href="1970" @click.prevent="filterMedia('1970')">1970</a>
                </li>
                <li>
                    <a href="1980" @click.prevent="filterMedia('1980')">1980</a>
                </li>
                <li>
                    <a href="1990" @click.prevent="filterMedia('1990')">1990</a>
                </li>
                <li>
                    <a href="all" @click.prevent="retrieveVideoContent">All</a>
                </li>
            </ul>
        </div>

        <div v-show="singleDetail" class="back-button">
            <h3 @click="toSingleDetail()">Back</h3>
        </div>

        <component v-show="singleDetail" :is="detailComponent" :image="currentMediaDetails.music_cover" :title="currentMediaDetails.music_title" :storyline="currentMediaDetails.music_storyline" :year="currentMediaDetails.music_year" :video="currentMediaDetails.music_trailer"></component>

        <div class="row d-flex retrievedvideos justify-content-center" v-bind:class="{hide:singleDetail}">
            <div class="col-12">
                <div class="thumb-wrapper">
                    <img class="no-gutter cols-3" v-for="item in allRetrievedVideos" :src="'images/' + item.music_cover" alt="media thumbnail" @click="loadNewMusic(item); toSingleDetail()" class="img-thumbnail rounded media-thumb">
                </div>
            </div>
        </div>
    </section>
    `,
 
    data: function () {
        return {
            currentMediaDetails: {}, 
            allRetrievedVideos: [],
            singleDetail: false,
            detailComponent: SingleMediaDetail
        }
    },

    created: function() {
        this.retrieveVideoContent();
    },

    methods: {
        filterMedia(decade) {
            // debugger;

            let url = `./admin/index.php?media=music&decade=${decade}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.allRetrievedVideos = data;
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
        },

            // !
            // We should remove this cache when the user's gone as they might have different permissions so go to main.js logout function

        loadNewMusic(music) {
            this.currentMediaDetails = music;
        },

        toSingleDetail() {
            this.singleDetail = !this.singleDetail;
        }
    }
}