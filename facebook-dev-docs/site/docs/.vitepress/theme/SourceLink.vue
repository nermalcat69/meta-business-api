<script setup lang="ts">
import { useData } from "vitepress";

const { frontmatter } = useData();
</script>

<template>
  <div v-if="frontmatter.source_url" class="source-link">
    Mirrored from
    <a :href="frontmatter.source_url" target="_blank" rel="noopener">{{ frontmatter.source_url }}</a>
  </div>
</template>

<style scoped>
.source-link {
  font-size: 13px;
  color: var(--vp-c-text-2);
  border: 1px solid var(--vp-c-divider);
  background: var(--vp-c-bg-soft);
  border-radius: 8px;
  padding: 8px 12px;
  margin-bottom: 24px;
}
.source-link a {
  color: var(--vp-c-brand-1);
  word-break: break-all;
}
</style>
