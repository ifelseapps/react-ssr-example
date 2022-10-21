import fs from 'fs';
import path from 'path';

export type Assets = {
  js?: string;
  css?: string;
};

export function getAssets(): Assets {
  const files = fs.readdirSync(__dirname);
  const js = files.find(f => f.startsWith('client'));
  const css = files.find(f => f.startsWith('styles'));

  return { js, css };
}
