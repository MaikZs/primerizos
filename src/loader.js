export default function customImageLoader({ src }) {
  return process.env.NODE_ENV === 'production' 
    ? `/primerizos${src}`
    : src;
}
