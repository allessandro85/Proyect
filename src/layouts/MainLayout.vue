<template>
  <q-layout view="lHh Lpr lFf">
    <div class="row">
      <div class="col-6">
        <card :employee="InfoPersona"></card>
        <div class="row q-mt-md">
          <q-btn class="col-6" color="info" label="ResetValues" size="md" @click="ResetValues"/>
          <q-btn class="col-6" color="positive" label="Siguiente" size="md" @click="NextEmployee"/>
        </div>
      </div>
      <div class="col-6" v-if="ArrayPersona.length >= 1">
        <div v-for="persona in ArrayPersona" :key="persona.key">
          <card :employee="persona" :eliminar="true" @eliminar="PersonSetActivo" v-if="persona && persona.activo != 0"></card>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>

import Card from 'components/Card.vue'
import axios from 'axios'
import PersonState from 'src/mixins/PersonState.js'
import { GetPersonState } from 'src/store/persona/getters'

export default {
  name: 'MainLayout',
  components: {
    Card
  },
  mixins :[PersonState],
  data () {
    return {
      InfoPersona: {},
      ArrayPersona: [],
      ArrayAMostrar: [],
      index: null
    }
  },
  mounted(){
    this.GetAllPerson();
  },
  methods:{
    GetPerson(){
      axios.get(`https://localhost:7041/Persona/GetPerson`)
      .then(done =>{
        if(done.data){
          this.InfoPersona = done.data;
        }
      })
    },
     async GetAllPerson(){
     await axios.get(`https://localhost:7041/Persona/GetAll`)
      .then(done =>{
        if(done.data){
          this.SetPersonState(done.data);
          done.data.forEach(element => {
            if(element && element.activo == 1){
              this.InfoPersona = element;
            }
          });
          this.index = 0;
        }
      })
    },
    async PersonSetActivo(person){
       for (var i = 0; i < this.ArrayPersona.length; i++) {
          if(this.ArrayPersona[i].id == person.id){
            this.ArrayPersona.splice(i,i+1);
          }  
      }
      await axios.put(`https://localhost:7041/Persona/DeletePerson?id=`+ person.id)
      this.SendNotification("Elimino correctamente al Empleado", "positive");
    },
    NextEmployee(){ 
      this.index += 1;
      this.InfoPersona = {};
      
      this.ArrayAMostrar = this.GetPersonState();
      for (var i = 0; i < this.ArrayAMostrar.length; i++) {
        if(this.ArrayAMostrar[i].activo == 1){
          if(this.ArrayAMostrar[i].id == this.index){
            this.ArrayPersona.push(this.ArrayAMostrar[i]);
          }else{
            if(this.ArrayAMostrar[this.index] && this.ArrayAMostrar[this.index].activo == 1){
              this.InfoPersona = this.ArrayAMostrar[this.index]; 
            }
          }
        }
      }
      
      // if(this.InfoPersona == null || this.InfoPersona == undefined){
      //   this.SendNotification("Usuario no activo", "negative"); 
      // }
      if(this.ArrayAMostrar.length == this.index){
        this.SendNotification("No hay mas Empleados", "negative"); 
      }
      
    },
    SendNotification(mensaje, color){
      this.$q.notify({
          message: mensaje,
          type: color,
          icon: "fas fa-user",
          position: "top",
          group: false,
      });
    },
    ResetValues(){
      this.InfoPersona = {};
      this.ArrayPersona = [];
      this.ArrayAMostrar = [];
      this.ResetTable();
      
    },
    async ResetTable(){
      await axios.put(`https://localhost:7041/Persona/ResetAllActive`)
      .then(done =>{
        if(done.data){
          this.SendNotification("Todos los empleados se activaron en BD", "positive");
        }
      })
      this.GetAllPerson();
    }
  }
}
</script>
