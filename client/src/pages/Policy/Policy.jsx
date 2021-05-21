import React from 'react';
import classes from './Policy.module.scss';
import Privacy from '../../components/Policy/Privacy/Privacy.jsx';
import Service from '../../components/Policy/Service/Service.jsx';
import IntellectualProperty from '../../components/Policy/IntellectualProperty/IntellectualProperty.jsx';
import Return from '../../components/Policy/Return/Return.jsx';
import Selling from '../../components/Policy/Selling/Selling.jsx';
import Disclaimer from '../../components/Policy/Disclaimer/Disclaimer.jsx';
import { useHistory, useLocation } from 'react-router';
import qs from 'query-string';
const Policy = () => {
  const history = useHistory();
  const handleTabChange = (idx, type) => {
    const query = qs.parse(location.search);
    query.type = type;
    location.search = qs.stringify(query);
    history.push(`${window.location.pathname}?${location.search}`);
  };

  const tabs = [
    {
      name: '隱私權政策',
      type: 'privacy',
    },
    {
      name: '服務條款',
      type: 'service',
    },
    {
      name: '智慧財產權保護政策',
      type: 'intellectual',
    },
    {
      name: '商品販售政策',
      type: 'selling',
    },
    {
      name: '退貨政策 ',
      type: 'return',
    },
    {
      name: '免責聲明',
      type: 'disclaimer',
    },
  ];
  const location = useLocation();
  return (
    <>
      <div className={classes.tabs}>
        <div>
          {tabs.map((tab, idx) => (
            <a
              onClick={() => handleTabChange(idx, tab.type)}
              className={location.search.includes(tab.type) ? classes.active : ''}
              key={tab.type}
            >
              {tab.name}
            </a>
          ))}
        </div>
      </div>

      <div className={classes.policy}>
        {location.search.includes('privacy') && (
          <section>
            <Privacy />
          </section>
        )}
        {location.search.includes('service') && (
          <section>
            <Service />
          </section>
        )}
        {location.search.includes('intellectual') && (
          <section>
            <IntellectualProperty />
          </section>
        )}
        {location.search.includes('return') && (
          <section>
            <Return />
          </section>
        )}
        {location.search.includes('selling') && (
          <section>
            <Selling />
          </section>
        )}
        {location.search.includes('disclaimer') && (
          <section>
            <Disclaimer />
          </section>
        )}
      </div>
    </>
  );
};

export default Policy;
