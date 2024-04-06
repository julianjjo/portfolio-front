export const useRouter = jest.fn(() => ({
    pathname: '/', // Mock pathname or any other properties used by your components
    query: {},
    asPath: '',
    push: jest.fn(),
  }));