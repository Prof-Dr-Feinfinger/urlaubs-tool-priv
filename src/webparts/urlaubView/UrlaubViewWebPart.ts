import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneDropdown
} from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';

import * as strings from 'UrlaubViewWebPartStrings';
import UrlaubView from './components/UrlaubView';
import { IUrlaubViewProps } from './components/IUrlaubViewProps';
export interface IUrlaubViewWebPartProps {
  description: string;
  dropdown: string;
  user_group: string;
}




export default class UrlaubViewWebPart extends BaseClientSideWebPart<IUrlaubViewWebPartProps> {





  public render(): void {



    const element: React.ReactElement<IUrlaubViewProps> = React.createElement(
      UrlaubView,
      {
        description: this.properties.description,
        user_group: this.properties.dropdown,
        context: this.context,
      }
    );

    ReactDom.render(element, this.domElement);
  }




  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('role', {
                  label: strings.DescriptionFieldLabel
                }),
                PropertyPaneDropdown('dropdown', {
                  label: 'Benutzergruppe',
                  options: [
                    { key: 'admins', text: 'Administrator' },
                    { key: 'human_resources', text: 'Personalabteilung' },
                    { key: 'employes', text: 'Mitarbeiter' }
                  ]
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
