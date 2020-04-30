<template>
    <div v-html="content"></div>
</template>

<script>

export default {
    name: 'djangoComponent',
    props: {
        content: String
    }
}
</script>

<style>
*{
fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif'
}
</style>