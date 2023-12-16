<script>
  export let url = '';
  export let name = '';
  export let slug = '';
  export let description = '';
  export let benefits = [];
  export let imgPath = '';
</script>

<div class="relative group card shadow-2xl col-span-2">
  <enhanced:img src={imgPath} alt={name} class="object-cover h-full" />

  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>
      <!-- {description.slice(0, 80)} -->
      <i>
        {@html description}
      </i>
    </p>
    <ul class="list-disc list-inside">
      {#each benefits as benefit, index}
        <li>{benefit}</li>
      {/each}
    </ul>
    <div class="card-actions justify-end">
      <button class="btn">
        <a href={url}> More </a>
      </button>
    </div>
  </div>
</div>
