import { createStore } from 'vuex';
import cartModule from './modules/cart';
import productModule from './modules/product';

export default createStore({
    modules: {
        cartModule,
        productModule
    }
})