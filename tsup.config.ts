import { defineConfig } from 'tsup';
import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true,
  treeshake: true,
  target: 'es2020',
  outDir: 'dist',
  external: ['react'],
  onSuccess: async () => {
    const distDir = 'dist';
    const files = readdirSync(distDir).filter(
      (file) => file.endsWith('.js') || file.endsWith('.cjs'),
    );

    files.forEach((file) => {
      const filePath = join(distDir, file);
      const content = readFileSync(filePath, 'utf-8');
      if (!content.startsWith("'use client';")) {
        writeFileSync(filePath, "'use client';\n" + content);
      }
    });
  },
});
