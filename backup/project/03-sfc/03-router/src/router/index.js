import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BookList from "@/views/BookList.vue"
import BookDetail from "@/components/BookDetail.vue"
import Item from "@/views/Item.vue"
import NotFound from "@/components/NotFound.vue"
import User from "@/views/User.vue"
import UserProfile from "@/components/UserProfile.vue"
import UserPost from "@/components/UserPost.vue"
import HomeSub from "@/components/HomeSub.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    components: {
      default: HomeView,
      sub: HomeSub
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: "/book",
    name: "BookList",
    component: BookList
  },
  {
    path: "/book/:id",
    name: "Book",
    component: BookDetail,
    props: (route) => ( {
      id: Number(route.params.id),
      title: route.params.title,
      content: route.params.content
    })
  },
  {
    path: "/item/:id",
    name: "Item",
    component: Item,
    // ルート単位のナビゲーションガード
    beforeEnter: (to, from, next) => {
      console.log("enter item");
      next();
    }
  },
  {
    path: "/user",
    component: User,
    children: [
      {path: "profile", component: UserProfile},
      {path: "post", component: UserPost},
    ]
  },
  {
    // 該当するルートがない場合
    path: "*",
    // リダイレクトで任意のURLにとばすことができる
    //redirect: "/"
    // もしくはNotFound用のコンポーネントを指定してもよい
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

// グローバルなナビゲーションガード
// ルートによる遷移が発生する際に必ず呼ばれる
// nextを呼び出すと次画面へ遷移する
router.beforeEach((to, from, next) => {
  //console.log(to);
  //console.log(from);
  next();
} );

export default router
