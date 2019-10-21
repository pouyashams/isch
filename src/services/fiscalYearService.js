import http from './httpService';

export function reciveFicalYear() {
    return http.post("http://10.8.235.41:20080/isc-holding/holding/load-all-fiscal-year", {});
}

export function updateFicalYear(data) {
    return http.post("http://10.8.235.41:20080/isc-holding/holding/update-fiscal-year", data);
}export function registerFicalYear(data) {
    return http.post("http://10.8.235.41:20080/isc-holding/holding/register-fiscal-year", data);
}
