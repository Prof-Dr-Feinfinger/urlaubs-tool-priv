import { Persona as OPersona, PersonaSize as OPersonaSize } from 'office-ui-fabric-react'
import * as React from "react";
import { IPersonaProps } from './IPersonaProps';
import { useGetMe } from '../../../hooks/useMsClient.js'

const Persona: React.FunctionComponent<IPersonaProps> = props => {
    const [{ error, data, loading }, getMe] = useGetMe()

    const [renderDetails, updateRenderDetails] = React.useState(true);
    const onChange = (ev: unknown, checked: boolean | undefined) => {
        updateRenderDetails(!!checked);
    };

    React.useEffect(() => {
        getMe(props.client)
    }, [])

    //if (!!error) return <div>{error}</div>

    if (loading) return <div>Loading</div>

    return (
        <OPersona
            showUnknownPersonaCoin={true}
            text={data ? data.displayName : ""}
            secondaryText={data && data.jobTitle ? data.jobTitle : "Anwendungsentwickler"}
            tertiaryText={data && `Jahresurlaub : ${data.customSecurityAttributes.UrlaubsTool.JahresUrlaub} | Genommener Urlaub : ${10}`}
            size={OPersonaSize.size72}
            imageUrl={"https://static2.sharepointonline.com/files/fabric/office-ui-fabric-react-assets/persona-male.png"}
            imageAlt="Kat Larrson, status unknown"
        />
    )
}


export default Persona