export const actions = {
    addNote(context, payload) {
        context.commit('ADD_NOTE', payload);
    },
    addTimeStamp(context, payload) {
        context.commit('ADD_TIMESTAMPS', payload);
    }
};