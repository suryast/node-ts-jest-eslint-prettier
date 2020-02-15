import greeter from './index';

describe('greeter', () => {
  it('greeter', () => {
    // Given
    const expected = 'Hello World';

    // When
    const result = greeter('World');

    // Then
    expect(result).toBe(expected);
  });
});
