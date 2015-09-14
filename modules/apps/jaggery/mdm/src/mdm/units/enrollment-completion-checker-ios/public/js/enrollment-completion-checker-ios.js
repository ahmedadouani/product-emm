/*
 * Copyright (c) 2015, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND,
 * either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

$(document).ready(function () {
    var iOSCheckUrl = "/mdm/ios/controller/check";
    setInterval(function () {
        invokerUtil.get(
            iOSCheckUrl,
            function (data) {
                var parsedData = JSON.parse(data);
                var deviceID = parsedData["deviceID"];

                if (deviceID != null) {
                    window.location = "/mdm/enrollments/ios/thank-you-agent?device-id=" + deviceID;
                }
            },
            function () {
                window.location = "/mdm/enrollments/ios/login-agent#error"
            }
        );
    }, 1000);
});