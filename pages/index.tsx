import React, { useMemo, useState } from 'react';
import Tabs from './tabs';
import TabCard from './tab';
import Apicheck from './ apicheck';
import { ApolloClientTokenizedProvider } from '@deep-foundation/react-hasura/apollo-client-tokenized-provider';
import { TokenProvider, useTokenController } from '@deep-foundation/deeplinks/imports/react-token';
import { useQuery, useSubscription, gql } from '@apollo/client';
import { LocalStoreProvider, useLocalStore } from '@deep-foundation/store/local';
import { MinilinksLink, MinilinksResult, useMinilinksConstruct } from '@deep-foundation/deeplinks/imports/minilinks';
import { ChakraProvider, Tab } from '@chakra-ui/react';

export default function Index() {
  return (<>
    <img src="/next-assets/logos.jpg" alt="deep.foundation logo" />
    <h1 style={{
      whiteSpace: 'nowrap',
      display: 'inline'
    }}
    >Deep.Foundation
    </h1>
    {/* <Apicheck /> */}
    <Tabs />





  </>);
}