import * as React from 'react';
import styles from './UrlaubView.module.scss';
import { IUrlaubViewProps } from './IUrlaubViewProps';
import AdminView from './AdminView/AdminView'
import EmployeView from './EmployeView/EmployeView'
import HumanResourceView from './HumanResourceView/HumanResourceView'
const INTRANET_OBJECT_ID = '01e51f9f-0ece-4fb6-9496-3b9e4692239a';
const URLAUBS_TAGE_LIST_ID = '37d4da1c-c13f-4e7f-96c0-acf0f6ef799c';
const ME_ID = '';


const UrlaubView: React.FunctionComponent<IUrlaubViewProps> = (props) => {


  React.useEffect(() => {
    props.context.msGraphClientFactory.getClient()
      .then((client) => {
        client
          .api("/users")
          .version("v1.0")
          .select("id, displayName,mail,userPrincipalName")
          .filter('')
          .get((err, res) => {
            if (err) console.log(err)
            else console.log(res)
          })
      })
      .catch(e => console.log(e))
  }, [])

  if (props.user_group === 'admins') return (
    <AdminView client={props.context.msGraphClientFactory.getClient()} />
  )

  // if (props.user_group === 'employes') return (
  //   <EmployeView getClient={props.getClient} />
  // )

  //   if (props.user_group === 'human_resources') return (
  //     <HumanResourceView getClient={props.getClient} />
  //   )
}

export default UrlaubView