<template>
  <div class="icon" :is-menu="isMenu" :is-link="isLink || urlPresent" :title="tooltip" @click="onClick">
    <span :style="{'font-size': size, color}" :class="`mdi mdi-${icon}`" />
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true
    },
    isMenu: {
      type: Boolean,
      default: false
    },
    isLink: {
      type: Boolean,
      default: false
    },
    url: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: '22px'
    },
    tooltip: {
      type: String,
      default: null
    },
    color: {
      type: String,
      default: 'black'
    }
  },
  computed: {
    urlPresent() {
      return this.url !== null
    }
  },
  methods: {
    onClick(e) {
      if(this.url !== null) {
        window.open(this.url, '_blank')
      }
      $emit('click', e)
    }
  },
}
</script>

<style lang="scss" scoped>
.icon {
  padding: 0px 5px;

  &[is-menu="true"] {
    cursor: pointer;
    transition: all 100ms ease-in-out;

    &:hover {
      border-radius: 50%;
      background-color: var(--color-p-dark);
    }
  }

  &[is-link="true"] {
    cursor: pointer;
    transition: all 100ms ease-in-out;

    &:hover {
      border-radius: 50%;
      color: var(--color-default);
    }
  }
}
</style>
