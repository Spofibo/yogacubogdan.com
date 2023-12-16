<script>
  import Footer from '$components/footer.svelte';
  import Navbar from '$components/navbar.svelte';
  import '../app.css';
</script>

<Navbar />
<main>
  <slot />
</main>
<Footer />
