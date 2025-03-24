<script lang="ts">
  import { packages } from '$lib/data/packages';

  export let params: { id: string };

  $: pkg = packages.find((p) => p.id === Number(params.id)) || null;
</script>

<main>
  {#if pkg}
    <h1>{pkg.name}</h1>
    <img src={pkg.image} alt={pkg.name} />
    <p><strong>Destination:</strong> {pkg.destination}</p>
    <p><strong>Duration:</strong> {pkg.duration} days</p>
    <p><strong>Price:</strong> ₹{pkg.price}</p>
    <p><strong>Description:</strong> {pkg.description}</p>
    <h2>Itinerary</h2>
    <ul>
      {#each pkg.itinerary as item}
        <li>{item}</li>
      {/each}
    </ul>
    <a href={`#/book/${pkg.id}`} class="book-btn">Book Now</a>
  {:else}
    <p>Package not found!</p>
  {/if}
</main>

<style>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  h1 {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
  }
  img {
    width: 100%;
    height: 250px;
    object-fit: cover;
    margin-bottom: 20px;
  }
  p {
    margin-bottom: 10px;
  }
  strong {
    font-weight: bold;
  }
  h2 {
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  .book-btn {
    display: inline-block;
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    text-decoration: none;
    margin-top: 20px;
    border-radius: 5px;
  }
  .book-btn:hover {
    background-color: #0056b3;
  }
  @media (max-width: 768px) {
    img {
      height: 200px;
    }
  }
</style>