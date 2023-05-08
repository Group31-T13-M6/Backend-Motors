import { IAnnouncement } from "../../interfaces/announcement";

const getByAnnouncementIdService = async (
  announcement: IAnnouncement
): Promise<IAnnouncement> => {
  return announcement;
};

export { getByAnnouncementIdService };
