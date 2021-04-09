import ReactGA from 'react-ga';
export const initGA = () => {
  ReactGA.initialize('G-XCVTP7PQZ5'); // put your tracking id here
};

export const PageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};
