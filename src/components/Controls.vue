<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <v-select
                v-model="selected_lines"
                :items="options"
                label="Wybierz numery linii"
                no-data-text="Brak danych"
                multiple
                solo
        >
            <template v-slot:selection="{ item, index }">
                <v-chip v-if="index < max_show_items">
                    <b>{{ item }}</b>
                </v-chip>
                <span
                        v-if="index >= max_show_items"
                        class="grey--text caption"
                >(+{{ value.length - 5 }} inne)</span>
            </template>
        </v-select>
    </div>
</template>

<script>
    export default {
        name: "Controls",
        data() {
            return {
                max_show_items: 5,
                selected_lines: [],
                options: ['101', '102', '103', '104'],
            };
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>