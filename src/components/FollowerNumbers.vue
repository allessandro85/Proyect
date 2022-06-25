<template>
   <div class="row q-ma-md">
        <div class="col-xs-4">
            <q-item-label class="text-h4 text-center">
                {{face}}K
            </q-item-label>
            <q-item-label class="text-h6 text-center">
                Fans
            </q-item-label>
        </div>
        <div class="col-xs-4">
            <q-item-label class="text-h4 text-center">
                {{twi}}K
            </q-item-label>
            <q-item-label class="text-h6 text-center">
                Following
            </q-item-label>
        </div>
        <div class="col-xs-4">
            <q-item-label class="text-h4 text-center">
                {{go}}K
            </q-item-label>
            <q-item-label class="text-h6 text-center">
                Follow
            </q-item-label>
        </div> 
    </div>
</template>

<script>
export default {
    name: 'FollowNumbers',
    props:{
        face : Number,
        twi : Number,
        go : Number
    }
}
</script>