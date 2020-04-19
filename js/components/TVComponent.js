import SingleMediaDetail from "./SingleMediaDetail.js";

export default {
    name: "TheShowComponent",

    // props: ['currentuser'],

    template: `
    <section>
        <div class="col-12 col-sm-9 media-info">
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
            detailComponent: SingleMediaDetail,
        }
    },

    created: function() {
        this.retrieveVideoContent();
        // getUserPermissions();
    },

    methods: {
        filterMedia(decade) {
            // debugger;

            let url = `./admin/index.php?media=tv&decade=${decade}`;

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    this.allRetrievedVideos = data;
                    this.currentMediaDetails = data[0];
                })
        },

        // getUserPermissions() {
        //         this.liveuser = localStorage.getItem("cachedUser", JSON.stringify(this.liveuser));
        //         this.liveuser = this.liveuser.admin;
        // },

        retrieveVideoContent() {
            // fetch all the video content here (don't care about filtering, genre etc at this point)
            // debugger;

            // You don't want to do this again and again because it will load longer. You only need to do it once, thus the local storag

            // // If kid, show
            // if (this.liveuser.admin == "0") {
            //     if (localStorage.getItem("cachedTVKids")) {
            //         this.allRetrievedVideos = JSON.parse(localStorage.getItem("cachedTVKids"));
    
            //         this.currentMediaDetails = this.allRetrievedVideos[0];
    
            //     } else {
            //         // If there's nothing in local storage then do this
            //         let url =`./admin/index.php?media=tv&type=Kid`;
    
            //         fetch(url) 
            //             .then(res => res.json())
            //             .then(data => {
            //                 localStorage.setItem("cachedTVKids", JSON.stringify(data));
            //                 this.allRetrievedVideos = data;
            //                 this.currentMediaDetails = data[0];
            //         })
            //     }
            // // If parents, show all
            // } else {
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
            // }
            

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