import { Assets } from './getAssets';

export const getHtml = (appHtml: string, assets: Assets, serializedStore: string) => `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <title></title>
  ${assets.css ? `<link href="${assets.css}" rel="stylesheet" />` : null}
</head>
<body>
  <div id="app">${appHtml}</div>
  <script>
    window.__STORE_INITIAL_DATA__ = ${serializedStore};
  </script>
  ${assets.js ? `<script src="${assets.js}"></script>` : null}
</body>
</html>
`;
