<template>
    <v-row>
        <v-col class="col-sm-12 col-md-5">
            <player-metric></player-metric>
            <ram-usage-metric class="mt-6"></ram-usage-metric>
            <disk-usage-metric class="mt-6"></disk-usage-metric>
        </v-col>
        <v-col class="col-sm-12 col-md-3">
            <mini-settings></mini-settings>
        </v-col>
        <v-col class="col-sm-12 col-md-3">
            <status></status>
        </v-col>
    </v-row>
</template>