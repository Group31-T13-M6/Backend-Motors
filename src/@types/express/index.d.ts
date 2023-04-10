declare global {
  namespace Express {
    interface Request {
      validatedBody: IAnnouncementRegister;
      validatedAnnouncement: IAnnouncement;
      validatedImage: any;
    }
  }
}

export {};
