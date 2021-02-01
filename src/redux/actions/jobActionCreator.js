import * as constants from "./../constants";

export const fetchAllJobs = (params) => ({
  type: constants.API,
  payload: {
    method: "GET",
    url: "/results/jobs",
    params,
    success: (response) => setAllJobs(response),
  },
});

export const fetchJobResults = (params) => ({
  type: constants.API,
  payload: {
    method: "GET",
    url: "/results",
    params,
    success: (response) => fetchSingleJobResults(response),
  },
});

export const scheduleJob = (data, onSuccess, onError) => ({
  type: constants.API,
  payload: {
    method: "POST",
    url: "/schedule",
    data,
    success: (response) => processSchedulingResponse(response),
    postProcessSuccess: onSuccess,
    postProcessError: onError,
  },
});

const setAllJobs = (res) => ({
  type: constants.FETCH_JOBS,
  payload: res,
});

const fetchSingleJobResults = (res) => ({
  type: constants.FETCH_JOB_RESULT,
  payload: res,
});

const processSchedulingResponse = (res) => ({
  type: constants.SCHEDULE_JOB,
});
