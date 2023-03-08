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
 * @interface ContributorContributorMeta
 */
export interface ContributorContributorMeta {
    /**
     * 
     * @type {string}
     * @memberof ContributorContributorMeta
     */
    modifiedBy?: string | null;
    /**
     * 
     * @type {Date}
     * @memberof ContributorContributorMeta
     */
    modifiedAt?: Date;
}

/**
 * Check if a given object implements the ContributorContributorMeta interface.
 */
export function instanceOfContributorContributorMeta(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ContributorContributorMetaFromJSON(json: any): ContributorContributorMeta {
    return ContributorContributorMetaFromJSONTyped(json, false);
}

export function ContributorContributorMetaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ContributorContributorMeta {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'modifiedBy': !exists(json, 'modifiedBy') ? undefined : json['modifiedBy'],
        'modifiedAt': !exists(json, 'modifiedAt') ? undefined : (new Date(json['modifiedAt'])),
    };
}

export function ContributorContributorMetaToJSON(value?: ContributorContributorMeta | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'modifiedBy': value.modifiedBy,
        'modifiedAt': value.modifiedAt === undefined ? undefined : (value.modifiedAt.toISOString()),
    };
}

