import { OGImageRoute } from 'astro-og-canvas';
import { diagnoses } from '../../data/diagnoses';

function hexToRgb(hex: string): [number, number, number] {
  const clean = hex.replace('#', '');
  const num = parseInt(clean, 16);
  return [(num >> 16) & 255, (num >> 8) & 255, num & 255];
}

const pages = Object.fromEntries(
  diagnoses.flatMap((diagnosis) =>
    diagnosis.results.map((result) => [
      `${diagnosis.slug}--${result.slug}`,
      { diagnosisTitle: diagnosis.title, result },
    ])
  )
);

export const { getStaticPaths, GET } = await OGImageRoute({
  pages,
  getImageOptions: (_path, page) => {
    const rgb = hexToRgb(page.result.accentColor);
    return {
      title: page.result.name,
      description: `${page.diagnosisTitle}: ${page.result.reasonTemplate}`,
      bgGradient: [[15, 23, 42], rgb],
      border: { color: rgb, width: 12 },
      font: {
        title: { size: 60, weight: 'Bold', families: ['Noto Sans JP'] },
        description: { size: 30, families: ['Noto Sans JP'] },
      },
      fonts: [
        'https://cdn.jsdelivr.net/gh/googlefonts/noto-cjk@main/Sans/OTF/Japanese/NotoSansCJKjp-Bold.otf',
        'https://cdn.jsdelivr.net/gh/googlefonts/noto-cjk@main/Sans/OTF/Japanese/NotoSansCJKjp-Regular.otf',
      ],
    };
  },
});
