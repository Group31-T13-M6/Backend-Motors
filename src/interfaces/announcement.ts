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
};
