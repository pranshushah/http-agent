import { HttpOptions } from '../../types';
import { joinUrl } from '../joinUrl';

it('should prefix the baseUrl', () => {
  const httpOptions: HttpOptions = { baseUrl: 'https://www.x.com' };
  let joinedUrl = joinUrl('/api', httpOptions);
  expect(joinedUrl).toBe('https://www.x.com/api');
});

it('should return url string', () => {
  let joinedUrl = joinUrl('/api');
  expect(joinedUrl).toBe('/api');
});

it('should return url back if pass URL object', () => {
  let joinedUrl = joinUrl(new URL('https://youtube.com'));
  expect(joinedUrl).toBe('https://youtube.com/');
});

it('should return url back if pass URL object even if we pass prefix', () => {
  let joinedUrl = joinUrl(new URL('https://youtube.com'), {
    baseUrl: 'https://www.google.com',
  });
  expect(joinedUrl).toBe('https://youtube.com/');
});

it('should return url string because baseUrl is not type string', () => {
  // this test is for .js files
  //@ts-ignore
  const httpOptions: HttpOptions = { baseUrl: 33 };
  let joinedUrl = joinUrl('/api', httpOptions);
  expect(joinedUrl).toBe('/api');
});

it('should return url string because url is absolute path', () => {
  const httpOptions: HttpOptions = { baseUrl: 'https://www.x.com' };
  let joinedUrl = joinUrl('https://www.y.com', httpOptions);
  expect(joinedUrl).toBe('https://www.y.com');
});
