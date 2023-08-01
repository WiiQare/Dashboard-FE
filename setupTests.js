window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () { },
      removeListener: function () { },
    };
  };
window.ResizeObserver = class ResizeObserver {
  observe() { }
  unobserve() { }
  disconnect() { }
}
jest.mock('next/router', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}));