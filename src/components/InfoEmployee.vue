<template>
    <div>
        <div class="row q-mb-xl q-mt-md">
            <div class=" col-3  text-bold text-h5" style="color: rgb(165, 139, 139);">
                NAME:
            </div>
            <div class="col-9 q-pl-md  text-bold text-h5" style="color: rgb(165, 139, 139);">
                {{ infoEmployee.nombre }} {{ infoEmployee.apellido }}
            </div>
        </div>
        <div class="row q-mb-md">
            <div class=" col-6  text-bold text-h6" style="color: rgb(165, 139, 139);">
                Profile:
            </div>
            <div class="col-6  text-bold text-h6" style="color: rgb(165, 139, 139);">
                {{ infoEmployee.profiles }}
            </div>
        </div>
        <div class="row q-mb-md">
            <div class=" col-6  text-bold text-h6" style="color: rgb(165, 139, 139);">
                 Skills:
            </div>
            <div class="col-6  text-bold text-h6" style="color: rgb(165, 139, 139);">
                {{ infoEmployee.skills }}
            </div>
        </div>
        <div class="row">
            <div class=" col-4  text-bold text-h6" style="color: rgb(165, 139, 139);">
                 Plataform:
            </div>
            <div class="col-8  text-bold text-h6" style="color: rgb(165, 139, 139);">
                <plataform-buttons></plataform-buttons>
            </div>
        </div>
    </div>
</template>

<script>
import PlataformButtons from 'components/PlataformButtons.vue'

export default {
    name: 'InfoEmployee',
    components: { PlataformButtons },
    props: {
        infoEmployee: Object,
        profile: Boolean
    }
}
</script>