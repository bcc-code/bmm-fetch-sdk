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
export const SearchFilter = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_3: 3,
    NUMBER_4: 4,
    NUMBER_5: 5,
    NUMBER_6: 6
} as const;
export type SearchFilter = typeof SearchFilter[keyof typeof SearchFilter];


export function SearchFilterFromJSON(json: any): SearchFilter {
    return SearchFilterFromJSONTyped(json, false);
}

export function SearchFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchFilter {
    return json as SearchFilter;
}

export function SearchFilterToJSON(value?: SearchFilter | null): any {
    return value as any;
}

