import axios from "axios";

export default {
	reset({ commit }) {
		commit('reset')
	},

	getData({ commit }, payload) {
		commit('setData', payload)
	},

	setSettings({ commit }, payload) {
		commit('setSettings', payload)
	},

	upload({ state }) {
		const {data} = state
		const file = new File([JSON.stringify({ data })], 'config.json');

		const formData = new FormData();
		formData.append('file', file);

		axios.post(`${state.ipaddress}/setconfig`,
			data, {
				headers: { 'Content-Type': 'application/json' }
			}
		).then(() => {

		}).catch(() => {
			window.console.error("Error save config.json!")
		});
	},
}