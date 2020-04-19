export default {
    name: "SingleMediaDetail",

    props: ['image', 'title', 'storyline', 'year', 'video'],

    template: `
    <div class="row justify-content-center align-items-center media-details-cont pt-5">
        <div class="col-12 col-md-3 center">
            <img class="no-gutter image-details" :src="'images/' + image" alt="media thumbnail" @click="loadNewShow(item); toSingleDetail()" class="img-thumbnail rounded float-left media-thumb">
        </div>
        <div class="col-10 col-md-6 media-container mb-5">
            <h1 class="media-title">{{ title }}</h1>
            <p class="media-details">{{ year }} </p>
            <p class="media-details" v-html="storyline"></p>
        </div>

        <div class="w-100"></div>

        <div class="col-10 pb-5 media-container">
            <video autoplay controls muted :src="'video/' + video" class="fs-video"></video>
        </div>
    </div>
    `
}