import request from '@/utils/request';
import { AxiosPromise } from 'axios';
import { progressPercentage } from './utils';

export default (
  formData: FormData,
  onProgress: (p: number) => void,
  token: string | null
): AxiosPromise<object> => {
  return request({
    url: process.env.VUE_APP_HUSKY_URL + '/panel',
    method: 'post',
    headers: {
      authorization: token
    },
    data: formData,
    onUploadProgress(progressEvent) {
      onProgress(progressPercentage(progressEvent));
    }
  });
};
