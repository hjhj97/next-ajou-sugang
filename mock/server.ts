const WAIT_TIME = 1000;
export const applyLecture = () => {
  return new Promise<boolean>((resolve) => {
    setTimeout(() => resolve(true), WAIT_TIME);
  });
};
