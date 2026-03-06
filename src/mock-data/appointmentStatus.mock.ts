export interface AppointmentStatus {
    reservado: string;
    confirmado: string;
    no_show: string;
    cancelado: string;
}

export const mockAppointmentStatus: AppointmentStatus = {
    reservado: 'RESERVADO',
    confirmado: 'CONFIRMADO',
    no_show: 'NO_SHOW',
    cancelado: 'CANCELADO'
}
// enum AppointmentStatus {
//   RESERVADO
//   CONFIRMADO
//   NO_SHOW
//   CANCELADO
// }