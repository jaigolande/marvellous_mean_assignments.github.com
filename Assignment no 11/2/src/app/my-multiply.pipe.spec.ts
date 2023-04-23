import { MyMultiplyPipe } from './my-multiply.pipe';

describe('MyMultiplyPipe', () => {
  it('create an instance', () => {
    const pipe = new MyMultiplyPipe();
    expect(pipe).toBeTruthy();
  });
});
