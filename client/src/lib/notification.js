import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const notify = (text) => {
  toast(text);
};

export default notify;
