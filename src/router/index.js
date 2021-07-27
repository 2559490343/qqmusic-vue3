import * as VueRouter from 'vue-router'
// createApp().use(Router)
// console.log(VueRouter);
let routes = [{
    path: '/',
    redirect: "/home",
    name: 'index',
    component: () =>
        import('../views/index.vue'),
    children: [
        {
            path: '/home',
            name: 'home',
            component: () =>
                import('../views/indexPages/home/index.vue'),
        },
        {
            path: '/login',
            name: 'login',
            meta: {
                name: '登录',
                isList: true
            },
            component: () =>
                import('../views/login/index.vue'),
        },
    ]
},
{
    path: "/:catchAll(.*)",
    redirect: '/'
},
]
const router = VueRouter.createRouter({
    // 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: VueRouter.createWebHashHistory(),
    routes,
})


export default router