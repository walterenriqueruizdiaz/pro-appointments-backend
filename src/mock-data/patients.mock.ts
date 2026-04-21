export interface Patient {
    id: string;
    dni: string;
    firstName: string;
    lastName: string;
    birtdDate: string;
    mobilePhone: string;
    email?: string;
    createdAt: string;
    updatedAt: string
    profesionalId: string;
}

export const mockPatients: Patient[] = [
    {
        id: '1',
        dni: '12345678',
        firstName: 'Agustina',
        lastName: 'Ruiz Diaz',
        birtdDate: '14-09-1993',
        mobilePhone: '123123',
        createdAt: '28-02-2026',
        updatedAt: '28-02-2026',
        profesionalId: '1'
    },
    {
        id: '2',
        dni: '21723333',
        firstName: 'Walter',
        lastName: 'Ruiz Diaz',
        birtdDate: '16-06-1970',
        mobilePhone: '9917',
        createdAt: '28-02-2026',
        updatedAt: '28-02-2026',
        profesionalId: '1'
    }

]
// Patient
// id          String   @id @default(uuid())
//   dni         String   @unique
//   firstName   String
//   lastName    String
//   birthDate   DateTime
//   mobilePhone String
//   email       String?
//   createdAt   DateTime @default(now())
//   updatedAt   DateTime @updatedAt

//   professionalId String? // Optional for now to support legacy data
//   professional   Professional? @relation(fields: [professionalId], references: [id])

//   familyContacts FamilyContact[]
//   appointments   Appointment[]
//   sessions       Session[]
// }
