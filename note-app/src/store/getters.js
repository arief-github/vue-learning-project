export const getters = {
    getNotes: state => state.notes,
    getTimeStamps: state => state.timestamps,
    getNoteCount: state => state.notes.length
};