<script lang="ts">
  import Router from 'svelte-spa-router';
  import Home from './routes/Home.svelte';
  import PackageDetails from './routes/PackageDetails.svelte';
  import BookingForm from './routes/BookingForm.svelte';

  const routes = {
    '/': Home,
    '/package/:id': PackageDetails,
    '/book/:id': BookingForm,
  };
</script>

<main>
  <Router {routes} />
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
</style>