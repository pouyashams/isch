import http from './httpService';

export function reciveBoardApproval(data) {
    return http.post("http://10.8.235.41:20080/isc-holding/holding/load-all-board-approval", data);
}
export function addBoardApprovals(data) {
    return http.post("http://10.8.235.41:20080/isc-holding/holding/persist-board-approval", data);
}export function editBoardApprovals(data) {
    return http.post("http://10.8.235.41:20080/isc-holding/holding/merge-board-approval", data);
}
