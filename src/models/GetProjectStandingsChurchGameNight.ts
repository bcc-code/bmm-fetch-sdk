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
export const GetProjectStandingsChurchGameNight = {
    None: 'none',
    Boys: 'boys',
    Girls: 'girls'
} as const;
export type GetProjectStandingsChurchGameNight = typeof GetProjectStandingsChurchGameNight[keyof typeof GetProjectStandingsChurchGameNight];


export function GetProjectStandingsChurchGameNightFromJSON(json: any): GetProjectStandingsChurchGameNight {
    return GetProjectStandingsChurchGameNightFromJSONTyped(json, false);
}

export function GetProjectStandingsChurchGameNightFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetProjectStandingsChurchGameNight {
    return json as GetProjectStandingsChurchGameNight;
}

export function GetProjectStandingsChurchGameNightToJSON(value?: GetProjectStandingsChurchGameNight | null): any {
    return value as any;
}

