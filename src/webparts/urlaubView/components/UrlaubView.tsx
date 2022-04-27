import * as React from 'react';
import styles from './UrlaubView.module.scss';
import { IUrlaubViewProps } from './IUrlaubViewProps';
import { escape } from '@microsoft/sp-lodash-subset';
//import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http'
import { getUsers } from '../hooks/useMsClient'
import AdminView from './AdminView'
import EmployeView from './EmployeView'
import HumanResourceView from './HumanResourceView'
const INTRANET_OBJECT_ID = '01e51f9f-0ece-4fb6-9496-3b9e4692239a';
const URLAUBS_TAGE_LIST_ID = '37d4da1c-c13f-4e7f-96c0-acf0f6ef799c';
const ME_ID = '';


const UrlaubView: React.FunctionComponent<IUrlaubViewProps> = (props) => {
  const [client, setClient] = React.useState(undefined);
  const [error, setError] = React.useState(null);


  if (error !== null && client !== undefined) return (<div>
    GET CLIENT ERROR
  </div>)


  if (props.user_group === 'admins') return (
    <AdminView client={client} />
  )

  if (props.user_group === 'employes') return (
    <EmployeView client={client} />
  )

  if (props.user_group === 'human_resources') return (
    <HumanResourceView client={client} />
  )
}

export default UrlaubView