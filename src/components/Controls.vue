<template>
    <div>
        <el-select v-model="selected_lines" filterable placeholder="Wpisz numer linii">
            <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
        </el-select>
    </div>
</template>

<script>
    export default {
        name: "Controls",
        data() {
            return {
                selected_lines: [],
                options: [],
            };
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>