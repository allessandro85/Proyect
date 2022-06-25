<template>
    <q-card class="my-card q-mr-md q-ml-md q-mt-xl">
        <div class="col-12">
            <q-card-section class="bg-teal text-white">
                <div class="text-h4 text-center"> Employee </div>
            </q-card-section>
        </div>
        <div class="row">
            <div class="col-4">
                    <q-card-section>
                        <div class="column items-center">
                            <q-avatar size="110px">
                                <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
                            </q-avatar>
                        </div>
                    </q-card-section>
            </div>
            <div class="col-8">
                <info-employee :infoEmployee="employee"></info-employee>
            </div>
        </div>
        <div class="column">
            <follower-numbers :face="faceCount" :twi="twitCount" :go="gooCount"></follower-numbers>
            <footer-btns @SocialCounter="Count"></footer-btns>
            <q-btn class="col-xs-4 justify-center" color="negative" label="Eliminar" size="md" v-if="eliminar" @click="$emit('eliminar', employee)">
                <i class="fa-brands"></i>
            </q-btn> 
        </div>
    </q-card>
</template>


<script>
import FooterBtns from 'components/FooterBtn.vue'
import InfoEmployee from 'components/InfoEmployee.vue'
import FollowerNumbers from 'components/FollowerNumbers.vue'

export default {
    name: 'Card',
    data () {
     return {
            faceCount: 15,
            twitCount: 30,
            gooCount: 20
        }
    },
    props:{
        employee: Object,
        eliminar: Boolean
    },
    components: {
        FooterBtns,
        InfoEmployee,
        FollowerNumbers
    },
    methods:{
        Count(value){
            switch(value){
                case 'facebook':
                    this.faceCount += 1;
                break
                case 'twitter':
                    this.twitCount += 1;
                break
                case 'google':
                    this.gooCount += 1;
                break
            }
        }
    }
}
</script>