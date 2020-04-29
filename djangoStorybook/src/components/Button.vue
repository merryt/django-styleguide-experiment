<template>
    <button className="generatedFromAComponent">
        {{label}}
      <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'myButton',
    props: {
        label: String
    }
}
</script>