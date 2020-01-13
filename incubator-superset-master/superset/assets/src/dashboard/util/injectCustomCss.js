/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
// export default function injectCustomCss(css) {
//   const className = 'CssEditor-css';
//   const head = document.head || document.getElementsByTagName('head')[0];
//   let style = document.querySelector(`.${className}`);

//   if (!style) {
//     style = document.createElement('style');
//     style.className = className;
//     style.type = 'text/css';
//     head.appendChild(style);
//   }
//   if (style.styleSheet) {
//     style.styleSheet.cssText = css;
//   } else {
//     style.innerHTML = css;
//   }
// }
export default function injectCustomCss(js) {
  const className = 'js-css';
  const head = document.head || document.getElementsByTagName('head')[0];
  let script = document.querySelector(`.${className}`);
  console.log(js);
  debugger;
  if (!script) {
    script = document.createElement('script');
    script.className = className;
    // script.type = 'text/css';
    head.appendChild(script);
  }
  var addedJS  = '';
if ( js !== '') {
  JSON.parse(js).forEach(function(url) {
     
    url = window.location.href.split('?')[0] + url;
   
    if (url == window.location.href) {
      addedJS = setTimeout(function(){ 
        window.location.reload() }, 8000);
    }

    if (url == 'reload') {
      addedJS = setTimeout(function(){ 
        window.location.reload() }, 8000);
    }
});
}
 
  script.innerHTML = addedJS;
}
