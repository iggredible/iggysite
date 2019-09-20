<template>
  <div>
    <Nav />
    <div class="container max-w-5xl mx-auto">
      <div class="flex md:flex-row flex-col" v-if="isBlogs">

        <div>
          <Blogs v-if="isBlogs" />
        </div>

      </div>

      <div class="max-w-4xl mx-auto">
        <Blog v-if="!isBlogs" />
      </div>

    </div>
  </div>
</template>

<script>
import Blogs from './Blogs';
import Blog from './Blog';
import About from './About';
import Nav from './Nav';
export default {
    components: {
        Blogs,
        Blog,
        About,
				Nav
    },
    computed: {
        isBlogs() {
            return this.$page.path.endsWith("/") 
        }
    }
};
</script>
<style lang="stylus">
@import './styles/theme.styl';
</style>
