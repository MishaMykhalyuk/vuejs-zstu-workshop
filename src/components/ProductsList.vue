<template>
    <div>
        <p>11111</p>
        <ul>
            <li v-for="product in products">
                Name: {{ product.name }} <br>
                Price: {{ product.price }} <br>
                Inventory: {{ product.inventory }} <br>
                <button :disabled="!product.inventory" @click="addToCart(product)">Add to cart</button>
                <hr>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'products-list',
        props: {
            products: {
                type: Array,
                default() {
                    return []
                }
            }
        },
        methods: {
            addToCart(product){
                this.$emit('addToCart', product)
            }
        }
    }
    
</script>

<style scoped>
    p {
        color: red
    }
</style>