/**
 * Copyright 2025-2026 Wingify Software Pvt. Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// Components
export {
  VWOProvider as WingifyProvider,
  IVWOProvider as IWingifyProvider,
  VWOProviderWithClient as WingifyProviderWithClient,
  VWOProviderWithConfig as WingifyProviderWithConfig,
} from './VWOProvider';

// Hooks
export { useVWOClient as useWingifyClient } from './useVWOClient';
export { useGetFlag, IFlag } from './useGetFlag';
export { useGetFlagVariable } from './useGetFlagVariable';
export { useGetFlagVariables } from './useGetFlagVariable';
export { useTrackEvent, ITrackEvent } from './useTrackEvent';
export { useSetAttribute, ISetAttribute } from './useSetAttribute';
export { useVWOContext as useWingifyContext } from './VWOContext';

// Export init method from wingify-fme-node-sdk
export {
  init,
  IWingifyContextModel,
  IWingifyClient,
  IWingifyOptions,
  Flag,
  StorageConnector,
  LogLevelEnum,
  getUUID,
  ISettingsData,
} from 'wingify-fme-node-sdk';

// Wingify-branded result type alias
export type WingifyClientResult = { vwoClient: import('wingify-fme-node-sdk').IWingifyClient | null; isReady: boolean };
