<template>
  <div>
    <h4 class="font-medium">Login Link Sent</h4>
    <p class="mb-3">
      To continue, open the email that was sent to
      <em>{{ email }}</em>
      and click the link provided.
    </p>
    <p class="text-xs text-green-800">
      Not seeing the email?<br>
      Make sure to check your spam or clutter folders.
    </p>
  </div>
</template>

<script>
export default {
  props: {
    email: {
      type: String,
      default: null,
    },
  },
};
</script>
