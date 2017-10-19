<template>
    <div>
        <products-list @addToCart="addToCart" :products="products"></products-list>
        <added-products-list :products="addedProducts"></added-products-list>
        <hr />
        <p>Total price: {{ totalPrice }}</p>
    </div>
</template>

<script>

    import ProductsList from './components/ProductsList.vue'
    import AddedProducts from './components/AddedProducts.vue'

    export default {
        name: 'app',
        data() {
            return {
                products: this.$store.state.products,
                addedProducts: this.$store.state.addedProducts
            }
        },
        computed: {
            totalPrice(){
                return this.$store.state.addedProducts
                    .reduce((acc, product) => {
                        return acc + product.price * product.quantity
                    }, 0)
            }
        },
        components: {
            ProductsList,
            'added-products-list': AddedProducts
        },
        methods: {
            addToCart(product){
                this.$store.dispatch('addToCart', product)
            }
        }
    }

</script>

<style>
    
</style>