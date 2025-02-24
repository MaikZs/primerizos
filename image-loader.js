export default function imageLoader({ src }) {
  const prefix = process.env.NODE_ENV === 'production' ? '/primerizos' : '';
  return prefix + src;
}
