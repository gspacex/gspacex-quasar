import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type Capsule = {
  __typename?: 'Capsule';
  id: Scalars['ID'];
  land_landings: Scalars['Int'];
  last_update?: Maybe<Scalars['String']>;
  launches: Array<Launch>;
  reuse_count: Scalars['Int'];
  serial: Scalars['String'];
  status: Scalars['String'];
  type: Scalars['String'];
  water_landings: Scalars['Int'];
};

export type Core = {
  __typename?: 'Core';
  asds_attempts: Scalars['Int'];
  asds_landings: Scalars['Int'];
  block: Scalars['Int'];
  id: Scalars['ID'];
  last_update?: Maybe<Scalars['String']>;
  launches: Array<Launch>;
  reuse_count: Scalars['Int'];
  rtls_attempts: Scalars['Int'];
  rtls_landings: Scalars['Int'];
  serial: Scalars['String'];
  status: Scalars['String'];
};

export type Dragon = {
  __typename?: 'Dragon';
  active: Scalars['Boolean'];
  description: Scalars['String'];
  id: Scalars['ID'];
  images: Array<Scalars['String']>;
  name: Scalars['String'];
};

export type Launch = {
  __typename?: 'Launch';
  capsules: Array<Capsule>;
  cores: Array<LaunchCore>;
  date_utc: Scalars['DateTime'];
  details?: Maybe<Scalars['String']>;
  fairings?: Maybe<LaunchFairings>;
  id: Scalars['ID'];
  launchpad: Launchpad;
  links: LaunchLinks;
  name: Scalars['String'];
  payloads: Array<Payload>;
  rocket: Rocket;
  upcoming: Scalars['Boolean'];
};

export type LaunchCore = {
  __typename?: 'LaunchCore';
  core?: Maybe<Core>;
  flight?: Maybe<Scalars['Int']>;
};

export type LaunchFairings = {
  __typename?: 'LaunchFairings';
  recovered?: Maybe<Scalars['Boolean']>;
  recovery_attempt?: Maybe<Scalars['Boolean']>;
  reused?: Maybe<Scalars['Boolean']>;
};

export type LaunchLinks = {
  __typename?: 'LaunchLinks';
  flickr: LaunchLinksFlickr;
  patch: LaunchLinksPatch;
};

export type LaunchLinksFlickr = {
  __typename?: 'LaunchLinksFlickr';
  original: Array<Scalars['String']>;
};

export type LaunchLinksPatch = {
  __typename?: 'LaunchLinksPatch';
  large?: Maybe<Scalars['String']>;
  small?: Maybe<Scalars['String']>;
};

export type Launchpad = {
  __typename?: 'Launchpad';
  id: Scalars['ID'];
  images?: Maybe<LaunchpadImages>;
  launches: Array<Launch>;
  name: Scalars['String'];
  status: Scalars['String'];
};

export type LaunchpadImages = {
  __typename?: 'LaunchpadImages';
  large: Array<Scalars['String']>;
};

export type Payload = {
  __typename?: 'Payload';
  id: Scalars['ID'];
  launch: Launch;
  name: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  capsule?: Maybe<Capsule>;
  capsules: Array<Capsule>;
  core?: Maybe<Core>;
  cores: Array<Core>;
  dragon?: Maybe<Dragon>;
  dragons: Array<Dragon>;
  launch?: Maybe<Launch>;
  launches: Array<Launch>;
  launchesPast: Array<Launch>;
  launchesUpcoming: Array<Launch>;
  launchpad?: Maybe<Launchpad>;
  launchpads: Array<Launchpad>;
  payload?: Maybe<Payload>;
  payloads: Array<Payload>;
  rocket?: Maybe<Rocket>;
  rockets: Array<Rocket>;
};


export type QueryCapsuleArgs = {
  id: Scalars['ID'];
};


export type QueryCapsulesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryCoreArgs = {
  id: Scalars['ID'];
};


export type QueryCoresArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryDragonArgs = {
  id: Scalars['ID'];
};


