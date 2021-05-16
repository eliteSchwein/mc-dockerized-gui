<template>
    <v-btn color="primary" @click="saveConfig" :disabled="!valid" width="100%"><v-icon left>mdi-content-save</v-icon> Save Config</v-btn>
</template>

<script>
    export default {
        components: {
        },
        computed: {
            valid: {
                get(){
                    let valid = true;
                    for(const validationcheck in this.$store.state.config){
                        if(validationcheck!="ipaddress" && this.$store.state.config[validationcheck]==false) {
                                valid=false;
                                break;
                            }
                    }
                    return valid
                }
            }
        },
        methods:{
            saveConfig(){
                const state =  this.$store.state.config.data
                this.$store.dispatch('config/upload', { state });
            }
        },
        created() {
            const handler = this;
            setTimeout(()=> {
                for(const validationcheck in handler.$store.state.config){
                    if(validationcheck!="ipaddress" && handler.$store.state.config[validationcheck]==false) {
                            handler.$store.state.config[validationcheck]=true;
                        }
                }
            },500)
        },
    }
</script>