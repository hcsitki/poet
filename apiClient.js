"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getData = void 0;
const getData = (endpoint) => __awaiter(void 0, void 0, void 0, function* () {
    const baseUrl = 'https://poetrydb.org';
    const url = `${baseUrl}${endpoint}`;
    try {
        const response = yield fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status !== 200) {
            throw new Error(`Error, response status: ${response.status}`);
        }
        return response;
    }
    catch (error) {
        console.error('Error making GET request:', error);
        throw error;
    }
});
exports.getData = getData;
