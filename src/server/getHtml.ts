export const getHtml = (appHtml: string, serializedStore: string) => `
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <title></title>
  <link href="styles.css" rel="stylesheet" />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet">
</head>
<body>
  <div id="app">${appHtml}</div>
  <script>
    window.__STORE_INITIAL_DATA__ = ${serializedStore};
  </script>
  <script src="client.bundle.js"></script>
</body>
</html>
`;
