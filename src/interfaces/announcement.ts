interface IAnnouncementImage {
    id: string;
    url: string;
    position: number;
}

interface IAnnouncement {
    id: string;
    brand: string;
    model: string;
    year: string;
    fuel: number;
    mileage: number;
    color: string;
    price: number;
    fipe_table: number;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    isActive: boolean;
    images?: IAnnouncementImage[];
    userId: string;
}

interface IAnnouncementRegisterImage {
    url: string;
    position: number;
    announcementId: string;
}

interface IAnnouncementRegister {
    brand: string;
    model: string;
    year: string;
    fuel: number;
    mileage: number;
    color: string;
    price: number;
    fipe_table: number;
    description: string;
    images: IAnnouncementRegisterImage[];
    userId: string;
}

interface IAnnouncementUpdate {
    brand?: string;
    model?: string;
    year?: string;
    fuel?: number;
    mileage?: number;
    color?: string;
    price?: number;
    description?: string;
    isActive?: boolean;
}

interface IAnnouncementImageUpdate {
    url?: string;
}

interface IGetAllAnnouncements {
    announcements: IAnnouncement[];
    total: number;
    totalPage: number;
}

export {
    IAnnouncement,
    IAnnouncementRegister,
    IAnnouncementUpdate,
    IAnnouncementRegisterImage,
    IGetAllAnnouncements,
    IAnnouncementImageUpdate,
};
