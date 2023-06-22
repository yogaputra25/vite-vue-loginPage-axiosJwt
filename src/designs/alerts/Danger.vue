<template>
  <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <i class="fa fa-exclamation-circle me-2"></i>{{ message }}
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="alert"
      aria-label="Close"
    ></button>
  </div>
</template>

<script setup>
const props = defineProps({
  message: String,
});
</script>

<style></style>
