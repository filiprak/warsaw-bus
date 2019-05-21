<template>
    <v-btn outline @click.stop="onClick" :class="css_class">
        <slot></slot>
    </v-btn>
</template>

<script>
    export default {
        name: "LineButton",
        props: ['selectedLines', 'line'],
        model: {
            prop: 'value',
            event: 'changed'
        },
        data() {
            return {
                css_class: ''
            }
        },
        methods: {
            async onClick() {
                await this.$store.dispatch('setLineSelected', [this.line.lineId, !this.selectedLines[this.line.lineId]]);
                this.setCssClass(this.selectedLines[this.line.lineId]);
                this.$emit('changed', this.selectedLines[this.line.lineId]);
            },
            setCssClass(state) {
                this.css_class = state ? 'v-btn--toggled' : '';
            },
        },
        mounted() {
            this.setCssClass(this.selectedLines[this.line.lineId]);
        }
    }
</script>

<style scoped>
    .v-btn.v-btn--toggled {
        background-color: #212121 !important;
        color: white;
    }
</style>