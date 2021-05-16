import Dashboard from '../pages/Dashboard.vue'
import Settings from '../pages/Settings.vue'
import Snapshot from '../pages/Snapshot.vue'
import Stream from '../pages/Stream.vue'

const routes = [
    {
        title: "Dashboard",
        path: '/',
        icon: 'view-dashboard-variant',
        component: Dashboard,
        alwaysShow: true,
    },
    {
        title: "Settings",
        path: '/settings',
        icon: 'cog',
        component: Settings,
        alwaysShow: true,
    },


];

export default routes;