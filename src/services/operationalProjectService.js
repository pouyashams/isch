import http from './httpService';

export function reciveOperationalProject(data) {
    return http.post("http://10.8.235.41:20080/isc-holding/holding/load-all-operational-project", data);
}
export function addOperationalProject(data) {
    return http.post("http://10.8.235.41:20080/isc-holding/holding/persist-operational-project", data);
}export function editOperationalProjects(data) {
    return http.post("http://10.8.235.41:20080/isc-holding/holding/merge-operational-project", data);
}
