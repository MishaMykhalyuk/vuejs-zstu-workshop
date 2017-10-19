<template>
    <div>
        <ul>
            <li v-for="product in products">
                Name: {{ product.name }} x {{ product.quantity }} <br>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'added-products-list',
        props: {
            products: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
    
</script>