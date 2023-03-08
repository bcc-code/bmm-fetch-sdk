/* tslint:disable */
/* eslint-disable */
/**
 * BMM Api
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface LoginAdminCommand
 */
export interface LoginAdminCommand {
    /**
     * 
     * @type {string}
     * @memberof LoginAdminCommand
     */
    username?: string | null;
    /**
     * 
     * @type {string}
     * @memberof LoginAdminCommand
     */
    password?: string | null;
}

/**
 * Check if a given object implements the LoginAdminCommand interface.
 */
export function instanceOfLoginAdminCommand(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LoginAdminCommandFromJSON(json: any): LoginAdminCommand {
    return LoginAdminCommandFromJSONTyped(json, false);
}

export function LoginAdminCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): LoginAdminCommand {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'username': !exists(json, 'username') ? undefined : json['username'],
        'password': !exists(json, 'password') ? undefined : json['password'],
    };
}

export function LoginAdminCommandToJSON(value?: LoginAdminCommand | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'username': value.username,
        'password': value.password,
    };
}

