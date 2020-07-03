import { UnixTimePipe } from './unix-time.pipe';

describe('UnixTimePipe', () => {
  it('create an instance', () => {
    const pipe = new UnixTimePipe();
    expect(pipe).toBeTruthy();
  });
});
