export const mutations = {
    ADD_NOTE(state, payload) {
        let newNote = payload;

        state.notes.push(newNote);
    },
    ADD_TIMESTAMPS(state, payload) {
        let newTimeStamp = payload;

        state.timestamps.push(newTimeStamp);
    }
};