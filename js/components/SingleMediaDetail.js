export default {
    name: "SingleMediaDetail",

    props: ['image', 'title', 'storyline', 'year', 'video'],

    template: `
    <div class="row">
        <div class="col-12 order-2 order-md-1 col-md-3 media-container">
            <h4 class="media-title">{{ title }}</h4>
            <p class="media-details" v-html="storyline"></p>
            <span class="media-year">{{ year }} </span>
        </div>

        <div class="col-12 order-1 order-md-2 col-md-9 media-container">
            <video autoplay controls muted :src="'video/' + video" class="fs-video"></video>
        </div>
    </div>
    `
}