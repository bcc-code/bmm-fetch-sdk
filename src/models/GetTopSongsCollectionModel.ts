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
import type { GetTopSongsCollectionModelTrackAndCount } from './GetTopSongsCollectionModelTrackAndCount';
import {
    GetTopSongsCollectionModelTrackAndCountFromJSON,
    GetTopSongsCollectionModelTrackAndCountFromJSONTyped,
    GetTopSongsCollectionModelTrackAndCountToJSON,
} from './GetTopSongsCollectionModelTrackAndCount';

/**
 * 
 * @export
 * @interface GetTopSongsCollectionModel
 */
export interface GetTopSongsCollectionModel {
    /**
     * 
     * @type {string}
     * @memberof GetTopSongsCollectionModel
     */
    readonly type?: string | null;
    /**
     * 
     * @type {number}
     * @memberof GetTopSongsCollectionModel
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof GetTopSongsCollectionModel
     */
    pageTitle?: string | null;
    /**
     * 
     * @type {string}
     * @memberof GetTopSongsCollectionModel
     */
    name?: string | null;
    /**
     * 
     * @type {Array<GetTopSongsCollectionModelTrackAndCount>}
     * @memberof GetTopSongsCollectionModel
     */
    tracks?: Array<GetTopSongsCollectionModelTrackAndCount> | null;
}

/**
 * Check if a given object implements the GetTopSongsCollectionModel interface.
 */
export function instanceOfGetTopSongsCollectionModel(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GetTopSongsCollectionModelFromJSON(json: any): GetTopSongsCollectionModel {
    return GetTopSongsCollectionModelFromJSONTyped(json, false);
}

export function GetTopSongsCollectionModelFromJSONTyped(json: any, ignoreDiscriminator: boolean): GetTopSongsCollectionModel {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'pageTitle': !exists(json, 'pageTitle') ? undefined : json['pageTitle'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'tracks': !exists(json, 'tracks') ? undefined : (json['tracks'] === null ? null : (json['tracks'] as Array<any>).map(GetTopSongsCollectionModelTrackAndCountFromJSON)),
    };
}

export function GetTopSongsCollectionModelToJSON(value?: GetTopSongsCollectionModel | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'pageTitle': value.pageTitle,
        'name': value.name,
        'tracks': value.tracks === undefined ? undefined : (value.tracks === null ? null : (value.tracks as Array<any>).map(GetTopSongsCollectionModelTrackAndCountToJSON)),
    };
}

