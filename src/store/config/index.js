import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export function getDefaultState() {
	return {
		"ipaddress":"",
		"colorcorrectionvalid":true,
		"lightcorrectionvalid":true,
		"qualityvalid":true,
		"modesvalid":true,
		"resolutionvalid":true,
		data: {
			"readonly":false,
			"width": 1280,
			"height": 720,
			"flip": "None",
			"rotation": 270,
			"framerate": 30,
			"bitrate": 20_000_000,
			"sharpness": 0,
			"contrast": 0,
			"brightness":0,
			"saturation":0,
			"iso":0,
			"exposureCompensation":0,
			"exposureMode":"Auto",
			"awbMode":"Auto",
			"analogGain":"1.0",
			"digitalGain":"1.0",
			"port": 8080
		}
	}
}

// initial state
const state = getDefaultState()

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}