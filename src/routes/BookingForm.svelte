<script lang="ts">
    import { bookings } from '$lib/stores/travel-stores'; 
    import { packages } from '$lib/data/packages'; 
  
    export let params: { id: string };
  
    let name = '';
    let email = '';
    let travelers = 1;
    $: pkg = packages.find((p) => p.id === Number(params.id));
  
    function handleSubmit() {
      if (pkg) {
        $bookings = [...$bookings, { name, email, travelers, packageId: pkg.id }];
        alert('Booking successful!');
        name = ''; email = ''; travelers = 1;
      }
    }
  </script>
  
  <main>
    <h1>Book {pkg?.name}</h1>
    <form on:submit|preventDefault={handleSubmit}>
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" bind:value={name} class="border p-2 w-full" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" bind:value={email} class="border p-2 w-full" required />
      </div>
      <div class="form-group">
        <label for="travelers">Number of Travelers:</label>
        <input type="number" id="travelers" bind:value={travelers} min="1" class="border p-2 w-full" required />
      </div>
      <button type="submit">Confirm Booking</button>
    </form>
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
    form {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .form-group {
      display: flex;
      flex-direction: column;
    }
    label {
      margin-bottom: 5px;
      font-weight: bold;
    }
    input {
      border: 1px solid #ccc;
      padding: 8px;
      width: 100%;
      max-width: 300px;
      border-radius: 4px;
    }
    button {
      background-color: #28a745;
      color: white;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      max-width: 200px;
    }
    button:hover {
      background-color: #218838;
    }
    @media (max-width: 768px) {
      input {
        max-width: 100%;
      }
    }
  </style>