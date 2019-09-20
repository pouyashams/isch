import http from './httpService';

export function register(data) {
    return http.post("http://192.168.1.4:8090/ISCHolding/company/register", data);
}

export function loadAllCompany() {
    return http.post("http://192.168.1.4:8090/ISCHolding/company/load-all", {});
}
