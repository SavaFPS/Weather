import { format } from 'date-fns';

export const getIndexOfCurrentTime = () => {
  const currentTime = new Date();
  const index = format(currentTime, 'HH');
  return Number(index);
};
