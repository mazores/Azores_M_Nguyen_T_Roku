import SingleMediaDetail from "./SingleMediaDetail.js";

export default {
    name: "TheShowComponent",

    template: `
    <section>
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

        <div v-show="singleDetail" class="back-button">
            <h6 @click="toSingleDetail()">Back</h6>
        </div>

        <component v-show="singleDetail" :is="detailComponent" :image="currentMediaDetails.tv_cover" :title="currentMediaDetails.tv_title" :storyline="currentMediaDetails.tv_storyline" :year="currentMediaDetails.tv_year" :video="currentMediaDetails.tv_trailer"></component>

        <div class="row retrievedvideos" v-bind:class="{hide:singleDetail}">
            <div class="col-12 col-sm-9">
                <div class="thumb-wrapper clearfix">
                    <img v-for="item in allRetrievedVideos" :src="'images/' + item.tv_cover" alt="media thumbnail" @click="loadNewShow(item); toSingleDetail()" class="img-thumbnail rounded float-left media-thumb">
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
            if (localStorage.getItem("cachedTV")) {
                this.allRetrievedVideos = JSON.parse(localStorage.getItem("cachedTV"));

                this.currentMediaDetails = this.allRetrievedVideos[0];

            } else {
                // If there's nothing in local storage then do this
                let url =`./admin/index.php?media=tv`;

                fetch(url) 
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("cachedTV", JSON.stringify(data));
                        this.allRetrievedVideos = data;
                        this.currentMediaDetails = data[0];
                })
            }

            // We should remove this cache when the user's gone as they might have different permissions so go to main.js logout function
        },

        loadNewShow(show) {
            this.currentMediaDetails = show;
        },

        toSingleDetail() {
            this.singleDetail = !this.singleDetail;
        }
    }
}