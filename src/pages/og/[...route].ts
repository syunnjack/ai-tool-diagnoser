import { OGImageRoute } from 'astro-og-canvas';
import { tools } from '../../data/tools';

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const num = parseInt(clean, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

const pages = Object.fromEntries(tools.map((tool) => [tool.slug, tool]));

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, tool) => {
    const rgb = hexToRgb(tool.accentColor);
    return {
      title: tool.name,
      description: tool.reasonTemplate,
      bgGradient: [[15, 23, 42], rgb],
      border: { color: rgb, width: 12 },
      font: {
        title: { size: 64, weight: 'Bold', families: ['Noto Sans JP'] },
        description: { size: 32, families: ['Noto Sans JP'] },
      },
      fonts: [
        'https://cdn.jsdelivr.net/gh/googlefonts/noto-cjk@main/Sans/OTF/Japanese/NotoSansCJKjp-Bold.otf',
        'https://cdn.jsdelivr.net/gh/googlefonts/noto-cjk@main/Sans/OTF/Japanese/NotoSansCJKjp-Regular.otf',
      ],
    };
  },
});
