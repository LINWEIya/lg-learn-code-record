/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

export type RootTag = 0 | 1 | 2;

export const LegacyRoot = 0; // ReactDOM.render
export const BlockingRoot = 1; // ReactDOM.createBlockingRoot
export const ConcurrentRoot = 2; // ReactDOM.createRoot
