<template>
    <v-btn outline @click.stop="onClick" :class="selected ? 'v-btn--toggled' : ''">
        <slot></slot>
    </v-btn>
</template>

<script>
    export default {
        name: "LineButton",
        props: ['line'],
        model: {
            prop: 'value',
            event: 'changed'
        },
        computed: {
            selected() {
                return !!this.$store.state.selected_lines[this.line.lineId];
            }
        },
        data() {
            return {
                css_class: ''
            }
        },
        methods: {
            async onClick() {
                await this.$store.dispatch('setLineSelected', [this.line.lineId, !this.selected]);
                this.$emit('changed', this.selected);
            },
        },
    }
</script>

<style scoped>
    .v-btn.v-btn--toggled {
        background-color: #212121 !important;
        color: white;
    }
</style>