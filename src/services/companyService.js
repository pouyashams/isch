import http from './httpService';

export function register(data) {
    return http.post("http://shop.isuncharge.com/ISCHolding/company/register", data);
}

export function loadAllCompany() {
    return http.post("http://shop.isuncharge.com/ISCHolding/company/load-all", {});
}
