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
  User,
} from '../models';
import {
    UserFromJSON,
    UserToJSON,
} from '../models';

export interface UserGetRequest {
    size?: number;
    from?: number;
}

export interface UserSuggesterCompletionTermGetRequest {
    term: string;
    size?: number;
}

export interface UserUsernameDeleteRequest {
    username: string;
}

export interface UserUsernameGetRequest {
    username: string;
}

export interface UserUsernamePutRequest {
    username: string;
    user?: User;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     */
    async userGetRaw(requestParameters: UserGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<User>>> {
        const queryParameters: any = {};

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        if (requestParameters.from !== undefined) {
            queryParameters['from'] = requestParameters.from;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/User`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

    /**
     */
    async userGet(requestParameters: UserGetRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<User>> {
        const response = await this.userGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Get a list of users where the username starts with {term} or exactly matches the person id.
     */
    async userSuggesterCompletionTermGetRaw(requestParameters: UserSuggesterCompletionTermGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<User>>> {
        if (requestParameters.term === null || requestParameters.term === undefined) {
            throw new runtime.RequiredError('term','Required parameter requestParameters.term was null or undefined when calling userSuggesterCompletionTermGet.');
        }

        const queryParameters: any = {};

        if (requestParameters.size !== undefined) {
            queryParameters['size'] = requestParameters.size;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/User/suggester/completion/{term}`.replace(`{${"term"}}`, encodeURIComponent(String(requestParameters.term))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(UserFromJSON));
    }

    /**
     * Get a list of users where the username starts with {term} or exactly matches the person id.
     */
    async userSuggesterCompletionTermGet(requestParameters: UserSuggesterCompletionTermGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<User>> {
        const response = await this.userSuggesterCompletionTermGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async userUsernameDeleteRaw(requestParameters: UserUsernameDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling userUsernameDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/User/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async userUsernameDelete(requestParameters: UserUsernameDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.userUsernameDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async userUsernameGetRaw(requestParameters: UserUsernameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<User>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling userUsernameGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/User/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserFromJSON(jsonValue));
    }

    /**
     */
    async userUsernameGet(requestParameters: UserUsernameGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<User> {
        const response = await this.userUsernameGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async userUsernamePutRaw(requestParameters: UserUsernamePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.username === null || requestParameters.username === undefined) {
            throw new runtime.RequiredError('username','Required parameter requestParameters.username was null or undefined when calling userUsernamePut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json-patch+json';

        const response = await this.request({
            path: `/User/{username}`.replace(`{${"username"}}`, encodeURIComponent(String(requestParameters.username))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: UserToJSON(requestParameters.user),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async userUsernamePut(requestParameters: UserUsernamePutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.userUsernamePutRaw(requestParameters, initOverrides);
    }

}
