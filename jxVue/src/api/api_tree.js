import {HOST} from './api';

export const add = `${HOST}/tree/add`;
export const updateById = `${HOST}/tree/updateById`;
export const selectAll = `${HOST}/tree/selectAll`;
export const selectById = `${HOST}/tree/selectById`;
export const selectByBindId = `${HOST}/tree/selectByBindId`;
// tree data path{bindId}
export const bindId = `${HOST}/tree/bindId/`;

export const addNode = `${HOST}/tree/addNode`;
export const upNode = `${HOST}/tree/upNode`;
// {id}
export const delNode = `${HOST}/tree/delNode/`;