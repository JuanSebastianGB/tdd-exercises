import { vi } from 'vitest';
function getLatest(index = messages.items.length - 1) {
  return messages.items[index];
}

const messages = {
  items: [
    { message: 'Simple test message', from: 'Testman' },
    // ...
  ],
  getLatest, // can also be a `getter or setter if supported`
};

describe('vi.fn()', () => {
  it('should test spy', () => {
    const spy = vi.spyOn(messages, 'getLatest');
    expect(spy.getMockName()).toBe('getLatest');
    expect(messages.getLatest()).toEqual(messages.items[0]);
    expect(spy).toBeCalledTimes(1);

    spy.mockImplementationOnce(() => 'accessed');
    expect(messages.getLatest()).toEqual('accessed');
  });
  it('should test mock implementation', () => {
    const mock = vi.fn().mockImplementation(getLatest);
    expect(mock()).toEqual(messages.items[messages.items.length - 1]);
    expect(mock).toBeCalledTimes(1);
    mock();
    expect(mock).toBeCalledTimes(2);
  });
});
