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


/**
 * 
 * @export
 */
export const PublishedFilter = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2
} as const;
export type PublishedFilter = typeof PublishedFilter[keyof typeof PublishedFilter];


export function PublishedFilterFromJSON(json: any): PublishedFilter {
    return PublishedFilterFromJSONTyped(json, false);
}

export function PublishedFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishedFilter {
    return json as PublishedFilter;
}

export function PublishedFilterToJSON(value?: PublishedFilter | null): any {
    return value as any;
}

