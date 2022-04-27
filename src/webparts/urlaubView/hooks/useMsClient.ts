import * as React from "react";
const INTRANET_OBJECT_ID = '01e51f9f-0ece-4fb6-9496-3b9e4692239a';
const URLAUBS_TAGE_LIST_ID = '37d4da1c-c13f-4e7f-96c0-acf0f6ef799c';
import { MSGraphClient } from '@microsoft/sp-http'

const useGetMe = (): [{ error, data, loading }, Function] => {
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    function getMe(client: Promise<MSGraphClient>) {
        setLoading(() => true)
        client
            .then((client) => {
                client
                    .api("/me")
                    .version("beta")
                    .select("id, displayName, jobTitle, customSecurityAttributes")
                    .filter('')
                    .get((err, res) => {
                        if (err) setError(err)
                        else setData(() => res)
                        setLoading(() => false)
                    })
            })
            .catch(e => { setError(() => e); setLoading(() => false) })
    }

    return [{ error, data, loading }, getMe];
}


// const useGetUserDaysList = (client) => {
//     const [error, setError] = useState(null);
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     function getUserDaysList(url, api, filter) {
//         client.then(
//             client => {
//                 client
//                     .api(`/sites/${INTRANET_OBJECT_ID}/lists/${URLAUBS_TAGE_LIST_ID}/items`)
//                     .version('v1.0')
//                     .get((err, res) => {
//                         if (err) console.log(err);
//                         else console.log(res)
//                         client
//                     });
//             }
//         )
//             .catch(e => console.log(e));
//     }




//     return [{ error, data, loading }, getUserDaysList];
// }




export { useGetMe };