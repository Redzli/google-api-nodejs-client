// Copyright 2018, Google, LLC.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/*! THIS FILE IS AUTO-GENERATED */

import {getAPI} from '../../shared/src';
import {dlp_v2} from './v2';

export const VERSIONS = {
  'v2': dlp_v2.Dlp,
};

export function dlp(version: 'v2'): dlp_v2.Dlp;
export function dlp(options: dlp_v2.Options): dlp_v2.Dlp;
export function dlp<T = dlp_v2.Dlp>(versionOrOptions: 'v2'|dlp_v2.Options) {
  return getAPI<T>('dlp', versionOrOptions, VERSIONS);
}
