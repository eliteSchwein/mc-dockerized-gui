<template>
    <v-card>
        <v-toolbar flat dense>
            <v-toolbar-title>
                <span class="subheading"><v-icon left>mdi-server</v-icon>Status</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text class="px-0 py-0 content">
            <v-form>
                <v-row class="px-4">
                    <v-col>
                        <v-icon color="red darken-1">mdi-lan-disconnect</v-icon> Server is Offline!
                    </v-col>
                </v-row>
                <v-row class="px-4">
                    <v-col>
                        <v-icon color="red darken-1">mdi-alert</v-icon> Server is suspended!
                    </v-col>
                </v-row>
                <v-row class="px-4">
                    <v-col>
                        <v-icon color="orange darken-2">mdi-alert</v-icon> Server crashed!
                    </v-col>
                </v-row>
                <v-row class="px-4">
                    <v-col>
                        <v-icon color="green darken-3">mdi-check</v-icon> Server Online
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