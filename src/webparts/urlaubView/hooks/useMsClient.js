const { useState, default: React, useEffect } = require("react")
const INTRANET_OBJECT_ID = '01e51f9f-0ece-4fb6-9496-3b9e4692239a';
const URLAUBS_TAGE_LIST_ID = '37d4da1c-c13f-4e7f-96c0-acf0f6ef799c';

const useGetUser = (client) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    function getUsers(url, api, filter) {
        client
            .then(
                client => {
                    client
                        .api('/users')
                        .version('v1.0')
                        .get((err, res) => {
                            if (err) setError(err);
                            else setData(res);
                        });
                }
            )
            .catch(e => setError(e));
    }
    return [{ error, data, loading }, getUsers];
}



const useGetUserDaysList = (client) => {
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    function getUserDaysList(url, api, filter) {
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
    }

    useEffect(() => {
        getUserDaysList()
    })


    return [{ error, data, loading }, getUserDaysList];
}


const useMSClient = (context) => {
    context.

        React.useEffect(() => {

            return () => { }
        }, [])
}

export { useGetUser, useGetUserDaysList }