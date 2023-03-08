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
import type { ListenedStatus } from './ListenedStatus';
import {
    ListenedStatusFromJSON,
    ListenedStatusFromJSONTyped,
    ListenedStatusToJSON,
} from './ListenedStatus';
import type { ResourceAvailability } from './ResourceAvailability';
import {
    ResourceAvailabilityFromJSON,
    ResourceAvailabilityFromJSONTyped,
    ResourceAvailabilityToJSON,
} from './ResourceAvailability';
import type { TrackSubtype } from './TrackSubtype';
import {
    TrackSubtypeFromJSON,
    TrackSubtypeFromJSONTyped,
    TrackSubtypeToJSON,
} from './TrackSubtype';

/**
 * 
 * @export
 * @interface CreateTrackPlayedEventsCommandEvent
 */
export interface CreateTrackPlayedEventsCommandEvent {
    /**
     * 
     * @type {string}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    id?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    personId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    trackId?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    uniqueSecondsListened?: number | null;
    /**
     * 
     * @type {ListenedStatus}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    status?: ListenedStatus;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    percentage?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    trackLength?: number | null;
    /**
     * 
     * @type {Date}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    timestampStart?: Date | null;
    /**
     * 
     * @type {Date}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    timestampEnd?: Date | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    spentTime?: number | null;
    /**
     * 
     * @type {TrackSubtype}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    typeOfTrack?: TrackSubtype;
    /**
     * 
     * @type {ResourceAvailability}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    availability?: ResourceAvailability;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    albumId?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    tags?: Array<string> | null;
    /**
     * 
     * @type {boolean}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    sentAfterStartup?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    language?: string | null;
    /**
     * 
     * @type {string}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    playbackOrigin?: string | null;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    lastPosition?: number;
    /**
     * 
     * @type {number}
     * @memberof CreateTrackPlayedEventsCommandEvent
     */
    adjustedPlaybackSpeed?: number | null;
}

/**
 * Check if a given object implements the CreateTrackPlayedEventsCommandEvent interface.
 */
export function instanceOfCreateTrackPlayedEventsCommandEvent(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateTrackPlayedEventsCommandEventFromJSON(json: any): CreateTrackPlayedEventsCommandEvent {
    return CreateTrackPlayedEventsCommandEventFromJSONTyped(json, false);
}

export function CreateTrackPlayedEventsCommandEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateTrackPlayedEventsCommandEvent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'personId': !exists(json, 'personId') ? undefined : json['personId'],
        'trackId': !exists(json, 'trackId') ? undefined : json['trackId'],
        'uniqueSecondsListened': !exists(json, 'uniqueSecondsListened') ? undefined : json['uniqueSecondsListened'],
        'status': !exists(json, 'status') ? undefined : ListenedStatusFromJSON(json['status']),
        'percentage': !exists(json, 'percentage') ? undefined : json['percentage'],
        'trackLength': !exists(json, 'trackLength') ? undefined : json['trackLength'],
        'timestampStart': !exists(json, 'timestampStart') ? undefined : (json['timestampStart'] === null ? null : new Date(json['timestampStart'])),
        'timestampEnd': !exists(json, 'timestampEnd') ? undefined : (json['timestampEnd'] === null ? null : new Date(json['timestampEnd'])),
        'spentTime': !exists(json, 'spentTime') ? undefined : json['spentTime'],
        'typeOfTrack': !exists(json, 'typeOfTrack') ? undefined : TrackSubtypeFromJSON(json['typeOfTrack']),
        'availability': !exists(json, 'availability') ? undefined : ResourceAvailabilityFromJSON(json['availability']),
        'albumId': !exists(json, 'albumId') ? undefined : json['albumId'],
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'sentAfterStartup': !exists(json, 'sentAfterStartup') ? undefined : json['sentAfterStartup'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'playbackOrigin': !exists(json, 'playbackOrigin') ? undefined : json['playbackOrigin'],
        'lastPosition': !exists(json, 'lastPosition') ? undefined : json['lastPosition'],
        'adjustedPlaybackSpeed': !exists(json, 'adjustedPlaybackSpeed') ? undefined : json['adjustedPlaybackSpeed'],
    };
}

export function CreateTrackPlayedEventsCommandEventToJSON(value?: CreateTrackPlayedEventsCommandEvent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'personId': value.personId,
        'trackId': value.trackId,
        'uniqueSecondsListened': value.uniqueSecondsListened,
        'status': ListenedStatusToJSON(value.status),
        'percentage': value.percentage,
        'trackLength': value.trackLength,
        'timestampStart': value.timestampStart === undefined ? undefined : (value.timestampStart === null ? null : value.timestampStart.toISOString()),
        'timestampEnd': value.timestampEnd === undefined ? undefined : (value.timestampEnd === null ? null : value.timestampEnd.toISOString()),
        'spentTime': value.spentTime,
        'typeOfTrack': TrackSubtypeToJSON(value.typeOfTrack),
        'availability': ResourceAvailabilityToJSON(value.availability),
        'albumId': value.albumId,
        'tags': value.tags,
        'sentAfterStartup': value.sentAfterStartup,
        'language': value.language,
        'playbackOrigin': value.playbackOrigin,
        'lastPosition': value.lastPosition,
        'adjustedPlaybackSpeed': value.adjustedPlaybackSpeed,
    };
}