export type QueryDragonsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryLaunchArgs = {
  id: Scalars['ID'];
};


export type QueryLaunchesArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryLaunchesPastArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryLaunchesUpcomingArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryLaunchpadArgs = {
  id: Scalars['ID'];
};


export type QueryLaunchpadsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryPayloadArgs = {
  id: Scalars['ID'];
};


export type QueryPayloadsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


export type QueryRocketArgs = {
  id: Scalars['ID'];
};


export type QueryRocketsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};

export type Rocket = {
  __typename?: 'Rocket';
  active: Scalars['Boolean'];
  boosters: Scalars['Int'];
  description: Scalars['String'];
  diameter: RocketDiameter;
  engines: RocketEngines;
  id: Scalars['ID'];
  images: Array<Scalars['String']>;
  launches: Array<Launch>;
  name: Scalars['String'];
};

export type RocketDiameter = {
  __typename?: 'RocketDiameter';
  feet: Scalars['Float'];
};

export type RocketEngines = {
  __typename?: 'RocketEngines';
  engine_loss_max?: Maybe<Scalars['Int']>;
  layout?: Maybe<Scalars['String']>;
  number: Scalars['Int'];
  propellant_1: Scalars['String'];
  propellant_2: Scalars['String'];
  thrust_sea_level: RocketEnginesThrustSeaLevel;
  thrust_to_weight: Scalars['Float'];
  thrust_vacuum: RocketEnginesThrustVacuum;
  type: Scalars['String'];
  version: Scalars['String'];
};

export type RocketEnginesThrustSeaLevel = {
  __typename?: 'RocketEnginesThrustSeaLevel';
  lbf: Scalars['Int'];
};

export type RocketEnginesThrustVacuum = {
  __typename?: 'RocketEnginesThrustVacuum';
  lbf: Scalars['Int'];
};

export type GetCapsulesQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetCapsulesQuery = { __typename?: 'Query', capsules: Array<{ __typename?: 'Capsule', id: string, serial: string }> };

export type GetCapsuleQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCapsuleQuery = { __typename?: 'Query', capsule?: { __typename?: 'Capsule', id: string, type: string, serial: string, reuse_count: number, status: string, last_update?: string | null, land_landings: number, water_landings: number, launches: Array<{ __typename?: 'Launch', id: string, name: string }> } | null };

export type GetCoresQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetCoresQuery = { __typename?: 'Query', cores: Array<{ __typename?: 'Core', id: string, serial: string }> };

export type GetCoreQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetCoreQuery = { __typename?: 'Query', core?: { __typename?: 'Core', asds_attempts: number, asds_landings: number, block: number, id: string, serial: string, reuse_count: number, rtls_attempts: number, rtls_landings: number, status: string, last_update?: string | null, launches: Array<{ __typename?: 'Launch', id: string, name: string }> } | null };

export type GetDragonsQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetDragonsQuery = { __typename?: 'Query', dragons: Array<{ __typename?: 'Dragon', id: string, name: string, description: string, images: Array<string> }> };

export type GetDragonQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetDragonQuery = { __typename?: 'Query', dragon?: { __typename?: 'Dragon', id: string, name: string, description: string, images: Array<string>, active: boolean } | null };

export type LaunchPartsFragment = { __typename?: 'Launch', id: string, name: string, date_utc: any, details?: string | null, launchpad: { __typename?: 'Launchpad', id: string, name: string }, links: { __typename?: 'LaunchLinks', flickr: { __typename?: 'LaunchLinksFlickr', original: Array<string> }, patch: { __typename?: 'LaunchLinksPatch', small?: string | null, large?: string | null } }, rocket: { __typename?: 'Rocket', id: string, name: string } };

export type GetLaunchesQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetLaunchesQuery = { __typename?: 'Query', launches: Array<{ __typename?: 'Launch', id: string, name: string, date_utc: any, details?: string | null, launchpad: { __typename?: 'Launchpad', id: string, name: string }, links: { __typename?: 'LaunchLinks', flickr: { __typename?: 'LaunchLinksFlickr', original: Array<string> }, patch: { __typename?: 'LaunchLinksPatch', small?: string | null, large?: string | null } }, rocket: { __typename?: 'Rocket', id: string, name: string } }> };

export type GetLaunchesUpcomingQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetLaunchesUpcomingQuery = { __typename?: 'Query', launchesUpcoming: Array<{ __typename?: 'Launch', id: string, name: string, date_utc: any, details?: string | null, launchpad: { __typename?: 'Launchpad', id: string, name: string }, links: { __typename?: 'LaunchLinks', flickr: { __typename?: 'LaunchLinksFlickr', original: Array<string> }, patch: { __typename?: 'LaunchLinksPatch', small?: string | null, large?: string | null } }, rocket: { __typename?: 'Rocket', id: string, name: string } }> };

export type GetLaunchesPastQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetLaunchesPastQuery = { __typename?: 'Query', launchesPast: Array<{ __typename?: 'Launch', id: string, name: string, date_utc: any, details?: string | null, launchpad: { __typename?: 'Launchpad', id: string, name: string }, links: { __typename?: 'LaunchLinks', flickr: { __typename?: 'LaunchLinksFlickr', original: Array<string> }, patch: { __typename?: 'LaunchLinksPatch', small?: string | null, large?: string | null } }, rocket: { __typename?: 'Rocket', id: string, name: string } }> };

export type GetLaunchQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetLaunchQuery = { __typename?: 'Query', launch?: { __typename?: 'Launch', id: string, name: string, upcoming: boolean, date_utc: any, details?: string | null, links: { __typename?: 'LaunchLinks', flickr: { __typename?: 'LaunchLinksFlickr', original: Array<string> }, patch: { __typename?: 'LaunchLinksPatch', small?: string | null, large?: string | null } }, launchpad: { __typename?: 'Launchpad', id: string, name: string }, rocket: { __typename?: 'Rocket', name: string, id: string } } | null };

export type GetLaunchFairingsQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetLaunchFairingsQuery = { __typename?: 'Query', launch?: { __typename?: 'Launch', id: string, fairings?: { __typename?: 'LaunchFairings', reused?: boolean | null, recovery_attempt?: boolean | null, recovered?: boolean | null } | null } | null };

export type GetRocketsQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
}>;


export type GetRocketsQuery = { __typename?: 'Query', rockets: Array<{ __typename?: 'Rocket', id: string, name: string, description: string, images: Array<string> }> };

export type GetRocketQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetRocketQuery = { __typename?: 'Query', rocket?: { __typename?: 'Rocket', id: string, name: string, description: string, images: Array<string>, active: boolean, boosters: number, diameter: { __typename?: 'RocketDiameter', feet: number }, engines: { __typename?: 'RocketEngines', engine_loss_max?: number | null, layout?: string | null, number: number, propellant_1: string, propellant_2: string, thrust_to_weight: number, type: string, version: string, thrust_sea_level: { __typename?: 'RocketEnginesThrustSeaLevel', lbf: number }, thrust_vacuum: { __typename?: 'RocketEnginesThrustVacuum', lbf: number } } } | null };

