<script lang="ts">
    import { packageList, searchResults } from '$lib/stores/travel-stores'; 
    import { packages } from '$lib/data/packages'; 
    import { onMount } from 'svelte';
  
    onMount(() => {
      $packageList = packages;
      $searchResults = packages;
    });
  
    let searchTerm = '';
    let priceRange = 30000;
  
    function filterPackages() {
      $searchResults = $packageList.filter(
        (pkg) =>
          pkg.destination.toLowerCase().includes(searchTerm.toLowerCase()) &&
          pkg.price <= priceRange
      );
    }
  </script>
  
  <main>
    <h1>Travel Packages</h1>
    <div class="filter-section">
      <input
        type="text"
        bind:value={searchTerm}
        placeholder="Search by destination"
        class="search-input"
        on:input={filterPackages}
      />
      <input
        type="range"
        min="5000"
        max="30000"
        bind:value={priceRange}
        on:input={filterPackages}
      />
      <span>Max Price: ₹{priceRange}</span>
    </div>
    <div class="package-grid">
      {#each $searchResults as pkg}
        <div class="package-card">
          <img src={pkg.image} alt={pkg.name} />
          <h2>{pkg.name}</h2>
          <p>{pkg.destination} - {pkg.duration} days</p>
          <p class="price">₹{pkg.price}</p>
          <a href={`#/package/${pkg.id}`}>View Details</a>
        </div>
      {/each}
    </div>
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
    .filter-section {
      margin-bottom: 30px;
    }
    .search-input {
      border: 1px solid #ccc;
      padding: 8px;
      margin-right: 10px;
      width: 200px;
    }
    .package-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
    .package-card {
      border: 1px solid #ddd;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
    .package-card img {
      width: 100%;
      height: 150px;
      object-fit: cover;
      margin-bottom: 10px;
    }
    .package-card h2 {
      font-size: 1.25rem;
      margin-bottom: 5px;
    }
    .price {
      color: #28a745;
      font-weight: bold;
    }
    .package-card a {
      color: #007bff;
      text-decoration: none;
    }
    .package-card a:hover {
      text-decoration: underline;
    }
    @media (max-width: 768px) {
      .package-grid {
        grid-template-columns: repeat(1, 1fr);
      }
    }
  </style>