/**
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

// TODO: Replace with native URL object usage.
// (This isn't available in node v6, used by Firebase Cloud Functions.)

const PREFIX = `https://api.stackexchange.com/2.2`;

// As per https://api.stackexchange.com/docs/throttle
// While this is a read-only, non-secret key, please register your own
// and replace this value if you fork this project!
const KEY = `LJ54sdY)tUYvfsHg2kwLvQ((`;

export function listQuestionsForTag(tag) {
  return `${PREFIX}/questions?pagesize=100&order=desc&sort=votes&tagged=` +
    `${encodeURIComponent(tag)}&site=stackoverflow&filter=!C(o*VY))7BGSrm5xK` +
    `&key=${KEY}`;
}

export function getQuestion(questionId) {
  return `${PREFIX}/questions/${encodeURIComponent(questionId)}?` +
    `&site=stackoverflow&filter=!oDhDpbIIc)pcGHpmWvn_fa0Hu6PKHizd-W.RnKEVsIq&` +
    `key=${KEY}`;
}
