import request from "./request"

export const getUser = async (id) => {
  return await request(id);
};

export const getActivity = async (id) => {
  return await request(id, "activity");
};

export const getAverageSessions = async (id) => {
  return await request(id, "average-sessions");
};

export const getPerformance = async (id) => {
  return await request(id, "performance");
};
