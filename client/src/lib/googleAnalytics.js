import ReactGA from 'react-ga';
export const initGA = () => {
  ReactGA.initialize('UA-117124149-3'); // put your tracking id here
};

export const PageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};
