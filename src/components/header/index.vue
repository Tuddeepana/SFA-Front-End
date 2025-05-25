<template>
  <div class="header-wrapper row m-0">
    <SearchBar />
    <Logo/>

    <div class="nav-right col-xxl-7 col-xl-6 col-md-7 col-8 pull-right right-header p-0 ms-auto">
      <ul class="nav-menus">
        <li class="language-nav">
          <Language />
        </li>
        <li>
          <span class="header-search"
            ><svg @click="search_open()">
              <use href="@/assets/svg/icon-sprite.svg#search" ></use>
            </svg>
           </span>
        </li>
        <li class="onhover-dropdown">
          <svg @click="bookmark_open()">
            <use href="@/assets/svg/icon-sprite.svg#star" ></use>
          </svg>
          <Bookmark v-bind:activeclass="bookmark" />
        </li>
        <li>
          <Mode />
        </li>
        <Cart />
        <Notifications />
        <Profile />
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapState } from 'vuex';
  import Bookmark from '../bookmark';
  import { Swiper, SwiperSlide } from "swiper/vue";
  import { Autoplay } from "swiper";
import "swiper/css";
  import Language from './language';
  import Notifications from './notifications.vue';
  import Mode from './mode';
  import Cart from './cart';
  import Profile from './profile';
  import Logo from './logo.vue';
  import SearchBar from './search';
  export default {
    components: {
      Bookmark,Language,Notifications,Mode,Cart,Profile,Logo,Swiper,SwiperSlide,SearchBar,
    },
    data() {
      return {
        bookmark: false,
      };
    },
    computed: {
      ...mapState({
        menuItems: (state) => state.menu.searchData,
        megamenuItems: (state) => state.menu.megamenu,
        searchOpen: (state) => state.menu.searchOpen,
      }),
    },
    methods: {
      search_open() {
        this.$store.state.menu.searchOpen = true;
      },
      bookmark_open() {
        this.bookmark = !this.bookmark;
      },
    },
    setup() {
    return {
      modules: [Autoplay],
    };
  },
  };
</script>
