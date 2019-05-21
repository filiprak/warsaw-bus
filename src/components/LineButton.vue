<template>
    <v-btn outline @click.stop="onClick" :class="css_class">
        <slot></slot>
    </v-btn>
</template>

<script>
    export default {
        name: "LineButton",
        props: ['value', 'modelId'],
        model: {
            prop: 'value',
            event: 'changed'
        },
        data() {
            return {
                css_class: this.setCssClass(this.value[this.modelId])
            }
        },
        methods: {
            onClick() {
                this.value[this.modelId] = !this.value[this.modelId];
                this.setCssClass(this.value[this.modelId]);
                this.$emit('changed', this.value);
            },
            setCssClass(state) {
                this.css_class = state ? 'toggled' : '';
            }
        }
    }
</script>

<style scoped>
    .toggled {
        background: black !important;
        color: white;
    }
</style>