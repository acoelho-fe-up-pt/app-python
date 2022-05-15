import React from 'react';
import {
  Tab, Tabs, TabList, TabPanel
} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UserList from './users/list';
import ClassesList from './classes/list';
import BooksList from './books/list';
import defaultLocale from './locale';

const { UsersTabTag, ClassesTabTag, BooksTabTag } = defaultLocale;
export default () => (
  <Tabs>
    <TabList>
      <Tab>{UsersTabTag}</Tab>
      <Tab>{ClassesTabTag}</Tab>
      <Tab>{BooksTabTag}</Tab>
    </TabList>

    <TabPanel>
      <br />
      <UserList />
    </TabPanel>
    <TabPanel>
      <br />
      <ClassesList />
    </TabPanel>
    <TabPanel>
      <br />
      <BooksList />
    </TabPanel>
  </Tabs>
);
