<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-view-dashboard</v-icon>General</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
            <v-form>
                <v-row class="px-4">
                    <v-col>
                        <v-text-field
                            label="Name"
                        ></v-text-field>
                    </v-col>
                    <v-col
                        style="max-width:80px">
                        <v-text-field 
                            type="number"
                            label="Slots"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                </v-row>
            </v-form>
        </v-card-text>
    </v-card>
</template>

<script>
    export default {
        components: {
        },
        computed: {
        },
    }
</script>