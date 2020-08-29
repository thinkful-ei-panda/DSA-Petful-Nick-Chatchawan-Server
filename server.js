const app = require('./modules/app/app');
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`[petful-server] Listening on ${PORT}.`);
});
