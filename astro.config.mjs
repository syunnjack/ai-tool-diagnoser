// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // 実際に配信しているのは .net。.jp は駐車状態で何も返さない。
  // ここが canonical と sitemap の基点になるので、間違えると
  // 検索エンジンに死んだURLを正規版として教えることになる。
  site: 'https://kantan-shindan.net',
});
