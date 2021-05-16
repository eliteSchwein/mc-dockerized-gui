import Vue from 'vue'

import Settings from './Settings'
import Status from './Status'
import PlayerMetric from './PlayerMetric.vue'
import RamUsageMetric from './RamUsageMetric.vue'
import DiskUsageMetric from './DiskUsageMetric.vue'

Vue.component('player-metric', PlayerMetric)
Vue.component('ram-usage-metric', RamUsageMetric)
Vue.component('disk-usage-metric', DiskUsageMetric)
Vue.component('status', Status)

export default {
    Settings

}