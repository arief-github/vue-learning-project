import { createStore } from "vuex"
import { actions } from "./action"
import { getters } from "./getters"
import { mutations } from "./mutation"
import { state } from "./state"

export const store = createStore({
    state,
    mutations,
    actions,
    getters
});