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
    // Provide mock implementations of any router methods you use
    push: jest.fn(),
    replace: jest.fn(),
    // Add any other methods or properties you require for testing
  }),
}));