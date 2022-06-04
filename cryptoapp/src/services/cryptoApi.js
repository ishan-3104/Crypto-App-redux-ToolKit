import {createApi,fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '9598c130b9msh328293c50ad072cp12d403jsn637fb2cb897f'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = (url)=>({url, headers :cryptoApiHeaders })
// const createRequest = (URL) =>({ URL});

export const cryptoApi = createApi({
    reducerPath : 'cryptoApi',
    baseQuery : fetchBaseQuery({baseUrl}),
    endpoints: (builder) =>({
        getCryptos: builder.query({
            query: (count)=>createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails : builder.query({
            query: (id) =>createRequest(`/coin/${id}`)
        }),
        getCryptoHistory: builder.query({
            query: ({ id, timePeriod }) => createRequest(`coin/${id}/history?timeperiod=${timePeriod}`),
        }),
    })
})

export const {
    useGetCryptosQuery,useGetCryptoDetailsQuery,useGetCryptoHistoryQuery
} = cryptoApi

