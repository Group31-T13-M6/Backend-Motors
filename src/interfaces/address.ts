interface IAddressRegister {
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
    userId: string;
}

interface IAddressUpdate {
    cep?: string;
    state?: string;
    city?: string;
    street?: string;
    number?: string;
    complement?: string;
}

interface IAddress {
    id: string;
    cep: string;
    state: string;
    city: string;
    street: string;
    number: string;
    complement: string;
}

export { IAddressRegister, IAddress, IAddressUpdate };
