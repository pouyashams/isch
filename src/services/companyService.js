import http from './httpService';

export function register(data) {
    return http.post("http://10.8.235.41:20080/isc-holding/company/register", data);
}

export function loadAllCompany() {
    return http.post("http://10.8.235.41:20080/isc-holding/company/load-all", {});
}
