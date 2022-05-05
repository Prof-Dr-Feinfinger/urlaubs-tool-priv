import * as React from "react";
const INTRANET_OBJECT_ID = '01e51f9f-0ece-4fb6-9496-3b9e4692239a';
const URLAUBS_TAGE_LIST_ID = '37d4da1c-c13f-4e7f-96c0-acf0f6ef799c';
const NIEDERLASSUNGS_LIST_ID = "07c8bbcf-b09a-4feb-9907-8121b05b871b"
const FEIER_TAGE_LIST_ID = "f0023b6f-8c40-4c93-8287-886e53ab4432"
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
                    .select("id, displayName, jobTitle, branchOffice ,customSecurityAttributes")
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


const useGetUserDaysList = (): [{ error, data, loading }, Function] => {
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    function getUserDaysList(client: Promise<MSGraphClient>, user_id) {
        setLoading(() => true)
        client
            .then((client) => {
                client
                    .api(`/sites/${INTRANET_OBJECT_ID}/lists/${URLAUBS_TAGE_LIST_ID}/items?expand=fields`)
                    .version("v1.0")
                    .filter(`fields=user_id eq '/${user_id}/'`)
                    .get((err, res) => {
                        if (err) setError(err)
                        else setData(() => res)
                        setLoading(() => false)
                    })
            })
            .catch(e => { setError(() => e); setLoading(() => false) })
    }

    return [{ error, data, loading }, getUserDaysList];
}


const usePostUserDaysListItem = (): [{ error, loading }, Function] => {
    const [error, setError] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    function postUserDaysListItem(client: Promise<MSGraphClient>, payload) {
        setLoading(() => true)
        client
            .then((client) => {
                client
                    .api(`/sites/${INTRANET_OBJECT_ID}/lists/${URLAUBS_TAGE_LIST_ID}/items`)
                    .version("v1.0")
                    .post(payload)
            })
            .catch(e => { setError(() => e); setLoading(() => false) })
    }

    return [{ error, loading }, postUserDaysListItem];
}


const useGetHolidaysListForBranchOffice = (branchOffice): [{ error, data, loading }, Function] => {
    const [error, setError] = React.useState(null);
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(false);

    function getHolidaysListForBranchOffice(client: Promise<MSGraphClient>) {
        setLoading(() => true)
        client
            .then((client) => {
                client
                    .api(`/sites/${INTRANET_OBJECT_ID}/lists/${FEIER_TAGE_LIST_ID}/items?expand=fields`)
                    .version("v1.0")
                    .get((err, res) => {
                        if (err) setError(err)
                        else setData(() => res)
                        setLoading(() => false)
                    })
            })
            .catch(e => { setError(() => e); setLoading(() => false) })
    }

    return [{ error, data, loading }, getHolidaysListForBranchOffice];
}


export { useGetMe, useGetUserDaysList, usePostUserDaysListItem, useGetHolidaysListForBranchOffice };