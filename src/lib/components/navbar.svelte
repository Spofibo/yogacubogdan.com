<script>
  import { base } from '$app/paths';
</script>

<nav class="navbar bg-base-100 border-b border-gray-200 dark:border-gray-600">
  <div class="navbar-start">
    <div class="hidden lg:flex">
      <ul class="menu menu-horizontal px-1 overflow-visible">
        <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
        <div class="dropdown-hover dropdown">
          <li tabindex="0">
            <details>
              <summary>About</summary>
              <ul class="dropdown-content bg-white p-2">
                <li><a href="{base}/about/bogdan">Bogdan</a></li>
                <li><a href="{base}/about/hatha-yoga">Hatha Yoga</a></li>
                <li><a href="{base}/about/isha">ISHA</a></li>
                <li><a href="{base}/about/sadhguru">Sadhguru</a></li>
              </ul>
            </details>
          </li>
        </div>
        <li>
          <a href="{base}/programs">Programs</a>
        </li>
        <li>
          <a href="{base}/contact">Contact</a>
        </li>
      </ul>
    </div>

    <!-- Mobile menu -->
    <div class="dropdown">
      <!-- svelte-ignore a11y-label-has-associated-control -->
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
          ><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg
        >
      </label>
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <details>
            <summary>About</summary>
            <ul class="p-2">
              <li><a href="{base}/about/bogdan">Bogdan</a></li>
              <li><a href="{base}/about/hatha-yoga">Hatha Yoga</a></li>
              <li><a href="{base}/about/isha">ISHA</a></li>
              <li><a href="{base}/about/sadhguru">Sadhguru</a></li>
            </ul>
          </details>
        </li>
        <li><a href="{base}/programs">Programs</a></li>
        <li><a href="{base}/contact">Contact</a></li>
      </ul>
    </div>
  </div>

  <div class="navbar-center">
    <a href="{base}/" class="btn btn-ghost text-xl">Yoga cu Bogdan</a>
  </div>

  <div class="navbar-end">
    <a class="btn" href="{base}/programs">Book</a>
  </div>
</nav>
