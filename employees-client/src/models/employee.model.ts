export interface CreateEditEmployee {
    name?: string,
    surname?: string,
    age?: number,
    email?: string,
    departmentId?: string,
    role?: string,
    phone?: string,
    hireDate?: Date,
    salary?: number,
    isActive?: boolean
}

export interface Employee extends CreateEditEmployee{
    id: number
}