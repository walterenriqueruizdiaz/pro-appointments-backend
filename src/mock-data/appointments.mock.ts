import { mockAppointmentStatus, type AppointmentStatus } from "./appointmentStatus.mock";
import { mockRecurrence, type Recurrence } from "./recurrence.mock";

export interface Appointment {
    id: string;
    profesionalId: string;
    patientId: string;
    dateTime: string;
    status: AppointmentStatus;
    recurrence: Recurrence;
    createdAt: string;
    updatedAt: string;
}

export const mockAppointments: Appointment[] = [
    {
        id: '1',
        profesionalId: '1',
        patientId: '1',
        dateTime: '1',
        status: mockAppointmentStatus,
        recurrence: mockRecurrence,
        createdAt: '1',
        updatedAt: '1'
    }
];

// model Appointment {
//   id             String            @id @default(uuid())
//   professionalId String
//   patientId      String
//   dateTime       DateTime
//   status         AppointmentStatus @default(RESERVADO)
//   recurrence     Recurrence        @default(NONE)
//   createdAt      DateTime          @default(now())
//   updatedAt      DateTime          @updatedAt

//   professional Professional @relation(fields: [professionalId], references: [id])
//   patient      Patient      @relation(fields: [patientId], references: [id])
//   session      Session?
// }