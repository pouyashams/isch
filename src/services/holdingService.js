import http from './httpService';

export function registerFiscalYear(data) {
    return http.post("http://10.8.235.41:20080/isc-holding/holding/register-fiscal-year", data);
}

export function updateFiscalYear(data) {
    return http.post("http://10.8.235.41:20080/isc-holding/holding/update-fiscal-year", data);
}

export function loadAllFiscalYear() {
    return http.post("http://10.8.235.41:20080/isc-holding/holding/load-all-fiscal-year", {});
}