export const LaunchPartsFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LaunchParts"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Launch"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"date_utc"}},{"kind":"Field","name":{"kind":"Name","value":"launchpad"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flickr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"}}]}},{"kind":"Field","name":{"kind":"Name","value":"patch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"large"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"rocket"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<LaunchPartsFragment, unknown>;
export const GetCapsulesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCapsules"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capsules"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"serial"}}]}}]}}]} as unknown as DocumentNode<GetCapsulesQuery, GetCapsulesQueryVariables>;
export const GetCapsuleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCapsule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"capsule"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"serial"}},{"kind":"Field","name":{"kind":"Name","value":"reuse_count"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"last_update"}},{"kind":"Field","name":{"kind":"Name","value":"land_landings"}},{"kind":"Field","name":{"kind":"Name","value":"water_landings"}},{"kind":"Field","name":{"kind":"Name","value":"launches"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetCapsuleQuery, GetCapsuleQueryVariables>;
export const GetCoresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCores"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cores"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"serial"}}]}}]}}]} as unknown as DocumentNode<GetCoresQuery, GetCoresQueryVariables>;
export const GetCoreDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCore"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"core"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"asds_attempts"}},{"kind":"Field","name":{"kind":"Name","value":"asds_landings"}},{"kind":"Field","name":{"kind":"Name","value":"block"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"serial"}},{"kind":"Field","name":{"kind":"Name","value":"reuse_count"}},{"kind":"Field","name":{"kind":"Name","value":"rtls_attempts"}},{"kind":"Field","name":{"kind":"Name","value":"rtls_landings"}},{"kind":"Field","name":{"kind":"Name","value":"status"}},{"kind":"Field","name":{"kind":"Name","value":"last_update"}},{"kind":"Field","name":{"kind":"Name","value":"launches"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetCoreQuery, GetCoreQueryVariables>;
export const GetDragonsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDragons"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dragons"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}}]}}]} as unknown as DocumentNode<GetDragonsQuery, GetDragonsQueryVariables>;
export const GetDragonDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetDragon"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dragon"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"active"}}]}}]}}]} as unknown as DocumentNode<GetDragonQuery, GetDragonQueryVariables>;
export const GetLaunchesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLaunches"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"launches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LaunchParts"}}]}}]}},...LaunchPartsFragmentDoc.definitions]} as unknown as DocumentNode<GetLaunchesQuery, GetLaunchesQueryVariables>;
export const GetLaunchesUpcomingDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLaunchesUpcoming"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"launchesUpcoming"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LaunchParts"}}]}}]}},...LaunchPartsFragmentDoc.definitions]} as unknown as DocumentNode<GetLaunchesUpcomingQuery, GetLaunchesUpcomingQueryVariables>;
export const GetLaunchesPastDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLaunchesPast"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"launchesPast"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"LaunchParts"}}]}}]}},...LaunchPartsFragmentDoc.definitions]} as unknown as DocumentNode<GetLaunchesPastQuery, GetLaunchesPastQueryVariables>;
export const GetLaunchDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLaunch"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"launch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"upcoming"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"flickr"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"original"}}]}},{"kind":"Field","name":{"kind":"Name","value":"patch"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"large"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"date_utc"}},{"kind":"Field","name":{"kind":"Name","value":"launchpad"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"details"}},{"kind":"Field","name":{"kind":"Name","value":"rocket"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<GetLaunchQuery, GetLaunchQueryVariables>;
export const GetLaunchFairingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetLaunchFairings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"launch"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"fairings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"reused"}},{"kind":"Field","name":{"kind":"Name","value":"recovery_attempt"}},{"kind":"Field","name":{"kind":"Name","value":"recovered"}}]}}]}}]}}]} as unknown as DocumentNode<GetLaunchFairingsQuery, GetLaunchFairingsQueryVariables>;
export const GetRocketsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRockets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rockets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}}]}}]}}]} as unknown as DocumentNode<GetRocketsQuery, GetRocketsQueryVariables>;
export const GetRocketDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetRocket"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"rocket"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"images"}},{"kind":"Field","name":{"kind":"Name","value":"active"}},{"kind":"Field","name":{"kind":"Name","value":"boosters"}},{"kind":"Field","name":{"kind":"Name","value":"diameter"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feet"}}]}},{"kind":"Field","name":{"kind":"Name","value":"engines"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"engine_loss_max"}},{"kind":"Field","name":{"kind":"Name","value":"layout"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"propellant_1"}},{"kind":"Field","name":{"kind":"Name","value":"propellant_2"}},{"kind":"Field","name":{"kind":"Name","value":"thrust_sea_level"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lbf"}}]}},{"kind":"Field","name":{"kind":"Name","value":"thrust_to_weight"}},{"kind":"Field","name":{"kind":"Name","value":"thrust_vacuum"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"lbf"}}]}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"version"}}]}}]}}]}}]} as unknown as DocumentNode<GetRocketQuery, GetRocketQueryVariables>;