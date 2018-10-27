'use strict';
import * as React from 'react';
import { IFlashMessage } from '../interfaces/react';

export interface IProps {
  messages: IFlashMessage[],
}

export default class FlashMessages extends React.Component<IProps, {}> {
  render() {
    const children: JSX.Element[] = this.props.messages.map((msg, index) => {
      return(
        <div key={`flashMsg${index}`} id={`flashMsg${index}`}
        className={`flashMsg ${msg.type}`}>
          <p>{ msg.message }</p>
        </div>
      );
    });

    return(
      <div id='flash-messages'>{ children }</div>
    );
  }
}