import { createRouter, createWebHistory } from 'vue-router'
import BlogPostInfo from '../components/BlogPostInfo.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Homeview.vue'),
      children: [
        {
          path: 'about',
          name: 'About',
          component: () => import('../components/About.vue'),
          meta: {
            label: "about",
          },
        },
        {
          path: 'resume',
          name: 'Resume',
          component: () => import('../components/Resume.vue'),
          meta: {
            label: "resume",
          },
        },
        {
          path: 'services',
          name: 'Services',
          component: () => import('../components/Services.vue'),
          meta: {
            label: "services",
          },
        },
        {
          path: 'portfolio',
          name: 'Portfolio',
          component: () => import('../components/Portfolio.vue'),
          meta: {
            label: "portfolio",
          }
        },
        {
          path: 'portfolio/:id',
          name: 'moreInfo',
          component: () => import('../components/ProjectInfo.vue')
        },
        {
          path: 'blog',
          name: 'Blog',
          component: () => import('../components/Blog.vue'),
          meta: {
            label: "blog",
          },
          children: [
          ]
        },
        {
          path: 'blog/:id',
          component: BlogPostInfo
        },
        {
          path: 'contact',
          name: 'Contact',
          component: () => import('../components/Contact.vue'),
          meta: {
            label: "contact",
          },
        }
      ]
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   component: () => import('../components/About.vue'),
      
    // },
    // {
    //   path: '/resume',
    //   name: 'resume',
    //   component: () => import('../components/Resume.vue'),
    // },
    // {
    //   path: '/services',
    //   name: 'services',
    //   component: () => import('../components/Services.vue'),
    // },
    // {
    //   path: '/portfolio',
    //   name: 'portfolio',
    //   component: () => import('../components/Portfolio.vue'),
    // },
    // {
    //   path: '/blog',
    //   name: 'blog',
    //   component: () => import('../components/Blog.vue'),
    // },
    // {
    //   path: '/contact',
    //   name: 'contact',
    //   component: () => import('../components/Contact.vue'),
    // }
  ]
})

export default router
