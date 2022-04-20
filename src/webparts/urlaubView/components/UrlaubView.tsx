import * as React from 'react';
import styles from './UrlaubView.module.scss';
import { IUrlaubViewProps } from './IUrlaubViewProps';
import { escape } from '@microsoft/sp-lodash-subset';
//import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http'
import { getUsers } from '../hooks/useMsClient'
const INTRANET_OBJECT_ID = '01e51f9f-0ece-4fb6-9496-3b9e4692239a';
const URLAUBS_TAGE_LIST_ID = '37d4da1c-c13f-4e7f-96c0-acf0f6ef799c';
const ME_ID = '';


const UrlaubView: React.FunctionComponent<IUrlaubViewProps> = (props) => {
  const client = props.context.msGraphClientFactory.getClient()

  client.then(
    client => {
      client
        .api(`/sites/${INTRANET_OBJECT_ID}/lists/${URLAUBS_TAGE_LIST_ID}/items`)
        .version('v1.0')
        .get((err, res) => {
          if (err) console.log(err);
          else console.log(res)
        });
    }
  )
    .catch(e => console.log(e));


  return (
    <div className={styles.urlaubView} >
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.column}>
            <span className={styles.title}>Welcome to SharePoint!</span>
            <p className={styles.subTitle}>Customize SharePoint experiences using Web Parts.</p>
            <p className={styles.description}>{escape(props.description)}</p>
            <a href="https://aka.ms/spfx" className={styles.button}>
              <span className={styles.label}>Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UrlaubView