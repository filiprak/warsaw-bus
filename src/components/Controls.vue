<template>
    <div class="fill-height">
        <v-flex class="search">
            <v-text-field v-model="filter" clearable
                    solo flat placeholder="Wyszukaj autobus lub tramwaj" hide-details></v-text-field>
            <v-divider></v-divider>
        </v-flex>
        <v-flex class="lines-list">
            <LineButton v-model="selected_lines" :model-id="line.lineId" v-for="line in lines" :lineId="line.lineId" class="ma-0 ml-1 mt-1" :key="line._id">
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
                return this.$store.state.lines.filter(v => {
                    return !this.filter || v.lineId.indexOf(this.filter) > -1;
                });
            }
        },
        data() {
            return {
                filter: '',
                selected_lines: {},
            };
        },
        methods: {

        },
        watch: {
            selected_lines: console.warn
        }
    }
</script>

<style scoped>
    .lines-list{
        height: calc(100% - 50px);
        overflow-y: auto;
    }
    .lines-list .v-btn--active {
        background: black;
        color: white;
    }
</style>