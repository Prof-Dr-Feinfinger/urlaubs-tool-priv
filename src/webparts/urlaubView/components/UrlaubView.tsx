import * as React from 'react';
import styles from './UrlaubView.module.scss';
import { IUrlaubViewProps } from './IUrlaubViewProps';
import { escape } from '@microsoft/sp-lodash-subset';

const UrlaubView: React.FunctionComponent<IUrlaubViewProps> = (props) => {
  props.context.msGraphClientFactory.getClient()
    .then(
      client => {
        client
          .api('users')
          .version('v1.0')
          .select('displayName, mail, userPrrincipleName')
          .filter('')
          .get((err, res) => {
            if (err) console.log(err)

            console.log(res)
          })
      }
    )
    .catch(e => console.log(e))
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