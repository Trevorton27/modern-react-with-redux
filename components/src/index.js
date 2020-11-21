import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Comment from './Comment';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className='ui container comments'>
      <ApprovalCard>
        <Comment
          author='SammyThe Shark'
          timeAgo='Today at 4:45PM'
          profileImage={faker.image.avatar()}
          text='azabazabazabazabazaba!'
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author='Crazy Johnny'
          timeAgo='Today at 4:40PM'
          profileImage={faker.image.avatar()}
          text='Jibun ga jaukatta'
        />
      </ApprovalCard>
      <ApprovalCard>
        <Comment
          author='Jimmy Fingers'
          timeAgo='Today at 2:00PM'
          profileImage={faker.image.avatar()}
          text='whaddya want from me?'
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(App(), document.querySelector('#root'));
