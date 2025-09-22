describe('My First Test', () => {
  let sut: any; // 'sut' is short for 'System Under Test'

  beforeEach(() => {
    // Arrange: Reset the state for a new test
    sut = { a: false };
  });

  it('should be true if a is changed to true', () => {
    // Act: Change the state of the system under test
    sut.a = true;

    // Assert: Verify the new state is as expected
    expect(sut.a).toBe(true);
  });
});