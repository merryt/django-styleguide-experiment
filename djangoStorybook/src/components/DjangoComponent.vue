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