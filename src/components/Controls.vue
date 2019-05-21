<template>
    <div class="fill-height">
        <v-flex class="search">
            <v-text-field v-model="filter" clearable
                          solo flat placeholder="Wyszukaj autobus lub tramwaj" hide-details></v-text-field>
            <v-divider></v-divider>
        </v-flex>
        <v-flex class="lines-list">
            <LineButton :line="line"
                        v-for="line in lines"
                        class="ma-0 ml-1 mt-1"
                        :key="line._id"
                        v-show="!filter || line.lineId.indexOf(filter) > -1"
            >
                {{line.lineId}}
            </LineButton>
            <div class="mb-5"></div>
        </v-flex>
        <v-divider></v-divider>
        <v-layout>
            <v-flex class="bottom-btn">
                <v-btn small flat block @click.stop="clear" class="ma-0 fill-height">
                    <v-icon small>clear</v-icon>
                    &nbsp;
                    Wyczyść
                </v-btn>
            </v-flex>
        </v-layout>
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
            }
        },
        data() {
            return {
                filter: '',
            };
        },
        methods: {
            clear() {
                this.$store.dispatch('clearLinesSelection');
            }
        }
    }
</script>

<style scoped>
    .lines-list {
        height: calc(100% - 100px);
        overflow-y: auto;
    }

    .bottom-btn {
        height: 50px;
    }
</style>