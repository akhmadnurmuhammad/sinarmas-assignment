module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'cea98dabe074074f1ed300f0e56a4a1c'),
  },
});
