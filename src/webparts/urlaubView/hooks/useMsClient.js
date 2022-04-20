const { useState } = require("react")


const useMsClient = (client) => {
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







export { useGetUser }