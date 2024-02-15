import ReactGA from 'react-ga';

export const initGA = () => {
  ReactGA.initialize('G-9XJRR0DQVT');
};

export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
