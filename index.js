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
const apiClient_1 = require("./apiClient");
// const fetchData = async (endpoint: string) => {
//     try {
//         const response = await getData(endpoint);
//         const data = await response.json();
//         const first_entry = data[Object.keys(data)[0]]
//         first_entry.forEach(a => {
//             console.log(a);
//         })
//         // console.log("Headers: ", response.headers);
//         console.log(`Status ${response.status}: ${response.statusText}`);
//     } catch (error) {
//         console.error('Error fetching data', error);
//     }
// }
const fetchData = (endpoint) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const input_field = endpoint.split('/').filter(p => p !== '')[0];
        const search_term = endpoint.split('/').filter(p => p !== '')[1];
        const response = yield (0, apiClient_1.getData)(endpoint);
        const data = yield response.json();
        if (search_term) {
            console.log(data);
        }
        else {
            const entries = data[Object.keys(data)[0]];
            entries.forEach(e => {
                console.log(e);
            });
        }
        // const authors = data[Object.keys(data)[0]]
        // // authors.forEach(a => {
        // //     console.log(a);
        // // })
        // console.log(data);
        // // console.log("Headers: ", response.headers);
        // console.log(`Status ${response.status}: ${response.statusText}`);
    }
    catch (error) {
        console.error('Error fetching data', error);
    }
});
// fetchData('/title')
// fetchData('/author')
fetchData('/author/Ernest Dowson');
// fetchData('/title/Ozymandias')
