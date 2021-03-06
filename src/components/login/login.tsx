import React from 'react';
import { useHistory } from 'react-router-dom';

import { IAppContext } from '../app.context';
import { IConfigMethod } from '../../common/models/config.model';
import { withAppContext } from '../withContext/withContext.comp';
import { FormPopup } from '../formPopup/formPopup.comp';

import './login.scss';

interface IProps {
  context: IAppContext
}

const PageComp = ({ context }: IProps) => {
  const { location, replace } = useHistory();

  const { httpService, config } = context;
  const authConfig = config?.auth;
  const loginConfig: IConfigMethod | undefined = authConfig?.method?.login;
  if(!loginConfig){
    closeFormPopup();
  }
  const pageHeaders: any = loginConfig?.requestHeaders || {};

  function closeFormPopup() {
    const from = (location?.state as any)?.from || { pathname: '/' };
    replace(from)
    // const encoded = new Buffer(`${user}:${pwd}`).toString('base64');
//  sessionStorage.setItem('basic', `Basic ${encoded}`);


  }

  async function performAction(body: any,containFiles: boolean) {

    let loginResponse = await httpService.fetch({
      method: loginConfig?.actualMethod || 'post',
      origUrl: loginConfig?.url || '',
      body: containFiles ? body : JSON.stringify(body),
      headers: {
        ...pageHeaders,
        ...(loginConfig?.requestHeaders || {}),
        ...(containFiles ? {} : { 'content-type': 'application/json' })
      },
      responseType: 'json'
    });
    console.log(loginResponse)
    localStorage.setItem('Authorization', `Bearer ${loginResponse['access_token']}`);
  }



  return (
    <div className="app-page">
      <FormPopup
          title={'LOGIN'}
          closeCallback={closeFormPopup}
          submitCallback={performAction}
          fields={loginConfig?.fields}
          methodConfig={loginConfig}
        />
    </div>
  );
}

export const LoginForm =  withAppContext(PageComp);
