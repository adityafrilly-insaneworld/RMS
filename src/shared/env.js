// Satu pintu untuk membaca variabel lingkungan (.env).
const env = import.meta.env;

export const APP_ENV = env.VITE_APP_ENV || (env.PROD ? 'production' : 'development');
export const IS_PRODUCTION = APP_ENV === 'production';
