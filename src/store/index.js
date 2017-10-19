import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        products: [
            {
                id: 0,
                name: 'iPhone',
                price: '800',
                inventory: 10
            },
            {
                id: 1,
                name: 'iPad',
                price: '1400',
                inventory: 5
            },
            {
                id: 2,
                name: 'MacBook',
                price: '1800',
                inventory: 10
            },
        ],
        addedProducts: []
    },
    actions: {
        addToCart(store, payload) {
            const record = store.state.addedProducts
                .find(product => product.id === payload.id)

            if(!record) {
                store.commit('addToCart', {
                    ...payload,
                    quantity: 1
                })
            } else {
                store.commit('increaseQuantity', record)
            }
            
            store.commit('decreaseInventory', payload)
        }
    },
    mutations: {
        addToCart(state, product){
            state.addedProducts.push(product)
        },
        increaseQuantity(state, product){
            product.quantity++
        },
        decreaseInventory(state, product){
            product.inventory--
        }
    }
})
