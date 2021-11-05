export default {
  state: {
    date: new Date(),
    timezone: 'Asia/Seoul',
    participants: [],
  },
  getters: {
    date: state => state.date,
    participants: state => state.participants,
  },
  mutations: {
    SETDATE (state, data) {
      state.date = data
    },
    ADDPARTICIPANT (state, data) {
      state.participants.push(data)
    },
    DELETEPARTICIPANT (state, data) {
      state.participants.splice(data, 1)
    },
    //전체 참여자 초기화
    SETPARTICIPANTS (state) {
      state.participants = []
    }
  },
  actions: {
    setDate ({ commit }, data) {
      commit('SETDATE', data)
    },
    addParticipant ({ commit }, data) {
      commit('ADDPARTICIPANT', data)
    },
    deleteParticipant ({ commit }, data) {
      commit('DELETEPARTICIPANT', data)
    },
    setParticipants ({ commit }) {
      commit('SETPARTICIPANTS')
    },
  },
}