import {
    mapMutations,
    mapGetters
} from 'vuex';


export default {
    methods: {
        ...mapGetters('Persona', [
            'GetPersonState'
        ]),
        ...mapMutations('Persona', [
            'SetPersonState'
        ])
    }
};