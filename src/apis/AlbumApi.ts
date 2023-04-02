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


import * as runtime from '../runtime';
import type {
  AlbumModel,
  PublishedFilter,
  TrackSubtype,
} from '../models';
import {
    AlbumModelFromJSON,
    AlbumModelToJSON,
    PublishedFilterFromJSON,
    PublishedFilterToJSON,
    TrackSubtypeFromJSON,
    TrackSubtypeToJSON,
} from '../models';

export interface AlbumGetRequest {
    publishedFilter?: PublishedFilter;
    policy?: string;
    from?: number;
    size?: number;
    contentType?: Array<TrackSubtype>;
    tags?: Array<string>;
    excludeTags?: Array<string>;
    contentType2?: Array<TrackSubtype>;
    tags2?: Array<string>;
    excludeTags2?: Array<string>;
}

export interface AlbumIdCoverGetRequest {
    id: number;
}

export interface AlbumIdGetRequest {
    id: number;
    unpublished?: PublishedFilter;
}

export interface AlbumPublishedYearGetRequest {
    year: number;
    unpublished?: PublishedFilter;
}

/**
 * 
 */
export class AlbumApi extends runtime.BaseAPI {

    /**
     */
    async albumGetRaw(requestParameters: AlbumGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AlbumModel>>> {
        const queryParameters: any = {};

        if (requestParameters.publishedFilter !== undefined) {
            queryParameters['PublishedFilter'] = requestParameters.publishedFilter;
        }

        if (requestParameters.policy !== undefined) {
            queryParameters['Policy'] = requestParameters.policy;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['From'] = requestParameters.from;
        }

        if (requestParameters.size !== undefined) {
            queryParameters['Size'] = requestParameters.size;
        }

        if (requestParameters.contentType) {
            queryParameters['ContentType'] = requestParameters.contentType;
        }

        if (requestParameters.tags) {
            queryParameters['Tags'] = requestParameters.tags;
        }

        if (requestParameters.excludeTags) {
            queryParameters['ExcludeTags'] = requestParameters.excludeTags;
        }

        if (requestParameters.contentType2) {
            queryParameters['content-type'] = requestParameters.contentType2;
        }

        if (requestParameters.tags2) {
            queryParameters['tags'] = requestParameters.tags2;
        }

        if (requestParameters.excludeTags2) {
            queryParameters['exclude-tags'] = requestParameters.excludeTags2;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/album`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AlbumModelFromJSON));
    }

    /**
     */
    async albumGet(requestParameters: AlbumGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AlbumModel>> {
        const response = await this.albumGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async albumIdCoverGetRaw(requestParameters: AlbumIdCoverGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling albumIdCoverGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/album/{id}/cover`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async albumIdCoverGet(requestParameters: AlbumIdCoverGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.albumIdCoverGetRaw(requestParameters, initOverrides);
    }

    /**
     */
    async albumIdGetRaw(requestParameters: AlbumIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AlbumModel>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling albumIdGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.unpublished !== undefined) {
            queryParameters['unpublished'] = requestParameters.unpublished;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/album/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AlbumModelFromJSON(jsonValue));
    }

    /**
     */
    async albumIdGet(requestParameters: AlbumIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AlbumModel> {
        const response = await this.albumIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async albumPublishedYearGetRaw(requestParameters: AlbumPublishedYearGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<AlbumModel>>> {
        if (requestParameters.year === null || requestParameters.year === undefined) {
            throw new runtime.RequiredError('year','Required parameter requestParameters.year was null or undefined when calling albumPublishedYearGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.unpublished !== undefined) {
            queryParameters['unpublished'] = requestParameters.unpublished;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/album/published/{year}`.replace(`{${"year"}}`, encodeURIComponent(String(requestParameters.year))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(AlbumModelFromJSON));
    }

    /**
     */
    async albumPublishedYearGet(requestParameters: AlbumPublishedYearGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<AlbumModel>> {
        const response = await this.albumPublishedYearGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
