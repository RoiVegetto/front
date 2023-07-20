/**
 * @param {Object} activity data activity from source Mock or API
 * @returns modeled data
 */
export const activitiesModel = (data) => {
  return {
    userId: data.userId,
    sessions: [...data.sessions],
  };
};

export const performancesModel = (data) => {



  return {
    userId: data.userId,
    kind: data.kind,
    data: [...data.data],
  };
};
