import { activity } from '../mocks/activity';
import { performance } from '../mocks/performance';
import { activitiesModel, performancesModel } from './userModel';

/**
 * Get daily activity of user
 * @param {*} userId - the id of user
 * @returns
 */
export const getDailyActivity = (userId) => {
  const data = activity.find((elem) => elem.userId === parseInt(userId));
  return activitiesModel(data);
};

export const getDailyPerformance = (userId) => {
  const data = performance.find((elem) => elem.userId === parseInt(userId));
  return performancesModel(data);
};
