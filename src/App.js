import React, { useEffect, useState } from 'react';
import Axios from 'axios';

import './style.css';

import ListItem from './ListItem';

export default function App() {
  const [pages, setPages] = useState([]);
  useEffect(() => {
    async function callApi() {
      const res = await Axios.get(
        'https://springbokmagazine.com/api/publications?isPreview=false&issuePermalink=issue-51&permalink=springbokmagazine.com'
      );
      console.log('axios');
      if (res?.data?.issues[0]?.pages) {
        setPages(res?.data?.issues[0]?.pages);
      }
    }
    callApi();
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <p>{pages.length} pages</p>
      {pages.map((page) => {
        return <div>{page.title}</div>;
      })}
    </div>
  );
}
