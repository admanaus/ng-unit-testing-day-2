// src/app/strength.pipe.spec.ts
import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('should display weak if the strength is less than 10', () => {
    // Arrange: Create a new instance of our pipe.
    // We can do this directly because it has no dependencies.
    const pipe = new StrengthPipe();

    // Act: Call the method we want to test.
    const result = pipe.transform(5);

    // Assert: Check if the result is what we expect.
    expect(result).toEqual('5 (weak)');
  });

    // New Test Case
  it('should display strong if the strength is 10', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(10)).toEqual('10 (strong)');
  });

  it('should display strong if the strength is 20', () => {
    const pipe = new StrengthPipe();
    expect(pipe.transform(20)).toEqual('20 (unbelievable)');
  });


});