declare global {
  namespace Express {
    interface Request {
      validatedBody: IAnnouncementRegister;
    }
  }
}

export {};
