<template>
  <div class="layout flex flex-col items-center text-white bg-gray-900 w-full min-h-screen">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
      </nav>
    </header>

    <main>
      <slot/>
    </main>

    <Footer />
  </div>
</template>

<script>
  import Footer from '~/components/layouts/Footer.vue'

  export default {
    components: {
      Footer
    }
  }
</script>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  line-height: 1.5;
}
</style>
