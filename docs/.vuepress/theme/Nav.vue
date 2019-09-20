<template>
  <header class="px-6 bg-white flex flex-wrap items-center py-8">
     <input class="hidden" type="checkbox" id="menu-toggle" />
     <label id="hamburger" for="menu-toggle" class="fixed cursor-pointer block z-20"> 
       <div id="burgerToggle" class="cursor-pointer">
         <span></span>
         <span></span>
         <span></span>
       </div>
    </label>

    <div class="bg-gray-800 z-10 fixed top-0 left-0 bottom-0 w-64" id="sideMenu">
      <ul class="my-16 mx-4">
        <li class="my-4 cursor-default hover:no-underline"><About /></li>
        <li class="my-4 text-white font-light"><a class="" href="#">Blogs</a></li>
        <li class="my-4 text-white font-light"><a class="" href="#">About</a></li>
      </ul>
     </div>

     <div class="absolute top-0 right-0 m-4">
       <SearchBox />
     </div>
  </header>
</template>

<script>
import SearchBox from '@SearchBox'
import About from './About';
export default {
	components: {
    SearchBox, 
    About
  }
}
</script>
<style>
  /* slides the menu */
  #sideMenu {
    left: -100%;
    transition:  0.5s cubic-bezier(0.77,0.2,0.05,1.0);
  }
  #menu-toggle:checked ~ #sideMenu {
    transition: 0.5s cubic-bezier(0.77,0.2,0.05,1.0);
    left: 0%;
  }
  #menu-toggle:checked ~ #hamburger span {
		background: #FFF;
  }

  /* animates x */
  #burgerToggle span {
    width: 33px;
    height: 4px;
		margin-bottom: 5px;
    display: block;
    position: relative;
    background: #2d3748;
    border-radius: 3px;
    z-index: 2;
		transform-origin: 4px 0px;
  
		transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
              opacity 0.55s ease;
  }
  #hamburger span:first-child {
    transform-origin: 0% 0%;
  }

  #hamburger span:nth-last-child(3) {
    transform-origin: 0% 100%;
  }

  #menu-toggle:checked ~ #hamburger span:first-child {
    transform: rotate(45deg) translate(-2px, -3px);
  }
  #menu-toggle:checked ~ #hamburger span:nth-last-child(1) {
    transform: rotate(-45deg) translate(0, -1px);
  } 
  #menu-toggle:checked ~ #hamburger span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);  
  } 
</style>
