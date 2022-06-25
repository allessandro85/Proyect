<template>
    <div class="row q-ma-md">
        <q-btn class="col-xs-4 text-right" color="primary" size="md" @click="SendInfo('facebook')">
        <div class="text-subtitle2 text-left">
            <i class="fa-brands fa-facebook-square"></i> Like 
        </div>
        </q-btn>
        
        <q-btn class="col-xs-4 text-right" color="positive" size="md" @click="SendInfo('twitter')">
        <div class="text-subtitle2 text-left">
            <i class="fa-brands fa-twitter-square "></i> Follow
        </div>
        </q-btn>

        <q-btn class="col-xs-4 text-right" color="negative" size="md" @click="SendInfo('google')">
        <div class="text-subtitle2 text-left">
            <i class="fa-brands fa-google-plus-square"></i> Tweet
        </div>
        </q-btn>
    </div>
</template>

<script>
export default {
    name: 'FooterBtns',
    methods:{
        SendInfo(value){
            this.$emit('SocialCounter', value);
        }
    }
}
</script>