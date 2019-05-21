<template>
    <div class="fill-height">
        <v-flex class="search">
            <v-text-field v-model="filter" clearable
                    solo flat placeholder="Wyszukaj autobus lub tramwaj" hide-details></v-text-field>
            <v-divider></v-divider>
        </v-flex>
        <v-flex class="lines-list">
            <LineButton :selected-lines="selected_lines"
                        :line="line"
                        v-for="line in lines"
                        class="ma-0 ml-1 mt-1"
                        :key="line._id"
                        v-show="!filter || line.lineId.indexOf(filter) > -1"
            >
                {{line.lineId}}
            </LineButton>
            <div class="mb-5"></div>
        </v-flex>
    </div>
</template>

<script>
    import LineButton from "./LineButton";
    export default {
        name: "Controls",
        components: {LineButton},
        computed: {
            lines() {
                return this.$store.state.lines;
            },
            selected_lines() {
                return this.$store.state.selected_lines;
            }
        },
        data() {
            return {
                filter: '',
                selected: {},
            };
        },
        methods: {

        }
    }
</script>

<style scoped>
    .lines-list{
        height: calc(100% - 50px);
        overflow-y: auto;
    }
</style>