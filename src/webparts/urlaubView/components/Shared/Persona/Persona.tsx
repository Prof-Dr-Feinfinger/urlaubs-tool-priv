import { Persona as OPersona, PersonaSize as OPersonaSize } from 'office-ui-fabric-react'
import * as React from "react";
import { IPersonaProps } from './IPersonaProps';
import { useGetMe } from '../../../hooks/useMsClient.js'

const Persona: React.FunctionComponent<IPersonaProps> = props => {
    // const [{ error, data, loading }, getMe] = useGetMe()

    const [renderDetails, updateRenderDetails] = React.useState(true);
    const onChange = (ev: unknown, checked: boolean | undefined) => {
        updateRenderDetails(!!checked);
    };

    React.useEffect(() => {
        //   getMe(props.client)
    }, [])


    //console.log({ error, loading, data })
    return (
        <OPersona
            showUnknownPersonaCoin={true}
            text="Kat Larrson"
            secondaryText="Designer"
            tertiaryText="Unverified sender"
            size={OPersonaSize.size72}
            imageUrl={"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-male.png"}
            imageAlt="Kat Larrson, status unknown"
        />
    )
}


export default Persona