<template>
  <Container>
    <nav aria-label="breadcrumb">
      <ul class="breadcrumb">
        <li
          v-for="(crumb, index) in breadcrumbs"
          :key="index"
          :class="{ active: index === breadcrumbs.length - 1 }"
        >
          <span v-if="index === breadcrumbs.length - 1">{{ crumb.title }}</span>
          <span v-else>
            <a :href="crumb.link">{{ crumb.title }}</a>
            <span class="separator">•</span>
          </span>
        </li>
      </ul>
    </nav>
  </Container>
</template>

<script setup type="ts">
import { pages } from "~/data";

  const route = useRoute();

  const breadcrumbs = computed(() => {
  const matchedPages = pages.value.filter(page => route.path.includes(page.link));

  const lastPage = matchedPages[matchedPages.length - 1];
  if (lastPage?.children) {
    const currentPage = lastPage.children.find(child => child.link === route.path);
    if (currentPage) {
      matchedPages.push(currentPage);
    }
  }

  return matchedPages;
})
</script>

<style scoped>
.breadcrumb {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  padding: 20px 0;
  margin: 0;
  font-size: 13px;
  line-height: 120%;
  color: black;
}

.breadcrumb li {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}

.breadcrumb a:visited,
a:hover,
a:active {
  text-decoration: none;
  color: inherit;
}

.breadcrumb .separator {
  height: 5px;
  width: 5px;
  margin: 0 10px;
  border-radius: 50%;
}

.breadcrumb .active span {
  color: lightgray;
  pointer-events: none;
  color: $medium-grey;
}
</style>
